import { describe, expect, it } from 'vitest'
import { getBasePath, manualChunks } from './vite.config.js'

describe('vite config helpers', () => {
  it('uses the GitHub Pages base only in GitHub Actions', () => {
    expect(getBasePath({ GITHUB_ACTIONS: 'true' })).toBe('/ai-tools/')
    expect(getBasePath({})).toBe('/')
  })

  it('groups vendor chunks after normalizing Windows paths', () => {
    expect(manualChunks('C:\\repo\\node_modules\\vue\\dist\\vue.runtime.esm-bundler.js')).toBe('vue-vendor')
    expect(manualChunks('/repo/node_modules/vue-router/dist/vue-router.mjs')).toBe('vue-vendor')
    expect(manualChunks('/repo/node_modules/pinia/dist/pinia.mjs')).toBe('vue-vendor')
    expect(manualChunks('C:\\repo\\node_modules\\lucide-vue-next\\dist\\lucide-vue-next.js')).toBe('icons')
    expect(manualChunks('/repo/src/main.js')).toBeUndefined()
  })
})