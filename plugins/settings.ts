import type { CompleteConfig } from '~/types'

export default defineNuxtPlugin(async () => {
  const asyncData = await useFetch<CompleteConfig>('/api/settings')
  const { services, ...settings } = asyncData.data.value!

  return {
    provide: { services, settings },
  }
})
