import { defineComponent, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useReveal } from '../useReveal'

const RevealHarness = defineComponent({
  template: '<section ref="sectionRef" :class="{ revealed: isRevealed }">Content</section>',
  setup() {
    return useReveal()
  },
})

describe('useReveal', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('reveals content when IntersectionObserver is unavailable', async () => {
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: false }))
    vi.stubGlobal('IntersectionObserver', undefined)

    const wrapper = mount(RevealHarness)
    await nextTick()

    expect(wrapper.get('section').classes()).toContain('revealed')
  })

  it('reveals content when matchMedia is unavailable', async () => {
    vi.stubGlobal('matchMedia', undefined)
    vi.stubGlobal('IntersectionObserver', undefined)

    const wrapper = mount(RevealHarness)
    await nextTick()

    expect(wrapper.get('section').classes()).toContain('revealed')
  })
})
