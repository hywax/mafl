<template>
  <div class="p-4 flex gap-4">
    <div class="flex-shrink-0 flex">
      <a :href="link" :target="target" class="self-center w-16 h-16 overflow-hidden rounded-2xl border border-fg/10 dark:border-fg/15">
        <slot name="icon">
          <ServiceBaseIcon v-if="icon" v-bind="icon" />
        </slot>
      </a>
    </div>
    <div>
      <h3 class="text-lg mt-1 font-semibold line-clamp-1 flex gap-2 items-center">
        <slot name="title">
          <a :href="link" :target="target">{{ title }}</a>
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

<script setup lang="ts">
import type { BaseService } from '~/types'
import { useServiceData } from '~/composables/services'

const props = defineProps<BaseService>()

const { $settings } = useNuxtApp()
const target = computed(() => props.target || $settings.behaviour.target)

// Right now, queries for "base" are only needed for statuses.
// When the situation will change it is necessary to remove/add condition for "immediate"
const { data, pauseUpdate } = useServiceData<BaseService, { ping: { time: number, status: boolean } }>(props, {
  immediate: props.status?.enabled || false,
})

onBeforeUnmount(pauseUpdate)
</script>
