import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { supabase } from '../lib/supabase.js'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const session = ref(null)
  const loading = ref(true)
  const error = ref(null)
  const showAuthModal = ref(false)

  const isAuthenticated = computed(() => !!user.value)
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
    } = supabase.auth.onAuthStateChange((_event, s) => {
      session.value = s
      user.value = s?.user || null
      // Clear stale errors on successful auth
      if (s?.user) error.value = null
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
    if (!supabase) return
    error.value = null
    const { error: e } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: { redirectTo: window.location.origin },
    })
    if (e) error.value = e.message
  }

  async function signInWithEmail(email, password) {
    if (!supabase) return
    error.value = null
    const { error: e } = await supabase.auth.signInWithPassword({ email, password })
    if (e) error.value = e.message
  }

  async function signUpWithEmail(email, password) {
    if (!supabase) return
    error.value = null
    const { error: e } = await supabase.auth.signUp({ email, password })
    if (e) error.value = e.message
  }

  async function signOut() {
    if (!supabase) return
    error.value = null
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
