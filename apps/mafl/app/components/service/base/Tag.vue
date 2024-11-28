<script setup lang="ts">
import type { Tag } from '~/types'

export interface Props {
  tag: Tag | string
}

const props = defineProps<Props>()

const tag = computed<Tag>(() => (typeof props.tag === 'string' ? { name: props.tag, color: 'blue' } : props.tag))

const tagClasses = computed(() => ([
  `bg-${tag.value.color}-100`,
  `text-${tag.value.color}-800`,
  'text-xs',
  'font-medium',
  'me-2',
  'px-2.5',
  'py-0.5',
  'rounded',
  `dark:bg-${tag.value.color}-900`,
  `dark:text-${tag.value.color}-300`,
]))
</script>

<template>
  <span :class="tagClasses">
    {{ tag.name }}
  </span>
</template>
