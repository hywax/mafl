async function updateConfig(ws: WSServer): Promise<void> {
  const config = await loadConfig()
  await setConfig(config)
  ws.send('config:update', {})
}

export default defineNitroPlugin(async (nitroApp) => {
  const storage = useStorage('data')
  const ws = getWSServer('mafl')!

  updateConfig(ws)

  storage.watch(async (event, key) => {
    if (key === `data:${configFileName}`) {
      logger.info(`Config ${event}, reloading...`)
      await updateConfig(ws)
    }
  })

  nitroApp.hooks.hook('close', async () => {
    await storage.unwatch()
  })
})
