import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { createPinia, setActivePinia } from 'pinia'
import UserProfilePanel from '../UserProfilePanel.vue'

function flushDom() {
  return new Promise(resolve => setTimeout(resolve, 0))
}

function mountPanel(isOpen = true) {
  const wrapper = mount(UserProfilePanel, {
    attachTo: document.body,
    props: { isOpen },
    global: {
      stubs: {
        teleport: true,
        transition: false,
        LevelBadge: true,
        XpBar: true,
        AchievementGrid: true,
        RouterLink: { props: ['to'], template: '<a href="#"><slot /></a>' },
      },
    },
  })
  return wrapper
}

describe('UserProfilePanel', () => {
  beforeEach(() => {
    document.body.innerHTML = '<button id="profile-opener">Open profile</button>'
    document.body.style.overflow = ''
    setActivePinia(createPinia())
    document.getElementById('profile-opener')?.focus()
  })

  afterEach(() => {
    document.body.style.overflow = ''
    document.body.innerHTML = ''
  })

  it('labels the close button and keeps it touch friendly', async () => {
    const wrapper = mountPanel()
    const close = wrapper.get('[data-testid="user-profile-close"]')

    expect(close.attributes('aria-label')).toBe('关闭我的档案')
    expect(close.classes()).toEqual(expect.arrayContaining(['min-h-11', 'min-w-11']))

    await close.trigger('click')

    expect(wrapper.emitted('close')).toBeTruthy()
  })

  it('traps focus, locks page scroll, and restores focus after close', async () => {
    const opener = document.getElementById('profile-opener')
    const wrapper = mountPanel(false)

    await wrapper.setProps({ isOpen: true })
    await nextTick()
    await flushDom()

    const close = document.querySelector('[data-testid="user-profile-close"]')
    const fullProfileLink = document.querySelector('[data-testid="user-profile-full-link"]')

    expect(close).toBeTruthy()
    expect(fullProfileLink).toBeTruthy()
    expect(document.activeElement).toBe(close)
    expect(document.body.style.overflow).toBe('hidden')

    fullProfileLink.focus()
    fullProfileLink.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'Tab',
      bubbles: true,
      cancelable: true,
    }))

    expect(document.activeElement).toBe(close)

    close.focus()
    close.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'Tab',
      shiftKey: true,
      bubbles: true,
      cancelable: true,
    }))

    expect(document.activeElement).toBe(fullProfileLink)

    await wrapper.setProps({ isOpen: false })
    await nextTick()
    await flushDom()

    expect(document.body.style.overflow).toBe('')
    expect(document.activeElement).toBe(opener)
  })
})
