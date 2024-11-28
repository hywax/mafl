import { defineConfig } from 'vitepress'
import enUs from './locales/en-US'
import ruRu from './locales/ru-RU'

export default defineConfig({
  title: 'Mafl',
  rewrites: {
    'en/:rest*': ':rest*',
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    search: {
      provider: 'local',
    },
    logo: {
      src: '/logotype.svg',
      innerWidth: 50,
      height: 50,
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hywax/mafl' },
    ],
  },
  locales: {
    root: { label: 'English', ...enUs },
    ru: { label: 'Русский', ...ruRu },
  },
  ignoreDeadLinks: [
    (url) => {
      return !url.toLowerCase().includes('_parts')
    },
  ],
})
