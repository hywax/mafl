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
          { text: 'Changelog', link: '/ru/other/changelog' },
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
        text: 'Reference',
        base: '/ru/reference',
        items: [
          { text: 'Configuration', link: '/configuration' },
        ],
      },
      {
        text: 'Services',
        base: '/ru/services',
        items: [
          { text: 'Base', link: '/base' },
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
          { text: 'Changelog', link: '/changelog' },
          { text: 'License', link: '/license' },
        ],
      },
    ],
  },
})
