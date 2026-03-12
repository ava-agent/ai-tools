<template>
  <div>
    <div
      v-if="insufficientTools"
      class="text-center py-12"
    >
      <p class="text-white/60">
        需要至少 2 个工具才能进行对决
      </p>
    </div>

    <div
      v-else-if="!matchup"
      class="text-center py-12"
    >
      <p class="text-white/60">
        加载对决中...
      </p>
    </div>

    <div v-else>
      <!-- Dimension -->
      <div class="text-center mb-8">
        <span class="px-4 py-2 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-sm font-medium">
          {{ matchup.dimension.question }}
        </span>
      </div>

      <!-- VS Layout -->
      <div class="grid md:grid-cols-2 gap-6">
        <button
          v-for="tool in [matchup.toolA, matchup.toolB]"
          :key="tool.id"
          class="glass-card text-left transition-all duration-300 cursor-pointer"
          :class="[
            voted && voted === tool.id ? 'ring-2 ring-[#0a84ff] bg-[#0a84ff]/5' : '',
            voted && voted !== tool.id ? 'opacity-50' : '',
            !voted ? 'hover:ring-2 hover:ring-[#0a84ff]/30' : '',
          ]"
          :disabled="!!voted"
          @click="vote(tool.id)"
        >
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-xl font-bold text-white">
              {{ tool.name }}
            </h3>
            <div class="flex items-center space-x-0.5">
              <Star
                v-for="i in 5"
                :key="i"
                class="w-4 h-4"
                :class="i <= (tool.personalExperience?.rating || 0) ? 'text-[#0a84ff] fill-[#0a84ff]' : 'text-white/20'"
              />
            </div>
          </div>
          <p class="text-white/50 text-sm mb-3">
            {{ tool.developer }}
          </p>
          <p class="text-white/70 text-sm mb-3">
            {{ tool.bestFor }}
          </p>
          <div class="flex flex-wrap gap-1">
            <span
              v-for="pro in (tool.pros || []).slice(0, 2)"
              :key="pro"
              class="px-2 py-0.5 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/20"
            >
              {{ pro.length > 20 ? pro.slice(0, 20) + '...' : pro }}
            </span>
          </div>

          <!-- Vote indicator -->
          <div
            v-if="voted === tool.id"
            class="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-2"
          >
            <CheckCircle class="w-4 h-4 text-[#0a84ff]" />
            <span class="text-sm text-[#0a84ff] font-medium">
              你的选择 +5 XP
            </span>
          </div>
        </button>
      </div>

      <!-- VS Divider (visible on desktop, centered between cards) -->
      <div class="hidden md:flex justify-center -my-3 relative z-10 pointer-events-none">
        <div class="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center">
          <Swords class="w-5 h-5 text-red-400" />
        </div>
      </div>

      <!-- Community Vote Results -->
      <BattleResults
        v-if="voted && currentBattleStats"
        :stats="currentBattleStats"
        :tool-a-name="matchup.toolA.name"
        :tool-b-name="matchup.toolB.name"
      />

      <!-- Next Battle -->
      <div class="text-center mt-8">
        <button
          class="pill pill-inactive"
          :disabled="isSubmitting"
          @click="newBattle"
        >
          <RefreshCw class="w-4 h-4 mr-2 inline" />
          下一场对决
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Star, Swords, CheckCircle, RefreshCw } from 'lucide-vue-next'
import { useToolsStore } from '../../stores/tools.js'
import { useGamificationStore } from '../../stores/gamification.js'
import { useAchievementsStore } from '../../stores/achievements.js'
import { useAuthStore } from '../../stores/auth.js'
import { useCommunityStore } from '../../stores/community.js'
import { generateMatchup } from '../../data/battleCategories.js'
import BattleResults from '../BattleResults.vue'

const toolsStore = useToolsStore()
const gamification = useGamificationStore()
const achievements = useAchievementsStore()
const authStore = useAuthStore()
const communityStore = useCommunityStore()

const matchup = ref(null)
const voted = ref(null)
const isSubmitting = ref(false)
const insufficientTools = computed(() => toolsStore.tools.length < 2)

function newBattle() {
  if (insufficientTools.value || isSubmitting.value) return
  matchup.value = generateMatchup(toolsStore.tools)
  voted.value = null
}

const currentBattleStats = computed(() => {
  if (!matchup.value) return null
  return communityStore.battleStats[matchup.value.matchupKey] || null
})

async function vote(toolId) {
  if (voted.value || isSubmitting.value) return
  voted.value = toolId
  isSubmitting.value = true

  // Capture snapshot before async — matchup must not change mid-flight
  const m = matchup.value
  gamification.trackBattleVote(m.matchupKey, toolId)
  achievements.checkAll()

  try {
    if (authStore.isAuthenticated && authStore.userId) {
      await communityStore.submitBattleVote(
        authStore.userId,
        m.matchupKey,
        toolId,
        m.dimension.id,
        m.toolA.id,
        m.toolB.id,
      )
    } else {
      // 匿名用户也尝试加载统计（只读）— use snapshot
      await communityStore.fetchBattleStats(m.matchupKey)
    }
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  newBattle()
})
</script>
