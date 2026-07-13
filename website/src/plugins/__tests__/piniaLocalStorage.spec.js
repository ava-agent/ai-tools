import { afterEach, describe, expect, it, vi } from 'vitest'
import { createLocalStoragePlugin, sanitizePersistedState } from '../piniaLocalStorage'

function createStore(state, id = 'gamification') {
  return {
    $id: id,
    $state: state,
    $patch: vi.fn(),
    $subscribe: vi.fn()
  }
}

describe('pinia localStorage persistence', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('normalizes persisted values against the current store shape', () => {
    const defaults = {
      xp: 0,
      streak: { current: 0, longest: 0, lastVisitDate: null },
      stats: { toolsViewed: [], quizzesCompleted: 0, visitDates: [] },
      battleVotes: {}
    }

    expect(
      sanitizePersistedState(
        {
          xp: 'many',
          streak: { current: 3, longest: 'bad', lastVisitDate: {} },
          stats: { toolsViewed: null, quizzesCompleted: 2, visitDates: ['2026-07-13'] },
          battleVotes: [],
          unexpected: 'discard me'
        },
        defaults
      )
    ).toEqual({
      xp: 0,
      streak: { current: 3, longest: 0, lastVisitDate: null },
      stats: { toolsViewed: [], quizzesCompleted: 2, visitDates: ['2026-07-13'] },
      battleVotes: {}
    })
  })

  it('keeps application startup usable when storage access is blocked', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new DOMException('blocked', 'SecurityError')
    })
    const store = createStore({ xp: 0 })
    const plugin = createLocalStoragePlugin({ stores: ['gamification'] })

    expect(() => plugin({ store })).not.toThrow()
    expect(store.$patch).not.toHaveBeenCalled()
    expect(store.$subscribe).toHaveBeenCalledOnce()
  })

  it('patches valid data with unsafe nested shapes repaired', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(
      JSON.stringify({
        xp: 30,
        stats: { toolsViewed: null, quizzesCompleted: 1 }
      })
    )
    const store = createStore({
      xp: 0,
      stats: { toolsViewed: [], quizzesCompleted: 0 }
    })
    const plugin = createLocalStoragePlugin({ stores: ['gamification'] })

    plugin({ store })

    expect(store.$patch).toHaveBeenCalledWith({
      xp: 30,
      stats: { toolsViewed: [], quizzesCompleted: 1 }
    })
  })

  it('does not hydrate transient achievement toasts', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(
      JSON.stringify({
        unlockedIds: ['first-look'],
        toastQueue: [{ id: 'first-look', name: '初见' }]
      })
    )
    const store = createStore(
      { unlockedIds: [], toastQueue: [] },
      'achievements'
    )
    const plugin = createLocalStoragePlugin({
      stores: ['achievements'],
      transientKeys: { achievements: ['toastQueue'] }
    })

    plugin({ store })

    expect(store.$patch).toHaveBeenCalledWith({ unlockedIds: ['first-look'] })
  })
})
