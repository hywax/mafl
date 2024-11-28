import type { Theme } from 'vitepress'
import { yandexMetrika } from '@hywax/vitepress-yandex-metrika'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Sponsor from './components/Sponsor.vue'

import './custom.css'
import 'uno.css'

export default <Theme>{
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-after': () => h(Sponsor),
    })
  },
  enhanceApp(ctx) {
    yandexMetrika(ctx, {
      enabled: import.meta.env.MODE === 'production',
      counter: {
        id: 96086220,
        initParams: {
          trustedDomains: ['mafl.hywax.space'],
        },
      },
    })
  },
}
