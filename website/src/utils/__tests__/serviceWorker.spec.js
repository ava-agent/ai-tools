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

  it('derives cached app asset URLs from the registration scope', () => {
    const swSource = readFileSync(resolve(process.cwd(), 'public/sw.js'), 'utf8')

    expect(swSource).toContain('new URL(self.registration.scope)')
    expect(swSource).toContain('function resolveAppUrl')
    expect(swSource).toContain('].map(resolveAppUrl)')
    expect(swSource).not.toContain("'/index.html'")
    expect(swSource).not.toContain("'/manifest.json'")
  })
})
