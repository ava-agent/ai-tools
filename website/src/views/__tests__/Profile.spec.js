import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import Profile from '../Profile.vue'

function mountProfile() {
  return mount(Profile, {
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

  it('keeps destructive and modal actions at touch-friendly heights', async () => {
    const wrapper = mountProfile()

    const reset = wrapper.get('[data-testid="profile-reset-open"]')
    expect(reset.classes()).toContain('min-h-11')

    await reset.trigger('click')

    expect(wrapper.get('[data-testid="profile-reset-cancel"]').classes()).toContain('min-h-11')
    expect(wrapper.get('[data-testid="profile-reset-confirm"]').classes()).toContain('min-h-11')
  })
})
