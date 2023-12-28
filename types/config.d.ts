import type { BaseService } from '~/types/services'

export interface ServicesGroup {
  title: string
  items: BaseService[]
}

export interface Config {
  title?: string
  services: ServicesGroup[]
}
