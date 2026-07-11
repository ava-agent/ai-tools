export function publicAsset(path, base = import.meta.env.BASE_URL) {
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  return `${normalizedBase}${path.replace(/^\/+/, '')}`
}
