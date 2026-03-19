import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ToolCard from '../ToolCard.vue'

const stubs = {
  'router-link': {
    template: '<a :href="to"><slot /></a>',
    props: ['to'],
  },
  ToolLogo: { template: '<div class="tool-logo-stub" />' },
}

describe('ToolCard', () => {
  const tool = {
    id: 'test-tool',
    name: 'Test Tool',
    category: 'ide',
    developer: 'Test Developer',
    versions: [{ type: 'Global', pricing: 'Free', models: 'Test Model', link: 'https://example.com' }],
    pros: ['Test Pro 1', 'Test Pro 2'],
    cons: ['Test Con 1', 'Test Con 2'],
    bestFor: 'Testing purposes',
    personalExperience: { rating: 5, insights: 'Test insights', pitfalls: ['Test pitfall'] },
    swot: { S: 'Strength', W: 'Weakness', O: 'Opportunity', T: 'Threat' },
    tags: ['Test', 'Demo'],
  }

  const mountCard = (props = {}) =>
    mount(ToolCard, { props: { tool, ...props }, global: { stubs } })

  it('renders tool name and developer', () => {
    const wrapper = mountCard()
    expect(wrapper.text()).toContain('Test Tool')
    expect(wrapper.text()).toContain('Test Developer')
  })

  it('shows star rating', () => {
    const wrapper = mountCard()
    // 5 filled stars for rating 5
    expect(wrapper.text()).toContain('★★★★★')
  })

  it('displays numeric score badge', () => {
    const wrapper = mountCard()
    expect(wrapper.text()).toContain('5.0')
  })

  it('shows bestFor description', () => {
    const wrapper = mountCard()
    expect(wrapper.text()).toContain('Testing purposes')
  })

  it('renders as a link to tool detail', () => {
    const wrapper = mountCard()
    const link = wrapper.find('a')
    expect(link.exists()).toBe(true)
  })

  it('renders ToolLogo component', () => {
    const wrapper = mountCard()
    expect(wrapper.find('.tool-logo-stub').exists()).toBe(true)
  })
})
