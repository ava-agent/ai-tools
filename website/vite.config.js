import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

const srcDir = resolve(process.cwd(), 'src')
const vendorPackages = ['vue', 'vue-router', 'pinia']

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

export default defineConfig(({ mode }) => ({
  base: getBasePath(),
  plugins: [
    vue()
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