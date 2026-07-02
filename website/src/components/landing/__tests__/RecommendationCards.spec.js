import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { createMemoryHistory, createRouter } from 'vue-router'
import RecommendationCards from '../RecommendationCards.vue'
import { recommendations } from '../../../data/recommendations'

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

async function mountRecommendationCards() {
  const pinia = createPinia()
  setActivePinia(pinia)

  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', name: 'landing', component: { template: '<div />' } },
      { path: '/tools', name: 'tools', component: { template: '<div />' } },
    ],
  })
  router.push('/')
  await router.isReady()

  const wrapper = mount(RecommendationCards, {
    global: {
      plugins: [pinia, router],
      stubs: {
        ToolLogo: {
          template: '<span class="tool-logo-stub">{{ toolName }}</span>',
          props: ['toolId', 'toolName'],
        },
      },
    },
  })

  return wrapper
}

describe('RecommendationCards', () => {
  beforeEach(() => {
    mockReducedMotion()
  })

  it('turns every recommendation card into a keyboard-focusable scenario link', async () => {
    const wrapper = await mountRecommendationCards()

    const links = wrapper.findAll('a.rec-card')

    expect(links).toHaveLength(recommendations.length)
    recommendations.forEach((rec, index) => {
      expect(links[index].attributes('href')).toContain(`/tools?scenario=${rec.id}`)
      expect(links[index].attributes('aria-label')).toContain(rec.label)
      expect(links[index].text()).toContain(rec.insight)
    })
  })
})
