import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import PreviewService from '../components/preview-service.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PreviewService', PreviewService)
  },
} satisfies Theme
