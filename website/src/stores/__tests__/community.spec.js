import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

const queryByUser = vi.hoisted(() => vi.fn())

vi.mock('../../lib/supabase.js', () => ({
  supabase: {
    from: vi.fn(() => ({
      select: vi.fn(() => ({
        eq: queryByUser
      }))
    }))
  }
}))

import { useCommunityStore } from '../community'

describe('community rating account isolation', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    queryByUser.mockReset()
  })

  it('clears ratings immediately when the active user changes', async () => {
    const store = useCommunityStore()
    store.myRatings = { cursor: 5 }
    queryByUser.mockResolvedValue({ data: [] })

    const request = store.fetchMyRatings('user-b')

    expect(store.myRatings).toEqual({})
    await request
  })

  it('ignores a slower response from the previous account', async () => {
    const resolvers = new Map()
    queryByUser.mockImplementation((_column, userId) => new Promise((resolve) => {
      resolvers.set(userId, resolve)
    }))
    const store = useCommunityStore()

    const requestA = store.fetchMyRatings('user-a')
    const requestB = store.fetchMyRatings('user-b')

    resolvers.get('user-a')({ data: [{ tool_id: 'cursor', rating: 5 }] })
    await requestA
    expect(store.myRatings).toEqual({})

    resolvers.get('user-b')({ data: [{ tool_id: 'cursor', rating: 2 }] })
    await requestB
    expect(store.myRatings).toEqual({ cursor: 2 })
  })

  it('invalidates pending requests when ratings are cleared', async () => {
    let resolveRequest
    queryByUser.mockImplementation(() => new Promise((resolve) => {
      resolveRequest = resolve
    }))
    const store = useCommunityStore()
    const request = store.fetchMyRatings('user-a')

    store.clearMyRatings()
    resolveRequest({ data: [{ tool_id: 'cursor', rating: 5 }] })
    await request

    expect(store.myRatings).toEqual({})
  })
})
