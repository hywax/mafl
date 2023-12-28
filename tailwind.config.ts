import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'fg': 'rgba(var(--fg) / <alpha-value>)',
        'fg-dimmed': 'rgba(var(--fg-dimmed) / <alpha-value>)',
        'background': 'rgba(var(--background) / <alpha-value>)',
      },
    },
  },
}
