import type { CompleteConfig } from '~/types'

export default defineNuxtPlugin(async () => {
  const { on } = useWebsocket()
  on('config:update', () => {
    reloadNuxtApp({
      force: true,
    })
  })

  const asyncData = await useFetch<CompleteConfig>('/api/settings')
  const { services, ...settings } = asyncData.data.value!

  return {
    provide: { services, settings },
  }
})
