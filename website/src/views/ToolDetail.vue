<template>
  <div
    v-if="tool"
    class="min-h-screen"
  >
    <!-- Back nav header -->
    <div class="max-w-[720px] mx-auto px-5 py-3 flex items-center gap-3">
      <button
        class="text-[13px] text-[#0a84ff] cursor-pointer"
        @click="$router.back()"
      >
        &larr; 返回
      </button>
      <div class="flex-1 text-center text-sm font-semibold text-white">
        {{ tool.name }}
      </div>
      <div class="w-12" />
    </div>

    <!-- Content area -->
    <div class="max-w-[720px] mx-auto px-5 pb-16">
      <!-- Tool header -->
      <div class="glass-card p-5 mb-4">
        <div class="flex items-start gap-4 mb-6">
          <ToolLogo
            :tool-id="tool.id"
            :tool-name="tool.name"
            size="xl"
          />
          <div class="flex-1">
            <div
              class="text-2xl font-bold text-white"
              style="letter-spacing: -0.5px;"
            >
              {{ tool.name }}
            </div>
            <div class="text-sm text-white/45 mt-0.5">
              {{ tool.developer }}
            </div>
            <div class="flex items-center gap-3 mt-2">
              <StarRating
                :rating="tool.personalExperience?.rating || 0"
                size="md"
                class="text-[#ffd60a]"
              />
              <div class="text-[13px] text-[#30d158] font-semibold">
                {{ tool.personalExperience?.rating?.toFixed(1) }}
              </div>
              <div class="text-xs text-white/30">
                |
              </div>
              <div class="text-xs text-white/40">
                {{ tool.funRanking }}
              </div>
            </div>
          </div>
          <a
            v-if="mainLink"
            :href="mainLink"
            target="_blank"
            rel="noopener"
            class="btn-capsule flex-shrink-0"
          >访问官网</a>
        </div>

        <!-- Info grid -->
        <div class="grid grid-cols-3 gap-[10px] mb-5">
          <div class="info-cell">
            <div class="text-[11px] text-white/35 mb-1">
              定价
            </div>
            <div class="text-sm font-semibold text-white">
              {{ pricingDisplay }}
            </div>
          </div>
          <div class="info-cell">
            <div class="text-[11px] text-white/35 mb-1">
              上下文
            </div>
            <div class="text-sm font-semibold text-white">
              {{ tool.contextWindow || '-' }}
            </div>
          </div>
          <div class="info-cell">
            <div class="text-[11px] text-white/35 mb-1">
              中文支持
            </div>
            <div class="text-sm font-semibold text-white">
              {{ chineseSupportStars }}
            </div>
          </div>
        </div>

        <!-- Best for -->
        <div
          v-if="tool.bestFor"
          class="text-[13px] text-white/50 leading-relaxed"
        >
          {{ tool.bestFor }}
        </div>
      </div>

      <!-- Insight card -->
      <div
        v-if="tool.personalExperience?.insights"
        class="glass-card p-4 mb-4"
      >
        <div class="text-[13px] font-semibold text-white mb-2">
          💡 使用心得
        </div>
        <div class="text-[13px] text-white/55 leading-relaxed">
          {{ tool.personalExperience.insights }}
        </div>
      </div>

      <!-- Radar chart -->
      <div
        v-if="tool.personalExperience"
        class="glass-card p-4 mb-4"
      >
        <div class="text-[13px] font-semibold text-white mb-3">
          📊 评分雷达
        </div>
        <ScoreRadar :tool="tool" />
      </div>

      <!-- Pitfalls -->
      <div
        v-if="tool.personalExperience?.pitfalls?.length"
        class="glass-card p-4 mb-4"
      >
        <div class="text-[13px] font-semibold text-[#ffd60a] mb-2">
          ⚠️ 注意事项
        </div>
        <div class="text-xs text-white/50 leading-loose">
          <div
            v-for="pitfall in tool.personalExperience.pitfalls"
            :key="pitfall"
          >
            • {{ pitfall }}
          </div>
        </div>
      </div>

      <!-- Pros / Cons dual column -->
      <div class="grid grid-cols-2 gap-[10px] mb-4">
        <div
          class="rounded-xl p-4"
          style="background: rgba(48,209,88,0.04); border: 1px solid rgba(48,209,88,0.1);"
        >
          <div class="text-[13px] font-semibold text-[#30d158] mb-2">
            优势
          </div>
          <div class="text-xs text-white/50 leading-loose">
            <div
              v-for="pro in tool.pros"
              :key="pro"
            >
              • {{ pro }}
            </div>
          </div>
        </div>
        <div
          class="rounded-xl p-4"
          style="background: rgba(255,69,58,0.04); border: 1px solid rgba(255,69,58,0.1);"
        >
          <div class="text-[13px] font-semibold text-[#ff453a] mb-2">
            劣势
          </div>
          <div class="text-xs text-white/50 leading-loose">
            <div
              v-for="con in tool.cons"
              :key="con"
            >
              • {{ con }}
            </div>
          </div>
        </div>
      </div>

      <!-- SWOT grid -->
      <div
        v-if="tool.swot"
        class="glass-card p-4 mb-4"
      >
        <div class="text-[13px] font-semibold text-white mb-3">
          📋 SWOT 分析
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div
            class="py-2.5 px-3 rounded-r-lg"
            style="background: rgba(48,209,88,0.06); border-left: 3px solid #30d158;"
          >
            <div class="text-[11px] font-semibold text-[#30d158] mb-1">
              S 优势
            </div>
            <div class="text-xs text-white/50">
              {{ tool.swot.S }}
            </div>
          </div>
          <div
            class="py-2.5 px-3 rounded-r-lg"
            style="background: rgba(255,69,58,0.06); border-left: 3px solid #ff453a;"
          >
            <div class="text-[11px] font-semibold text-[#ff453a] mb-1">
              W 劣势
            </div>
            <div class="text-xs text-white/50">
              {{ tool.swot.W }}
            </div>
          </div>
          <div
            class="py-2.5 px-3 rounded-r-lg"
            style="background: rgba(10,132,255,0.06); border-left: 3px solid #0a84ff;"
          >
            <div class="text-[11px] font-semibold text-[#0a84ff] mb-1">
              O 机会
            </div>
            <div class="text-xs text-white/50">
              {{ tool.swot.O }}
            </div>
          </div>
          <div
            class="py-2.5 px-3 rounded-r-lg"
            style="background: rgba(255,159,10,0.06); border-left: 3px solid #ff9f0a;"
          >
            <div class="text-[11px] font-semibold text-[#ff9f0a] mb-1">
              T 威胁
            </div>
            <div class="text-xs text-white/50">
              {{ tool.swot.T }}
            </div>
          </div>
        </div>
      </div>

      <!-- Versions -->
      <div
        v-if="tool.versions?.length"
        class="glass-card p-4 mb-4"
      >
        <div class="text-[13px] font-semibold text-white mb-3">
          🔗 版本与链接
        </div>
        <div class="space-y-2">
          <a
            v-for="version in tool.versions"
            :key="version.type"
            :href="version.link"
            target="_blank"
            rel="noopener noreferrer"
            class="block py-2.5 px-3 rounded-lg text-[13px] text-white/60 hover:text-white transition-colors"
            style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06);"
          >
            <div class="flex items-center justify-between">
              <span class="font-medium text-white/80">{{ version.type }}</span>
              <span class="text-[11px] text-[#0a84ff]">{{ version.pricing }}</span>
            </div>
            <div
              v-if="version.models"
              class="text-[11px] text-white/35 mt-0.5"
            >
              {{ version.models }}
            </div>
          </a>
        </div>
      </div>

      <!-- Community rating -->
      <div class="glass-card p-4 mb-4">
        <div class="text-[13px] font-semibold text-white mb-3">
          ⭐ 社区评价
        </div>
        <ToolRating :tool-id="tool.id" />
      </div>

      <!-- Fun fact -->
      <FunFact
        v-if="tool"
        :tool-id="tool.id"
        class="mb-4"
      />

      <!-- Community reviews -->
      <div class="glass-card p-4 mb-4">
        <ToolReviews :tool-id="tool.id" />
      </div>

      <!-- Tags -->
      <div
        v-if="tool.tags?.length"
        class="flex flex-wrap gap-1.5 mb-4"
      >
        <span
          v-for="tag in tool.tags"
          :key="tag"
          :class="tag === '推荐' ? 'tag-pill tag-pill-highlight' : 'tag-pill tag-pill-default'"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Related tools -->
      <div
        v-if="relatedTools.length > 0"
        class="glass-card p-4"
      >
        <div class="text-[13px] font-semibold text-white mb-3">
          🔄 相关工具
        </div>
        <div class="grid grid-cols-2 gap-2">
          <router-link
            v-for="related in relatedTools"
            :key="related.id"
            :to="{ name: 'tool-detail', params: { id: related.id } }"
            class="block py-2.5 px-3 rounded-lg transition-colors hover:bg-white/[0.06]"
            style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);"
          >
            <div class="text-[13px] font-semibold text-white truncate">
              {{ related.name }}
            </div>
            <div class="text-[11px] text-white/35 truncate mt-0.5">
              {{ related.developer }}
            </div>
            <div class="flex items-center gap-1 mt-1">
              <StarRating
                :rating="related.personalExperience?.rating || 0"
                size="xs"
                class="text-[#ffd60a]"
              />
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <!-- Not found -->
  <div
    v-else
    class="text-center py-20"
  >
    <p class="text-xl text-white/60">
      未找到该工具
    </p>
    <router-link
      to="/"
      class="btn-capsule mt-4 inline-block"
    >
      返回列表
    </router-link>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useToolsStore } from '../stores/tools'
import { useGamificationStore } from '../stores/gamification'
import { useAchievementsStore } from '../stores/achievements'
import FunFact from '../components/gamification/FunFact.vue'
import ToolRating from '../components/ToolRating.vue'
import ToolReviews from '../components/ToolReviews.vue'
import ScoreRadar from '@/components/ScoreRadar.vue'
import ToolLogo from '../components/ToolLogo.vue'
import StarRating from '../components/StarRating.vue'

const route = useRoute()
const toolsStore = useToolsStore()
const gamification = useGamificationStore()
const achievements = useAchievementsStore()

const tool = computed(() => {
  return toolsStore.tools.find((t) => t.id === route.params.id)
})

const relatedTools = computed(() => {
  const current = tool.value
  if (!current) return []
  return toolsStore.tools
    .filter((t) => t.id !== current.id)
    .map((t) => {
      let score = 0
      if (t.category === current.category) score += 10
      if (t.subcategory === current.subcategory) score += 5
      const sharedTags = (t.tags || []).filter((tag) => (current.tags || []).includes(tag))
      score += sharedTags.length * 2
      return { ...t, _score: score }
    })
    .sort((a, b) => b._score - a._score)
    .slice(0, 4)
})

// Pricing display from first version
const pricingDisplay = computed(() => {
  const versions = tool.value?.versions
  if (!versions || versions.length === 0) return '-'
  return versions[0].pricing || '-'
})

// Chinese support stars
const chineseSupportStars = computed(() => {
  const level = tool.value?.chineseSupport || 0
  return '★'.repeat(level) + '☆'.repeat(5 - level)
})

// Main link from first version
const mainLink = computed(() => {
  const versions = tool.value?.versions
  if (!versions || versions.length === 0) return null
  return versions[0].link || null
})

onMounted(() => {
  document.title = `${tool.value?.name || '工具详情'} - AI工具全书`
  if (tool.value) {
    gamification.trackToolView(tool.value.id)
    achievements.checkAll()
  }
})

// Also track and update title when navigating between tools via related links
watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      const t = toolsStore.tools.find((item) => item.id === newId)
      document.title = `${t?.name || '工具详情'} - AI工具全书`
      gamification.trackToolView(newId)
      achievements.checkAll()
    }
  },
)
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
