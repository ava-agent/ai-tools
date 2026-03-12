<template>
  <div class="min-h-screen bg-background">
    <div class="container mx-auto px-4 py-8">
      <div
        v-if="tool"
        class="max-w-4xl mx-auto"
      >
        <!-- 面包屑导航 -->
        <nav
          aria-label="Breadcrumb"
          class="mb-6"
        >
          <ol class="flex items-center text-sm text-white/60 flex-wrap">
            <li class="flex items-center">
              <router-link
                to="/"
                class="hover:text-white transition-colors"
              >
                首页
              </router-link>
            </li>
            <li class="flex items-center">
              <ChevronRight class="w-4 h-4 mx-2" />
              <router-link
                :to="{ path: '/', query: { category: tool.category } }"
                class="hover:text-white transition-colors"
              >
                {{ getCategoryLabel(tool.category) }}
              </router-link>
            </li>
            <li class="flex items-center">
              <ChevronRight class="w-4 h-4 mx-2" />
              <span class="text-white/80">{{ tool.name }}</span>
            </li>
          </ol>
        </nav>

        <div class="card mb-8">
          <div class="flex items-start gap-4 mb-6">
            <ToolLogo
              :tool-id="tool.id"
              :tool-name="tool.name"
              size="xl"
            />
            <div class="flex-1">
              <h1 class="text-4xl font-bold text-white mb-2">
                {{ tool.name }}
              </h1>
              <p class="text-lg text-white/80 mb-1">
                {{ tool.developer }}
              </p>
              <div class="flex items-center space-x-1">
                <Star
                  v-for="i in 5"
                  :key="i"
                  class="w-5 h-5"
                  :class="i <= (tool.personalExperience?.rating || 0) ? 'text-primary fill-primary' : 'text-gray-600'"
                />
              </div>
            </div>
          </div>

          <div class="mb-6 flex items-center gap-3">
            <span 
              class="inline-block px-4 py-2 text-white text-lg rounded-full"
              :class="getCategoryColor(tool.category)"
            >
              {{ getCategoryLabel(tool.category) }}
            </span>
            <span
              v-if="tool.subcategory"
              class="text-white/60"
            >
              {{ tool.subcategory }}
            </span>
          </div>

          <div
            v-if="tool.freeQuota || tool.contextWindow"
            class="mb-6 flex flex-wrap gap-4 text-sm"
          >
            <div
              v-if="tool.freeQuota"
              class="flex items-center text-white/70"
            >
              <Lightbulb class="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
              免费额度: {{ tool.freeQuota }}
            </div>
            <div
              v-if="tool.contextWindow"
              class="flex items-center text-white/70"
            >
              <Ruler class="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
              上下文: {{ tool.contextWindow }}
            </div>
            <div
              v-if="tool.chineseSupport"
              class="flex items-center text-white/70"
            >
              <Globe class="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
              <span>中文支持:</span>
              <span class="flex items-center ml-1">
                <Star
                  v-for="i in 5"
                  :key="'cn-' + i"
                  class="w-3 h-3"
                  :class="i <= tool.chineseSupport ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'"
                />
              </span>
            </div>
          </div>

          <p class="text-xl text-white/90 mb-8">
            {{ tool.bestFor }}
          </p>

          <!-- 能力雷达图 -->
          <div
            v-if="tool.radarChart"
            class="mb-8"
          >
            <h2 class="text-2xl font-bold text-white mb-4 flex items-center">
              <BarChart3 class="w-6 h-6 text-primary mr-2" />
              能力雷达图
            </h2>
            <div class="bg-white/5 rounded-xl p-4 border border-white/10">
              <img
                :src="tool.radarChart"
                :alt="tool.name + ' 能力雷达图'"
                class="w-full max-w-lg mx-auto rounded-lg"
                loading="lazy"
              >
            </div>
          </div>

          <!-- 演示视频 -->
          <div
            v-if="tool.video"
            class="mb-8"
          >
            <h2 class="text-2xl font-bold text-white mb-4 flex items-center">
              <Video class="w-6 h-6 text-primary mr-2" />
              演示视频
            </h2>
            <VideoPlayer
              :src="tool.video.src"
              :thumbnail="tool.video.thumbnail"
            />
          </div>

          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 class="text-2xl font-bold text-white mb-4 flex items-center">
                <CheckCircle class="w-6 h-6 text-green-500 mr-2" />
                优势
              </h2>
              <ul class="space-y-3 text-white/80">
                <li
                  v-for="pro in (tool.pros || [])"
                  :key="pro"
                  class="flex items-start"
                >
                  <span class="text-green-500 mr-3 text-xl">•</span>
                  <span>{{ pro }}</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-white mb-4 flex items-center">
                <AlertCircle class="w-6 h-6 text-red-500 mr-2" />
                劣势
              </h2>
              <ul class="space-y-3 text-white/80">
                <li
                  v-for="con in (tool.cons || [])"
                  :key="con"
                  class="flex items-start"
                >
                  <span class="text-red-500 mr-3 text-xl">•</span>
                  <span>{{ con }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex flex-wrap gap-2 mb-8">
            <span
              v-for="tag in (tool.tags || [])"
              :key="tag"
              class="px-3 py-1 text-sm rounded-full text-white"
              :class="getTagColor(tag)"
            >
              {{ tag }}
            </span>
          </div>

          <div class="space-y-4">
            <a
              v-for="version in (tool.versions || [])"
              :key="version.type"
              :href="version.link"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full btn-secondary text-center"
            >
              {{ version.type }} 版本 - {{ version.pricing }}
              <span class="block text-sm text-white/60 mt-1">{{ version.models }}</span>
            </a>
          </div>
        </div>

        <div class="card mb-8">
          <h2 class="text-2xl font-bold text-white mb-6 gradient-text">
            个人使用经验
          </h2>
          
          <div class="mb-6">
            <div class="flex items-center mb-3">
              <span class="text-sm text-white/60 mr-2">综合评分：</span>
              <div class="flex items-center space-x-1">
                <Star
                  v-for="i in 5"
                  :key="i"
                  class="w-5 h-5"
                  :class="i <= (tool.personalExperience?.rating || 0) ? 'text-primary fill-primary' : 'text-gray-600'"
                />
              </div>
            </div>
            <ScoreRadar
              v-if="!tool.radarChart"
              :tool="tool"
            />
            <div class="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4 mt-4">
              <p class="text-white/90 leading-relaxed text-base">
                {{ tool.personalExperience?.insights || '' }}
              </p>
            </div>
          </div>

          <div v-if="tool.personalExperience?.pitfalls?.length">
            <h3 class="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle class="w-5 h-5 text-yellow-500 mr-2" />
              注意事项
            </h3>
            <ul class="space-y-2 text-white/70">
              <li
                v-for="pitfall in (tool.personalExperience?.pitfalls || [])"
                :key="pitfall"
                class="flex items-start"
              >
                <AlertTriangle class="w-4 h-4 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>{{ pitfall }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- 社区评分 -->
        <div class="card mb-8">
          <h2 class="text-2xl font-bold text-white mb-4 gradient-text">
            社区评价
          </h2>
          <ToolRating :tool-id="tool.id" />
        </div>

        <!-- 冷知识 -->
        <FunFact
          v-if="tool"
          :tool-id="tool.id"
          class="mb-8"
        />

        <div class="card">
          <h2 class="text-2xl font-bold text-white mb-6 gradient-text">
            SWOT 分析
          </h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-green-500/5 border-l-4 border-green-500 rounded-lg p-4">
                <h3 class="text-lg font-bold text-green-400 mb-2 flex items-center">
                  <Shield class="w-5 h-5 mr-2" />
                  优势 (Strengths)
                </h3>
                <p class="text-white/80">
                  {{ tool.swot?.S || '' }}
                </p>
              </div>

              <div class="bg-red-500/5 border-l-4 border-red-500 rounded-lg p-4">
                <h3 class="text-lg font-bold text-red-400 mb-2 flex items-center">
                  <AlertTriangle class="w-5 h-5 mr-2" />
                  劣势 (Weaknesses)
                </h3>
                <p class="text-white/80">
                  {{ tool.swot?.W || '' }}
                </p>
              </div>
            </div>

            <div class="space-y-4">
              <div class="bg-blue-500/5 border-l-4 border-blue-500 rounded-lg p-4">
                <h3 class="text-lg font-bold text-blue-400 mb-2 flex items-center">
                  <TrendingUp class="w-5 h-5 mr-2" />
                  机会 (Opportunities)
                </h3>
                <p class="text-white/80">
                  {{ tool.swot?.O || '' }}
                </p>
              </div>

              <div class="bg-orange-500/5 border-l-4 border-orange-500 rounded-lg p-4">
                <h3 class="text-lg font-bold text-orange-400 mb-2 flex items-center">
                  <AlertCircle class="w-5 h-5 mr-2" />
                  威胁 (Threats)
                </h3>
                <p class="text-white/80">
                  {{ tool.swot?.T || '' }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 社区评论 -->
        <div class="card mb-8">
          <ToolReviews :tool-id="tool.id" />
        </div>

        <!-- 相关工具推荐 -->
        <div
          v-if="relatedTools.length > 0"
          class="mt-8"
        >
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
            <ArrowRightLeft class="w-6 h-6 text-primary mr-2" />
            相关工具
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <router-link
              v-for="related in relatedTools"
              :key="related.id"
              :to="{ name: 'tool-detail', params: { id: related.id } }"
              class="card card-interactive group hover:ring-2 hover:ring-primary/30 transition-all duration-200"
            >
              <div class="flex items-center justify-between mb-2">
                <h3 class="font-semibold text-white group-hover:text-primary transition-colors">
                  {{ related.name }}
                </h3>
                <div class="flex items-center space-x-0.5">
                  <Star
                    v-for="i in 5"
                    :key="i"
                    class="w-3 h-3"
                    :class="i <= (related.personalExperience?.rating || 0) ? 'text-primary fill-primary' : 'text-gray-600'"
                  />
                </div>
              </div>
              <p class="text-xs text-white/50 mb-2">
                {{ related.developer }}
              </p>
              <span
                class="px-2 py-0.5 text-xs rounded-full text-white"
                :class="getCategoryColor(related.category)"
              >
                {{ getCategoryLabel(related.category) }}
              </span>
              <p class="text-sm text-white/60 mt-2 line-clamp-2">
                {{ related.bestFor }}
              </p>
            </router-link>
          </div>
        </div>
      </div>

      <div
        v-else
        class="text-center py-20"
      >
        <p class="text-xl text-white/60">
          未找到该工具
        </p>
        <router-link
          to="/"
          class="btn-secondary mt-4 inline-block"
        >
          返回列表
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useToolsStore } from '../stores/tools'
import { useGamificationStore } from '../stores/gamification'
import { useAchievementsStore } from '../stores/achievements'
import { getTagColor, getCategoryLabel, getCategoryColor } from '../utils/helpers'
import { ChevronRight, CheckCircle, AlertCircle, AlertTriangle, Star, Video, BarChart3, ArrowRightLeft, Lightbulb, Ruler, Globe, Shield, TrendingUp } from 'lucide-vue-next'
import VideoPlayer from '../components/VideoPlayer.vue'
import ToolLogo from '../components/ToolLogo.vue'
import FunFact from '../components/gamification/FunFact.vue'
import ToolRating from '../components/ToolRating.vue'
import ToolReviews from '../components/ToolReviews.vue'
import ScoreRadar from '@/components/ScoreRadar.vue'

const route = useRoute()
const toolsStore = useToolsStore()
const gamification = useGamificationStore()
const achievements = useAchievementsStore()

const tool = computed(() => {
  return toolsStore.tools.find(t => t.id === route.params.id)
})

const relatedTools = computed(() => {
  const current = tool.value
  if (!current) return []
  return toolsStore.tools
    .filter(t => t.id !== current.id)
    .map(t => {
      let score = 0
      if (t.category === current.category) score += 10
      if (t.subcategory === current.subcategory) score += 5
      const sharedTags = (t.tags || []).filter(tag => (current.tags || []).includes(tag))
      score += sharedTags.length * 2
      return { ...t, _score: score }
    })
    .sort((a, b) => b._score - a._score)
    .slice(0, 4)
})

onMounted(() => {
  document.title = `${tool.value?.name || '工具详情'} - AI工具全书`
  if (tool.value) {
    gamification.trackToolView(tool.value.id)
    achievements.checkAll()
  }
})

// Also track and update title when navigating between tools via related links
watch(() => route.params.id, (newId) => {
  if (newId) {
    const t = toolsStore.tools.find(item => item.id === newId)
    document.title = `${t?.name || '工具详情'} - AI工具全书`
    gamification.trackToolView(newId)
    achievements.checkAll()
  }
})
</script>
