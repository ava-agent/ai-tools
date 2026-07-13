import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import NetworkStatus from '../NetworkStatus.vue'
import { useUIStore } from '../../stores/ui'

describe('NetworkStatus', () => {
  let online = true

  beforeEach(() => {
    setActivePinia(createPinia())
    online = true
    vi.spyOn(window.navigator, 'onLine', 'get').mockImplementation(() => online)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('shows a persistent status message while offline', async () => {
    const wrapper = mount(NetworkStatus)

    online = false
    window.dispatchEvent(new Event('offline'))
    await wrapper.vm.$nextTick()

    const status = wrapper.get('[data-testid="network-status"]')
    expect(status.attributes('role')).toBe('status')
    expect(status.text()).toContain('当前处于离线状态')
    expect(status.text()).toContain('登录、同步和社区互动')

    wrapper.unmount()
  })

  it('dismisses the message and confirms recovery when the network returns', async () => {
    online = false
    const uiStore = useUIStore()
    const wrapper = mount(NetworkStatus)

    expect(wrapper.find('[data-testid="network-status"]').exists()).toBe(true)

    online = true
    window.dispatchEvent(new Event('online'))
    await wrapper.vm.$nextTick()

    expect(wrapper.find('[data-testid="network-status"]').exists()).toBe(false)
    expect(uiStore.toasts).toEqual([
      expect.objectContaining({ message: '网络连接已恢复', type: 'success' })
    ])

    wrapper.unmount()
  })
})
