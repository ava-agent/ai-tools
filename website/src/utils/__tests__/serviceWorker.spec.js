import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { shouldRegisterServiceWorker } from '../serviceWorker'

describe('serviceWorker', () => {
  it('does not register a service worker while running the dev server', () => {
    expect(shouldRegisterServiceWorker({ hasServiceWorker: true, mode: 'development' })).toBe(false)
  })

  it('registers in production when the browser supports service workers', () => {
    expect(shouldRegisterServiceWorker({ hasServiceWorker: true, mode: 'production' })).toBe(true)
  })

  it('does not register when the browser lacks service worker support', () => {
    expect(shouldRegisterServiceWorker({ hasServiceWorker: false, mode: 'production' })).toBe(false)
  })

  it('keeps script and style assets on a network-first update path', () => {
    const swSource = readFileSync(resolve(process.cwd(), 'public/sw.js'), 'utf8')

    expect(swSource).toContain("const CACHE_NAME = 'ai-tools-v3'")
    expect(swSource).toContain("request.destination === 'style'")
    expect(swSource).toContain("request.destination === 'script'")
    expect(swSource).toContain('event.respondWith(networkFirst(request));')
  })

  it('falls back to the app shell for offline history-mode navigation', () => {
    const swSource = readFileSync(resolve(process.cwd(), 'public/sw.js'), 'utf8')

    expect(swSource).toContain('event.respondWith(navigationNetworkFirst(request));')
    expect(swSource).toContain('async function navigationNetworkFirst(request)')
    expect(swSource).toContain("cache.match(resolveAppUrl('index.html'))")
    expect(swSource).toContain("cache.match(resolveAppUrl(''))")
    expect(swSource).toContain('networkResponse.status !== 404')
  })

  it('only removes caches owned by this application', () => {
    const swSource = readFileSync(resolve(process.cwd(), 'public/sw.js'), 'utf8')

    expect(swSource).toContain("name.startsWith('ai-tools-')")
  })

  it('refreshes stable public image URLs in the background', () => {
    const swSource = readFileSync(resolve(process.cwd(), 'public/sw.js'), 'utf8')

    expect(swSource).toContain("request.destination === 'image'")
    expect(swSource).toContain('event.respondWith(staleWhileRevalidate(request, event));')
    expect(swSource).toContain('async function staleWhileRevalidate(request, event)')
    expect(swSource).toContain('await cache.put(request, response.clone())')
    expect(swSource).toContain('event.waitUntil(networkRequest)')
  })

  it('derives cached app asset URLs from the registration scope', () => {
    const swSource = readFileSync(resolve(process.cwd(), 'public/sw.js'), 'utf8')

    expect(swSource).toContain('new URL(self.registration.scope)')
    expect(swSource).toContain('function resolveAppUrl')
    expect(swSource).toContain('].map(resolveAppUrl)')
    expect(swSource).not.toContain("'/index.html'")
    expect(swSource).not.toContain("'/manifest.json'")
  })
})
