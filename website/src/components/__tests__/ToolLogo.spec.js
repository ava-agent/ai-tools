import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ToolLogo from '../ToolLogo.vue'

describe('ToolLogo', () => {
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
})
