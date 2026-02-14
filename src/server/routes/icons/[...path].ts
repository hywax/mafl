import { createReadStream, promises as fs } from 'node:fs'
import { extname, join, normalize } from 'node:path'
import { sendStream, setHeader } from 'h3'
import { useLogger } from '~/server/utils/logger'

const MIME_TYPES: Record<string, string> = {
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
}

const CACHE_MAX_AGE = 86400

const logger = useLogger('icons')

export default defineEventHandler(async (event) => {
  const iconsBaseDir = join(process.cwd(), 'public', 'icons')
  const pathSegments = event.context.params?.path

  if (!pathSegments) {
    throw createError({ statusCode: 400, statusMessage: 'Icon path required' })
  }

  const requestedPath = Array.isArray(pathSegments)
    ? pathSegments.join('/')
    : pathSegments

  const decodedPath = decodeURIComponent(requestedPath)
  if (decodedPath.includes('..') || decodedPath.includes('\0')) {
    logger.warn('Rejected invalid path:', requestedPath)
    throw createError({ statusCode: 400, statusMessage: 'Invalid path' })
  }

  const fullPath = join(iconsBaseDir, normalize(decodedPath))

  if (!fullPath.startsWith(iconsBaseDir + '/')) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid path' })
  }

  const ext = extname(fullPath).toLowerCase()
  const mimeType = MIME_TYPES[ext]
  if (!mimeType) {
    throw createError({ statusCode: 404, statusMessage: 'Unsupported file type' })
  }

  try {
    const stats = await fs.stat(fullPath)
    if (!stats.isFile()) {
      throw createError({ statusCode: 404, statusMessage: 'Icon not found' })
    }
  } catch (e) {
    if ((e as NodeJS.ErrnoException).code === 'ENOENT') {
      throw createError({ statusCode: 404, statusMessage: 'Icon not found' })
    }
    logger.error(e)
    throw createError({ statusCode: 500, statusMessage: 'Internal error' })
  }

  setHeader(event, 'Content-Type', mimeType)
  setHeader(event, 'Cache-Control', `public, max-age=${CACHE_MAX_AGE}`)

  return sendStream(event, createReadStream(fullPath))
})
