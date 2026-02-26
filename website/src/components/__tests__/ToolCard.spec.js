import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ToolCard from '../ToolCard.vue'

// Stub router-link and child components
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
    versions: [
      {
        type: 'Global',
        pricing: 'Free',
        models: 'Test Model',
        link: 'https://example.com',
      },
    ],
    pros: ['Test Pro 1', 'Test Pro 2'],
    cons: ['Test Con 1', 'Test Con 2'],
    bestFor: 'Testing purposes',
    personalExperience: {
      rating: 5,
      insights: 'Test insights',
      pitfalls: ['Test pitfall 1', 'Test pitfall 2'],
    },
    swot: {
      S: 'Test Strength',
      W: 'Test Weakness',
      O: 'Test Opportunity',
      T: 'Test Threat',
    },
    tags: ['Test', 'Demo'],
  }

  const mountCard = (props = {}) =>
    mount(ToolCard, {
      props: { tool, ...props },
      global: { stubs },
    })

  it('renders tool name and developer', () => {
    const wrapper = mountCard()

    expect(wrapper.text()).toContain('Test Tool')
    expect(wrapper.text()).toContain('Test Developer')
  })

  it('displays category label', () => {
    const wrapper = mountCard()

    // The component uses getCategoryLabel() which maps 'ide' to a Chinese label
    const categorySpan = wrapper.find('.tag-pill')
    expect(categorySpan.exists()).toBe(true)
  })

  it('shows rating stars', () => {
    const wrapper = mountCard()

    // Stars with rating=5 should have yellow-400 class
    const filledStars = wrapper.findAll('.text-yellow-400')
    expect(filledStars.length).toBe(5)
  })

  it('renders first pro as highlight', () => {
    const wrapper = mountCard()

    expect(wrapper.text()).toContain('Test Pro 1')
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

  it('shows view detail prompt', () => {
    const wrapper = mountCard()

    expect(wrapper.text()).toContain('查看详情')
  })
})
