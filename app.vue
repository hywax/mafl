<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const siteConfig = useSiteConfig()
const colorMode = useColorMode()

colorMode.preference = siteConfig.theme || 'system'

useHead({
    title: siteConfig.title,
})
</script>
