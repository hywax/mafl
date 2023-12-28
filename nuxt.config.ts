// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    'nuxt-site-config',
  ],
  site: {
    title: 'Mafl',
    theme: 'system',
    services: [],
  },
  tailwindcss: {
    cssPath: '~/assets/style/tailwind.css',
  },
  colorMode: {
    classSuffix: '',
  },
})
