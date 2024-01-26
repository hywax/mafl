<template>
  <Badge v-if="visible" type="tip" :text="props.value" />
</template>

<script setup lang="ts">
import parse from 'semver/functions/parse'
import { computed } from 'vue'
import { getVersion } from '../utils'

const props = defineProps<{ value: string }>()

const visible = computed(() => {
  const a = parse(props.value)
  const b = parse(getVersion())

  return ((b?.major * 10 + b?.minor) - (a?.major * 10 + a?.minor)) <= 5
})
</script>
