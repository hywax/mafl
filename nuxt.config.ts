// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    'nuxt-site-config',
  ],
  site: {
    title: 'Mafl',
    lang: 'en',
    theme: 'system',
    services: [],
  },
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en-US.json',
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        name: 'Русский',
        file: 'ru-RU.json',
      },
    ],
    strategy: 'no_prefix',
    langDir: 'locales',
    defaultLocale: 'en',
  },
  tailwindcss: {
    cssPath: '~/assets/style/tailwind.css',
  },
  colorMode: {
    classSuffix: '',
  },
  nitro: {
    storage: {
      data: {
        driver: 'fs',
        base: './data'
      }
    }
  }
})
