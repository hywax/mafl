import type { CompleteConfig } from '~/types'

export default defineEventHandler(async () => {
  const storage = useStorage('main')

  return await storage.getItem<CompleteConfig>('config')
})
