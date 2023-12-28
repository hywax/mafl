<template>
  <Suspense>
    <template #default>
      <Component :is="component" v-bind="props" />
    </template>
    <template #fallback>
      <div class="p-4 flex gap-4">
        <div class="animate-pulse">
          <div class="w-16 h-16 bg-gray-200 rounded-2xl" />
        </div>
        <div>
          <h3 class="animate-pulse text-lg mt-1">
            <span class="inline-block min-h-[1em] w-[110px] flex-auto cursor-wait bg-gray-200 align-middle opacity-50 rounded" />
          </h3>
          <p class="animate-pulse text-sm text-black/50">
            <span class="inline-block min-h-[1em] w-[160px] flex-auto cursor-wait bg-gray-200 align-middle opacity-50 rounded" />
          </p>
        </div>
      </div>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import { capitalize } from 'vue'
import type { BaseService } from '~/types'

const props = defineProps<BaseService>()

const type = capitalize(props.type || 'base')
const component = defineAsyncComponent(() => import(`~/components/service/${type}.vue`))
</script>
