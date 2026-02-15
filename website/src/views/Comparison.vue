<template>
  <div class="min-h-screen bg-background">
    <div class="container mx-auto px-4 py-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4 gradient-text">
          工具对比
        </h1>
        <p class="text-xl text-white/80">
          横向对比主流 AI 开发工具的核心特性
        </p>
      </div>

      <!-- 已选对比工具 -->
      <div
        v-if="toolsStore.comparedToolIds.length > 0"
        class="mb-6"
      >
        <div class="flex items-center flex-wrap gap-3">
          <span class="text-sm text-white/60">已选对比：</span>
          <span
            v-for="ct in toolsStore.comparedTools"
            :key="ct.id"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/20 text-primary text-sm rounded-full"
          >
            {{ ct.name }}
            <button @click="toolsStore.removeFromCompare(ct.id)">
              <X class="w-3.5 h-3.5 hover:text-white transition-colors" />
            </button>
          </span>
          <button
            v-if="toolsStore.comparedToolIds.length >= 2"
            class="btn-primary text-sm px-4 py-1.5"
            @click="showCompareView = true"
          >
            <GitCompareArrows class="w-4 h-4 mr-1 inline" />
            开始对比 ({{ toolsStore.comparedToolIds.length }})
          </button>
          <button
            class="text-sm text-white/50 hover:text-white transition-colors"
            @click="toolsStore.clearCompare()"
          >
            清除
          </button>
        </div>
      </div>

      <!-- 侧边对比视图 -->
      <div v-if="showCompareView && toolsStore.comparedTools.length >= 2">
        <div class="mb-6">
          <button
            class="text-sm text-white/60 hover:text-white transition-colors flex items-center"
            @click="showCompareView = false"
          >
            <ArrowLeft class="w-4 h-4 mr-1" />
            返回列表
          </button>
        </div>
        <CompareView :tools="toolsStore.comparedTools" />
      </div>

      <!-- 工具列表表格 -->
      <div
        v-else
        class="card overflow-x-auto"
      >
        <!-- 分类筛选 -->
        <div class="flex flex-wrap gap-2 mb-4 pb-4 border-b border-white/10">
          <button
            v-for="cat in filterCategories"
            :key="cat"
            class="px-3 py-1.5 text-sm rounded-lg transition-all cursor-pointer"
            :class="filterCategory === cat ? 'bg-primary text-white' : 'bg-white/5 text-white/60 hover:text-white'"
            @click="filterCategory = cat"
          >
            {{ cat === 'all' ? '全部' : getCategoryLabel(cat) }}
          </button>
        </div>

        <table class="w-full min-w-[900px]">
          <thead>
            <tr class="border-b border-white/10">
              <th scope="col" class="p-4 w-10">
                <span class="sr-only">选择</span>
              </th>
              <th
                scope="col"
                class="text-left p-4 text-white font-semibold cursor-pointer select-none hover:text-primary transition-colors"
                @click="toggleSort('name')"
              >
                <span class="inline-flex items-center gap-1">
                  工具名称
                  <component
                    :is="getSortIcon('name')"
                    class="w-4 h-4"
                    :class="sortField === 'name' ? 'text-primary' : 'text-white/30'"
                  />
                </span>
              </th>
              <th
                scope="col"
                class="text-left p-4 text-white font-semibold cursor-pointer select-none hover:text-primary transition-colors"
                @click="toggleSort('developer')"
              >
                <span class="inline-flex items-center gap-1">
                  开发者
                  <component
                    :is="getSortIcon('developer')"
                    class="w-4 h-4"
                    :class="sortField === 'developer' ? 'text-primary' : 'text-white/30'"
                  />
                </span>
              </th>
              <th
                scope="col"
                class="text-left p-4 text-white font-semibold cursor-pointer select-none hover:text-primary transition-colors"
                @click="toggleSort('category')"
              >
                <span class="inline-flex items-center gap-1">
                  类别
                  <component
                    :is="getSortIcon('category')"
                    class="w-4 h-4"
                    :class="sortField === 'category' ? 'text-primary' : 'text-white/30'"
                  />
                </span>
              </th>
              <th
                scope="col"
                class="text-left p-4 text-white font-semibold cursor-pointer select-none hover:text-primary transition-colors"
                @click="toggleSort('rating')"
              >
                <span class="inline-flex items-center gap-1">
                  评分
                  <component
                    :is="getSortIcon('rating')"
                    class="w-4 h-4"
                    :class="sortField === 'rating' ? 'text-primary' : 'text-white/30'"
                  />
                </span>
              </th>
              <th scope="col" class="text-left p-4 text-white font-semibold">
                定价
              </th>
              <th scope="col" class="text-left p-4 text-white font-semibold">
                核心模型
              </th>
              <th scope="col" class="text-left p-4 text-white font-semibold">
                操作
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="tool in sortedTools"
              :key="tool.id"
              class="border-b border-white/5 hover:bg-white/5 transition-colors"
              :class="{ 'bg-primary/5': toolsStore.comparedToolIds.includes(tool.id) }"
            >
              <td class="p-4">
                <input
                  type="checkbox"
                  :checked="toolsStore.comparedToolIds.includes(tool.id)"
                  :disabled="!toolsStore.comparedToolIds.includes(tool.id) && toolsStore.comparedToolIds.length >= 4"
                  class="w-4 h-4 rounded border-white/30 bg-white/10 text-primary focus:ring-primary cursor-pointer accent-[var(--color-primary)]"
                  @change="toggleCompare(tool.id)"
                >
              </td>
              <td class="p-4">
                <div class="flex items-center">
                  <span class="font-semibold text-white">{{ tool.name }}</span>
                  <div class="flex flex-wrap gap-1 ml-2">
                    <span
                      v-for="tag in (tool.tags || []).slice(0, 2)"
                      :key="tag"
                      class="px-2 py-0.5 text-xs rounded-full text-white"
                      :class="getTagColor(tag)"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </td>
              <td class="p-4 text-white/80">
                {{ tool.developer }}
              </td>
              <td class="p-4">
                <span class="px-2 py-1 bg-primary/20 text-primary text-sm rounded-full">
                  {{ getCategoryLabel(tool.category) }}
                </span>
              </td>
              <td class="p-4">
                <div class="flex items-center space-x-1">
                  <Star
                    v-for="i in 5"
                    :key="i"
                    class="w-5 h-5"
                    :class="i <= (tool.personalExperience?.rating || 0) ? 'text-primary fill-primary' : 'text-gray-600'"
                  />
                </div>
              </td>
              <td class="p-4 text-white/80 text-sm">
                {{ tool.versions?.[0]?.pricing || 'N/A' }}
              </td>
              <td class="p-4 text-white/80 text-sm">
                {{ tool.versions?.[0]?.models || 'N/A' }}
              </td>
              <td class="p-4">
                <router-link
                  :to="{ name: 'tool-detail', params: { id: tool.id } }"
                  class="text-primary hover:text-primary/80 transition-colors"
                >
                  详情 →
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>

        <p
          v-if="toolsStore.comparedToolIds.length === 0"
          class="text-center text-white/40 text-sm py-4 border-t border-white/5"
        >
          勾选 2-4 个工具进行侧边对比
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 mt-12">
        <div class="card">
          <h3 class="text-xl font-bold text-white mb-4 flex items-center">
            <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
            推荐场景
          </h3>
          <ul class="space-y-2 text-white/80">
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span>日常主力开发：Cursor</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span>预算有限团队：Trae</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span>代码审查任务：Claude</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span>国产开源方案：DeepSeek</span>
            </li>
          </ul>
        </div>

        <div class="card">
          <h3 class="text-xl font-bold text-white mb-4 flex items-center">
            <Zap class="w-5 h-5 text-yellow-500 mr-2" />
            核心优势对比
          </h3>
          <ul class="space-y-3 text-white/80">
            <li class="flex items-start">
              <span class="font-semibold text-primary mr-2">Cursor：</span>
              <span>Composer-1.5 多文件协同能力最强</span>
            </li>
            <li class="flex items-start">
              <span class="font-semibold text-primary mr-2">Trae：</span>
              <span>完全免费，国产模型深度集成</span>
            </li>
            <li class="flex items-start">
              <span class="font-semibold text-primary mr-2">Claude：</span>
              <span>200K 上下文窗口，代码理解能力强</span>
            </li>
            <li class="flex items-start">
              <span class="font-semibold text-primary mr-2">DeepSeek：</span>
              <span>推理能力最强，价格最低</span>
            </li>
          </ul>
        </div>

        <div class="card">
          <h3 class="text-xl font-bold text-white mb-4 flex items-center">
            <TrendingUp class="w-5 h-5 text-blue-500 mr-2" />
            选型建议
          </h3>
          <ul class="space-y-2 text-white/80">
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">1.</span>
              <span>根据团队预算选择付费或免费方案</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">2.</span>
              <span>考虑网络环境对国内工具的影响</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">3.</span>
              <span>评估团队对 AI 功能的需求深度</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">4.</span>
              <span>优先选择支持多模型的工具</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useToolsStore } from '../stores/tools'
import { useGamificationStore } from '../stores/gamification'
import { useAchievementsStore } from '../stores/achievements'
import { getTagColor, getCategoryLabel } from '../utils/helpers'
import {
  CheckCircle, Zap, TrendingUp, Star,
  ArrowUpDown, ChevronUp, ChevronDown,
  X, GitCompareArrows, ArrowLeft
} from 'lucide-vue-next'
import CompareView from '../components/CompareView.vue'

const toolsStore = useToolsStore()
const gamification = useGamificationStore()
const achievements = useAchievementsStore()

onMounted(() => {
  gamification.trackComparisonUse()
  achievements.checkAll()
})

const sortField = ref('rating')
const sortDirection = ref('desc')
const filterCategory = ref('all')
const showCompareView = ref(false)

const filterCategories = computed(() => {
  const cats = new Set(toolsStore.tools.map(t => t.category))
  return ['all', ...Array.from(cats)]
})

const sortedTools = computed(() => {
  let result = [...toolsStore.tools]

  // 分类筛选
  if (filterCategory.value !== 'all') {
    result = result.filter(t => t.category === filterCategory.value)
  }

  // 排序
  result.sort((a, b) => {
    let comparison = 0
    switch (sortField.value) {
      case 'name':
        comparison = a.name.localeCompare(b.name, 'zh-CN')
        break
      case 'developer':
        comparison = (a.developer || '').localeCompare(b.developer || '', 'zh-CN')
        break
      case 'category':
        comparison = a.category.localeCompare(b.category)
        break
      case 'rating':
        comparison = (a.personalExperience?.rating || 0) - (b.personalExperience?.rating || 0)
        break
      default:
        comparison = 0
    }
    return sortDirection.value === 'desc' ? -comparison : comparison
  })

  return result
})

function toggleSort(field) {
  if (sortField.value === field) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortField.value = field
    sortDirection.value = field === 'rating' ? 'desc' : 'asc'
  }
}

function getSortIcon(field) {
  if (sortField.value !== field) return ArrowUpDown
  return sortDirection.value === 'asc' ? ChevronUp : ChevronDown
}

function toggleCompare(toolId) {
  if (toolsStore.comparedToolIds.includes(toolId)) {
    toolsStore.removeFromCompare(toolId)
  } else {
    toolsStore.addToCompare(toolId)
  }
}
</script>
