import type { Service } from '~/types/services'

export interface ServicesGroup {
  title?: string
  items: Service[]
}

export interface Tag {
  name: string
  color: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'
}

export interface Behaviour {
  target?: '_blank' | '_self' | '_parent' | '_top'
}

export interface Layout {
  grid: {
    small: number
    medium: number
    large: number
    xlarge: number
  }
}

export interface Config {
  title?: string
  lang: 'en' | 'ru'
  theme?: 'system' | 'light' | 'dark' | 'deep' | 'sepia' | 'bluer'
  layout?: Layout
  behaviour?: Behaviour
  tags: Tag[]
  services: ServicesGroup[]
  checkUpdates: boolean
}

export type CompleteConfig = Required<Config> & {
  error?: string
}
