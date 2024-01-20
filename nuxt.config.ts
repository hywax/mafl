import process from 'node:process'

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          href: '/favicons/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          href: '/favicons/apple-touch-icon.png',
          sizes: '180x180',
        },
        {
          rel: 'mask-icon',
          href: '/favicons/logo.svg',
        },
      ],
    },
  },
  pwa: {
    registerType: 'autoUpdate',
    scope: '/',
    base: '/',
    manifest: {
      id: '/',
      scope: '/',
      name: 'Mafl. Minimalistic flexible homepage.',
      short_name: 'Mafl',
      description: 'Mafl is an intuitive service for organizing your homepage. Customize Mafl to your individual needs and work even more efficiently!',
      theme_color: '#ffffff',
      icons: [
        {
          sizes: '192x192',
          src: 'favicons/pwa-192x192.png',
          type: 'image/png',
        },
        {
          sizes: '512x512',
          src: 'favicons/pwa-512x512.png',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,txt,png,ico,svg}'],
      navigateFallbackDenylist: [/^\/api\//],
      navigateFallback: '/',
      cleanupOutdatedCaches: true,
    },
    registerWebManifestInRouteRules: true,
    writePlugin: true,
    devOptions: {
      enabled: process.env.VITE_PLUGIN_PWA === 'true',
      navigateFallback: '/',
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt',
    'nuxt-icon',
  ],
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
      {
        code: 'zh',
        iso: 'zh-CN',
        name: '中文',
        file: 'zh-CN.json',
      },
      {
        code: 'hi',
        iso: 'hi-IN',
        name: 'हिंदी',
        file: 'hi-IN.json',
      },
      {
        code: 'es',
        iso: 'es-ES',
        name: 'Español',
        file: 'es-ES.json',
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
        base: './data',
      },
    },
    devServer: {
      watch: ['./data'],
    },
  },
})
