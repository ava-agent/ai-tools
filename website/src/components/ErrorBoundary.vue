<template>
  <div
    v-if="error"
    class="min-h-[50vh] flex items-center justify-center px-4"
    role="alert"
    aria-live="assertive"
  >
    <div class="text-center max-w-lg mx-auto p-8">
      <div class="w-20 h-20 mx-auto mb-6 bg-red-500/10 rounded-full flex items-center justify-center">
        <AlertTriangle class="w-10 h-10 text-red-500" />
      </div>
      <h2 class="text-2xl font-bold text-white mb-4">
        出错了
      </h2>
      <p class="text-muted mb-6 leading-relaxed">
        {{ errorMessage }}
      </p>
      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          class="btn-primary inline-flex items-center justify-center gap-2"
          @click="retry"
        >
          <RefreshCw class="w-4 h-4" />
          重试
        </button>
        <router-link
          to="/"
          class="btn-secondary inline-flex items-center justify-center gap-2"
          @click="goHome"
        >
          <Home class="w-4 h-4" />
          返回首页
        </router-link>
      </div>
      <!-- 错误详情 (开发环境) -->
      <details
        v-if="isDevelopment"
        class="mt-6 bg-white/5 rounded-lg p-4"
      >
        <summary class="cursor-pointer text-sm text-muted-light mb-2 hover:text-white transition-colors">
          错误详情 (仅开发环境)
        </summary>
        <pre class="text-xs text-red-400 overflow-auto max-h-40">{{ errorStack }}</pre>
      </details>
    </div>
  </div>
  <slot v-else />
</template>

<script setup>
import { ref, onErrorCaptured, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { AlertTriangle, RefreshCw, Home } from 'lucide-vue-next'

const router = useRouter()
const error = ref(null)
const errorMessage = ref('')
const errorStack = ref('')

const isDevelopment = computed(() => import.meta.env.DEV)

onErrorCaptured((err, instance, info) => {
  error.value = err
  errorMessage.value = err.message || '页面加载失败，请稍后重试'
  errorStack.value = err.stack || ''

  // 上报错误到监控服务
  reportError(err, instance, info)

  return false // 阻止错误继续传播
})

onMounted(() => {
  // 全局错误监听
  window.addEventListener('error', handleGlobalError)
  window.addEventListener('unhandledrejection', handleUnhandledRejection)
})

onUnmounted(() => {
  // 清理事件监听器
  window.removeEventListener('error', handleGlobalError)
  window.removeEventListener('unhandledrejection', handleUnhandledRejection)
})

const handleGlobalError = (event) => {
  error.value = event.error
  errorMessage.value = event.message || '发生未知错误'
  errorStack.value = event.error?.stack || ''
  reportError(event.error, null, 'global')
}

const handleUnhandledRejection = (event) => {
  error.value = event.reason
  errorMessage.value = event.reason?.message || '异步操作失败'
  errorStack.value = event.reason?.stack || ''
  reportError(event.reason, null, 'unhandledrejection')
}

const reportError = (err, instance, info) => {
  // 这里可以集成错误监控服务，如 Sentry
  console.error('[ErrorBoundary]', {
    error: err,
    component: instance?.$options?.name,
    info,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    userAgent: navigator.userAgent
  })
}

const retry = () => {
  error.value = null
  errorMessage.value = ''
  errorStack.value = ''
  window.location.reload()
}

const goHome = () => {
  error.value = null
  errorMessage.value = ''
  errorStack.value = ''
}
</script>
