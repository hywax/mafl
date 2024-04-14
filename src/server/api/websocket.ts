const logger = useLogger('websocket')

export default defineWebSocketHandler({
  async open(peer) {
    logger.info('New peer', peer)

    const storage = useStorage('data')
    await storage.watch(async (_, key) => {
      if (key !== `data:${configFileName}`) {
        return
      }

      await runTask('config:update')
      peer.send({ event: 'config:update' })
    })
  },
  async message(peer, message) {
    const { event } = JSON.parse(message as unknown as string)

    if (event === 'ping') {
      peer.send({ event: 'pong' })
    }
  },
})
