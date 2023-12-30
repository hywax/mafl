<template>
  <ServiceBase v-bind="props">
    <template #description>
      <template v-if="data && data?.time >= 0">
        {{ $t('service.ping.description') }} <span class="border-b border-dashed">{{ data.time }} {{ $t('service.ping.units') }}</span>
      </template>
      <template v-else>
        {{ $t('service.ping.error') }}
      </template>
    </template>
  </ServiceBase>
</template>

<script setup lang="ts">
import type { PingService } from '~/types/services'

const props = defineProps<PingService>()

const { data, refresh } = await useFetch<{ time: number }>('/api/services/ping', { query: { id: props.id } })
const { pause } = useIntervalFn(refresh, props?.options?.interval || 10000, { immediate: true })

onBeforeUnmount(pause)
</script>
