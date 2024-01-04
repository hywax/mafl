<template>
  <Component :is="component" v-bind="props" />
</template>

<script setup lang="ts">
import { capitalize } from 'vue'
import type { BaseService } from '~/types'

const props = defineProps<BaseService>()

const component = props.type
  ? defineAsyncComponent(() => import(`~/components/service/${capitalize(props.type!)}.vue`))
  : resolveComponent('ServiceBase')
</script>
