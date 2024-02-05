<template>
  <ServicePlaceholder v-if="loadingOverlay" />
  <div v-else class="p-4 flex gap-4">
    <div class="flex-shrink-0 flex">
      <Component :is="isLink ? 'a' : 'div'" :href="link" :target="target" class="self-center w-16 h-16 overflow-hidden rounded-2xl border border-fg/10 dark:border-fg/15">
        <slot name="icon" :service="data">
          <ServiceBaseIcon v-if="icon" v-bind="icon" />
        </slot>
      </Component>
    </div>
    <div>
      <h3 class="text-lg mt-1 pr-1 font-semibold line-clamp-1 flex gap-2 items-center">
        <slot name="title" :service="data">
          <a v-if="isLink" :href="link" :target="target">{{ title }}</a>
          <span v-else>{{ title }}</span>
        </slot>
        <slot v-if="status" name="status" :data="data">
          <ServiceBaseStatus :ping="data?.ping" />
        </slot>
      </h3>

      <p class="text-sm text-fg-dimmed line-clamp-1">
        <slot name="description" :service="data">
          {{ description }}
        </slot>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Service, ServiceClient } from '~/types'

const props = defineProps<ServiceClient<Service>>()

const { $settings } = useNuxtApp()
const isLink = computed(() => isUrl(props.link || ''))
const target = computed(() => props.target || $settings.behaviour.target)

const immediate = computed(() => props.status?.enabled || !!props.type || false)
const { data, pauseUpdate } = useServiceData<Service>(props, {
  immediate: immediate.value,
})

const loadingOverlay = computed(() => {
  if (props.type && !data.value) {
    return true
  }

  return false
})

defineExpose({ data })

onBeforeUnmount(pauseUpdate)
</script>
