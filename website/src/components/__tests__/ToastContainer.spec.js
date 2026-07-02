import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { createPinia, setActivePinia } from 'pinia'
import ToastContainer from '../ToastContainer.vue'
import { useUIStore } from '../../stores/ui'

describe('ToastContainer', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
    setActivePinia(createPinia())
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('keeps long mobile toasts inside the viewport and above the safe area', async () => {
    mount(ToastContainer)
    const uiStore = useUIStore()

    uiStore.toasts.push({
      id: 'long-toast',
      type: 'info',
      message: '这是一条很长很长的通知消息，用来验证窄屏设备上不会横向溢出，也不会贴住底部手势区域。',
    })
    await nextTick()

    const region = document.body.querySelector('[data-testid="toast-region"]')
    expect(region).toBeTruthy()
    expect(region.className).toContain('left-3')
    expect(region.className).toContain('right-3')
    expect(region.className).toContain('bottom-[calc(env(safe-area-inset-bottom)+0.75rem)]')
    expect(region.className).toContain('sm:left-auto')
    expect(region.className).toContain('sm:right-6')
    expect(region.className).toContain('sm:bottom-6')

    const surface = document.body.querySelector('[data-testid="toast-surface"]')
    expect(surface).toBeTruthy()
    expect(surface.className).toContain('w-full')
    expect(surface.className).toContain('max-w-full')

    const message = document.body.querySelector('[data-testid="toast-message"]')
    expect(message).toBeTruthy()
    expect(message.className).toContain('min-w-0')
    expect(message.className).toContain('break-words')
  })
})
