import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import HeroSection from '../HeroSection.vue'

vi.mock('/images/landing/hero-bg.png', () => ({
  default: '/images/landing/hero-bg.png',
}))

function setReducedMotion(matches) {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: query === '(prefers-reduced-motion: reduce)' ? matches : false,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))
}

function mountHero({ reducedMotion = false } = {}) {
  setReducedMotion(reducedMotion)
  const pinia = createPinia()
  setActivePinia(pinia)

  const scrollIntoView = vi.fn()
  const target = document.createElement('div')
  target.id = 'landscape'
  target.scrollIntoView = scrollIntoView
  document.body.appendChild(target)

  const wrapper = mount(HeroSection, {
    global: {
      plugins: [pinia],
      stubs: {
        HeroConstellation: { template: '<div aria-hidden="true" />' },
      },
    },
  })

  return { wrapper, scrollIntoView }
}

describe('HeroSection', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  afterEach(() => {
    vi.restoreAllMocks()
    document.body.innerHTML = ''
  })

  it('uses auto scrolling when the user prefers reduced motion', async () => {
    const { wrapper, scrollIntoView } = mountHero({ reducedMotion: true })

    await wrapper.get('button').trigger('click')

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'auto' })
  })

  it('keeps smooth scrolling when reduced motion is not requested', async () => {
    const { wrapper, scrollIntoView } = mountHero({ reducedMotion: false })

    await wrapper.get('button').trigger('click')

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })
})
