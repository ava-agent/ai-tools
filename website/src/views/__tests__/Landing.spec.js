import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Landing from '../Landing.vue'

function mountLanding() {
  return mount(Landing, {
    global: {
      stubs: {
        HeroSection: {
          emits: ['play-intro'],
          template: '<button data-testid="open-intro" @click="$emit(\'play-intro\')">播放</button>',
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
  it('opens the introduction from the hero and closes it from the dialog', async () => {
    const wrapper = mountLanding()

    expect(wrapper.get('[data-testid="intro-state"]').attributes('data-show')).toBe('false')

    await wrapper.get('[data-testid="open-intro"]').trigger('click')
    expect(wrapper.get('[data-testid="intro-state"]').attributes('data-show')).toBe('true')

    await wrapper.get('[data-testid="close-intro"]').trigger('click')
    expect(wrapper.get('[data-testid="intro-state"]').attributes('data-show')).toBe('false')
  })
})
