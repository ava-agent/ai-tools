<template>
  <div>
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-bold text-white flex items-center gap-2">
        <Trophy class="w-5 h-5 text-yellow-400" />
        成就
      </h3>
      <span class="text-sm text-white/40">
        {{ unlocked }} / {{ total }}
      </span>
    </div>

    <div class="grid grid-cols-3 sm:grid-cols-5 gap-3">
      <div
        v-for="achievement in achievements"
        :key="achievement.id"
        class="relative flex flex-col items-center p-3 rounded-xl border transition-all duration-300"
        :class="achievement.unlocked
          ? [achievement.tierStyle.bg, achievement.tierStyle.border, 'cursor-default']
          : 'bg-white/[0.04] border-white/[0.04] opacity-40 grayscale'"
        :title="achievement.unlocked ? `${achievement.name}: ${achievement.description}` : '???'"
      >
        <Trophy
          class="w-6 h-6 mb-1.5"
          :class="achievement.unlocked ? achievement.tierStyle.color : 'text-white/30'"
        />
        <span
          class="text-xs text-center leading-tight"
          :class="achievement.unlocked ? 'text-white/80' : 'text-white/30'"
        >
          {{ achievement.unlocked ? achievement.name : '???' }}
        </span>
        <span
          v-if="achievement.unlocked"
          class="mt-1 text-[10px]"
          :class="achievement.tierStyle.color"
        >
          {{ achievement.tierStyle.label }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Trophy } from 'lucide-vue-next'
import { useAchievementsStore } from '../../stores/achievements.js'

const store = useAchievementsStore()

const achievements = computed(() => store.allAchievements)
const unlocked = computed(() => store.unlockedCount)
const total = computed(() => store.totalCount)
</script>
