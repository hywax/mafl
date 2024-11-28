<template>
  <a href="https://boosty.to/hywax/donate" target="_blank" rel="noreferrer">
    <span class="i-simple-icons-boosty" />
    <span>
      {{ label }}
    </span>
  </a>
</template>

<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<style scoped>
a {
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
}
</style>
