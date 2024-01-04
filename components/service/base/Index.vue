<template>
  <ClientOnly>
    <template #default>
      <div class="p-4 flex gap-4">
        <div class="flex-shrink-0 flex">
          <a :href="link" class="self-center w-16 h-16 overflow-hidden rounded-2xl border border-fg/10 dark:border-fg/15">
            <slot name="icon">
              <ServiceBaseIcon v-if="icon" v-bind="icon" />
            </slot>
          </a>
        </div>
        <div>
          <h3 class="text-lg mt-1 font-semibold line-clamp-1 flex gap-2 items-center">
            <slot name="title">
              <a :href="link">{{ title }}</a>
            </slot>
            <slot v-if="props?.status" name="status">
              <ServiceBaseStatus :ping="data?.ping" />
            </slot>
          </h3>

          <p class="text-sm text-fg-dimmed line-clamp-1">
            <slot name="description">
              {{ description }}
            </slot>
          </p>
        </div>
      </div>
    </template>
    <template #fallback>
      <div class="p-4 flex gap-4">
        <div class="flex-shrink-0 flex">
          <div class="self-center w-16 h-16 overflow-hidden rounded-2xl border border-black/5 animate-pulse">
            <div class="bg-fg-dimmed h-full w-full" />
          </div>
        </div>
        <div>
          <h3 class="animate-pulse text-lg mt-1">
            <span class="inline-block min-h-[1em] w-[110px] flex-auto cursor-wait bg-fg-dimmed align-middle opacity-50 rounded" />
          </h3>
          <p class="animate-pulse text-sm text-black/50">
            <span class="inline-block min-h-[1em] w-[160px] flex-auto cursor-wait bg-fg-dimmed align-middle opacity-50 rounded" />
          </p>
        </div>
      </div>
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
import type { BaseService } from '~/types'
import { useServiceData } from '~/composables/services'

const props = defineProps<BaseService>()
const { data, pauseUpdate } = useServiceData<BaseService, { ping: { time: number, status: boolean } }>(props)

onBeforeUnmount(pauseUpdate)
</script>
