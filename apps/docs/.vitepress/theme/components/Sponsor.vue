<template>
  <a href="https://boosty.to/hywax/donate" class="sponsor" target="_blank">
    <i class="i-ph:heart-fill" />
    <span>{{ label }}</span>
  </a>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { lang } = useData()
const label = computed(() => lang.value === 'en-US' ? 'Sponsoring' : 'Поддержать проект')
</script>

<style scoped>
.sponsor {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  padding: 0.7rem .4rem;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-bg-soft);
  transition: all .5s;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 14px;
  }

  &:hover {
    color: #fff;
    background-color: rgb(191 57 137 / 100%);
    border-color: rgb(221 70 160 / 100%);
  }
}
</style>
