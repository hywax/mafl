<template>
  <div class="p-4 flex gap-4">
    <div class="flex-shrink-0 flex">
      <a :href="link" :title="title" class="self-center w-16 h-16 overflow-hidden rounded-2xl border border-black/5">
        <slot name="icon">
          <img v-if="icon" :src="icon" :alt="title" class="block bg-contain">
          <div v-else class="bg-fg-dimmed h-full w-full" />
        </slot>
      </a>
    </div>

    <div>
      <h3 class="text-lg mt-1 font-semibold line-clamp-1">
        <a :href="link" :title="title">{{ title }}</a>
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

defineProps<BaseService>()
</script>
