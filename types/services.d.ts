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

export interface Service {
  id: string
  type?: string
  title?: string
  description?: string
  link?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  icon?: ServiceIcon
  status?: ServiceStatus
  options?: Record<string, any>
  secrets?: Record<string, any>
  server?: Record<string, any>
}

export type ServiceClient<T> = Omit<T, 'secrets' | 'server'>

export interface PingServiceData {
  status: boolean
  time: number
}

export interface ServiceWithDefaultData<S> {
  config: S
  defaultData: {
    ping?: PingServiceData
  }
}

export type ReturnServiceWithData<D, S extends ServiceWithDefaultData<Service>['defaultData']> = S & { data: D }

export interface BaseService extends Service {}

export interface IpApiService extends Service {
  options?: {
    flagIcon?: boolean
  }
  server: {
    ip: string
    place: string
  }
}
