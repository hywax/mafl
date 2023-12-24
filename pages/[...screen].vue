<template>
  <div class="min-h-screen">
    <div class="max-w-screen-2xl mx-auto xl:flex-row">
      <ServiceGroup title="Services" :items="items" />
      <ServiceGroup title="Services" :items="items" />
    </div>
  </div>
</template>

<script setup lang="ts">
const items = Array(10).fill(0).map((_, i) => ({
  title: `Service ${i + 1}`,
  description: 'Description of service',
  link: '',
  icon: {
    type: 'solid',
    value: '#eee',
  },
}))
</script>
