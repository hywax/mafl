<template>
  <NuxtPwaManifest />
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

const i18nHead = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
})

useHead({
  title: $settings.title,
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs?.lang,
    dir: i18nHead.value.htmlAttrs?.dir,
  },
  bodyAttrs: {
    class: 'relative',
  },
})
</script>
