import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ToolGrid from '../ToolGrid.vue'

const tools = Array.from({ length: 35 }, (_, index) => ({
  id: `tool-${index}`,
  name: `Tool ${index}`
}))

const replacementTools = Array.from({ length: 35 }, (_, index) => ({
  id: `replacement-${index}`,
  name: `Replacement ${index}`
}))

const mountGrid = (props = {}) =>
  mount(ToolGrid, {
    props: { tools, ...props },
    global: {
      stubs: {
        ToolCard: {
          template: '<article class="tool-card-stub">{{ tool.name }}</article>',
          props: ['tool']
        },
        SearchX: true,
        RefreshCw: true,
        ChevronDown: true
      }
    }
  })

describe('ToolGrid', () => {
  it('labels the tools region with a real hidden heading', () => {
    const wrapper = mountGrid()

    expect(wrapper.get('section').attributes('aria-labelledby')).toBe('tools-heading')
    expect(wrapper.get('#tools-heading').text()).toBe('工具列表')
    expect(wrapper.get('#tools-heading').classes()).toContain('sr-only')
  })

  it('announces the visible result count politely', async () => {
    const wrapper = mountGrid()

    const status = wrapper.get('[data-testid="tool-grid-result-count"]')
    expect(status.attributes('role')).toBe('status')
    expect(status.attributes('aria-live')).toBe('polite')
    expect(status.text()).toContain('显示 30 / 35 个工具')

    await wrapper.get('button').trigger('click')
    expect(status.text()).toContain('显示 35 / 35 个工具')
  })

  it('announces the empty state politely', () => {
    const wrapper = mountGrid({ tools: [] })

    const status = wrapper.get('[data-testid="tool-grid-empty-state"]')
    expect(status.attributes('role')).toBe('status')
    expect(status.attributes('aria-live')).toBe('polite')
    expect(status.text()).toContain('未找到匹配的工具')
  })

  it('keeps the table header layout for large screens to avoid tablet overflow', () => {
    const wrapper = mountGrid()

    const header = wrapper.get('[data-testid="tool-grid-table-header"]')

    expect(header.classes()).toContain('lg:grid')
    expect(header.classes().some((className) => className.startsWith('md:grid-cols-'))).toBe(false)
  })

  it('resets pagination when filters swap in an equal-sized result set', async () => {
    const wrapper = mountGrid()

    await wrapper.get('button').trigger('click')
    expect(wrapper.findAll('.tool-card-stub')).toHaveLength(35)

    await wrapper.setProps({ tools: replacementTools })

    expect(wrapper.get('[data-testid="tool-grid-result-count"]').text()).toContain(
      '显示 30 / 35 个工具'
    )
    expect(wrapper.text()).toContain('Replacement 0')
    expect(wrapper.text()).not.toContain('Replacement 30')
  })
})
