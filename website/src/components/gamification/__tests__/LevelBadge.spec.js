import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import LevelBadge from '../LevelBadge.vue'

describe('LevelBadge', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('uses an accessible label and stable touch target for every size', () => {
    for (const size of ['sm', 'md', 'lg']) {
      const wrapper = mount(LevelBadge, { props: { size } })
      const button = wrapper.get('button')

      expect(button.attributes('aria-label')).toContain('等级')
      expect(button.classes()).toEqual(expect.arrayContaining(['min-h-11', 'min-w-11']))
    }
  })
})
