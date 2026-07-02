import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { createMemoryHistory, createRouter } from 'vue-router'
import { nextTick } from 'vue'
import Home from '../Home.vue'
import { useToolsStore } from '../../stores/tools'

vi.mock('/hero-network.mp4', () => ({
  default: '/hero-network.mp4',
}))

function makeRouter(path = '/tools') {
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

  return { wrapper, store: useToolsStore() }
}

describe('Home', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('hydrates the scenario filter from the route query', async () => {
    const { store } = await mountHomeAt('/tools?scenario=complex-refactor')

    expect(store.selectedScenario).toBe('complex-refactor')
  })

  it('reserves mobile bottom space for the replay intro control', async () => {
    const { wrapper } = await mountHomeAt('/tools')

    const content = wrapper.get('[data-testid="home-content"]')
    const replayButton = wrapper.get('[data-testid="replay-intro"]')

    expect(content.classes()).toContain('home-content-safe-bottom')
    expect(replayButton.classes()).toContain('replay-intro-button')
    expect(replayButton.classes()).toEqual(expect.arrayContaining(['min-h-11', 'min-w-11']))
    expect(replayButton.attributes('aria-label')).toBe('重看演示视频')
  })
})
