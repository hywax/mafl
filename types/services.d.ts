export interface BaseService {
  id: string
  type?: string
  title: string
  description?: string
  link: string
  icon?: string
  options?: Record<string, string | number | boolean>
  secrets?: Record<string, string | number | boolean>
}
