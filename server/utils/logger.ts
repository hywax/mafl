import { consola, createConsola } from 'consola'
import type { ConsolaOptions } from 'consola'

export const logger = consola

export function useLogger(tag?: string, options: Partial<ConsolaOptions> = {}) {
  return tag ? createConsola(options).withTag(tag) : logger
}
