import { createRequire } from 'node:module'

export function getVersion() {
  const require = createRequire(import.meta.url)
  const currentPackage = require('../../../../package.json')

  return currentPackage.version || '0.0.0'
}
