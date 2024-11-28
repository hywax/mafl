import type { ConsolaOptions } from 'consola'
import { consola, createConsola } from 'consola'

export const logger = consola

export function useLogger(tag?: string, options: Partial<ConsolaOptions> = {}) {
  return tag ? createConsola(options).withTag(tag) : logger
}
