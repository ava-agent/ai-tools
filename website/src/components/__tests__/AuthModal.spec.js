import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { nextTick } from 'vue'
import AuthModal from '../AuthModal.vue'
import { useAuthStore } from '../../stores/auth'

function flushDom() {
  return new Promise(resolve => setTimeout(resolve, 0))
}

describe('AuthModal accessibility', () => {
  beforeEach(() => {
    document.body.innerHTML = '<button id="modal-opener">Open auth</button>'
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  async function mountAndOpen({ authAvailable = true } = {}) {
    const opener = document.getElementById('modal-opener')
    opener.focus()
    const pinia = createPinia()
    setActivePinia(pinia)

    const wrapper = mount(AuthModal, {
      props: { authAvailable },
      attachTo: document.body,
      global: {
        plugins: [pinia],
      },
    })

    const authStore = useAuthStore()
    authStore.openAuthModal()
    await nextTick()
    await flushDom()

    return { wrapper, authStore, opener }
  }

  it('moves focus into the dialog and restores it when closed', async () => {
    const { wrapper, opener } = await mountAndOpen()

    const closeButton = document.querySelector('[data-testid="auth-modal-close"]')
    expect(closeButton).toBeTruthy()
    expect(document.activeElement).toBe(closeButton)

    const dialog = document.querySelector('[role="dialog"]')
    expect(dialog?.className).toContain('max-h-[calc(100dvh-2rem)]')
    expect(dialog?.className).toContain('overflow-y-auto')

    closeButton.click()
    await nextTick()
    await flushDom()

    expect(document.activeElement).toBe(opener)
  })

  it('shows a non-interactive local-mode message when auth is unavailable', async () => {
    await mountAndOpen({ authAvailable: false })

    const status = document.querySelector('[data-testid="auth-modal-unavailable"]')
    expect(status?.getAttribute('role')).toBe('status')
    expect(status?.textContent).toContain('浏览、筛选、对比和本地学习进度')
    expect(document.querySelector('[data-testid="auth-modal-github"]')).toBeNull()
    expect(document.querySelector('[data-testid="auth-modal-email"]')).toBeNull()
    expect(document.querySelector('[data-testid="auth-modal-submit"]')).toBeNull()
  })

  it('closes when the visible backdrop is clicked', async () => {
    const { authStore, opener } = await mountAndOpen()
    const backdrop = document.querySelector('[data-testid="auth-modal-backdrop"]')

    backdrop.click()
    await nextTick()
    await flushDom()

    expect(authStore.showAuthModal).toBe(false)
    expect(document.activeElement).toBe(opener)
  })

  it('keeps tab focus inside the dialog', async () => {
    await mountAndOpen()

    const closeButton = document.querySelector('[data-testid="auth-modal-close"]')
    const toggleButton = document.querySelector('[data-testid="auth-modal-toggle"]')
    expect(closeButton).toBeTruthy()
    expect(toggleButton).toBeTruthy()

    toggleButton.focus()
    toggleButton.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'Tab',
      bubbles: true,
      cancelable: true,
    }))

    expect(document.activeElement).toBe(closeButton)

    closeButton.focus()
    closeButton.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'Tab',
      shiftKey: true,
      bubbles: true,
      cancelable: true,
    }))

    expect(document.activeElement).toBe(toggleButton)
  })

  it('announces error and success feedback and exposes busy state', async () => {
    const { authStore } = await mountAndOpen()
    const emailInput = document.querySelector('[data-testid="auth-modal-email"]')
    const passwordInput = document.querySelector('[data-testid="auth-modal-password"]')
    const submitButton = document.querySelector('[data-testid="auth-modal-submit"]')

    authStore.error = '邮箱或密码错误'
    await nextTick()

    const errorMessage = document.querySelector('[data-testid="auth-modal-error"]')
    expect(errorMessage?.getAttribute('role')).toBe('alert')
    expect(errorMessage?.getAttribute('aria-live')).toBe('assertive')
    expect(submitButton?.getAttribute('aria-busy')).toBe('false')

    let resolveSignIn
    authStore.error = null
    authStore.signInWithEmail = vi.fn(() => new Promise(resolve => {
      resolveSignIn = resolve
    }))

    emailInput.value = 'user@example.com'
    emailInput.dispatchEvent(new Event('input', { bubbles: true }))
    passwordInput.value = 'password1'
    passwordInput.dispatchEvent(new Event('input', { bubbles: true }))
    document.querySelector('form').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))
    await nextTick()

    expect(submitButton?.getAttribute('aria-busy')).toBe('true')

    resolveSignIn()
    await flushDom()
    await nextTick()

    expect(submitButton?.getAttribute('aria-busy')).toBe('false')

    authStore.signUpWithEmail = vi.fn(() => Promise.resolve())
    document.querySelector('[data-testid="auth-modal-toggle"]').click()
    await nextTick()

    emailInput.value = 'new@example.com'
    emailInput.dispatchEvent(new Event('input', { bubbles: true }))
    passwordInput.value = 'password1'
    passwordInput.dispatchEvent(new Event('input', { bubbles: true }))
    document.querySelector('form').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))
    await flushDom()
    await nextTick()

    const successMessage = document.querySelector('[data-testid="auth-modal-success"]')
    expect(successMessage?.getAttribute('role')).toBe('status')
    expect(successMessage?.getAttribute('aria-live')).toBe('polite')
  })

  it('recovers from rejected authentication requests', async () => {
    const { authStore } = await mountAndOpen()
    authStore.signInWithEmail = vi.fn(() => Promise.reject(new Error('network down')))

    const emailInput = document.querySelector('[data-testid="auth-modal-email"]')
    const passwordInput = document.querySelector('[data-testid="auth-modal-password"]')
    const submitButton = document.querySelector('[data-testid="auth-modal-submit"]')

    emailInput.value = 'user@example.com'
    emailInput.dispatchEvent(new Event('input', { bubbles: true }))
    passwordInput.value = 'password1'
    passwordInput.dispatchEvent(new Event('input', { bubbles: true }))
    document.querySelector('form').dispatchEvent(
      new Event('submit', { bubbles: true, cancelable: true })
    )

    await flushDom()
    await nextTick()

    expect(submitButton?.getAttribute('aria-busy')).toBe('false')
    expect(document.querySelector('[data-testid="auth-modal-error"]')?.textContent).toContain(
      '登录请求失败，请检查网络后重试'
    )
  })
})
