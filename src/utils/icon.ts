const ABSOLUTE_URL_PATTERN = /^[a-z][a-z\d+\-.]*:/i

export function normalizeIconUrl(url?: string): string | undefined {
  if (!url || url.startsWith('/') || url.startsWith('#') || ABSOLUTE_URL_PATTERN.test(url)) {
    return url
  }

  return `/${url.replace(/^\.?\//, '')}`
}
