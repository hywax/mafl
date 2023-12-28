<template>
  <ServiceBases v-bind="props">
    <template #description>
      Server responded in <span class="border-b border-dashed">{{ ping?.time || 0 }}ms</span>
    </template>
  </ServiceBases>
</template>

<script setup lang="ts">
import type { PingService } from '~/types/services'
import ServiceBases from '~/components/service/Base.vue'

const props = defineProps<PingService>()

const { data: ping, refresh } = await useFetch('/api/services/ping', { query: { id: props.id } })
const { pause } = useIntervalFn(refresh, props?.options?.interval || 10000, { immediate: true })

onBeforeUnmount(pause)
</script>
