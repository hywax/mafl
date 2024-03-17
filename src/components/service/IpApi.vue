<template>
  <ServiceBase v-bind="props">
    <template v-if="props.options?.flagIcon !== false" #icon="{ service }">
      <ServiceBaseIcon :name="`flag:${service?.data?.country}-1x1`" />
    </template>
    <template #title="{ service }">
      {{ service?.data?.ip || '' }}
    </template>
    <template #description="{ service }">
      {{ service?.data?.place || '' }}
    </template>
  </ServiceBase>
</template>

<script setup lang="ts">
import type { IpApiService, ServiceClient } from '~/types'

const props = defineProps<ServiceClient<IpApiService>>()
</script>
