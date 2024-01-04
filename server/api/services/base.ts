import type { BaseService } from '~/types'

export interface State {
  ping: {
    status: boolean
    time: number
  }
}

export default defineEventHandler(async (event): Promise<State> => {
  const service = await getService<BaseService>(event)
  const state: State = {
    ping: {
      status: false,
      time: -1,
    },
  }

  if (service?.status?.enabled) {
    try {
      const startTime = new Date().getTime()
      await $fetch(service.link, { timeout: 15000 })
      const endTime = new Date().getTime()

      state.ping = {
        status: true,
        time: endTime - startTime,
      }
    } catch (e) {
      logger.error(e)
    }
  }

  return state
})
