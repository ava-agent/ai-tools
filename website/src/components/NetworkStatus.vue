<template>
  <Transition name="network-status">
    <div
      v-if="!isOnline"
      data-testid="network-status"
      class="fixed left-3 right-3 top-[calc(env(safe-area-inset-top)+4.25rem)] z-[90] mx-auto flex max-w-xl items-start gap-3 rounded-lg border border-[#ffd60a]/35 bg-[#17140a]/95 px-4 py-3 text-[#fff4b8] shadow-xl backdrop-blur-xl"
      role="status"
      aria-live="polite"
    >
      <WifiOff
        class="mt-0.5 h-5 w-5 flex-shrink-0 text-[#ffd60a]"
        aria-hidden="true"
      />
      <div class="min-w-0">
        <p class="font-semibold text-white">
          当前处于离线状态
        </p>
        <p class="mt-0.5 text-sm leading-5 text-white/70">
          可以继续浏览已缓存内容；登录、同步和社区互动将在网络恢复后可用。
        </p>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { WifiOff } from 'lucide-vue-next'
import { useUIStore } from '../stores/ui'

const uiStore = useUIStore()
const isOnline = ref(typeof navigator === 'undefined' ? true : navigator.onLine)

function handleOffline() {
  isOnline.value = false
}

function handleOnline() {
  const recovered = !isOnline.value
  isOnline.value = true
  if (recovered) {
    uiStore.showToast('网络连接已恢复', 'success')
  }
}

onMounted(() => {
  window.addEventListener('online', handleOnline)
  window.addEventListener('offline', handleOffline)
})

onUnmounted(() => {
  window.removeEventListener('online', handleOnline)
  window.removeEventListener('offline', handleOffline)
})
</script>

<style scoped>
.network-status-enter-active,
.network-status-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.network-status-enter-from,
.network-status-leave-to {
  opacity: 0;
  transform: translateY(-0.5rem);
}
</style>
