<template>
  <div class="p-4 flex gap-4">
    <div class="flex-shrink-0 flex">
      <div class="self-center w-16 h-16 overflow-hidden rounded-2xl border border-black/5" :class="{ 'animate-pulse': props.animate }">
        <div class="bg-fg/5 dark:bg-fg/10 h-full w-full" />
      </div>
    </div>
    <div>
      <h3 class="text-lg mt-1" :class="{ 'animate-pulse': props.animate }">
        <span class="inline-block min-h-[1em] w-[110px] flex-auto cursor-wait bg-fg/5 dark:bg-fg/10 align-middle opacity-50 rounded" />
      </h3>
      <p class="text-sm text-black/50" :class="{ 'animate-pulse': props.animate }">
        <span class="inline-block min-h-[1em] w-[160px] flex-auto cursor-wait bg-fg/5 dark:bg-fg/10 align-middle opacity-50 rounded" />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ animate?: boolean }>(), {
  animate: true,
})
</script>
