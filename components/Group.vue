<template>
  <div class="py-10">
    <h2 class="text-2xl font-light py-2 px-4">
      {{ title }}
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 lg:gap-2 lg:gap-y-4">
      <template v-for="item in items" :key="item.id">
        <Item v-bind="item" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BaseService } from '~/types'

export interface Props {
  title: string
  items: BaseService[]
}

defineProps<Props>()
</script>
