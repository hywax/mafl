import { defineConfig, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'color': '',
        'display': 'inline-block',
        'vertical-align': 'text-top',
      },
    }),
  ],
})
