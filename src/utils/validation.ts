export function isUrl(ur: string) {
  try {
    const _url = new URL(ur)
    return true
  } catch (_) {
    return false
  }
}
