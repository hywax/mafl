<template>
  <div class="p-4 flex gap-4">
    <div class="flex-shrink-0 flex">
      <a :href="link" class="self-center w-16 h-16 overflow-hidden rounded-2xl border border-fg/10 dark:border-fg/15">
        <slot name="icon">
          <div :class="iconWrapClasses" :style="iconWrapStyles">
            <Icon v-if="icon?.name" :name="icon.name" :class="iconClasses" />
            <img v-else-if="icon?.url" :src="icon.url" alt="" :class="iconClasses">
          </div>
        </slot>
      </a>
    </div>
    <div>
      <h3 class="text-lg mt-1 font-semibold line-clamp-1">
        <a :href="link">{{ title }}</a>
      </h3>
      <p class="text-sm text-fg-dimmed line-clamp-1">
        <slot name="description" :description="description">
          {{ description }}
        </slot>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BaseService } from '~/types'

const props = defineProps<BaseService>()

const iconsExist = computed(() => props.icon && (props.icon?.name || props.icon?.url))
const iconClasses = 'block h-full w-full'
const iconWrapClasses = computed(() => ({
  'bg-fg/5 dark:bg-fg/10': !iconsExist.value || (props.icon?.wrap && !props.icon?.background),
  'p-2': props.icon?.wrap,
  'h-full w-full': true,
}))
const iconWrapStyles = computed(() => ({
  background: props.icon?.background,
  color: props.icon?.color,
}))
</script>
