import { createServer } from 'node:http'
import { createApp, toNodeListener } from 'h3'
import { WebSocketServer } from 'ws'
import type { WebSocket } from 'ws'

export type SubscribeCallback = (data: any) => void

export interface WSServer {
  on: (event: string, cb: SubscribeCallback) => void
  send: (event: string, data?: any) => void
  disconnect: () => void
}

export interface WSServerOptions {
  port: number
  name: string
  onConnection?: (connection: WebSocket) => any
}

const servers: Partial<Record<string, WSServer>> = {}

export function getWSServer(name: string): WSServer | null {
  return servers[name] || null
}

export function createWSServer(options: WSServerOptions): WSServer {
  const app = createApp()
  const server = createServer(toNodeListener(app)).listen(options.port)
  const wsServer = new WebSocketServer({ server })

  let connection: WebSocket | null = null
  const events: Record<string, SubscribeCallback[]> = {}

  wsServer.on('connection', (_connection: WebSocket) => {
    logger.info('WS user connected')

    connection = _connection

    connection.on('message', (raw: string) => {
      const { event, ...data } = JSON.parse(raw.toString())

      if (Object.hasOwn(events, event)) {
        events[event].forEach((cb) => cb(data))
      }
    })

    options.onConnection?.(_connection)
  })

  const send = (event: string, data?: any) => {
    const raw = JSON.stringify({
      event,
      ...data,
    })

    logger.info(`WS send: ${raw}`)
    connection?.send(raw)
  }

  const subscribe = (event: string, cb: SubscribeCallback) => {
    if (!Object.hasOwn(events, event)) {
      events[event] = []
    }

    events[event].push(cb)
  }

  const disconnect = () => {
    connection?.close()
  }

  servers[options.name] = { send, disconnect, on: subscribe }

  return getWSServer(options.name)!
}
