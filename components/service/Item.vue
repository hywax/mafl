<template>
  <div class="p-4 flex gap-4">
    <div class="flex-shrink-0 flex">
      <a :href="link" :title="title" class="self-center">
        <slot name="icon">
          <ServiceIcon v-bind="icon" />
        </slot>
      </a>
    </div>

    <div>
      <h3 class="text-lg mt-1 font-semibold line-clamp-1">
        <a :href="link" :title="title">{{ title }}</a>
      </h3>
      <p class="text-sm text-black/50 line-clamp-1">
        <slot name="description" :description="description">
          {{ description }}
        </slot>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  title: string
  description: string
  link: string
  icon: {
    type: 'solid' | 'gradient'
    value: string
  }
}

defineProps<Props>()
</script>
