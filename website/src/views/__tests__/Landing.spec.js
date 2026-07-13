import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Landing from '../Landing.vue'

const pushMock = vi.fn()

vi.mock('vue-router', () => ({
  useRouter: () => ({ push: pushMock })
}))

function mountLanding() {
  return mount(Landing, {
    global: {
      stubs: {
        HeroSection: {
          emits: ['play-intro', 'search'],
          template: '<div><button data-testid="open-intro" @click="$emit(\'play-intro\')">播放</button><button data-testid="search-tools" @click="$emit(\'search\', \'复杂重构\')">搜索</button></div>',
        },
        IntroVideo: {
          props: ['show'],
          emits: ['close'],
          template: '<div data-testid="intro-state" :data-show="show"><button data-testid="close-intro" @click="$emit(\'close\')">关闭</button></div>',
        },
        EcosystemAtlas: true,
        ToolLandscape: true,
        RecommendationCards: true,
        QuickEntryCards: true,
      },
    },
  })
}

describe('Landing media introduction', () => {
  beforeEach(() => {
    pushMock.mockReset()
  })

  it('opens the introduction from the hero and closes it from the dialog', async () => {
    const wrapper = mountLanding()

    expect(wrapper.get('[data-testid="intro-state"]').attributes('data-show')).toBe('false')

    await wrapper.get('[data-testid="open-intro"]').trigger('click')
    expect(wrapper.get('[data-testid="intro-state"]').attributes('data-show')).toBe('true')

    await wrapper.get('[data-testid="close-intro"]').trigger('click')
    expect(wrapper.get('[data-testid="intro-state"]').attributes('data-show')).toBe('false')
  })

  it('routes hero searches into the catalog query', async () => {
    const wrapper = mountLanding()

    await wrapper.get('[data-testid="search-tools"]').trigger('click')

    expect(pushMock).toHaveBeenCalledWith({ name: 'tools', query: { q: '复杂重构' } })
  })
})
