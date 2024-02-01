<template>
  <ServiceBase v-bind="props">
    <template #icon="{ service }">
      <ServiceBaseIcon :name="`wi:owm-${service?.data?.iconId}`" v-bind="iconProps" />
    </template>
    <template #title="{ service }">
      {{ service.data?.temp.toFixed(1) }} {{ metricSymbol }}
    </template>
    <template #description="{ service }">
      {{ service.data?.place ? `${service.data?.place},` : '' }} {{ service.data?.description }}
    </template>
  </ServiceBase>
</template>

<script setup lang="ts">
import type { OpenWeatherMapService, ServiceClient } from '~/types'

const props = defineProps<ServiceClient<OpenWeatherMapService>>()
const iconProps = computed(() => {
  if (!props.icon) {
    return {}
  }

  const { name: _, ...p } = props.icon

  return p
})
const metricSymbol = computed(() => {
  if (props?.options?.units === 'imperial') {
    return '°F'
  }

  return '°C'
})
</script>
