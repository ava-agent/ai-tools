import { ref, watch } from 'vue'

/**
 * Reactive localStorage composable
 * @param {string} key - localStorage key
 * @param {*} defaultValue - fallback if key doesn't exist or parse fails
 * @returns {import('vue').Ref} reactive ref synced with localStorage
 */
export function useLocalStorage(key, defaultValue) {
  const stored = localStorage.getItem(key)
  let initial = defaultValue

  if (stored !== null) {
    try {
      initial = JSON.parse(stored)
    } catch {
      // corrupted data — fall back to default
      localStorage.removeItem(key)
    }
  }

  const data = ref(initial)

  watch(
    data,
    (val) => {
      if (val === null || val === undefined) {
        localStorage.removeItem(key)
      } else {
        localStorage.setItem(key, JSON.stringify(val))
      }
    },
    { deep: true }
  )

  return data
}
