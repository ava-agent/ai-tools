import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { nextTick } from 'vue'
import Profile from '../Profile.vue'

function mountProfile() {
  return mount(Profile, {
    attachTo: document.body,
    global: {
      stubs: {
        teleport: true,
        transition: false,
        LevelBadge: true,
        XpBar: true,
        AchievementGrid: true,
        RouterLink: { props: ['to'], template: '<a><slot /></a>' },
      },
    },
  })
}

describe('Profile', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('keeps destructive and modal actions at touch-friendly heights', async () => {
    const wrapper = mountProfile()

    const reset = wrapper.get('[data-testid="profile-reset-open"]')
    expect(reset.classes()).toContain('min-h-11')

    await reset.trigger('click')

    expect(wrapper.get('[data-testid="profile-reset-cancel"]').classes()).toContain('min-h-11')
    expect(wrapper.get('[data-testid="profile-reset-confirm"]').classes()).toContain('min-h-11')
    wrapper.unmount()
  })

  it('traps focus in the reset dialog and restores the opener on close', async () => {
    const wrapper = mountProfile()
    const opener = wrapper.get('[data-testid="profile-reset-open"]')
    opener.element.focus()

    await opener.trigger('click')
    await nextTick()

    const dialog = wrapper.get('[role="dialog"]')
    const cancel = wrapper.get('[data-testid="profile-reset-cancel"]')
    const confirm = wrapper.get('[data-testid="profile-reset-confirm"]')
    expect(dialog.attributes('aria-labelledby')).toBe('profile-reset-title')
    expect(document.activeElement).toBe(cancel.element)

    confirm.element.focus()
    await dialog.trigger('keydown', { key: 'Tab' })
    expect(document.activeElement).toBe(cancel.element)

    cancel.element.focus()
    await dialog.trigger('keydown', { key: 'Tab', shiftKey: true })
    expect(document.activeElement).toBe(confirm.element)

    await dialog.trigger('keydown', { key: 'Escape' })
    await nextTick()
    expect(document.activeElement).toBe(opener.element)
    wrapper.unmount()
  })
})
