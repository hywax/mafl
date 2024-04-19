<template>
  <Group
    v-for="(group, key) in $services"
    :key="key"
    v-bind="{ ...group, grid: $settings.layout.grid }"
  />
  <Update v-if="$settings.checkUpdates" />
</template>

<script setup lang="ts">
const { $services, $settings } = useNuxtApp()

if ($settings.error) {
  throw createError({
    message: $settings.error,
  })
}
</script>
