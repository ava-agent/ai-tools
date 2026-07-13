import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { createMemoryHistory, createRouter } from 'vue-router'
import { nextTick } from 'vue'
import Home from '../Home.vue'
import { useCatalogStore } from '../../stores/catalog'

vi.mock('/hero-network.mp4', () => ({
  default: '/hero-network.mp4',
}))

function makeRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/tools', name: 'tools', component: Home },
      { path: '/tool/:id', name: 'tool-detail', component: { template: '<div />' } },
    ],
  })
}

async function mountHomeAt(path) {
  sessionStorage.clear()
  const pinia = createPinia()
  setActivePinia(pinia)
  const router = makeRouter()
  await router.push(path)
  await router.isReady()

  const wrapper = mount(Home, {
    global: {
      plugins: [pinia, router],
      stubs: {
        Hero: true,
        SearchBar: true,
        DecisionShortlist: {
          template: '<section data-testid="decision-shortlist-stub" />',
          props: ['tools'],
        },
        ToolGrid: {
          template: '<section data-testid="tool-grid-stub" />',
          props: ['tools'],
        },
        ToolLogo: true,
        IntroVideo: true,
      },
    },
  })
  await nextTick()

  return { wrapper, store: useCatalogStore() }
}

describe('Home', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('hydrates the scenario filter from the route query', async () => {
    const { store } = await mountHomeAt('/tools?scenario=complex-refactor')

    expect(store.selectedScenario).toBe('complex-refactor')
  })

  it('keeps the replay intro control in the page flow', async () => {
    const { wrapper } = await mountHomeAt('/tools')

    const content = wrapper.get('[data-testid="home-content"]')
    const replayButton = content.get('[data-testid="replay-intro"]')
    const shortlist = content.get('[data-testid="decision-shortlist-stub"]')

    expect(content.classes()).toContain('home-content-safe-bottom')
    expect(shortlist.exists()).toBe(true)
    expect(replayButton.classes()).toEqual(expect.arrayContaining(['inline-flex', 'min-h-11']))
    expect(replayButton.classes()).not.toContain('fixed')
    expect(replayButton.attributes('aria-label')).toBe('重看演示视频')
  })
})
