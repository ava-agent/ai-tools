import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import EcosystemAtlas from '../EcosystemAtlas.vue'

describe('EcosystemAtlas', () => {
  it('ships a lazy, responsive diagram with an accessible seven-category legend', () => {
    const wrapper = mount(EcosystemAtlas, {
      global: {
        stubs: {
          RouterLink: { props: ['to'], template: '<a href="#"><slot /></a>' }
        }
      }
    })
    const image = wrapper.get('img')

    expect(image.attributes('src')).toContain('images/landing/ecosystem-atlas.webp')
    expect(image.attributes('loading')).toBe('lazy')
    expect(image.attributes('decoding')).toBe('async')
    expect(image.attributes('width')).toBe('1920')
    expect(image.attributes('height')).toBe('1080')
    expect(image.attributes('alt')).toContain('IDE、CLI、大模型、多模态、Agent、MCP 和 Skills')
    expect(wrapper.findAll('figcaption li')).toHaveLength(7)
    expect(wrapper.findAll('figcaption a')).toHaveLength(7)
  })
})
