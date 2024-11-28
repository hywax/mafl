<template>
  <a href="https://github.com/hywax/shorter" target="_blank" rel="noreferrer">
    <span class="i-simple-icons-github" />
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
