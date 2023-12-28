import type { PingService } from '~/types'

export default defineEventHandler(async (event) => {
  const service = await getService<PingService>(event)

  try {
    const startTime = new Date().getTime()
    await $fetch(service.link)
    const endTime = new Date().getTime()
    const time = endTime - startTime

    return { time }
  } catch (e) {
    console.error(e)
  }

  return { time: -1 }
})
