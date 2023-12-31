import process from 'node:process'
import currentPackage from '~/package.json'

export default defineNitroPlugin(async () => {
  if (['prerender', 'development'].includes(process.env.NODE_ENV || '')) {
    return
  }

  try {
    const latestPackage = await $fetch<typeof currentPackage>('https://raw.githubusercontent.com/hywax/mafl/main/package.json', {
      parseResponse: (json) => JSON.parse(json),
    })

    const parseVersion = (version: string): number => Number.parseInt(version.replace(/\./g, ''), 10)
    const difference = parseVersion(latestPackage.version) - parseVersion(currentPackage.version)

    if (difference > 0) {
      return console.log(`⚠️ update available: ${latestPackage.version}`)
    }

    console.log('✅ mafl is up-to-date')
  } catch (_) {
    console.log('❌ failed to check for an update')
  }
})
