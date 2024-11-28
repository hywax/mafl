<script setup lang="ts">
defineProps<{ error: { message: string, statusCode: number } }>()
</script>

<template>
  <div class="min-h-screen flex flex-grow items-center justify-center">
    <div class="bg-fg/5 dark:bg-fg/10 text-fg-dimmed p-8 rounded-2xl border border-fg/10 dark:border-fg/15 w-full max-w-xl">
      <h1 class="mb-4 text-2xl font-light text-center">
        {{ $t('error.title') }} {{ error.statusCode }}
      </h1>
      <div class="text-sm">
        <template v-if="error.statusCode === 404">
          <p class="text-center">
            {{ $t('error.page404') }}
          </p>
          <p class="text-center mt-4">
            <NuxtLink to="/" class="text-brand-600 hover:text-brand-800 transition-all">
              {{ $t('error.home') }}
            </NuxtLink>
          </p>
        </template>
        <template v-else>
          <p class="text-center">
            {{ $t('error.description') }}
          </p>

          <p class="text-center mt-2">
            <a href="https://mafl.hywax.space/" class="text-brand-600 hover:text-brand-800 transition-all">{{ $t('error.action') }} →</a>
          </p>
          <pre v-if="error?.message" class="mt-6 bg-fg/5 dark:bg-fg/10 text-fg-dimmed px-3 py-2 rounded-2xl border border-fg/10 dark:border-fg/15 max-h-52 overflow-auto"><code>{{ error.message }}</code></pre>
        </template>
      </div>
    </div>
  </div>
</template>
