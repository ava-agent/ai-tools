export function resolvePublicAssetPath(path, baseUrl = import.meta.env.BASE_URL) {
  if (!path) return path
  const value = String(path)
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(value)) return value

  const normalizedBase = String(baseUrl || '/').replace(/^\/+|\/+$/g, '')
  const prefix = normalizedBase ? `/${normalizedBase}/` : '/'
  return `${prefix}${value.replace(/^(?:\.\/|\/)+/, '')}`
}
