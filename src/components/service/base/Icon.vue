<template>
  <div :class="wrapClasses" :style="wrapStyles">
    <Icon v-if="props?.name" :name="props.name" :class="iconClasses" />
    <img v-else-if="iconUrl" :src="iconUrl" alt="" :class="iconClasses">
  </div>
</template>

<script setup lang="ts">
import type { ServiceIcon } from '~/types'
import { normalizeIconUrl } from '~/utils/icon'

const props = defineProps<ServiceIcon>()

const iconClasses = 'block h-full w-full'

const iconUrl = computed(() => normalizeIconUrl(props?.url))

const wrapClasses = computed(() => ({
  'bg-fg/5 dark:bg-fg/10': props?.wrap && !props?.background,
  'p-2': props?.wrap,
  [iconClasses]: true,
  'border border-fg/10 dark:border-fg/15 rounded-2xl': true,
}))

const wrapStyles = computed(() => ({
  background: props?.background,
  color: props?.color,
}))
</script>
