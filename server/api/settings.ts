import type { CompleteConfig } from '~/types'

export default defineEventHandler(async () => {
  const storage = useStorage('main')
  const config = await storage.getItem<CompleteConfig>('config')

  if (!config) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Bad loading config',
    })
  }

  return extractSafelyConfig(config)
})
