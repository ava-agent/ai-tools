import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import { gzipSync } from 'node:zlib'
import { copyFile } from 'node:fs/promises'

const srcDir = resolve(process.cwd(), 'src')
const vendorPackages = ['vue', 'vue-router', 'pinia']
export const ENTRY_GZIP_BUDGET_BYTES = 35 * 1024
export const HOME_GZIP_BUDGET_BYTES = 55 * 1024
export const ROUTE_GZIP_BUDGETS = {
  Home: HOME_GZIP_BUDGET_BYTES,
  Pricing: 25 * 1024,
  Workflows: 15 * 1024,
  Quiz: 8 * 1024,
  Comparison: 40 * 1024
}

export function getBasePath(env = process.env) {
  return env.GITHUB_ACTIONS ? '/ai-tools/' : '/'
}

export function manualChunks(id) {
  const normalizedId = id.replace(/\\/g, '/')
  if (vendorPackages.some((pkg) => normalizedId.includes(`/node_modules/${pkg}/`))) {
    return 'vue-vendor'
  }
  if (normalizedId.includes('/node_modules/lucide-vue-next/')) {
    return 'icons'
  }
  return undefined
}

export function entryBudgetPlugin({ maxGzipBytes = ENTRY_GZIP_BUDGET_BYTES } = {}) {
  return {
    name: 'entry-gzip-budget',
    generateBundle(_options, bundle) {
      for (const output of Object.values(bundle)) {
        if (output.type !== 'chunk' || !output.isEntry) continue
        const gzipBytes = gzipSync(output.code).byteLength
        if (gzipBytes > maxGzipBytes) {
          this.error(
            `${output.fileName} gzip size ${gzipBytes} bytes exceeds the ${maxGzipBytes} byte entry budget`
          )
        }
      }
    }
  }
}

export function routeBudgetPlugin({
  budgets = ROUTE_GZIP_BUDGETS
} = {}) {
  return {
    name: 'route-gzip-budget',
    generateBundle(_options, bundle) {
      for (const [chunkName, maxGzipBytes] of Object.entries(budgets)) {
        const chunk = Object.values(bundle).find(
          (output) => output.type === 'chunk' && output.name === chunkName
        )
        if (!chunk) continue
        const gzipBytes = gzipSync(chunk.code).byteLength
        if (gzipBytes > maxGzipBytes) {
          this.error(
            `${chunkName} gzip size ${gzipBytes} bytes exceeds the ${maxGzipBytes} byte route budget`
          )
        }
      }
    }
  }
}

export function routeDependencyGuardPlugin({
  rules = [
    { chunkName: 'Home', forbiddenModule: '/src/data/tools.js' },
    { chunkName: 'Pricing', forbiddenModule: '/src/data/tools.js' },
    { chunkName: 'Workflows', forbiddenModule: '/src/data/tools.js' },
    { chunkName: 'Quiz', forbiddenModule: '/src/data/tools.js' },
    { chunkName: 'Matcher', forbiddenModule: '/src/data/tools.js' },
    { chunkName: 'Comparison', forbiddenModule: '/src/data/tools.js' },
    { chunkName: 'ToolDetail', forbiddenModule: '/src/data/tools.js' }
  ]
} = {}) {
  return {
    name: 'route-dependency-guard',
    generateBundle(_options, bundle) {
      const chunks = Object.values(bundle).filter((output) => output.type === 'chunk')
      const chunksByFile = new Map(chunks.map((chunk) => [chunk.fileName, chunk]))

      for (const rule of rules) {
        const entryChunk = chunks.find((chunk) => chunk.name === rule.chunkName)
        if (!entryChunk) continue

        const pending = [entryChunk]
        const visited = new Set()
        while (pending.length) {
          const chunk = pending.pop()
          if (!chunk || visited.has(chunk.fileName)) continue
          visited.add(chunk.fileName)

          const includesForbiddenModule = Object.keys(chunk.modules || {}).some((id) =>
            id.replace(/\\/g, '/').endsWith(rule.forbiddenModule)
          )
          if (includesForbiddenModule) {
            this.error(
              `${rule.chunkName} must not depend on ${rule.forbiddenModule}; use its generated lightweight index`
            )
          }

          for (const importedFile of chunk.imports || []) {
            pending.push(chunksByFile.get(importedFile))
          }
        }
      }
    }
  }
}

export function githubPagesFallbackPlugin({
  enabled = Boolean(process.env.GITHUB_ACTIONS)
} = {}) {
  return {
    name: 'github-pages-history-fallback',
    apply: 'build',
    async writeBundle(outputOptions) {
      if (!enabled) return
      const outputDir = resolve(process.cwd(), outputOptions.dir || 'dist')
      await copyFile(
        resolve(outputDir, 'index.html'),
        resolve(outputDir, '404.html')
      )
    }
  }
}

export default defineConfig(({ mode }) => ({
  base: getBasePath(),
  plugins: [
    vue(),
    entryBudgetPlugin(),
    routeBudgetPlugin(),
    routeDependencyGuardPlugin(),
    githubPagesFallbackPlugin()
  ],
  resolve: {
    alias: {
      '@': srcDir
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: mode === 'development',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks,
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/i.test(assetInfo.name)) {
            return 'assets/images/[name]-[hash][extname]'
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return 'assets/fonts/[name]-[hash][extname]'
          }
          return 'assets/[ext]/[name]-[hash][extname]'
        }
      }
    },
    chunkSizeWarningLimit: 500,
    // Optimize build output for modern browsers.
    target: 'es2020',
    cssTarget: 'chrome80'
  },
  server: {
    port: 8765,
    strictPort: false,
    host: '127.0.0.1',
    open: false,
    cors: true,
    // Development server defaults.
    hmr: {
      overlay: false
    }
  },
  preview: {
    port: 8766,
    open: false
  },
  // Pre-bundle common app dependencies.
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia', 'lucide-vue-next', '@supabase/supabase-js'],
    exclude: []
  },
  // CSS debugging.
  css: {
    devSourcemap: true
  }
}))
