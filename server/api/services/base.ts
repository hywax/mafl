import type { BaseService } from '~/types'
import { getServiceWithDefaultData, returnServiceWithData } from '~/server/utils/services'

export default defineEventHandler(async (event) => {
  const service = await getServiceWithDefaultData<BaseService>(event)

  return returnServiceWithData(service, {})
})
