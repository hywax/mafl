<template>
  <template v-if="$services.length">
    <Group
      v-for="(group, key) in $services"
      :key="key"
      v-bind="group"
    />
  </template>
  <Message v-else :title="$t('service.not-found.title')">
    <template #text>
      <p>
        {{ $t('service.not-found.description') }}
      </p>
      <p class="mt-1">
        <a href="#" class="text-sky-500 hover:text-sky-800">{{ $t('service.not-found.action') }}</a>
      </p>
    </template>
  </Message>
  <Update v-if="$settings.checkUpdates" />
</template>

<script setup lang="ts">
const { $services, $settings } = useNuxtApp()
</script>
