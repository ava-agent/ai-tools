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
        class="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] max-w-sm w-full mx-4"
      >
        <div
          class="flex items-center gap-4 px-5 py-4 rounded-2xl border backdrop-blur-lg shadow-2xl"
          :class="[currentToast.tierStyle.bg, currentToast.tierStyle.border]"
        >
          <div class="flex-shrink-0">
            <Trophy class="w-8 h-8" :class="currentToast.tierStyle.color" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-xs text-white/50 uppercase tracking-wider mb-0.5">
              成就解锁
            </p>
            <p class="text-white font-bold truncate">
              {{ currentToast.name }}
            </p>
            <p class="text-white/60 text-sm truncate">
              {{ currentToast.description }}
            </p>
          </div>
          <div class="flex-shrink-0 text-right">
            <span class="text-sm font-bold" :class="currentToast.tierStyle.color">
              +{{ currentToast.xp }} XP
            </span>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { computed, watch } from 'vue'
import { Trophy } from 'lucide-vue-next'
import { useAchievementsStore } from '../../stores/achievements.js'

const achievements = useAchievementsStore()

const currentToast = computed(() => achievements.toastQueue[0] || null)

// Auto-dismiss after 4 seconds
watch(currentToast, (toast) => {
  if (toast) {
    setTimeout(() => {
      achievements.dismissToast()
    }, 4000)
  }
})
</script>
