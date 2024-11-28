<script setup lang="ts">
interface Props {
  title: string
  text?: string
}

defineProps<Props>()
</script>

<template>
  <div class="min-h-screen flex flex-grow items-center justify-center">
    <div class="bg-fg/5 dark:bg-fg/10 text-fg-dimmed p-8 text-center rounded-2xl border border-fg/10 dark:border-fg/15">
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
