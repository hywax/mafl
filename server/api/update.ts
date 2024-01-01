import currentPackage from '~/package.json'

export default defineEventHandler(async () => {
  const latestPackage = await $fetch<typeof currentPackage>('https://raw.githubusercontent.com/hywax/mafl/main/package.json', {
    parseResponse: (json) => JSON.parse(json),
  })

  const parseVersion = (version: string): number => Number.parseInt(version.replace(/\./g, ''), 10)
  const difference = parseVersion(latestPackage.version) - parseVersion(currentPackage.version)

  return {
    available: difference > 0,
    version: latestPackage.version,
  }
})
