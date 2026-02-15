<template>
  <Teleport to="body">
    <div class="fixed bottom-6 right-6 z-[100] space-y-2 pointer-events-none">
      <TransitionGroup name="toast">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          class="flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg backdrop-blur-md border pointer-events-auto max-w-sm"
          :class="toastClasses(toast.type)"
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
          <span class="text-sm text-white flex-1">{{ toast.message }}</span>
          <button
            class="ml-1 flex-shrink-0"
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
      return 'bg-green-500/20 border-green-500/30 text-green-400'
    case 'error':
      return 'bg-red-500/20 border-red-500/30 text-red-400'
    case 'info':
      return 'bg-blue-500/20 border-blue-500/30 text-blue-400'
    default:
      return 'bg-green-500/20 border-green-500/30 text-green-400'
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
