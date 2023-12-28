export default defineNitroPlugin(async (nitroApp) => {
  const localConfig = getLocalConfig()

  if (!localConfig) {
    console.error('Config not loaded!')
    return
  }

  // Provide full config to backend
  const storage = useStorage()
  await storage.setItem('services', extractServicesFromConfig(localConfig))

  // Provide safely config to frontend
  nitroApp.hooks.hook('site-config:init', ({ siteConfig }) => {
    siteConfig.push(extractSafelyConfig(localConfig))
  })
})
