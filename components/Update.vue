<template>
  <Teleport v-if="data && data.available" to="body">
    <div class="fixed z-20 bottom-[30px] right-[30px] opacity-80 hover:opacity-100 transition-all">
      <div class="w-[160px] h-[160px] -z-1 rounded-full bg-brand-600 blur-3xl right-0 -bottom-20 absolute" />
      <div class="z-1 relative text-end text-fg-dimmed">
        A new version is available <strong>{{ data.version }}</strong><br>
        <a :href="`https://github.com/hywax/mafl/releases/tag/v${data.version}`" class="border-b border-dashed" target="_blank">Visit on github →</a>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/update')
</script>
