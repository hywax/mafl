<template>
  <div class="min-h-screen flex flex-grow items-center justify-center">
    <div class="rounded-lg bg-white p-8 text-center shadow-xl">
      <h1 class="mb-4 text-2xl font-light">
        {{ title }}
      </h1>
      <div class="text-sm">
        <slot name="text">
          {{ text }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  text?: string
}

defineProps<Props>()
</script>
