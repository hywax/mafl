export default defineNuxtConfig({
  // extends: ['@nuxt/ui-pro'],
  modules: [
    'nuxt-zod-i18n',
    '@nuxtjs/i18n',
    '@nuxt/ui',
    '@vueuse/nuxt',
  ],
  runtimeConfig: {
    nitro: {
      envPrefix: 'APP_',
    },
  },
  i18n: {
    langDir: 'locales',
    strategy: 'no_prefix',
    defaultLocale: 'en',
    experimental: {
      autoImportTranslationFunctions: true,
    },
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
    },
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en-US.json' },
      { code: 'ru', language: 'ru-RU', name: 'Русский', file: 'ru-RU.json' },
      { code: 'zh', language: 'zh-CN', name: '中文', file: 'zh-CN.json' },
      { code: 'hi', language: 'hi-IN', name: 'हिंदी', file: 'hi-IN.json' },
      { code: 'es', language: 'es-ES', name: 'Español', file: 'es-ES.json' },
      { code: 'ar', language: 'ar-SA', name: 'اللغة السعودية', file: 'ar-SA.json' },
      { code: 'pl', language: 'pl-PL', name: 'Polski', file: 'pl-PL.json' },
      { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr-FR.json' },
      { code: 'de', language: 'de-DE', name: 'Deutsch', file: 'de-DE.json' },
      { code: 'gr', language: 'gr-GR', name: 'Ελληνικά', file: 'gr-GR.json' },
    ],
  },
  zodI18n: {
    localeCodesMapping: {
      'en-GB': 'en',
      'ru-RU': 'ru',
    },
  },
  ui: {
    colorMode: true,
    fonts: true,
  },
  fonts: {
    provider: 'google',
    families: [
      {
        name: 'Inter',
        provider: 'google',
        weights: [300, 400, 500, 600, 700, 800, 900],
      },
    ],
  },
  colorMode: {
    classSuffix: '',
  },
  icon: {
    clientBundle: {
      scan: {
        globInclude: ['app/**/*.{vue,ts}'],
        globExclude: ['node_modules', 'dist', 'build', 'coverage', 'test', 'tests', '.*'],
      },
    },
  },
  css: ['~/assets/css/main.css'],
  nitro: {
    storage: {
      data: {
        driver: 'fs',
        base: './data',
      },
    },
    experimental: {
      websocket: true,
      tasks: true,
    },
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  future: {
    compatibilityVersion: 4,
  },
})
