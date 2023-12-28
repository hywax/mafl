import type { H3Event } from 'h3'

export async function getService<T>(event: H3Event): Promise<T> {
  const { id } = getQuery<{ id?: string }>(event)

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID can not be null',
    })
  }

  const storage = useStorage()
  const services = await storage.getItem<Record<string, T>>('services')

  if (!services || !Object.hasOwn(services, id)) {
    throw createError({
      statusCode: 404,
      statusMessage: `Service with ID "${id}" does not exist`,
    })
  }

  return services[id]
}
