import type { UseWebSocketReturn } from '@vueuse/core'
import type { ReceivedMessage, ReceivedMessageMap, SendMessage, SendMessageMap } from '~/types'

export type WsClientReturn = Pick<UseWebSocketReturn<string>, 'open' | 'close' | 'status'> & {
  on: SendHook
  off: SendHook
  send: ReceiveHook
}
type SendHandler = <E extends SendMessage['event']>(data: Omit<SendMessageMap[E], 'event'>) => any

export type SendHook = <E extends SendMessage['event']>(event: E, handler: SendHandler) => void
export type ReceiveHook = <E extends ReceivedMessage['event']>(event: E, handler: (data: Omit<ReceivedMessageMap[E], 'event'>) => any) => void

function createEventMessage<E extends SendMessage['event'] | ReceivedMessage['event']>(event: E, data: Record<string, any> = {}): string {
  return JSON.stringify({ event, ...data })
}

export function wsClient(): WsClientReturn {
  const url = useRequestURL()
  const isSecure = url.protocol === 'https:'
  const endpoint = `${(isSecure ? 'wss://' : 'ws://') + url.host}/api/websocket`
  const sendHandlers = new Map<SendMessage['event'], Set<SendHandler>>()
  const { status, open, close, send: _send } = useWebSocket(endpoint, {
    heartbeat: {
      message: createEventMessage('ping'),
      interval: 30 * 1000,
    },
    autoReconnect: {
      delay: 5 * 1000,
    },
    onMessage(_, e) {
      const { event, ...data } = JSON.parse(e.data) as SendMessage

      sendHandlers.get(event)?.forEach((handler) => handler(data))
    },
  })

  const off: SendHook = (event, handler: SendHandler) => {
    if (sendHandlers.has(event)) {
      sendHandlers.get(event)?.delete(handler)
    }
  }

  const on: SendHook = (event, handler: SendHandler) => {
    if (!sendHandlers.has(event)) {
      sendHandlers.set(event, new Set())
    }

    sendHandlers.get(event)!.add(handler)
    tryOnScopeDispose(() => off(event, handler))
  }

  const send: ReceiveHook = (event, data) => {
    _send(createEventMessage(event, data))
  }

  return {
    status,
    open,
    close,
    send,
    on,
    off,
  }
}

export const useWebsocket = createSharedComposable(wsClient)
