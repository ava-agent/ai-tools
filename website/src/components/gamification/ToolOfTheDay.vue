<template>
  <div
    v-if="todayTool"
    class="relative overflow-hidden rounded-2xl p-[1px] mb-8"
  >
    <!-- Animated gradient border -->
    <div class="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-border rounded-2xl" />

    <div class="relative bg-background rounded-2xl p-6">
      <div class="flex items-start justify-between">
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-2">
            <Sparkles class="w-5 h-5 text-yellow-400" />
            <span class="text-sm font-medium text-yellow-400 uppercase tracking-wider">
              每日推荐
            </span>
          </div>
          <h3 class="text-2xl font-bold text-white mb-1">
            {{ todayTool.name }}
          </h3>
          <p class="text-white/50 text-sm mb-3">
            {{ todayTool.developer }}
          </p>
          <p class="text-white/70 mb-4">
            {{ todayTool.bestFor }}
          </p>
          <div class="flex items-center gap-3">
            <router-link
              :to="{ name: 'tool-detail', params: { id: todayTool.id } }"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors text-sm font-medium"
              @click="onExplore"
            >
              <ArrowRight class="w-4 h-4" />
              {{ explored ? '已探索' : '探索 +10 XP' }}
            </router-link>
            <div class="flex items-center space-x-0.5">
              <Star
                v-for="i in 5"
                :key="i"
                class="w-4 h-4"
                :class="i <= (todayTool.personalExperience?.rating || 0) ? 'text-primary fill-primary' : 'text-white/20'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Sparkles, ArrowRight, Star } from 'lucide-vue-next'
import { useToolsStore } from '../../stores/tools.js'
import { useGamificationStore } from '../../stores/gamification.js'
import { useAchievementsStore } from '../../stores/achievements.js'
import { getToolOfTheDay } from '../../data/toolOfTheDay.js'

const toolsStore = useToolsStore()
const gamification = useGamificationStore()
const achievements = useAchievementsStore()

const todayTool = computed(() => getToolOfTheDay(toolsStore.tools))

const explored = computed(() => {
  const today = new Date().toISOString().slice(0, 10)
  return gamification.dailyToolSeen === today
})

function onExplore() {
  gamification.trackDailyTool()
  achievements.checkAll()
}
</script>

<style scoped>
@keyframes gradient-border {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient-border {
  background-size: 200% 200%;
  animation: gradient-border 3s ease infinite;
}
</style>
