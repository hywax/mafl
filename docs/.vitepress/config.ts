import { defineConfig } from 'vitepress'
import en from './locales/en'
import ru from './locales/ru'

export default defineConfig({
  title: 'Mafl',
  base: '/mafl/',
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
    root: { label: 'English', ...en },
    ru: { label: 'Русский', ...ru },
  },
})
