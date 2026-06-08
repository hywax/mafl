import { stat, createReadStream } from 'node:fs'
import { promisify } from 'node:util'
import { join, normalize, basename } from 'node:path'
import { createHash } from 'node:crypto'

const statAsync = promisify(stat)

const mimeTypes: Record<string, string> = {
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  gif: 'image/gif',
  webp: 'image/webp',
  svg: 'image/svg+xml'
}

const ALLOWED_EXTENSIONS = new Set(['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'])
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB

export default defineEventHandler(async (event) => {
  const filename = getRouterParam(event, 'filename')
  
  if (!filename) {
    throw createError({
      statusCode: 400,
      message: 'Filename is required'
    })
  }

  const safeName = basename(filename)
  if (safeName !== filename || filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
    throw createError({
      statusCode: 400,
      message: 'Invalid filename'
    })
  }

  const ext = safeName.split('.').pop()?.toLowerCase()
  if (!ext || !ALLOWED_EXTENSIONS.has(ext)) {
    throw createError({
      statusCode: 400,
      message: 'Invalid file type'
    })
  }

  const backgroundsDir = join(process.cwd(), 'data', 'backgrounds')
  const filePath = normalize(join(backgroundsDir, safeName))

  if (!filePath.startsWith(backgroundsDir)) {
    throw createError({
      statusCode: 403,
      message: 'Access denied'
    })
  }

  let fileStats
  try {
    fileStats = await statAsync(filePath)
  } catch {
    throw createError({
      statusCode: 404,
      message: 'Background image not found'
    })
  }

  if (fileStats.size > MAX_FILE_SIZE) {
    throw createError({
      statusCode: 413,
      message: 'File too large'
    })
  }

  const etag = `"${createHash('md5').update(`${filePath}-${fileStats.mtime.getTime()}-${fileStats.size}`).digest('hex')}"`
  
  const ifNoneMatch = getRequestHeader(event, 'if-none-match')
  if (ifNoneMatch === etag) {
    setResponseStatus(event, 304)
    return null
  }

  setResponseHeader(event, 'Content-Type', mimeTypes[ext])
  setResponseHeader(event, 'ETag', etag)
  setResponseHeader(event, 'Cache-Control', 'public, max-age=31536000, immutable')
  setResponseHeader(event, 'Last-Modified', fileStats.mtime.toUTCString())
  setResponseHeader(event, 'Content-Length', fileStats.size.toString())

  return sendStream(event, createReadStream(filePath))
})