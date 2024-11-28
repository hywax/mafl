<script setup lang="ts">
import type { Service } from '~/types'
import ServicePlaceholder from './service/Placeholder.vue'

const props = defineProps<Service>()

// At the moment there is a "flash" problem with the component.
// It is necessary to fix it and remove manual mapping
function resolveByTypeComponent(type: string) {
  // const name = capitalize(camelize(type))
  // return defineAsyncComponent({
  //   loader: () => import(`~/components/service/${name}.vue`),
  //   loadingComponent: ServicePlaceholder,
  //   suspensible: false,
  // })

  if (type === 'ip-api') {
    return resolveComponent('ServiceIpApi')
  }

  if (type === 'openweathermap') {
    return resolveComponent('ServiceOpenWeatherMap')
  }

  return resolveComponent('ServiceBase')
}

const component = props.type
  ? resolveByTypeComponent(props.type)
  : resolveComponent('ServiceBase')
</script>

<template>
  <ClientOnly>
    <Component :is="component" v-bind="props" />

    <template #fallback>
      <ServicePlaceholder :animate="false" />
    </template>
  </ClientOnly>
</template>
