<template>
  <teleport to="body">
    <transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="translate-y-full opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-full opacity-0"
    >
      <div
        v-if="currentToast"
        data-testid="achievement-toast"
        class="fixed bottom-3 left-1/2 z-[100] w-[calc(100vw-2rem)] max-w-xs -translate-x-1/2 pointer-events-none sm:bottom-6 sm:max-w-sm"
        style="padding-bottom: env(safe-area-inset-bottom);"
      >
        <div
          data-testid="achievement-toast-surface"
          class="flex pointer-events-auto items-center gap-3 px-3 py-3 rounded-xl border backdrop-blur-lg shadow-2xl sm:gap-4 sm:px-5 sm:py-4 sm:rounded-2xl"
          :class="[currentToast.tierStyle.bg, currentToast.tierStyle.border]"
        >
          <div class="flex-shrink-0">
            <Trophy
              class="w-6 h-6 sm:w-8 sm:h-8"
              :class="currentToast.tierStyle.color"
            />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-xs text-white/50 uppercase tracking-wider mb-0.5">
              成就解锁
            </p>
            <p class="text-white text-sm font-bold truncate sm:text-base">
              {{ currentToast.name }}
            </p>
            <p class="text-white/60 text-xs truncate sm:text-sm">
              {{ currentToast.description }}
            </p>
          </div>
          <div class="flex-shrink-0 text-right">
            <span
              class="text-xs font-bold sm:text-sm"
              :class="currentToast.tierStyle.color"
            >
              +{{ currentToast.xp }} XP
            </span>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { computed, watch, onUnmounted } from 'vue'
import { Trophy } from 'lucide-vue-next'
import { useAchievementsStore } from '../../stores/achievements.js'

const achievements = useAchievementsStore()

const currentToast = computed(() => achievements.toastQueue[0] || null)

let dismissTimer = null

// Auto-dismiss after 4 seconds
watch(currentToast, (toast) => {
  clearTimeout(dismissTimer)
  if (toast) {
    dismissTimer = setTimeout(() => {
      achievements.dismissToast()
    }, 4000)
  }
})

onUnmounted(() => {
  clearTimeout(dismissTimer)
})
</script>
