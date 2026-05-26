import { ofetch } from 'ofetch'
import { env } from 'node:process'
import { useLogger } from '../utils/logger'

// Current version - update this during releases
const CURRENT_VERSION = '0.15.4'

export interface ReleasesLatest {
  url: string
  assets_url: string
  upload_url: string
  html_url: string
  id: number
  author: {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
  }
  node_id: string
  tag_name: string
  target_commitish: string
  name: string
  draft: boolean
  prerelease: boolean
  created_at: string
  published_at: string
  assets: Array<any>
  tarball_url: string
  zipball_url: string
  body: string
}

interface CachedResponse {
  data: {
    available: boolean
    version: string
  }
  timestamp: number
}

// Cache duration - 24 hours in milliseconds
const CACHE_DURATION = 24 * 60 * 60 * 1000

export default defineEventHandler(async () => {
  const storage = useStorage('updates')
  const logger = useLogger('updates')
  const now = Date.now()
  const config = await getConfig()

  if (env.DISABLE_UPDATE_CHECK === 'true' || config?.checkUpdates === false) {
    return {
      available: false,
      version: CURRENT_VERSION,
    }
  }

  // Get cached response from storage
  const cachedResponse = await storage.getItem<CachedResponse>('latest')

  // Return cached response if it's still valid
  if (cachedResponse && (now - cachedResponse.timestamp) < CACHE_DURATION) {
    logger.debug('Returning cached response:', cachedResponse.data)
    return cachedResponse.data
  } else {
    logger.debug('Fetching latest release:', cachedResponse ? 'cached expired' : 'not cached')
  }

  try {
    logger.info('Fetching latest release from GitHub')
    const latestReleases = await ofetch<ReleasesLatest>('https://api.github.com/repos/hywax/mafl/releases/latest')
    const latestVersion = latestReleases.tag_name.replace('v', '')

    const parseVersion = (version: string): number => Number.parseInt(version.replace(/\./g, ''), 10)
    const difference = parseVersion(latestVersion) - parseVersion(CURRENT_VERSION)

    const response = {
      available: difference > 0,
      version: latestVersion,
    }

    // Cache the response in storage
    await storage.setItem('latest', {
      data: response,
      timestamp: now,
    })

    return response
  } catch (error) {
    logger.error('Failed to fetch the latest release from GitHub API:', error)
    // If GitHub API fails, return cached response if available, otherwise return no update
    if (cachedResponse) {
      return cachedResponse.data
    }

    return {
      available: false,
      version: CURRENT_VERSION,
    }
  }
})
