import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ToolLogo from '../ToolLogo.vue'

describe('ToolLogo', () => {
  it('uses a bundled brand mark by default when one is available', () => {
    const wrapper = mount(ToolLogo, {
      props: { toolId: 'cursor', toolName: 'Cursor' }
    })

    expect(wrapper.get('img').attributes('src')).toBe('/images/tool-logos/cursor.png')
  })

  it('resets failed image state when the tool changes', async () => {
    const wrapper = mount(ToolLogo, {
      props: {
        toolId: 'cursor',
        toolName: 'Cursor',
        preferImage: true,
      },
    })

    expect(wrapper.find('img').exists()).toBe(true)

    await wrapper.find('img').trigger('error')
    expect(wrapper.find('img').exists()).toBe(false)
    expect(wrapper.text()).toContain('Cu')

    await wrapper.setProps({
      toolId: 'trae',
      toolName: 'Trae',
    })

    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').attributes('alt')).toBe('Trae')
  })

  it('uses the configured monogram when no brand image exists', () => {
    const wrapper = mount(ToolLogo, {
      props: { toolId: 'skill-creator-skill', toolName: 'skill-creator' }
    })

    expect(wrapper.find('img').exists()).toBe(false)
    expect(wrapper.text()).toContain('SC')
  })
})
