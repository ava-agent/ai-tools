import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { isSupabaseConfigured } from '../../lib/supabase'
import { getAuthRedirectUrl, useAuthStore } from '../auth'

describe('auth store without a configured backend', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it.skipIf(isSupabaseConfigured())('reports unavailable service for every user-triggered action', async () => {
    const authStore = useAuthStore()
    const actions = [
      () => authStore.signInWithGitHub(),
      () => authStore.signInWithEmail('user@example.com', 'password1'),
      () => authStore.signUpWithEmail('user@example.com', 'password1'),
      () => authStore.signOut()
    ]

    for (const action of actions) {
      authStore.error = null
      await action()
      expect(authStore.error).toBe('账户与云同步暂未开放，本地浏览功能仍可使用')
    }
    expect(authStore.isAuthAvailable).toBe(false)
    expect(authStore.unavailableReason).toBe('not_configured')
  })

  it('constructs OAuth callbacks with the active deployment base path', () => {
    expect(getAuthRedirectUrl('https://aitools.rxcloud.group', '/')).toBe(
      'https://aitools.rxcloud.group/'
    )
    expect(getAuthRedirectUrl('https://ava-agent.github.io', '/ai-tools/')).toBe(
      'https://ava-agent.github.io/ai-tools/'
    )
  })
})
