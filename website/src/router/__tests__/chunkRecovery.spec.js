import { describe, expect, it, vi } from 'vitest'
import {
  getChunkReloadKey,
  installChunkRecovery,
  isChunkLoadError,
} from '../chunkRecovery'

function createRouterHarness() {
  let errorHandler
  let afterHandler
  return {
    router: {
      onError(handler) {
        errorHandler = handler
      },
      afterEach(handler) {
        afterHandler = handler
      },
    },
    triggerError(error, to = { fullPath: '/pricing' }) {
      errorHandler(error, to)
    },
    triggerAfter(failure) {
      afterHandler({}, {}, failure)
    },
  }
}

function createStorage() {
  const values = new Map()
  return {
    getItem: vi.fn((key) => values.get(key) || null),
    setItem: vi.fn((key, value) => values.set(key, value)),
    removeItem: vi.fn((key) => values.delete(key)),
  }
}

describe('router chunk recovery', () => {
  it.each([
    new TypeError('Failed to fetch dynamically imported module: /assets/page.js'),
    new Error('Error loading dynamically imported module'),
    new Error('Importing a module script failed.'),
    new Error('Unable to preload CSS for /assets/page.css'),
    new Error('Loading chunk 42 failed'),
    Object.assign(new Error('webpack chunk error'), { name: 'ChunkLoadError' }),
  ])('recognizes deploy-related chunk failures', (error) => {
    expect(isChunkLoadError(error)).toBe(true)
  })

  it.each([
    new Error('Failed to fetch'),
    new Error('Supabase request failed'),
    new Error('Image load failed'),
  ])('does not treat ordinary runtime failures as chunk failures', (error) => {
    expect(isChunkLoadError(error)).toBe(false)
  })

  it('reloads at most once until a navigation succeeds', () => {
    const harness = createRouterHarness()
    const storage = createStorage()
    const reload = vi.fn()
    const key = installChunkRecovery(harness.router, {
      baseUrl: '/',
      storage,
      reload,
      isOnline: () => true,
      getHref: () => 'https://aitools.rxcloud.group/pricing',
      now: () => 123,
    })

    harness.triggerError(new Error('Failed to fetch dynamically imported module'))
    harness.triggerError(new Error('Failed to fetch dynamically imported module'))

    expect(key).toBe(getChunkReloadKey('/'))
    expect(reload).toHaveBeenCalledOnce()
    expect(JSON.parse(storage.setItem.mock.calls[0][1])).toEqual({
      route: '/pricing',
      href: 'https://aitools.rxcloud.group/pricing',
      at: 123,
    })

    harness.triggerAfter(new Error('navigation failed'))
    expect(storage.removeItem).not.toHaveBeenCalled()

    harness.triggerAfter(undefined)
    expect(storage.removeItem).toHaveBeenCalledWith(key)
  })

  it('skips reload while offline or when the sentinel cannot be persisted', () => {
    const offlineHarness = createRouterHarness()
    const offlineReload = vi.fn()
    installChunkRecovery(offlineHarness.router, {
      storage: createStorage(),
      reload: offlineReload,
      isOnline: () => false,
    })
    offlineHarness.triggerError(new Error('Loading chunk 7 failed'))
    expect(offlineReload).not.toHaveBeenCalled()

    const blockedHarness = createRouterHarness()
    const blockedReload = vi.fn()
    installChunkRecovery(blockedHarness.router, {
      storage: {
        getItem() {
          throw new DOMException('blocked', 'SecurityError')
        },
      },
      reload: blockedReload,
    })
    blockedHarness.triggerError(new Error('Loading chunk 7 failed'))
    expect(blockedReload).not.toHaveBeenCalled()
  })

  it('isolates reload sentinels for root and GitHub Pages deployments', () => {
    expect(getChunkReloadKey('/')).not.toBe(getChunkReloadKey('/ai-tools/'))
  })
})
