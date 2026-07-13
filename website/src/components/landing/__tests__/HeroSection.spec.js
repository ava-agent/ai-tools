import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import HeroSection from '../HeroSection.vue'

vi.mock('../../../assets/landing/hero-bg.webp', () => ({
  default: '/assets/images/hero-bg-test.webp'
}))

function setReducedMotion(matches) {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: query === '(prefers-reduced-motion: reduce)' ? matches : false,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn()
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
        HeroConstellation: { template: '<div aria-hidden="true" />' }
      }
    }
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

  it('uses a compact grid for hero stats so labels do not collide on mobile', () => {
    const { wrapper } = mountHero()

    const stats = wrapper.get('[data-testid="hero-stats"]')
    const firstStat = wrapper.get('[data-testid="hero-stat"]')
    const firstLabel = wrapper.get('[data-testid="hero-stat-label"]')

    expect(stats.classes()).toEqual(expect.arrayContaining(['grid', 'grid-cols-3', 'max-w-lg']))
    expect(firstStat.classes()).toContain('min-w-0')
    expect(firstLabel.classes()).toEqual(expect.arrayContaining(['leading-tight', 'break-words']))
  })

  it('loads the optimized hero artwork with high priority', () => {
    const { wrapper } = mountHero()
    const image = wrapper.get('img')

    expect(image.attributes('src')).toBe('/assets/images/hero-bg-test.webp')
    expect(image.attributes('loading')).toBe('eager')
    expect(image.attributes('decoding')).toBe('async')
    expect(image.attributes('fetchpriority')).toBe('high')
  })
})
