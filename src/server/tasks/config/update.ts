export default defineTask({
  meta: {
    name: 'config:update',
  },
  async run() {
    const config = await loadConfig()
    await setConfig(config)
  },
})
