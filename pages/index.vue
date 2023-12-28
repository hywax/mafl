<template>
  <template v-if="siteConfig.services.length">
    <Group
      v-for="(group, key) in siteConfig.services"
      :key="key"
      v-bind="group"
    />
  </template>
  <Message v-else title="Services not found">
    <template #text>
      <p>
        Oops! You did not specify a list of services in <span class="border-b border-dashed">config.yaml</span>
      </p>
      <p class="mt-1">
        <a href="#" class="text-sky-500 hover:text-sky-800">Go to documentation</a>
      </p>
    </template>
  </Message>
</template>

<script setup lang="ts">
const siteConfig = useSiteConfig()

useHead({
  title: siteConfig.title,
})
</script>
