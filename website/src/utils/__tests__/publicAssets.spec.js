import { describe, expect, it } from 'vitest'
import { resolvePublicAssetPath } from '../publicAssets'

describe('resolvePublicAssetPath', () => {
  it('resolves public files against root and GitHub Pages bases', () => {
    expect(resolvePublicAssetPath('./videos/cursor.mp4', '/')).toBe('/videos/cursor.mp4')
    expect(resolvePublicAssetPath('/videos/cursor.mp4', '/ai-tools/')).toBe(
      '/ai-tools/videos/cursor.mp4'
    )
    expect(resolvePublicAssetPath('images/flow.png', '/ai-tools/')).toBe(
      '/ai-tools/images/flow.png'
    )
  })

  it('keeps external and data URLs unchanged', () => {
    expect(resolvePublicAssetPath('https://example.com/a.png', '/ai-tools/')).toBe(
      'https://example.com/a.png'
    )
    expect(resolvePublicAssetPath('data:image/png;base64,AA', '/ai-tools/')).toBe(
      'data:image/png;base64,AA'
    )
  })
})
