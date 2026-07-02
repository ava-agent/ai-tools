<template>
  <div class="min-h-screen bg-background">
    <div class="max-w-[1180px] mx-auto px-5 py-6">
      <div class="text-center mb-12">
        <h1
          class="text-[28px] font-bold text-white mb-4"
        >
          工具对比
        </h1>
        <p class="text-xl text-white/80">
          横向对比主流 AI 开发工具的核心特性
        </p>
      </div>

      <!-- Scenario presets -->
      <div class="mb-6">
        <div class="flex items-end justify-between gap-3 mb-3">
          <div>
            <h3 class="text-sm text-white/50">
              决策场景
            </h3>
            <p class="text-xs text-white/35 mt-1">
              先选场景，再看胜出维度和明细表
            </p>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-3">
          <button
            v-for="scenario in comparisonScenarios"
            :key="scenario.id"
            class="text-left rounded-lg p-4 transition-colors hover:bg-white/[0.06]"
            :class="activeScenarioId === scenario.id ? 'bg-primary/10 border border-primary/30' : 'bg-white/[0.03] border border-white/[0.06]'"
            :aria-pressed="activeScenarioId === scenario.id"
            :data-testid="`comparison-scenario-${scenario.id}`"
            @click="loadScenario(scenario)"
          >
            <div class="flex items-center justify-between gap-3 mb-2">
              <span class="text-sm font-semibold text-white">{{ scenario.label }}</span>
              <span class="text-[11px] text-primary">{{ scenario.intent }}</span>
            </div>
            <p class="text-xs text-white/50 leading-relaxed">
              {{ scenario.description }}
            </p>
          </button>
        </div>
      </div>

      <!-- Recommended comparison groups -->
      <div class="mb-6">
        <h3 class="text-sm text-white/50 mb-3">
          热门对比组合
        </h3>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="group in recommendedGroups"
            :key="group.label"
            class="pill pill-inactive min-h-11"
            @click="loadCompareGroup(group.ids)"
          >
            {{ group.label }}
          </button>
        </div>
      </div>

      <!-- 已选对比工具 -->
      <div
        v-if="toolsStore.comparedToolIds.length > 0"
        class="glass-card p-4 mb-4"
      >
        <div class="flex items-center flex-wrap gap-3">
          <span class="text-sm text-white/60">已选对比：</span>
          <span
            v-for="ct in toolsStore.comparedTools"
            :key="ct.id"
            class="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-primary/20 px-3 py-1.5 text-sm text-primary"
          >
            {{ ct.name }}
            <button
              :aria-label="`移除 ${ct.name}`"
              class="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full hover:bg-white/[0.06]"
              @click="toolsStore.removeFromCompare(ct.id)"
            >
              <X class="w-3.5 h-3.5 hover:text-white transition-colors" />
            </button>
          </span>
          <button
            v-if="toolsStore.comparedToolIds.length >= 2"
            class="btn-capsule min-h-11 text-sm px-4 py-1.5"
            data-testid="start-manual-compare"
            @click="startCompare"
          >
            <GitCompareArrows class="w-4 h-4 mr-1 inline" />
            开始对比 ({{ toolsStore.comparedToolIds.length }})
          </button>
          <button
            class="inline-flex min-h-11 items-center rounded-lg px-3 text-sm text-white/50 transition-colors hover:bg-white/[0.04] hover:text-white"
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
            class="inline-flex min-h-11 items-center rounded-lg px-3 text-sm text-white/60 transition-colors hover:bg-white/[0.04] hover:text-white"
            @click="showCompareView = false"
          >
            <ArrowLeft class="w-4 h-4 mr-1" />
            返回列表
          </button>
        </div>
        <div
          v-if="compareSummary"
          class="glass-card p-4 mb-4"
          data-testid="comparison-decision-summary"
        >
          <div class="flex items-center justify-between gap-3 mb-3">
            <div>
              <div class="text-[13px] font-semibold text-white">
                场景结论
              </div>
              <div class="text-xs text-white/40 mt-0.5">
                {{ compareSummary.label }}
              </div>
            </div>
            <span class="tag-pill tag-pill-primary">
              {{ toolsStore.comparedTools.length }} 个工具
            </span>
          </div>
          <p class="text-sm text-white/70 leading-relaxed mb-4">
            {{ compareSummary.summary }}
          </p>

          <div>
            <div class="text-[12px] font-semibold text-white/50 mb-2">
              按维度胜出
            </div>
            <div class="grid md:grid-cols-3 gap-2">
              <div
                v-for="winner in dimensionWinners"
                :key="winner.label"
                class="rounded-lg p-3"
                style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);"
              >
                <div class="text-[11px] text-white/40 mb-1">
                  {{ winner.label }}
                </div>
                <div class="text-sm font-semibold text-white">
                  {{ winner.tool.name }}
                </div>
                <div class="text-[11px] text-white/45 mt-1 leading-relaxed">
                  {{ winner.reason }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <CompareView :tools="toolsStore.comparedTools" />
      </div>

      <!-- 工具列表表格 -->
      <div
        v-else
        class="glass-card p-0 overflow-hidden mb-4"
      >
        <!-- 分类筛选 -->
        <div class="flex flex-wrap gap-2 p-4 pb-4 border-b border-white/[0.06]">
          <button
            v-for="cat in filterCategories"
            :key="cat"
            class="pill"
            :class="filterCategory === cat ? 'pill-active' : 'pill-inactive'"
            :aria-pressed="filterCategory === cat"
            @click="filterCategory = cat"
          >
            {{ cat === 'all' ? '全部' : getCategoryLabel(cat) }}
          </button>
        </div>

        <div
          class="border-b border-white/[0.06] p-4 lg:hidden"
          data-testid="comparison-mobile-sort"
        >
          <div class="mb-2 text-[11px] font-semibold text-white/45">
            排序
          </div>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="option in mobileSortOptions"
              :key="option.field"
              type="button"
              class="pill min-h-11 px-3 py-2 text-xs"
              :class="sortField === option.field ? 'pill-active' : 'pill-inactive'"
              :aria-label="getSortLabel(option.label, option.field)"
              :data-testid="`mobile-sort-button-${option.field}`"
              @click="toggleSort(option.field)"
            >
              {{ option.shortLabel }}
              <component
                :is="getSortIcon(option.field)"
                class="ml-1 h-3.5 w-3.5"
                :class="sortField === option.field ? 'text-white' : 'text-white/30'"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        <div
          class="hidden overflow-hidden lg:block"
          data-testid="comparison-desktop-table"
        >
          <table class="w-full table-fixed">
            <colgroup>
              <col class="w-[5%]">
              <col class="w-[23%]">
              <col class="w-[13%]">
              <col class="w-[11%]">
              <col class="w-[12%]">
              <col class="w-[15%]">
              <col class="w-[14%]">
              <col class="w-[7%]">
            </colgroup>
            <thead>
              <tr class="bg-white/[0.04] border-b border-white/[0.06]">
                <th
                  scope="col"
                  class="p-3"
                >
                  <span class="sr-only">选择</span>
                </th>
                <th
                  scope="col"
                  class="text-left p-3 text-white font-semibold"
                  :aria-sort="getAriaSort('name')"
                  data-testid="sort-header-name"
                >
                  <button
                    class="inline-flex min-h-11 items-center gap-1 rounded-md text-left hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                    :aria-label="getSortLabel('工具名称', 'name')"
                    data-testid="sort-button-name"
                    @click="toggleSort('name')"
                  >
                    工具名称
                    <component
                      :is="getSortIcon('name')"
                      class="w-4 h-4"
                      :class="sortField === 'name' ? 'text-primary' : 'text-white/30'"
                    />
                  </button>
                </th>
                <th
                  scope="col"
                  class="text-left p-3 text-white font-semibold"
                  :aria-sort="getAriaSort('developer')"
                  data-testid="sort-header-developer"
                >
                  <button
                    class="inline-flex min-h-11 items-center gap-1 rounded-md text-left hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                    :aria-label="getSortLabel('开发者', 'developer')"
                    data-testid="sort-button-developer"
                    @click="toggleSort('developer')"
                  >
                    开发者
                    <component
                      :is="getSortIcon('developer')"
                      class="w-4 h-4"
                      :class="sortField === 'developer' ? 'text-primary' : 'text-white/30'"
                    />
                  </button>
                </th>
                <th
                  scope="col"
                  class="text-left p-3 text-white font-semibold"
                  :aria-sort="getAriaSort('category')"
                  data-testid="sort-header-category"
                >
                  <button
                    class="inline-flex min-h-11 items-center gap-1 rounded-md text-left hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                    :aria-label="getSortLabel('类别', 'category')"
                    data-testid="sort-button-category"
                    @click="toggleSort('category')"
                  >
                    类别
                    <component
                      :is="getSortIcon('category')"
                      class="w-4 h-4"
                      :class="sortField === 'category' ? 'text-primary' : 'text-white/30'"
                    />
                  </button>
                </th>
                <th
                  scope="col"
                  class="text-left p-3 text-white font-semibold"
                  :aria-sort="getAriaSort('rating')"
                  data-testid="sort-header-rating"
                >
                  <button
                    class="inline-flex min-h-11 items-center gap-1 rounded-md text-left hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                    :aria-label="getSortLabel('评分', 'rating')"
                    data-testid="sort-button-rating"
                    @click="toggleSort('rating')"
                  >
                    评分
                    <component
                      :is="getSortIcon('rating')"
                      class="w-4 h-4"
                      :class="sortField === 'rating' ? 'text-primary' : 'text-white/30'"
                    />
                  </button>
                </th>
                <th
                  scope="col"
                  class="text-left p-3 text-white font-semibold"
                >
                  定价
                </th>
                <th
                  scope="col"
                  class="text-left p-3 text-white font-semibold"
                >
                  核心模型
                </th>
                <th
                  scope="col"
                  class="text-left p-3 text-white font-semibold"
                >
                  操作
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(tool, index) in sortedTools"
                :key="tool.id"
                class="border-b border-white/[0.06] hover:bg-white/[0.04] transition-colors"
                :class="[
                  toolsStore.comparedToolIds.includes(tool.id) ? 'bg-primary/5' : (index % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]')
                ]"
              >
                <td class="p-3">
                  <label class="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg cursor-pointer hover:bg-white/[0.04]">
                    <span class="sr-only">选择 {{ tool.name }} 进行对比</span>
                    <input
                      type="checkbox"
                      :checked="toolsStore.comparedToolIds.includes(tool.id)"
                      :disabled="!toolsStore.comparedToolIds.includes(tool.id) && toolsStore.comparedToolIds.length >= 4"
                      :aria-label="`选择 ${tool.name} 进行对比`"
                      class="w-4 h-4 rounded border-white/30 bg-white/10 text-primary focus:ring-primary cursor-pointer accent-[var(--color-primary)]"
                      @change="toggleCompare(tool.id)"
                    >
                  </label>
                </td>
                <td class="p-3">
                  <div class="flex min-w-0 items-start gap-2">
                  <ToolLogo
                    :tool-id="tool.id"
                    :tool-name="tool.name"
                    size="xs"
                    class="flex-shrink-0"
                  />
                    <div class="min-w-0">
                      <span class="block min-w-0 break-words font-semibold text-white">{{ tool.name }}</span>
                    <div class="mt-1 flex flex-wrap gap-1">
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
                  </div>
                </td>
                <td class="p-3 text-sm text-white/80 break-words">
                  {{ formatMetricValue(tool.developer, '待补充') }}
                </td>
                <td class="p-3">
                  <span class="inline-flex max-w-full rounded-full bg-primary/20 px-2 py-1 text-xs text-primary">
                    {{ getCategoryLabel(tool.category) }}
                  </span>
                </td>
                <td class="p-3">
                  <div class="flex items-center space-x-1">
                    <span
                      v-for="i in 5"
                      :key="i"
                      class="relative h-4 w-4"
                    >
                      <Star
                        class="h-4 w-4"
                        :class="i <= Math.floor(tool.personalExperience?.rating || 0) ? 'text-primary fill-primary' : 'text-gray-600'"
                      />
                      <span
                        v-if="i === Math.ceil(tool.personalExperience?.rating || 0) && (tool.personalExperience?.rating || 0) % 1 >= 0.5"
                        class="absolute inset-0 overflow-hidden"
                        style="width: 50%;"
                      >
                        <Star class="h-4 w-4 text-primary fill-primary" />
                      </span>
                    </span>
                  </div>
                </td>
                <td class="p-3 text-xs leading-relaxed text-white/80 break-words">
                  {{ firstVersionValue(tool, 'pricing') }}
                </td>
                <td class="p-3 text-xs leading-relaxed text-white/80 break-words">
                  {{ firstVersionValue(tool, 'models') }}
                </td>
                <td class="p-3">
                  <router-link
                    :to="{ name: 'tool-detail', params: { id: tool.id } }"
                    class="inline-flex min-h-11 items-center justify-center rounded-lg px-2 text-sm text-primary transition-colors hover:bg-white/[0.04] hover:text-primary/80"
                  >
                    详情 →
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          class="space-y-3 p-4 lg:hidden"
          data-testid="comparison-mobile-list"
        >
          <article
            v-for="tool in sortedTools"
            :key="`${tool.id}-mobile`"
            class="rounded-xl border border-white/[0.08] bg-white/[0.035] p-3"
            :data-testid="`comparison-mobile-card-${tool.id}`"
          >
            <div class="flex items-start gap-3">
              <label class="inline-flex min-h-11 min-w-11 flex-shrink-0 items-center justify-center rounded-lg cursor-pointer hover:bg-white/[0.04]">
                <span class="sr-only">选择 {{ tool.name }} 进行对比</span>
                <input
                  type="checkbox"
                  :checked="toolsStore.comparedToolIds.includes(tool.id)"
                  :disabled="!toolsStore.comparedToolIds.includes(tool.id) && toolsStore.comparedToolIds.length >= 4"
                  :aria-label="`选择 ${tool.name} 进行对比`"
                  class="w-4 h-4 rounded border-white/30 bg-white/10 text-primary focus:ring-primary cursor-pointer accent-[var(--color-primary)]"
                  @change="toggleCompare(tool.id)"
                >
              </label>

              <ToolLogo
                :tool-id="tool.id"
                :tool-name="tool.name"
                size="sm"
                class="flex-shrink-0"
              />

              <div class="min-w-0 flex-1">
                <div class="flex flex-wrap items-center gap-2">
                  <h3 class="min-w-0 break-words text-[15px] font-semibold text-white">
                    {{ tool.name }}
                  </h3>
                  <span class="rounded-full bg-primary/15 px-2 py-1 text-[11px] text-primary">
                    {{ getCategoryLabel(tool.category) }}
                  </span>
                </div>
                <p class="mt-0.5 break-words text-xs text-white/50">
                  {{ formatMetricValue(tool.developer, '待补充') }}
                </p>
              </div>
            </div>

            <div class="mt-3 grid gap-2">
              <div class="rounded-lg bg-white/[0.035] p-2">
                <div class="text-[11px] font-medium text-white/40">
                  评分
                </div>
                <div class="mt-1 text-sm font-semibold text-white">
                  {{ tool.personalExperience?.rating || 0 }}/5
                </div>
              </div>
              <div class="rounded-lg bg-white/[0.035] p-2">
                <div class="text-[11px] font-medium text-white/40">
                  定价
                </div>
                <div class="mt-1 break-words text-sm text-white/75">
                  {{ firstVersionValue(tool, 'pricing') }}
                </div>
              </div>
              <div class="rounded-lg bg-white/[0.035] p-2">
                <div class="text-[11px] font-medium text-white/40">
                  核心模型
                </div>
                <div class="mt-1 break-words text-sm text-white/75">
                  {{ firstVersionValue(tool, 'models') }}
                </div>
              </div>
            </div>

            <div class="mt-3 flex flex-wrap items-center justify-between gap-2">
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="tag in (tool.tags || []).slice(0, 2)"
                  :key="tag"
                  class="px-2 py-0.5 text-xs rounded-full text-white"
                  :class="getTagColor(tag)"
                >
                  {{ tag }}
                </span>
              </div>
              <router-link
                :to="{ name: 'tool-detail', params: { id: tool.id } }"
                class="inline-flex min-h-11 items-center justify-center rounded-lg px-3 text-sm font-medium text-primary transition-colors hover:bg-white/[0.04]"
                :data-testid="`comparison-mobile-detail-${tool.id}`"
              >
                详情 →
              </router-link>
            </div>
          </article>
        </div>

        <p
          v-if="toolsStore.comparedToolIds.length === 0"
          class="text-center text-white/40 text-sm py-4 border-t border-white/[0.06]"
        >
          勾选 2-4 个工具进行侧边对比
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 mt-12">
        <div class="glass-card p-4">
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

        <div class="glass-card p-4">
          <h3 class="text-xl font-bold text-white mb-4 flex items-center">
            <Zap class="w-5 h-5 text-yellow-500 mr-2" />
            核心优势对比
          </h3>
          <ul class="space-y-3 text-white/80">
            <li class="flex items-start">
              <span class="font-semibold text-primary mr-2">Cursor：</span>
              <span>Agent 与多文件协同成熟，但要关注用量成本</span>
            </li>
            <li class="flex items-start">
              <span class="font-semibold text-primary mr-2">Trae：</span>
              <span>低门槛入门，SOLO mode 和云任务需要看额度</span>
            </li>
            <li class="flex items-start">
              <span class="font-semibold text-primary mr-2">Claude：</span>
              <span>200K 上下文窗口，代码理解能力强</span>
            </li>
            <li class="flex items-start">
              <span class="font-semibold text-primary mr-2">DeepSeek：</span>
              <span>API 单价有优势，适合预算敏感的推理/代码场景；以当前官方价格和模型页为准</span>
            </li>
          </ul>
        </div>

        <div class="glass-card p-4">
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
import { ref, computed } from 'vue'
import { useToolsStore } from '../stores/tools'
import { useGamificationStore } from '../stores/gamification'
import { useAchievementsStore } from '../stores/achievements'
import { getTagColor, getCategoryLabel } from '../utils/helpers'
import { getFreeQuotaScore } from '../utils/pricing'
import { formatMetricValue } from '../utils/toolMetadata'
import {
  CheckCircle, Zap, TrendingUp, Star,
  ArrowUpDown, ChevronUp, ChevronDown,
  X, GitCompareArrows, ArrowLeft
} from 'lucide-vue-next'
import CompareView from '../components/CompareView.vue'
import ToolLogo from '../components/ToolLogo.vue'

const toolsStore = useToolsStore()
const gamification = useGamificationStore()
const achievements = useAchievementsStore()

function firstVersionValue(tool, field, fallback = '未公开') {
  return formatMetricValue(tool.versions?.[0]?.[field], fallback)
}

// Tracking moved to actual compare action instead of page visit

const sortField = ref('rating')
const sortDirection = ref('desc')
const filterCategory = ref('all')
const showCompareView = ref(false)
const activeScenarioId = ref(null)

const mobileSortOptions = [
  { field: 'name', label: '工具名称', shortLabel: '名称' },
  { field: 'developer', label: '开发者', shortLabel: '开发者' },
  { field: 'category', label: '类别', shortLabel: '类别' },
  { field: 'rating', label: '评分', shortLabel: '评分' },
]

function startCompare() {
  activeScenarioId.value = null
  showCompareView.value = true
  gamification.trackComparisonUse()
  achievements.checkAll()
}

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

function getAriaSort(field) {
  if (sortField.value !== field) return 'none'
  return sortDirection.value === 'asc' ? 'ascending' : 'descending'
}

function getSortLabel(label, field) {
  if (sortField.value !== field) return `按${label}排序`
  return `按${label}排序，当前${sortDirection.value === 'asc' ? '升序' : '降序'}`
}

function toggleCompare(toolId) {
  if (toolsStore.comparedToolIds.includes(toolId)) {
    toolsStore.removeFromCompare(toolId)
  } else {
    toolsStore.addToCompare(toolId)
  }
}

const recommendedGroups = [
  { label: 'AI IDE 三强', ids: ['cursor', 'windsurf', 'trae'] },
  { label: 'AI CLI 对决', ids: ['claude-code', 'gemini-cli', 'qwen-cli'] },
  { label: '国产大模型', ids: ['deepseek', 'qwen', 'doubao', 'kimi'] },
  { label: '视频生成', ids: ['sora', 'kling', 'runway', 'pika'] },
  { label: '图像生成', ids: ['midjourney', 'dalle', 'stable-diffusion', 'ideogram'] },
]

const comparisonScenarios = [
  {
    id: 'personal-dev',
    label: '个人主力开发',
    intent: '主力 IDE + 深度 Agent',
    description: '适合每天写代码、重构和查 bug，重点看综合体验、上下文和真实订阅成本。',
    ids: ['cursor', 'claude-code', 'github-copilot'],
    summary: 'Cursor 更适合作为主力 IDE；Claude Code 更适合深度 Agent 任务；GitHub Copilot 适合已经在 GitHub/VS Code 体系内的团队。'
  },
  {
    id: 'team-governance',
    label: '团队合规',
    intent: '权限、审计、企业采购',
    description: '适合多人协作和企业采购，优先看治理能力、采购路径、数据边界和成员管理。',
    ids: ['github-copilot', 'cursor', 'claude-code'],
    summary: 'GitHub Copilot 更贴近企业 IDE 内补全和组织管理；Cursor 和 Claude Code 更适合高强度工程任务，但要先确认数据与权限策略。'
  },
  {
    id: 'zero-cost',
    label: '低成本试用',
    intent: '先跑通再付费',
    description: '适合预算敏感或试水阶段，优先看免费层、开源可用性和超额成本；Qwen CLI 需单独核验 Coding Plan/API provider。',
    ids: ['trae', 'gemini-cli', 'opencode'],
    summary: 'Trae、Gemini CLI 和 OpenCode 适合先跑通；Qwen CLI 如需中文补充，应单独核验 Coding Plan/API provider 成本。'
  },
  {
    id: 'large-refactor',
    label: '大型重构',
    intent: '长上下文 + 分步执行',
    description: '适合遗留项目、模块拆分和迁移，重点看上下文窗口、计划能力和回归验证成本。',
    ids: ['gemini-cli', 'claude-code', 'qoder', 'cursor'],
    summary: 'Gemini CLI 适合先建立代码库全景；Claude Code 适合计划和推理；Cursor 更适合分步落地实现。'
  },
]

function loadCompareGroup(ids) {
  activeScenarioId.value = null
  showCompareView.value = false
  toolsStore.clearCompare()
  ids.forEach(id => toolsStore.addToCompare(id))
}

function loadScenario(scenario) {
  activeScenarioId.value = scenario.id
  toolsStore.clearCompare()
  scenario.ids
    .filter(id => toolsStore.tools.some(tool => tool.id === id))
    .slice(0, 4)
    .forEach(id => toolsStore.addToCompare(id))
  showCompareView.value = toolsStore.comparedTools.length >= 2
  if (showCompareView.value) {
    gamification.trackComparisonUse()
    achievements.checkAll()
  }
}

const activeScenario = computed(() => {
  return comparisonScenarios.find(scenario => scenario.id === activeScenarioId.value) || null
})

const compareSummary = computed(() => {
  if (toolsStore.comparedTools.length < 2) return null
  if (activeScenario.value) {
    return {
      label: activeScenario.value.label,
      summary: activeScenario.value.summary
    }
  }
  return {
    label: '手动对比',
    summary: '当前为手动对比。先看按维度胜出，再用下方表格确认价格、免费额度、上下文和适用场景。'
  }
})

const dimensionWinners = computed(() => {
  const tools = toolsStore.comparedTools
  if (tools.length < 2) return []

  return [
    getWinnerByScore(tools, '综合评分', tool => tool.personalExperience?.rating || 0, tool => {
      const rating = tool.personalExperience?.rating || 0
      return rating ? `评分 ${rating}/5` : '暂无评分'
    }),
    getWinnerByScore(tools, '中文支持', tool => tool.chineseSupport || 0, tool => {
      const score = tool.chineseSupport || 0
      return score ? `${score}/5，适合中文资料和国内团队` : '暂无中文支持评分'
    }),
    getWinnerByScore(tools, '免费额度', getFreeQuotaScore, tool => tool.freeQuota || '暂无免费额度说明'),
  ].filter(Boolean)
})

function getWinnerByScore(tools, label, scoreFn, reasonFn) {
  const scored = tools
    .map(tool => ({ tool, score: scoreFn(tool) }))
    .filter(item => Number.isFinite(item.score))
    .sort((a, b) => b.score - a.score)
  const winner = scored[0]
  if (!winner || winner.score <= 0) return null
  return {
    label,
    tool: winner.tool,
    reason: reasonFn(winner.tool)
  }
}

</script>
