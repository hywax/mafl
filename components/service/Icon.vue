<template>
  <img src="http://localhost:8090/icons/authelia.png" alt="" class="block overflow-hidden bg-contain w-16 h-16 rounded-2xl border border-black/5 shadow-sm" style="">
</template>

<script setup lang="ts">
export interface Props {
  type: 'solid' | 'gradient'
  value: string
}

defineProps<Props>()
</script>
