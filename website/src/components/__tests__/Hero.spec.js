import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import Hero from '../Hero.vue'
import { useCatalogStore } from '../../stores/catalog'

function mountHero() {
  const pinia = createPinia()
  setActivePinia(pinia)
  const store = useCatalogStore()
  const wrapper = mount(Hero, {
    global: {
      plugins: [pinia]
    }
  })

  return { wrapper, store }
}

describe('Hero', () => {
  it('counts the current verification round using the latest catalog date', () => {
    const { wrapper, store } = mountHero()
    const latestDate = store.tools.reduce(
      (latest, tool) => tool.lastVerified > latest ? tool.lastVerified : latest,
      ''
    )
    const currentRoundCount = store.tools.filter((tool) => tool.lastVerified === latestDate).length

    expect(wrapper.get('[data-testid="hero-current-round-count"]').text()).toBe(
      String(currentRoundCount)
    )
  })
})
