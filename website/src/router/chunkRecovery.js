const CHUNK_ERROR_PATTERNS = [
  /failed to fetch dynamically imported module/i,
  /error loading dynamically imported module/i,
  /importing a module script failed/i,
  /unable to preload css for/i,
  /loading chunk .* failed/i,
]

export function isChunkLoadError(error) {
  if (error?.name === 'ChunkLoadError') return true
  const message = String(error?.message ?? error ?? '')
  return CHUNK_ERROR_PATTERNS.some((pattern) => pattern.test(message))
}

export function getChunkReloadKey(baseUrl = '/') {
  return `ai-tools:chunk-reload:v1:${baseUrl}`
}

export function installChunkRecovery(
  router,
  {
    baseUrl = import.meta.env.BASE_URL,
    storage = window.sessionStorage,
    reload = () => window.location.reload(),
    isOnline = () => navigator.onLine !== false,
    getHref = () => window.location.href,
    now = () => Date.now(),
  } = {},
) {
  const reloadKey = getChunkReloadKey(baseUrl)

  router.onError((error, to) => {
    if (!isChunkLoadError(error) || !isOnline()) return

    try {
      if (storage.getItem(reloadKey)) return
      storage.setItem(
        reloadKey,
        JSON.stringify({ route: to?.fullPath || null, href: getHref(), at: now() }),
      )
    } catch {
      // Without a durable sentinel an automatic reload could loop forever.
      return
    }

    reload()
  })

  router.afterEach((_to, _from, failure) => {
    if (failure) return
    try {
      storage.removeItem(reloadKey)
    } catch {
      // Recovery remains optional when session storage is unavailable.
    }
  })

  return reloadKey
}
