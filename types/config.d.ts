import type { BaseService } from '~/types/services'

export interface ServicesGroup {
  title?: string
  items: BaseService[]
}

export interface Config {
  title?: string
  lang: 'en' | 'ru'
  theme?: 'system' | 'light' | 'dark' | 'deep'
  services: ServicesGroup[]
  checkUpdates: boolean
}

export type CompleteConfig = Required<Config>
