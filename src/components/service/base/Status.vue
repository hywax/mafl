<template>
  <span class="relative inline-flex z-1 h-2.5 w-2.5 rounded-full bg-green-400" :class="color">
    <span class="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" :class="color" />
  </span>
</template>

<script setup lang="ts">
export interface Props {
  ping?: {
    status: boolean
    time: number
  }
}

const props = defineProps<Props>()
const color = computed(() => {
  if (!props.ping) {
    return 'bg-neutral-400'
  }

  return props.ping.status ? 'bg-green-400' : 'bg-red-400'
})
</script>
