import fs from 'node:fs'
import crypto from 'node:crypto'
import yaml from 'yaml'
import type { BaseService, Config } from '~/types'

type draftService = Omit<BaseService, 'id'>

function determineServiceId(items: draftService[]): BaseService[] {
  return items.map((item) => ({
    id: crypto.randomUUID(),
    ...item,
  }))
}

export function getLocalConfig(): Config | null {
  try {
    if (!fs.existsSync('assets/config.yaml')) {
      return null
    }

    const config = yaml.parse(fs.readFileSync('assets/config.yaml', 'utf8')) || {}
    const services: Config['services'] = []

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

    return {
      ...config,
      services,
    }
  } catch (e) {
    // ...
  }

  return null
}

/**
 * Safely retrieves a list of services for frontend.
 * Omit "secrets" fields.
 */
export function extractSafelyConfig(config: Config) {
  return JSON.parse(JSON.stringify(
    config, (key, val) => key === 'secrets' ? undefined : val,
  ))
}

/**
 * Create Map services
 */
export function extractServicesFromConfig(config: Config): Record<string, BaseService> {
  return config.services.reduce<Record<string, BaseService>>((acc, group) => {
    for (const item of group.items) {
      acc[item.id] = item
    }

    return acc
  }, {})
}
