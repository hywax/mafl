import currentPackage from '~~/package.json'

export default defineEventHandler(async () => {
  const latestReleases = await $fetch<typeof currentPackage>('https://api.github.com/repos/hywax/mafl/releases/latest', {
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
