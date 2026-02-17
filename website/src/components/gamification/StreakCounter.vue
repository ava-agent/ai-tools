<template>
  <div
    v-if="currentStreak > 0"
    class="flex items-center gap-1 group relative"
    :title="`连续 ${currentStreak} 天 | 最长: ${longestStreak} 天`"
  >
    <Flame
      class="w-4 h-4 transition-colors duration-300"
      :class="currentStreak >= 7 ? 'text-orange-400' : 'text-orange-400/60'"
    />
    <span
      class="text-sm font-semibold"
      :class="currentStreak >= 7 ? 'text-orange-400' : 'text-white/60'"
    >
      {{ currentStreak }}
    </span>

    <!-- Tooltip -->
    <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-surface rounded-lg text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-white/10">
      <span class="text-white/40">最长:</span> {{ longestStreak }} 天
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Flame } from 'lucide-vue-next'
import { useGamificationStore } from '../../stores/gamification.js'

const store = useGamificationStore()

const currentStreak = computed(() => store.streak.current)
const longestStreak = computed(() => store.streak.longest)
</script>
