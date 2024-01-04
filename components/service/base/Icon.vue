<template>
  <div :class="wrapClasses" :style="wrapStyles">
    <Icon v-if="props?.name" :name="props.name" :class="iconClasses" />
    <img v-else-if="props?.url" :src="props.url" alt="" :class="iconClasses">
  </div>
</template>

<script setup lang="ts">
import type { ServiceIcon } from '~/types'

const props = defineProps<ServiceIcon>()

const iconClasses = 'block h-full w-full'

const wrapClasses = computed(() => ({
  'bg-fg/5 dark:bg-fg/10': props?.wrap && !props?.background,
  'p-2': props?.wrap,
  [iconClasses]: true,
}))

const wrapStyles = computed(() => ({
  background: props?.background,
  color: props?.color,
}))
</script>
