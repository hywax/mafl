import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'fg': 'rgba(var(--fg) / <alpha-value>)',
        'fg-dimmed': 'rgba(var(--fg-dimmed) / <alpha-value>)',
        'background': 'rgba(var(--background) / <alpha-value>)',
        'brand': {
          50: '#eaf4ec',
          100: '#cde3d1',
          200: '#afd2b4',
          300: '#91c198',
          400: '#7cb484',
          500: '#69a870',
          600: '#609966',
          700: '#56875a',
          800: '#4d7651',
          900: '#3f5640',
        },
      },
    },
  },
}
