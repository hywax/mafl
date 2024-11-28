<template>
  <img :src="image" alt="" class="preview">
</template>

<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'

const props = defineProps<{ name: string }>()

const { isDark } = useData()
const image = computed(() => withBase(`/${props.name}${isDark.value ? '-dark' : ''}.png`))
</script>

<style scoped>
.preview {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 16px 0;
}
</style>
