<template>
  <span class="relative inline-flex z-1 h-2.5 w-2.5 rounded-full bg-green-400" :class="colorClasses">
    <span v-if="!ping || ping.animation !== false" class="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" :class="colorClasses" />
  </span>
</template>

<script setup lang="ts">
export interface Props {
  ping?: {
    status?: boolean
    animation?: boolean
    time: number
  }
}

const props = withDefaults(defineProps<Props>(), {
  ping: () => ({
    status: undefined,
    animation: true,
    time: 0,
  }),
})

const colorClasses = computed(() => [
  { 'bg-green-400': props.ping.status },
  { 'bg-red-400': props.ping.status === false },
  { 'bg-neutral-400': props.ping.status === undefined },
])
</script>
