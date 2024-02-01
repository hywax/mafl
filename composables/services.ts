import type { BaseService } from '~/types'

export interface ServiceDataOptions {
  immediate?: boolean
  updateInterval?: number
}

export function useServiceData<T extends BaseService>(service: T, options?: ServiceDataOptions): any {
  const immediate = options?.immediate || false
  const updateInterval = (options?.updateInterval || 60) * 1000
  const type = service.type || 'base'

  const { data, pending, status, refresh, execute } = useFetch(`/api/services/${type}`, {
    immediate,
    query: { id: service.id },
    timeout: 15000,
  })

  const { pause, resume } = useIntervalFn(refresh, updateInterval, { immediate })

  return {
    data,
    pending,
    status,
    execute,
    pauseUpdate: pause,
    resumeUpdate: resume,
  }
}
