import process from 'node:process'

export default defineNitroPlugin((nitroApp) => {
  if (process.env.NODE_ENV === 'prerender') {
    return
  }

  const socket = createWSServer({
    name: 'mafl',
    port: 3030,
  })

  socket.on('ping', () => {
    socket.send('pong', {})
  })

  nitroApp.hooks.hook('close', () => {
    socket.disconnect()
  })
})
