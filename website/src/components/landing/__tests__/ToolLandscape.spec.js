import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { createMemoryHistory, createRouter } from 'vue-router'
import ToolLandscape from '../ToolLandscape.vue'

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

async function mountToolLandscape() {
  const pinia = createPinia()
  setActivePinia(pinia)

  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', name: 'landing', component: { template: '<div />' } },
      { path: '/tools/:id', name: 'tool-detail', component: { template: '<div />' } },
    ],
  })
  router.push('/')
  await router.isReady()

  return mount(ToolLandscape, {
    global: {
      plugins: [pinia, router],
      stubs: {
        ToolLogo: {
          template: '<span class="tool-logo-stub">{{ toolName }}</span>',
          props: ['toolId', 'toolName', 'size'],
        },
      },
    },
  })
}

describe('ToolLandscape', () => {
  beforeEach(() => {
    mockReducedMotion()
  })

  it('makes bubble tooltips available to keyboard focus', async () => {
    const wrapper = await mountToolLandscape()
    const firstBubble = wrapper.get('a.tool-bubble')
    const tooltipId = firstBubble.attributes('aria-describedby')

    expect(firstBubble.attributes('aria-label')).toContain('查看')
    expect(firstBubble.attributes('aria-label')).toContain('详情')
    expect(tooltipId).toMatch(/^tool-bubble-tip-/)

    const tooltip = wrapper.get(`#${tooltipId}`)
    expect(tooltip.classes()).toContain('group-focus-visible:opacity-100')
    expect(tooltip.classes()).toContain('group-focus-visible:scale-100')
  })
})
