import { vi } from 'vitest'
import { config } from '@vue/test-utils'

config.global.stubs = {
  $router: {
    push: vi.fn(),
    replace: vi.fn()
  }
}
