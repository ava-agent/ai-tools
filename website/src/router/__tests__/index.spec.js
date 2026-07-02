import { describe, expect, it } from 'vitest'
import router from '../index'

describe('router metadata', () => {
  it('sets tool detail titles from the current catalog item', async () => {
    await router.push('/tool/figma-mcp')
    await router.isReady()

    expect(document.title).toBe('Figma MCP - AI工具全书')
  })
})
