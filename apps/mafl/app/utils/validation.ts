export function isUrl(ur: string) {
  try {
    const _url = new URL(ur)
    return true
  } catch (_) {
    console.error('Invalid URL:', _)
  }

  return false
}
