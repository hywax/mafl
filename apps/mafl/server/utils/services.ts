import type { H3Event } from 'h3'
import type { PingServiceData, ReturnServiceWithData, Service, ServiceWithDefaultData } from '~/types'
import { ping } from '@network-utils/tcp-ping'

export async function pingService(endpoint: string): Promise<PingServiceData> {
  try {
    const url = new URL(endpoint)

    const probe = await ping({
      address: url.hostname,
      port: Number.parseInt(url.port || '80'),
      attempts: 1,
    })

    return {
      status: probe.errors.length === 0,
      time: Math.floor(probe.averageLatency),
    }
  } catch (e) {
    logger.error(e)
  }

  return {
    status: false,
    time: 0,
  }
}

export async function getService<T extends Service>(event: H3Event): Promise<T> {
  const { id } = getQuery<{ id?: string }>(event)

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID can not be null',
    })
  }

  const storage = useStorage('main')
  const services = await storage.getItem<Record<string, T>>('services')

  if (!services || !Object.hasOwn(services, id)) {
    throw createError({
      statusCode: 404,
      statusMessage: `Service with ID "${id}" does not exist`,
    })
  }

  return services[id]
}

export async function getServiceWithDefaultData<S extends Service>(event: H3Event): Promise<ServiceWithDefaultData<S>> {
  const config = await getService<S>(event)
  const defaultData = {
    ping: config?.status?.enabled ? await pingService(config.link || '') : undefined,
  }

  return { config, defaultData }
}

export function returnServiceWithData<
  S extends ServiceWithDefaultData<Service>,
  D extends S['config']['server'] = S['config']['server'],
>(service: S, data: D): ReturnServiceWithData<D, S['defaultData']> {
  return {
    ...service.defaultData,
    data,
  }
}
