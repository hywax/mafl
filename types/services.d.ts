export interface BaseService {
  id: string
  type?: string
  title: string
  description?: string
  link: string
  icon?: {
    url?: string
    name?: string
    wrap?: boolean
    background?: string
    color?: string
  }
  options?: Record<string, string | number | boolean>
  secrets?: Record<string, string | number | boolean>
}

export interface PingService extends BaseService {
  options?: {
    interval?: number
  }
}
