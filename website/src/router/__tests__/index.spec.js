import { describe, expect, it } from 'vitest'
import router, { getCanonicalUrl, getLegacyHistoryTarget } from '../index'

describe('router metadata', () => {
  it('builds canonical production URLs for history routes', () => {
    expect(getCanonicalUrl('/tools/cursor')).toBe(
      'https://aitools.rxcloud.group/tools/cursor'
    )
  })

  it('migrates only legacy application hashes into history paths', () => {
    expect(getLegacyHistoryTarget('#/comparison?tools=cursor,trae', '/')).toBe(
      '/comparison?tools=cursor,trae'
    )
    expect(getLegacyHistoryTarget('#/tools/cursor', '/ai-tools/')).toBe(
      '/ai-tools/tools/cursor'
    )
    expect(getLegacyHistoryTarget('#access_token=secret', '/')).toBeNull()
    expect(getLegacyHistoryTarget('#error_code=denied', '/')).toBeNull()
    expect(getLegacyHistoryTarget('#main-content', '/')).toBeNull()
  })

  it('never allows protocol-relative canonical origins', () => {
    expect(getCanonicalUrl('//external.example/path')).toBe(
      'https://aitools.rxcloud.group/external.example/path'
    )
  })

  it('uses a lightweight generic title until the detail view loads its catalog item', async () => {
    await router.push('/tool/figma-mcp')
    await router.isReady()

    expect(document.title).toBe('工具详情 - AI工具全书')
  })
})
