<template>
  <div class="py-10">
    <h2 v-if="title" class="text-2xl font-light py-2 px-4">
      {{ title }}
    </h2>
    <div :class="gridClasses">
      <template v-for="item in items" :key="item.id">
        <Item v-bind="item" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Layout, Service } from '~/types'

export interface Props {
  title?: string
  items: Service[]
  grid: Layout['grid']
}

const props = defineProps<Props>()

const gridClasses = computed(() => [
  'grid',
  'grid-cols-1',
  `sm:grid-cols-${props.grid.small}`,
  `md:grid-cols-${props.grid.medium}`,
  `lg:grid-cols-${props.grid.large}`,
  `xl:grid-cols-${props.grid.xlarge}`,
  'gap-1',
  'lg:gap-2',
  'lg:gap-y-4',
])
</script>
