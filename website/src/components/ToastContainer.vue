<template>
  <Teleport to="body">
    <div
      data-testid="toast-region"
      class="fixed left-3 right-3 bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] z-[100] space-y-2 pointer-events-none sm:left-auto sm:right-6 sm:bottom-6 sm:w-[min(24rem,calc(100vw-3rem))]"
    >
      <TransitionGroup name="toast">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          data-testid="toast-surface"
          class="flex w-full max-w-full min-w-0 items-start gap-3 rounded-xl border px-3 py-3 shadow-lg backdrop-blur-xl pointer-events-auto sm:rounded-2xl sm:px-4"
          :class="toastClasses(toast.type)"
          :role="toast.type === 'error' ? 'alert' : 'status'"
          :aria-live="toast.type === 'error' ? 'assertive' : 'polite'"
          style="background: rgba(255, 255, 255, 0.06)"
        >
          <CheckCircle
            v-if="toast.type === 'success'"
            class="w-5 h-5 flex-shrink-0"
          />
          <AlertCircle
            v-if="toast.type === 'error'"
            class="w-5 h-5 flex-shrink-0"
          />
          <Info
            v-if="toast.type === 'info'"
            class="w-5 h-5 flex-shrink-0"
          />
          <span data-testid="toast-message" class="min-w-0 flex-1 break-words text-sm text-white">{{ toast.message }}</span>
          <button
            type="button"
            class="ml-1 min-h-11 min-w-11 flex flex-shrink-0 items-center justify-center rounded-full"
            aria-label="关闭通知"
            @click="removeToast(toast.id)"
          >
            <X class="w-4 h-4 text-white/60 hover:text-white transition-colors" />
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup>
import { computed } from 'vue'
import { useUIStore } from '../stores/ui'
import { CheckCircle, AlertCircle, Info, X } from 'lucide-vue-next'

const uiStore = useUIStore()

const toasts = computed(() => uiStore.toasts)

function removeToast(id) {
  uiStore.removeToast(id)
}

function toastClasses(type) {
  switch (type) {
    case 'success':
      return 'border-[#30d158]/30 text-[#30d158]'
    case 'error':
      return 'border-[#ff453a]/30 text-[#ff453a]'
    case 'info':
      return 'border-[#0a84ff]/30 text-[#0a84ff]'
    default:
      return 'border-[#30d158]/30 text-[#30d158]'
  }
}
</script>

<style scoped>
.toast-enter-active {
  transition: all 0.3s ease-out;
}
.toast-leave-active {
  transition: all 0.2s ease-in;
}
.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.toast-move {
  transition: transform 0.3s ease;
}
</style>
