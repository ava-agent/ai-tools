import { describe, expect, it } from 'vitest'
import {
  ENTRY_GZIP_BUDGET_BYTES,
  HOME_GZIP_BUDGET_BYTES,
  ROUTE_GZIP_BUDGETS,
  entryBudgetPlugin,
  getBasePath,
  githubPagesFallbackPlugin,
  manualChunks,
  routeBudgetPlugin,
  routeDependencyGuardPlugin
} from './vite.config.js'
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

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

  it('copies the built app shell to 404.html for GitHub Pages history routes', async () => {
    const outputDir = await mkdtemp(join(tmpdir(), 'ai-tools-pages-'))
    await writeFile(join(outputDir, 'index.html'), '<main>app shell</main>')

    try {
      const plugin = githubPagesFallbackPlugin({ enabled: true })
      await plugin.writeBundle({ dir: outputDir })
      expect(await readFile(join(outputDir, '404.html'), 'utf8')).toBe(
        '<main>app shell</main>'
      )
    } finally {
      await rm(outputDir, { recursive: true, force: true })
    }
  })

  it('enforces a gzip budget for the application entry chunk', () => {
    expect(ENTRY_GZIP_BUDGET_BYTES).toBe(35 * 1024)
    const plugin = entryBudgetPlugin({ maxGzipBytes: 20 })
    const context = {
      error(message) {
        throw new Error(message)
      }
    }

    expect(() => plugin.generateBundle.call(context, {}, {
      main: {
        type: 'chunk',
        isEntry: true,
        fileName: 'assets/js/index.js',
        code: 'const values = [' + Array.from({ length: 200 }, (_, index) => index).join(',') + ']'
      }
    })).toThrow(/exceeds the 20 byte entry budget/)
  })

  it('enforces a dedicated gzip budget for the Home route', () => {
    expect(HOME_GZIP_BUDGET_BYTES).toBe(55 * 1024)
    expect(ROUTE_GZIP_BUDGETS).toEqual({
      Home: 55 * 1024,
      Pricing: 25 * 1024,
      Workflows: 15 * 1024,
      Quiz: 8 * 1024,
      Comparison: 40 * 1024
    })
    const plugin = routeBudgetPlugin({ budgets: { Home: 20 } })
    const context = {
      error(message) {
        throw new Error(message)
      }
    }

    expect(() => plugin.generateBundle.call(context, {}, {
      home: {
        type: 'chunk',
        name: 'Home',
        fileName: 'assets/js/Home.js',
        code: 'const values = [' + Array.from({ length: 200 }, (_, index) => index).join(',') + ']'
      }
    })).toThrow(/Home gzip size .* exceeds the 20 byte route budget/)
  })

  it('prevents Matcher from pulling the full catalog back into its dependency graph', () => {
    const plugin = routeDependencyGuardPlugin()
    const context = {
      error(message) {
        throw new Error(message)
      }
    }

    expect(() => plugin.generateBundle.call(context, {}, {
      matcher: {
        type: 'chunk',
        name: 'Matcher',
        fileName: 'assets/js/Matcher.js',
        imports: ['assets/js/tools.js'],
        modules: { 'D:/repo/src/views/Matcher.vue': {} }
      },
      tools: {
        type: 'chunk',
        name: 'tools',
        fileName: 'assets/js/tools.js',
        imports: [],
        modules: { 'D:\\repo\\src\\data\\tools.js': {} }
      }
    })).toThrow(/Matcher must not depend on \/src\/data\/tools\.js/)
  })

  it('prevents Home from pulling the full catalog back into its dependency graph', () => {
    const plugin = routeDependencyGuardPlugin()
    const context = {
      error(message) {
        throw new Error(message)
      }
    }

    expect(() => plugin.generateBundle.call(context, {}, {
      home: {
        type: 'chunk',
        name: 'Home',
        fileName: 'assets/js/Home.js',
        imports: ['assets/js/tools.js'],
        modules: { 'D:/repo/src/views/Home.vue': {} }
      },
      tools: {
        type: 'chunk',
        name: 'tools',
        fileName: 'assets/js/tools.js',
        imports: [],
        modules: { 'D:\\repo\\src\\data\\tools.js': {} }
      }
    })).toThrow(/Home must not depend on \/src\/data\/tools\.js/)
  })

  it.each(['Pricing', 'Workflows', 'Quiz'])(
    'prevents %s from pulling the full catalog back into its dependency graph',
    (chunkName) => {
      const plugin = routeDependencyGuardPlugin()
      const context = {
        error(message) {
          throw new Error(message)
        }
      }

      expect(() => plugin.generateBundle.call(context, {}, {
        route: {
          type: 'chunk',
          name: chunkName,
          fileName: `assets/js/${chunkName}.js`,
          imports: ['assets/js/tools.js'],
          modules: { [`D:/repo/src/views/${chunkName}.vue`]: {} }
        },
        tools: {
          type: 'chunk',
          name: 'tools',
          fileName: 'assets/js/tools.js',
          imports: [],
          modules: { 'D:\\repo\\src\\data\\tools.js': {} }
        }
      })).toThrow(new RegExp(`${chunkName} must not depend on /src/data/tools\\.js`))
    }
  )

  it('prevents Comparison from pulling the full catalog back into its dependency graph', () => {
    const plugin = routeDependencyGuardPlugin()
    const context = {
      error(message) {
        throw new Error(message)
      }
    }

    expect(() => plugin.generateBundle.call(context, {}, {
      comparison: {
        type: 'chunk',
        name: 'Comparison',
        fileName: 'assets/js/Comparison.js',
        imports: ['assets/js/tools.js'],
        modules: { 'D:/repo/src/views/Comparison.vue': {} }
      },
      tools: {
        type: 'chunk',
        name: 'tools',
        fileName: 'assets/js/tools.js',
        imports: [],
        modules: { 'D:\\repo\\src\\data\\tools.js': {} }
      }
    })).toThrow(/Comparison must not depend on \/src\/data\/tools\.js/)
  })

  it('prevents ToolDetail from pulling the full catalog back into its static dependency graph', () => {
    const plugin = routeDependencyGuardPlugin()
    const context = {
      error(message) {
        throw new Error(message)
      }
    }

    expect(() => plugin.generateBundle.call(context, {}, {
      detail: {
        type: 'chunk',
        name: 'ToolDetail',
        fileName: 'assets/js/ToolDetail.js',
        imports: ['assets/js/tools.js'],
        modules: { 'D:/repo/src/views/ToolDetail.vue': {} }
      },
      tools: {
        type: 'chunk',
        name: 'tools',
        fileName: 'assets/js/tools.js',
        imports: [],
        modules: { 'D:\\repo\\src\\data\\tools.js': {} }
      }
    })).toThrow(/ToolDetail must not depend on \/src\/data\/tools\.js/)
  })
})
