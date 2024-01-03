import currentPackage from '../../../package.json'

export function getVersion() {
  return currentPackage.version || '0.0.0'
}
