import crypto from 'node:crypto'
import yaml from 'yaml'
import defu from 'defu'
import type { BaseService, CompleteConfig } from '~/types'

type draftService = Omit<BaseService, 'id'>

function determineServiceId(items: draftService[]): BaseService[] {
  return items.map((item) => ({
    id: crypto.randomUUID(),
    ...item,
  }))
}

export function getDefaultConfig(): CompleteConfig {
  return {
    title: 'Mafl Home Page',
    lang: 'en',
    theme: 'system',
    services: [],
    checkUpdates: true,
  }
}

export async function loadLocalConfig(): Promise<CompleteConfig> {
  const storage = useStorage('data')
  const file = 'config.yml'

  try {
    if (!await storage.hasItem(file)) {
      return getDefaultConfig()
    }

    const raw = await storage.getItem<string>(file)
    const config = yaml.parse(raw || '') || {}
    const services: CompleteConfig['services'] = []

    if (Array.isArray(config.services)) {
      services.push({
        items: determineServiceId(config.services),
      })
    } else {
      const entries = Object.entries<draftService[]>(config.services || [])

      for (const [title, items] of entries) {
        services.push({
          title,
          items: determineServiceId(items),
        })
      }
    }

    return defu({ ...config, services }, getDefaultConfig())
  } catch (e) {
    // ...
  }

  return getDefaultConfig()
}

export async function getLocalConfig(): Promise<CompleteConfig | null> {
  const storage = useStorage('main')
  await storage.getKeys()

  return storage.getItem<CompleteConfig>('config')
}

/**
 * Safely retrieves a list of services for frontend.
 * Omit "secrets" fields.
 */
export function extractSafelyConfig(config: CompleteConfig) {
  return JSON.parse(JSON.stringify(
    config, (key, val) => key === 'secrets' ? undefined : val,
  ))
}

/**
 * Create Map services
 */
export function extractServicesFromConfig(config: CompleteConfig): Record<string, BaseService> {
  return config.services.reduce<Record<string, BaseService>>((acc, group) => {
    for (const item of group.items) {
      acc[item.id] = item
    }

    return acc
  }, {})
}
