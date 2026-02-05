import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ToolCard from '../ToolCard.vue'

describe('ToolCard', () => {
  const tool = {
    id: 'test-tool',
    name: 'Test Tool',
    category: 'IDE',
    developer: 'Test Developer',
    versions: [
      {
        type: 'Global',
        pricing: 'Free',
        models: 'Test Model',
        link: 'https://example.com'
      }
    ],
    pros: ['Test Pro 1', 'Test Pro 2'],
    cons: ['Test Con 1', 'Test Con 2'],
    bestFor: 'Testing purposes',
    personalExperience: {
      rating: 6,
      insights: 'Test insights',
      pitfalls: ['Test pitfall 1', 'Test pitfall 2']
    },
    swot: {
      S: 'Test Strength',
      W: 'Test Weakness',
      O: 'Test Opportunity',
      T: 'Test Threat'
    },
    tags: ['Test', 'Demo']
  }

  it('renders tool name and developer', () => {
    const wrapper = mount(ToolCard, {
      props: { tool }
    })

    expect(wrapper.text()).toContain('Test Tool')
    expect(wrapper.text()).toContain('Test Developer')
  })

  it('displays category badge', () => {
    const wrapper = mount(ToolCard, {
      props: { tool }
    })

    const categoryBadge = wrapper.find('.bg-primary\\/20')
    expect(categoryBadge.exists()).toBe(true)
    expect(categoryBadge.text()).toContain('IDE')
  })

  it('shows rating stars', () => {
    const wrapper = mount(ToolCard, {
      props: { tool }
    })

    const stars = wrapper.findAll('.text-primary')
    expect(stars.length).toBe(5)
  })

  it('renders pros list', () => {
    const wrapper = mount(ToolCard, {
      props: { tool }
    })

    const pros = wrapper.findAll('.text-green-500')
    expect(pros.length).toBeGreaterThan(0)
  })

  it('renders cons list', () => {
    const wrapper = mount(ToolCard, {
      props: { tool }
    })

    const cons = wrapper.findAll('.text-red-500')
    expect(cons.length).toBeGreaterThan(0)
  })

  it('displays tags', () => {
    const wrapper = mount(ToolCard, {
      props: { tool }
    })

    const tags = wrapper.findAll('span.px-2')
    expect(tags.length).toBeGreaterThan(0)
  })

  it('renders version links', () => {
    const wrapper = mount(ToolCard, {
      props: { tool }
    })

    const links = wrapper.findAll('a[href]')
    expect(links.length).toBeGreaterThan(0)
  })
})
