import type { BaseService } from '~/types/services'

export interface ServicesGroup {
  title?: string
  items: BaseService[]
}

export interface Behaviour {
  target?: '_blank' | '_self' | '_parent' | '_top'
}

export interface Config {
  title?: string
  lang: 'en' | 'ru'
  theme?: 'system' | 'light' | 'dark' | 'deep' | 'sepia'
  behaviour?: Behaviour
  services: ServicesGroup[]
  checkUpdates: boolean
}

export type CompleteConfig = Required<Config> & {
  error?: string
}
