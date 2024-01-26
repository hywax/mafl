export interface ServiceStatus {
  enabled?: boolean
  interval?: number
}

export interface ServiceIcon {
  url?: string
  name?: string
  wrap?: boolean
  background?: string
  color?: string
}

export interface BaseService {
  id: string
  type?: string
  title: string
  description?: string
  link: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  icon?: ServiceIcon
  status?: ServiceStatus
  options?: Record<string, string | number | boolean>
  secrets?: Record<string, string | number | boolean>
}
