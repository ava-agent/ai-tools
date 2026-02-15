<template>
  <router-link
    v-if="todayTool"
    :to="{ name: 'tool-detail', params: { id: todayTool.id } }"
    class="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/15 hover:bg-primary/10 transition-colors group cursor-pointer"
    @click="onExplore"
  >
    <div class="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
      <Sparkles class="w-5 h-5 text-yellow-400" />
    </div>
    <div class="flex-1 min-w-0">
      <div class="flex items-center gap-2">
        <span class="text-xs text-yellow-400/70 uppercase tracking-wider font-medium">每日推荐</span>
        <span
          v-if="!explored"
          class="text-xs text-primary/60"
        >+10 XP</span>
      </div>
      <p class="text-sm font-semibold text-white truncate group-hover:text-primary transition-colors">
        {{ todayTool.name }}
      </p>
    </div>
    <div class="flex items-center space-x-0.5 flex-shrink-0">
      <Star
        v-for="i in 5"
        :key="i"
        class="w-3 h-3"
        :class="i <= (todayTool.personalExperience?.rating || 0) ? 'text-primary fill-primary' : 'text-white/20'"
      />
    </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import { Sparkles, Star } from 'lucide-vue-next'
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
