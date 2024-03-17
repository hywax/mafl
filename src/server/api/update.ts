import currentPackage from '~~/package.json'

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

export default defineEventHandler(async () => {
  const latestReleases = await $fetch<ReleasesLatest>('https://api.github.com/repos/hywax/mafl/releases/latest', {
    parseResponse: (json) => JSON.parse(json),
  })
  const latestVersion = latestReleases.tag_name.replace('v', '')

  const parseVersion = (version: string): number => Number.parseInt(version.replace(/\./g, ''), 10)
  const difference = parseVersion(latestVersion) - parseVersion(currentPackage.version)

  return {
    available: difference > 0,
    version: latestVersion,
  }
})
