import { defineConfig } from 'vitepress'
import { getVersion } from '../utils'

export default defineConfig({
  description: 'Intuitive service for organizing your homepage',
  lang: 'ru-RU',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/ru/' },
      { text: 'Configuration', link: '/ru/reference/configuration' },
      { text: 'Showcase', link: '/ru/community/showcase' },
      {
        text: getVersion(),
        items: [
          { text: 'Журнал изменений', link: '/ru/other/changelog' },
          { text: 'Contributing', link: '/ru/community/contributing' },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Guide',
        base: '/ru/guide',
        items: [
          { text: 'What is Mafl?', link: '/what-is' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Deployment', link: '/deployment' },
        ],
      },
      {
        text: 'Ссылки',
        base: '/ru/reference',
        items: [
          { text: 'Конфигурация', link: '/configuration' },
          { text: 'Иконки', link: '/icons' },
        ],
      },
      {
        text: 'Сервисы',
        base: '/ru/services',
        items: [
          { text: 'Базовый', link: '/base' },
        ],
      },
      {
        text: 'Community',
        base: '/ru/community',
        collapsed: true,
        items: [
          { text: 'Showcase', link: '/showcase' },
          { text: 'Development', link: '/development' },
          { text: 'Contributing', link: '/contributing' },
        ],
      },
      {
        text: 'Other',
        base: '/ru/other',
        collapsed: true,
        items: [
          { text: 'Журнал изменений', link: '/changelog' },
          { text: 'Лицензия', link: '/license' },
        ],
      },
    ],
  },
})
