import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ScoreRadar from '../ScoreRadar.vue'

describe('ScoreRadar accessibility', () => {
  it('exposes a text equivalent for the visual score chart', () => {
    const wrapper = mount(ScoreRadar, {
      props: {
        tool: {
          name: 'Cursor',
          pros: ['Fast', 'Context aware', 'Agent mode', 'Refactors', 'Integrations'],
          freeQuota: 'limited free tier',
          chineseSupport: 3,
          tags: ['IDE', 'Agent'],
          personalExperience: { rating: 4.5 },
          versions: [{ pricing: '$20/month' }],
        },
      },
    })

    const chart = wrapper.get('svg')
    expect(chart.attributes('role')).toBe('img')
    expect(chart.attributes('aria-label')).toContain('Cursor')
    expect(chart.text()).toContain('Cursor')
  })
})
