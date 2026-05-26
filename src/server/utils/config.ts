import crypto from 'node:crypto'
import yaml from 'yaml'
import defu from 'defu'
import { ZodError } from 'zod'
import type { CompleteConfig, Service, Tag } from '~/types'
import { configSchema } from '~/server/validations'

type DraftService = Omit<Service, 'id'>

type TagMap = Map<Tag['name'], Tag>

const logger = useLogger('config')

function determineService(items: DraftService[], tags: TagMap): Service[] {
  return items.map((item) => ({
    ...item,
    id: crypto.randomUUID(),
    tags: (item.tags || []).map((tag): Tag => {
      if (typeof tag === 'string') {
        return tags.get(tag) || {
          name: tag,
          color: 'blue',
        }
      }

      return tag
    }),
  }))
}

export const configFileName = 'config.yml'

export function getDefaultConfig(): CompleteConfig {
  return {
    title: 'Mafl Home Page',
    lang: 'en',
    theme: 'system',
    checkUpdates: true,
    layout: {
      grid: {
        small: 2,
        medium: 2,
        large: 3,
        xlarge: 4,
      },
    },
    behaviour: {
      target: '_blank',
    },
    tags: [],
    services: [],
  }
}

function createTagMap(tags: Tag[]): TagMap {
  return tags.reduce((acc, tag) => {
    acc.set(tag.name, tag)

    return acc
  }, new Map())
}

let cachedConfig: CompleteConfig | null = null

/**
 * Load config from storage
 */
export async function loadConfig(): Promise<CompleteConfig> {
  const defaultConfig = getDefaultConfig()
  const storage = useStorage('data')

  const retries = 3
  const delay = 100

  for (let i = 0; i < retries; i++) {
    try {
      if (!await storage.hasItem(configFileName)) {
        throw new Error('Config not found')
      }

      const raw = await storage.getItem<string>(configFileName)
      const config = yaml.parse(raw || '') || {}
      const services: CompleteConfig['services'] = []
      const tags: TagMap = createTagMap(config.tags || [])

      configSchema.parse(config)

      if (Array.isArray(config.services)) {
        services.push({
          items: determineService(config.services, tags),
        })
      } else {
        const entries = Object.entries<DraftService[]>(config.services || [])

        for (const [title, items] of entries) {
          services.push({
            title,
            items: determineService(items, tags),
          })
        }
      }

      const finalConfig = defu({ ...config, services }, defaultConfig)
      cachedConfig = finalConfig

      return finalConfig
    } catch (e) {
      if (i === retries - 1) {
        logger.error(e)

        if (cachedConfig) {
          logger.warn('Failed to load new config, using cached version.')
          return cachedConfig
        }

        if (e instanceof Error) {
          defaultConfig.error = e.message
        }

        if (e instanceof ZodError) {
          defaultConfig.error = JSON.stringify(
            e.format(),
            (key, val) => (key === '_errors' && !val.length) ? undefined : val,
            ' ',
          )
        }
      } else {
        await new Promise(resolve => setTimeout(resolve, delay))
      }
    }
  }

  return defaultConfig
}

/**
 * Save config to memory storage
 */
export async function setConfig(config: CompleteConfig): Promise<void> {
  const storage = useStorage('main')

  await storage.setItem('config', config)
  await storage.setItem('services', extractServicesFromConfig(config))

  logger.success('Set "main" config')
}

/**
 * Get config from memory storage
 */
export async function getConfig(): Promise<CompleteConfig | null> {
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
export function extractServicesFromConfig(config: CompleteConfig): Record<string, Service> {
  return config.services.reduce<Record<string, Service>>((acc, group) => {
    for (const item of group.items) {
      acc[item.id] = item
    }

    return acc
  }, {})
}
