import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import IntroVideo from '../IntroVideo.vue'

function flushDom() {
  return new Promise((resolve) => setTimeout(resolve, 0))
}

describe('IntroVideo accessibility', () => {
  let wrapper

  beforeEach(() => {
    document.body.innerHTML = '<button id="intro-video-opener">播放介绍视频</button>'
    vi.spyOn(HTMLMediaElement.prototype, 'play').mockResolvedValue()
    vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => {})
  })

  afterEach(() => {
    wrapper?.unmount()
    wrapper = null
    vi.restoreAllMocks()
    document.body.innerHTML = ''
  })

  async function mountOpenDialog() {
    const opener = document.getElementById('intro-video-opener')
    opener.focus()

    wrapper = mount(IntroVideo, {
      attachTo: document.body,
      props: { show: true }
    })

    await nextTick()
    await flushDom()

    return { opener }
  }

  it('exposes a named modal dialog and moves initial focus to its close button', async () => {
    await mountOpenDialog()

    const dialog = wrapper.get('[role="dialog"]')
    const title = wrapper.get('#intro-video-title')
    const closeButton = wrapper.get('[data-testid="intro-video-close"]')

    expect(dialog.attributes('aria-modal')).toBe('true')
    expect(dialog.attributes('aria-labelledby')).toBe('intro-video-title')
    expect(wrapper.get('video').attributes('aria-labelledby')).toBe('intro-video-title')
    expect(wrapper.get('video').attributes('poster')).toContain('images/landing/promo-poster.webp')
    expect(wrapper.get('video').attributes('preload')).toBe('metadata')
    expect(title.text()).toBe('AI 工具全书介绍视频')
    expect(document.activeElement).toBe(closeButton.element)
  })

  it('closes with Escape and restores focus after the dialog is hidden', async () => {
    const { opener } = await mountOpenDialog()

    await wrapper.get('[data-testid="intro-video-close"]').trigger('keydown', { key: 'Escape' })
    expect(wrapper.emitted('close')).toHaveLength(1)

    await wrapper.setProps({ show: false })
    await nextTick()
    await flushDom()

    expect(document.activeElement).toBe(opener)
  })

  it('keeps forward and backward Tab focus inside the dialog', async () => {
    await mountOpenDialog()

    const closeButton = wrapper.get('[data-testid="intro-video-close"]')
    closeButton.element.focus()

    await closeButton.trigger('keydown', { key: 'Tab' })
    expect(document.activeElement).toBe(closeButton.element)

    await closeButton.trigger('keydown', { key: 'Tab', shiftKey: true })
    expect(document.activeElement).toBe(closeButton.element)
  })

  it('preserves button, backdrop, and video-ended close behavior', async () => {
    await mountOpenDialog()

    await wrapper.get('[data-testid="intro-video-close"]').trigger('click')
    await wrapper.get('[data-testid="intro-video-overlay"]').trigger('click')
    await wrapper.get('video').trigger('ended')

    expect(wrapper.emitted('close')).toHaveLength(3)
  })
})
