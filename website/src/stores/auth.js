import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { supabase } from '../lib/supabase.js'

const AUTH_UNAVAILABLE_MESSAGE = '账户与云同步暂未开放，本地浏览功能仍可使用'
const AUTH_RETURN_PATH_KEY = 'ai-tools-auth-return-path'
const LEGACY_AUTH_RETURN_HASH_KEY = 'ai-tools-auth-return-hash'
const AUTH_RETURN_MAX_AGE_MS = 15 * 60 * 1000

export function getAuthRedirectUrl(origin, baseUrl = '/') {
  return new URL(baseUrl, origin).href
}

function rememberAuthReturnPath() {
  const returnPath = `${window.location.pathname}${window.location.search}${window.location.hash}`
  try {
    sessionStorage.setItem(AUTH_RETURN_PATH_KEY, JSON.stringify({
      path: returnPath,
      createdAt: Date.now()
    }))
  } catch {
    // Route restoration is optional when session storage is unavailable.
  }
}

function restoreAuthReturnPath() {
  let savedReturn = null
  let legacyHash = null
  try {
    savedReturn = sessionStorage.getItem(AUTH_RETURN_PATH_KEY)
    legacyHash = sessionStorage.getItem(LEGACY_AUTH_RETURN_HASH_KEY)
    sessionStorage.removeItem(AUTH_RETURN_PATH_KEY)
    sessionStorage.removeItem(LEGACY_AUTH_RETURN_HASH_KEY)
  } catch {
    return
  }

  let returnPath = null
  if (savedReturn) {
    try {
      const parsed = JSON.parse(savedReturn)
      if (Date.now() - parsed.createdAt <= AUTH_RETURN_MAX_AGE_MS) {
        returnPath = parsed.path
      }
    } catch {
      // Ignore stale pre-migration values.
    }
  }
  if (!returnPath && legacyHash?.startsWith('#/')) {
    const base = import.meta.env.BASE_URL.replace(/\/$/, '')
    returnPath = `${base}/${legacyHash.slice(2)}`
  }

  const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`
  if (
    returnPath?.startsWith(import.meta.env.BASE_URL) &&
    !returnPath.startsWith('//') &&
    currentPath !== returnPath
  ) {
    window.location.assign(returnPath)
  }
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const session = ref(null)
  const loading = ref(true)
  const error = ref(null)
  const showAuthModal = ref(false)

  const isAuthenticated = computed(() => !!user.value)
  const isAuthAvailable = computed(() => Boolean(supabase))
  const unavailableReason = computed(() => (supabase ? null : 'not_configured'))
  const userId = computed(() => user.value?.id || null)
  const displayName = computed(() => {
    if (!user.value) return '访客'
    return (
      user.value.user_metadata?.full_name ||
      user.value.user_metadata?.name ||
      user.value.email?.split('@')[0] ||
      '用户'
    )
  })
  const avatarUrl = computed(() => {
    const url = user.value?.user_metadata?.avatar_url || null
    if (!url) return null
    // Only allow https URLs for security
    try {
      const parsed = new URL(url)
      if (parsed.protocol !== 'https:') return null
      return url
    } catch {
      return null
    }
  })

  // Track subscription for cleanup
  let _authSubscription = null

  async function initialize() {
    if (!supabase) {
      loading.value = false
      return
    }

    // Guard against double-initialization (HMR)
    if (_authSubscription) {
      _authSubscription.unsubscribe()
      _authSubscription = null
    }

    // Register listener BEFORE getSession so OAuth redirects are always caught
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, s) => {
      session.value = s
      user.value = s?.user || null
      // Clear stale errors on successful auth
      if (s?.user) {
        error.value = null
        if (event === 'SIGNED_IN') restoreAuthReturnPath()
      }
    })
    _authSubscription = subscription

    try {
      const {
        data: { session: s },
      } = await supabase.auth.getSession()
      session.value = s
      user.value = s?.user || null
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  async function signInWithGitHub() {
    error.value = null
    if (!supabase) {
      error.value = AUTH_UNAVAILABLE_MESSAGE
      return
    }
    rememberAuthReturnPath()
    const { error: e } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: getAuthRedirectUrl(window.location.origin, import.meta.env.BASE_URL),
      },
    })
    if (e) error.value = e.message
  }

  async function signInWithEmail(email, password) {
    error.value = null
    if (!supabase) {
      error.value = AUTH_UNAVAILABLE_MESSAGE
      return
    }
    const { error: e } = await supabase.auth.signInWithPassword({ email, password })
    if (e) error.value = e.message
  }

  async function signUpWithEmail(email, password) {
    error.value = null
    if (!supabase) {
      error.value = AUTH_UNAVAILABLE_MESSAGE
      return
    }
    const { error: e } = await supabase.auth.signUp({ email, password })
    if (e) error.value = e.message
  }

  async function signOut() {
    error.value = null
    if (!supabase) {
      error.value = AUTH_UNAVAILABLE_MESSAGE
      return
    }
    const { error: e } = await supabase.auth.signOut()
    if (e) {
      error.value = e.message
      return
    }
    user.value = null
    session.value = null
  }

  function openAuthModal() {
    showAuthModal.value = true
  }

  function closeAuthModal() {
    showAuthModal.value = false
    error.value = null
  }

  function cleanup() {
    _authSubscription?.unsubscribe()
    _authSubscription = null
  }

  return {
    user,
    session,
    loading,
    error,
    showAuthModal,
    isAuthenticated,
    isAuthAvailable,
    unavailableReason,
    userId,
    displayName,
    avatarUrl,
    initialize,
    signInWithGitHub,
    signInWithEmail,
    signUpWithEmail,
    signOut,
    openAuthModal,
    closeAuthModal,
    cleanup,
  }
})
