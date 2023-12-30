<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const siteConfig = useSiteConfig()
const colorMode = useColorMode()
const { locale } = useI18n()

colorMode.preference = siteConfig.theme || 'system'
locale.value = siteConfig.lang

useHead({
  title: siteConfig.title,
})
</script>
