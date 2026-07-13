import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

const { loadToolDetailMock } = vi.hoisted(() => ({
  loadToolDetailMock: vi.fn()
}))

vi.mock('../../data/generated/toolDetailLoader.js', () => ({
  loadToolDetail: loadToolDetailMock
}))

import { useComparisonStore } from '../comparison'

const lightweightTools = [
  { id: 'cursor', name: 'Cursor' },
  { id: 'claude-code', name: 'Claude Code' },
  { id: 'trae', name: 'Trae' }
]

describe('comparison store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    loadToolDetailMock.mockReset()
  })

  it('loads only selected details and preserves selection order', async () => {
    loadToolDetailMock.mockImplementation(async (id) => ({ id, name: id, freeQuota: 'available' }))
    const store = useComparisonStore()
    store.tools = lightweightTools
    store.addToCompare('claude-code')
    store.addToCompare('cursor')

    await expect(store.loadComparedToolDetails()).resolves.toBe(true)

    expect(loadToolDetailMock.mock.calls.map(([id]) => id)).toEqual(['claude-code', 'cursor'])
    expect(store.detailedComparedTools.map((tool) => tool.id)).toEqual(['claude-code', 'cursor'])
    expect(store.isLoadingDetails).toBe(false)
    expect(store.detailLoadError).toBe(false)
  })

  it('exposes a retryable error when a detail fails to load', async () => {
    loadToolDetailMock.mockRejectedValueOnce(new Error('offline'))
    const store = useComparisonStore()
    store.tools = lightweightTools
    store.addToCompare('cursor')
    store.addToCompare('trae')

    await expect(store.loadComparedToolDetails()).resolves.toBe(false)

    expect(store.detailLoadError).toBe(true)
    expect(store.isLoadingDetails).toBe(false)
  })

  it('ignores a stale detail request after the selection changes', async () => {
    const detailResolvers = []
    loadToolDetailMock.mockImplementation((id) => new Promise((resolve) => {
      detailResolvers.push(() => resolve({ id, name: id, freeQuota: 'available' }))
    }))
    const store = useComparisonStore()
    store.tools = lightweightTools
    store.addToCompare('cursor')
    store.addToCompare('claude-code')

    const pending = store.loadComparedToolDetails()
    store.removeFromCompare('claude-code')
    detailResolvers.forEach((resolve) => resolve())

    await expect(pending).resolves.toBe(false)
    expect(store.detailedComparedTools).toEqual([])
    expect(store.isLoadingDetails).toBe(false)
  })

  it('deduplicates concurrent imports for the same selected tools', async () => {
    loadToolDetailMock.mockImplementation(async (id) => ({ id, name: id, freeQuota: 'available' }))
    const store = useComparisonStore()
    store.tools = lightweightTools
    store.addToCompare('cursor')
    store.addToCompare('trae')

    const first = store.loadComparedToolDetails()
    const second = store.loadComparedToolDetails()
    await Promise.all([first, second])

    expect(loadToolDetailMock).toHaveBeenCalledTimes(2)
    expect(loadToolDetailMock.mock.calls.map(([id]) => id).sort()).toEqual(['cursor', 'trae'])
  })
})
