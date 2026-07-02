import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import QuickEntryCards from '../QuickEntryCards.vue'

function mockReducedMotion() {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: query === '(prefers-reduced-motion: reduce)',
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))
}

async function mountQuickEntryCards() {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', name: 'landing', component: { template: '<div />' } },
      { path: '/tools', name: 'tools', component: { template: '<div />' } },
      { path: '/comparison', name: 'comparison', component: { template: '<div />' } },
      { path: '/workflows', name: 'workflows', component: { template: '<div />' } },
    ],
  })
  router.push('/')
  await router.isReady()

  return mount(QuickEntryCards, {
    global: {
      plugins: [router],
    },
  })
}

describe('QuickEntryCards', () => {
  beforeEach(() => {
    mockReducedMotion()
  })

  it('defers below-the-fold entry illustrations', async () => {
    const wrapper = await mountQuickEntryCards()
    const images = wrapper.findAll('.entry-card img')

    expect(images).toHaveLength(3)
    images.forEach((image) => {
      expect(image.attributes('loading')).toBe('lazy')
      expect(image.attributes('decoding')).toBe('async')
    })
  })
})
