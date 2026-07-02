import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import AchievementToast from '../AchievementToast.vue'
import { TIER_STYLES, useAchievementsStore } from '../../../stores/achievements'

describe('AchievementToast', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
    setActivePinia(createPinia())
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('uses a compact non-blocking mobile layout', () => {
    const achievements = useAchievementsStore()
    achievements.toastQueue.push({
      id: 'test',
      name: '测试成就',
      description: '这是一条较长的成就说明',
      xp: 30,
      tierStyle: TIER_STYLES.gold,
    })

    mount(AchievementToast)

    const toast = document.body.querySelector('[data-testid="achievement-toast"]')
    expect(toast).toBeTruthy()
    expect(toast.className).toContain('bottom-3')
    expect(toast.className).toContain('pointer-events-none')
    expect(toast.className).toContain('max-w-xs')
    expect(toast.className).toContain('w-[calc(100vw-2rem)]')

    const surface = document.body.querySelector('[data-testid="achievement-toast-surface"]')
    expect(surface).toBeTruthy()
    expect(surface.className).toContain('pointer-events-auto')
    expect(surface.className).toContain('px-3')
    expect(surface.className).toContain('py-3')
  })
})
