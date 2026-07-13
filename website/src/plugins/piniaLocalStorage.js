/**
 * Pinia plugin: automatic localStorage hydration + persistence
 *
 * Usage:
 *   pinia.use(createLocalStoragePlugin({ stores: ['gamification', 'achievements'] }))
 */
export function createLocalStoragePlugin({
  stores = [],
  prefix = 'ai-tools-',
  transientKeys = {}
} = {}) {
  const debounceTimers = {}

  return ({ store }) => {
    const storeId = store.$id
    if (!stores.includes(storeId)) return

    const storageKey = `${prefix}${storeId}`
    const omittedKeys = new Set(transientKeys[storeId] || [])
    const persistedDefaults = omitStateKeys(store.$state, omittedKeys)

    // Hydrate: read from localStorage on store creation
    let saved = null
    try {
      saved = localStorage.getItem(storageKey)
    } catch {
      // Storage may be blocked by browser privacy settings.
    }
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        const sanitized = sanitizePersistedState(
          omitStateKeys(parsed, omittedKeys),
          persistedDefaults
        )
        if (sanitized) {
          store.$patch(sanitized)
        } else {
          safelyRemove(storageKey)
        }
      } catch {
        // corrupted data — remove it
        safelyRemove(storageKey)
      }
    }

    // Persist: write to localStorage on state change (debounced)
    store.$subscribe((_mutation, state) => {
      clearTimeout(debounceTimers[storeId])
      debounceTimers[storeId] = setTimeout(() => {
        try {
          localStorage.setItem(storageKey, JSON.stringify(omitStateKeys(state, omittedKeys)))
        } catch {
          // localStorage full or unavailable — silently ignore
        }
      }, 100)
    })
  }
}

function omitStateKeys(state, omittedKeys) {
  if (!isPlainObject(state)) return state
  return Object.fromEntries(
    Object.entries(state).filter(([key]) => !omittedKeys.has(key))
  )
}

function isPlainObject(value) {
  return Boolean(value && typeof value === 'object' && !Array.isArray(value))
}

function sanitizeValue(value, fallback) {
  if (Array.isArray(fallback)) {
    return Array.isArray(value) ? value : fallback
  }

  if (fallback === null) {
    return value === null || ['string', 'number', 'boolean'].includes(typeof value)
      ? value
      : fallback
  }

  if (typeof fallback === 'number') {
    return typeof value === 'number' && Number.isFinite(value) ? value : fallback
  }

  if (typeof fallback === 'string' || typeof fallback === 'boolean') {
    return typeof value === typeof fallback ? value : fallback
  }

  if (isPlainObject(fallback)) {
    if (!isPlainObject(value)) return fallback
    if (Object.keys(fallback).length === 0) return { ...value }
    return sanitizePersistedState(value, fallback)
  }

  return fallback
}

export function sanitizePersistedState(savedState, defaultState) {
  if (!isPlainObject(savedState) || !isPlainObject(defaultState)) return null

  const sanitized = {}
  for (const [key, fallback] of Object.entries(defaultState)) {
    if (!Object.prototype.hasOwnProperty.call(savedState, key)) continue
    sanitized[key] = sanitizeValue(savedState[key], fallback)
  }
  return sanitized
}

function safelyRemove(storageKey) {
  try {
    localStorage.removeItem(storageKey)
  } catch {
    // Storage may remain unavailable; the in-memory defaults are still safe.
  }
}
