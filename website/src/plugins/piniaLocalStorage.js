/**
 * Pinia plugin: automatic localStorage hydration + persistence
 *
 * Usage:
 *   pinia.use(createLocalStoragePlugin({ stores: ['gamification', 'achievements'] }))
 */
export function createLocalStoragePlugin({ stores = [], prefix = 'ai-tools-' } = {}) {
  const debounceTimers = {}

  return ({ store }) => {
    const storeId = store.$id
    if (!stores.includes(storeId)) return

    const storageKey = `${prefix}${storeId}`

    // Hydrate: read from localStorage on store creation
    const saved = localStorage.getItem(storageKey)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        store.$patch(parsed)
      } catch {
        // corrupted data — remove it
        localStorage.removeItem(storageKey)
      }
    }

    // Persist: write to localStorage on state change (debounced)
    store.$subscribe((_mutation, state) => {
      clearTimeout(debounceTimers[storeId])
      debounceTimers[storeId] = setTimeout(() => {
        try {
          localStorage.setItem(storageKey, JSON.stringify(state))
        } catch {
          // localStorage full or unavailable — silently ignore
        }
      }, 100)
    })
  }
}
