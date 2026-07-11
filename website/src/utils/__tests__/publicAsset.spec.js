import { describe, expect, it } from 'vitest'
import { publicAsset } from '../publicAsset.js'

describe('publicAsset', () => {
  it('keeps root deployments rooted at the origin', () => {
    expect(publicAsset('/images/landing/hero-bg.png', '/')).toBe('/images/landing/hero-bg.png')
  })

  it('prefixes assets for GitHub Pages subpath deployments', () => {
    expect(publicAsset('/images/landing/hero-bg.png', '/ai-tools/')).toBe(
      '/ai-tools/images/landing/hero-bg.png'
    )
  })
})
