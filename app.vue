<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { $settings } = useNuxtApp()
const colorMode = useColorMode()
const { locale } = useI18n()

colorMode.preference = $settings.theme || 'system'
locale.value = $settings.lang

useHead({
  title: $settings.title,
  bodyAttrs: {
    class: 'relative',
  },
})
</script>
