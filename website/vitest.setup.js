import { vi } from 'vitest'
import { config } from '@vue/test-utils'

Object.defineProperty(window, 'scrollTo', {
  configurable: true,
  writable: true,
  value: vi.fn()
})

config.global.stubs = {
  $router: {
    push: vi.fn(),
    replace: vi.fn()
  }
}
