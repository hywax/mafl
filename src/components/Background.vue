<template>
  <div 
    v-if="backgroundUrl" 
    class="fixed inset-0 -z-10"
    :style="backgroundStyle"
  />
</template>

<script setup lang="ts">
const { $settings } = useNuxtApp()

const backgroundUrl = computed(() => {
  const bg = $settings.background
  
  if (!bg) return null

  if (bg.url) {
    return bg.url
  }

  if (bg.image) {
    return `/api/background/${bg.image}`
  }

  return null
})

const backgroundStyle = computed(() => {
  const bg = $settings.background
  
  if (!backgroundUrl.value) {
    return {}
  }

  const opacity = bg?.opacity !== undefined ? bg.opacity : 1
  const blur = bg?.blur !== undefined ? bg.blur : 0

  return {
    backgroundImage: `url('${backgroundUrl.value}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    opacity: opacity.toString(),
    filter: blur > 0 ? `blur(${blur}px)` : 'none',
  }
})
</script>
