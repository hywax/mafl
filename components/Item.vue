<template>
  <Component :is="component" v-bind="props" />
</template>

<script setup lang="ts">
import { capitalize } from 'vue'
import type { BaseService } from '~/types'

const props = defineProps<BaseService>()

const type = capitalize(props.type || 'base')
const component = defineAsyncComponent(() => import(`~/components/service/${type}.vue`))
</script>
