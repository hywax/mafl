<template>
  <ServicePlaceholder v-if="loadingOverlay" />
  <Component :is="isLink ? 'a' : 'div'" v-else :href="link" :target="target" class="p-4 flex gap-4 hover:bg-fg/5 dark:hover:bg-fg/9 rounded-2xl transition-all">
    <div class="flex-shrink-0 flex">
      <div class="self-center w-16 h-16 overflow-hidden">
        <slot name="icon" :service="data">
          <ServiceBaseIcon v-if="icon" v-bind="icon" />
        </slot>
      </div>
    </div>
    <div>
      <h3 class="text-lg pr-1 font-semibold line-clamp-1 flex gap-2 items-center">
        <slot name="title" :service="data">
          {{ title }}
        </slot>
        <slot v-if="status && status.enabled" name="status" :data="data">
          <ServiceBaseStatus :ping="{ ...data?.ping, animation: status?.animation }" />
        </slot>
      </h3>

      <p class="text-sm text-fg-dimmed line-clamp-1">
        <slot name="description" :service="data">
          {{ description }}
        </slot>
      </p>
      <template v-if="tags.length">
        <ServiceBaseTag
          v-for="(tag, key) in tags"
          :key="key"
          :tag="tag"
        />
      </template>
    </div>
  </Component>
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
