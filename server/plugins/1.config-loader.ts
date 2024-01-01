export default defineNitroPlugin(async () => {
  const localConfig = await loadLocalConfig()

  if (!localConfig) {
    logger.error('Config not loaded!')
    return
  }

  const storage = useStorage('main')
  await storage.setItem('config', localConfig)
  await storage.setItem('services', extractServicesFromConfig(localConfig))
})
