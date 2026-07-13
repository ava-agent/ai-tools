<template>
  <div class="min-h-screen bg-background">
    <div class="max-w-[960px] mx-auto px-5 py-6">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1
          class="text-[28px] font-bold text-white mb-4"
        >
          AI 工具订阅指南
        </h1>
        <p class="text-xl text-white/80 max-w-2xl mx-auto">
          AI 工具订阅是一笔不小的开支。我们整理了 2026 年的主流定价与"分层使用策略"，帮您把每一分钱都花在刀刃上。
        </p>
      </div>

      <!-- Budget Overview -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
          <DollarSign class="w-6 h-6 text-green-500 mr-2" />
          预算层级概览
          <span
            v-if="selectedBudgetTier"
            class="ml-4 text-sm font-normal text-primary"
          >
            已选择: {{ budgetTiers.find(t => t.id === selectedBudgetTier)?.name }}
          </span>
        </h2>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4"
          data-testid="pricing-budget-group"
          role="radiogroup"
          aria-label="预算层级"
        >
          <button
            v-for="tier in budgetTiers"
            :key="tier.id"
            type="button"
            class="pill cursor-pointer text-center transition-all duration-300 relative overflow-hidden group p-4 w-full min-h-11"
            :class="{
              'pill-active': selectedBudgetTier === tier.id,
              'pill-inactive': selectedBudgetTier !== tier.id,
              'ring-2 ring-primary/50': tier.highlight && !selectedBudgetTier,
            }"
            :aria-checked="selectedBudgetTier === tier.id"
            :aria-label="`${tier.name}，${tier.budget}，${tier.users}`"
            :data-testid="`pricing-budget-${tier.id}`"
            role="radio"
            @click="selectBudgetTier(tier.id)"
          >
            <!-- Selected indicator -->
            <div
              v-if="selectedBudgetTier === tier.id"
              class="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
            >
              <Check class="w-4 h-4 text-white" />
            </div>
            <!-- Hover effect -->
            <div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div class="relative z-10">
              <div class="text-3xl font-bold text-white mb-2">
                {{ tier.budget }}
              </div>
              <div class="text-sm text-white/60 mb-3">
                {{ tier.name }}
              </div>
              <div class="text-xs text-white/50">
                {{ tier.users }}
              </div>
            </div>
          </button>
        </div>
        <p
          v-if="!selectedBudgetTier"
          class="text-center text-white/50 text-sm mt-4"
        >
          点击选择预算范围，自动筛选匹配的组合方案和工具
        </p>
        <p
          v-else
          class="text-center text-primary/80 text-sm mt-4"
        >
          已选择「{{ budgetTiers.find(t => t.id === selectedBudgetTier)?.name }}」，下方已筛选匹配的组合方案
        </p>
      </div>

      <!-- Recommended Combinations -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
          <Star class="w-6 h-6 text-yellow-500 mr-2" />
          推荐组合方案
          <span
            v-if="selectedCombo"
            class="ml-4 text-sm font-normal text-primary"
          >
            已选择: {{ selectedCombo }}
          </span>
        </h2>
        <div
          class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-testid="pricing-combo-group"
          role="radiogroup"
          aria-label="推荐组合方案"
        >
          <button
            v-for="(combo, index) in filteredCombos"
            :key="combo.name"
            type="button"
            class="glass-card p-4 cursor-pointer transition-all duration-300 relative overflow-hidden group text-left min-h-11"
            :class="{
              'ring-2 ring-primary': selectedCombo === combo.name,
              'ring-2 ring-green-400/50': selectedBudgetTier && combo.matches && selectedCombo !== combo.name,
              'opacity-30 cursor-not-allowed': selectedBudgetTier && !combo.matches,
              'hover:ring-2 hover:ring-primary/30': !selectedBudgetTier || combo.matches
            }"
            :aria-checked="selectedCombo === combo.name"
            :aria-disabled="combo.matches === false"
            :aria-label="`${combo.name}，预算 ${combo.budget}`"
            :data-testid="`pricing-combo-option-${index}`"
            role="radio"
            :disabled="combo.matches === false"
            @click="selectCombo(combo.name)"
          >
            <!-- Selected indicator -->
            <div
              v-if="selectedCombo === combo.name"
              class="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center z-10"
            >
              <Check class="w-4 h-4 text-white" />
            </div>
            <!-- Budget match badge -->
            <div
              v-else-if="selectedBudgetTier && combo.matches"
              class="absolute top-4 right-4 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full z-10 flex items-center"
            >
              <CheckCircle class="w-3 h-3 mr-1" />
              推荐
            </div>
            <!-- Hover effect -->
            <div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div class="relative z-10">
              <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3
                  class="min-w-0 break-words pr-12 text-xl font-bold text-white sm:pr-0"
                  :data-testid="`pricing-combo-name-${index}`"
                >
                  {{ combo.name }}
                </h3>
                <span
                  class="w-fit shrink-0 rounded-full bg-primary/20 px-3 py-1 text-sm text-primary"
                  :data-testid="`pricing-combo-budget-${index}`"
                >
                  {{ combo.budget }}
                </span>
              </div>
              <div class="space-y-3">
                <div
                  v-for="(tool, toolIndex) in combo.tools"
                  :key="toolIndex"
                  class="flex flex-col gap-2 rounded-lg bg-white/[0.04] p-3 sm:flex-row sm:items-start sm:justify-between"
                  :data-testid="`pricing-combo-tool-${index}-${toolIndex}`"
                >
                  <div class="min-w-0 flex-1">
                    <div class="mb-1 flex min-w-0 items-start">
                      <span class="mr-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs text-primary">
                        {{ toolIndex + 1 }}
                      </span>
                      <span
                        class="min-w-0 break-words font-semibold text-white"
                        :data-testid="`pricing-combo-tool-name-${index}-${toolIndex}`"
                      >{{ tool.tool }}</span>
                    </div>
                    <div class="ml-8 break-words text-sm text-white/60">
                      {{ tool.usage }}
                    </div>
                  </div>
                  <span
                    class="break-words text-sm font-medium text-primary sm:max-w-[9rem] sm:shrink-0 sm:text-right"
                    :data-testid="`pricing-combo-tool-cost-${index}-${toolIndex}`"
                  >{{ tool.cost }}</span>
                </div>
              </div>
            </div>
          </button>
        </div>
        <p
          v-if="!selectedCombo"
          class="text-center text-white/50 text-sm mt-4"
        >
          {{ selectedBudgetTier ? '点击选择匹配的组合方案，查看推荐工具' : '点击选择推荐的组合方案' }}
        </p>
        <p
          v-else
          class="text-center text-primary/80 text-sm mt-4"
        >
          已选择「{{ selectedCombo }}」，下方价格表已高亮推荐工具
        </p>
      </div>

      <!-- Cost Optimization Tips -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
          <Lightbulb class="w-6 h-6 text-yellow-500 mr-2" />
          成本优化策略
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="glass-card p-4">
            <h3 class="text-lg font-bold text-white mb-4 flex items-center">
              <TrendingUp class="w-5 h-5 text-green-500 mr-2" />
              分层使用策略
            </h3>
            <ul class="space-y-3 text-white/80">
              <li class="flex items-start">
                <CheckCircle class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong class="text-white">日常任务先用低成本入口</strong>：DeepSeek、Gemini CLI、开源/本地工具可先覆盖常规需求；Qwen CLI 需按 Coding Plan、API key 或 provider 成本单独核算</span>
              </li>
              <li class="flex items-start">
                <CheckCircle class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong class="text-white">复杂任务用付费版</strong>：Cursor、Claude 等付费工具用于复杂重构和架构设计</span>
              </li>
              <li class="flex items-start">
                <CheckCircle class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong class="text-white">团队共享订阅</strong>：Cursor Teams、GitHub Copilot Enterprise 等团队版更划算</span>
              </li>
            </ul>
          </div>

          <div class="glass-card p-4">
            <h3 class="text-lg font-bold text-white mb-4 flex items-center">
              <AlertTriangle class="w-5 h-5 text-yellow-500 mr-2" />
              避坑指南
            </h3>
            <ul class="space-y-3 text-white/80">
              <li class="flex items-start">
                <X class="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong class="text-white">评估功能重叠</strong>：Cursor 与 GitHub Copilot 在补全和 Agent 工作流上可能重叠，先按团队流程试用，再决定是否同时订阅</span>
              </li>
              <li class="flex items-start">
                <X class="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong class="text-white">区分计费入口</strong>：Claude、GPT 同时存在订阅与 API/按量入口，分别核对额度、超额规则和团队计划</span>
              </li>
              <li class="flex items-start">
                <X class="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong class="text-white">定期评估</strong>：每季度评估工具使用率，取消不常用的订阅</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Pricing Comparison Table -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
          <Scale class="w-6 h-6 text-blue-500 mr-2" />
          全部工具价格对比
          <span class="ml-3 text-sm font-normal text-white/50">
            ({{ pricingComparison.length }} 个工具)
          </span>
        </h2>
        <div class="glass-card p-0 overflow-hidden">
          <!-- 分类筛选 -->
          <div class="flex flex-wrap gap-2 p-4 pb-4 border-b border-white/[0.06]">
            <button
              v-for="cat in pricingCategories"
              :key="cat"
              class="pill cursor-pointer transition-all min-h-11"
              :class="pricingCategory === cat ? 'pill-active' : 'pill-inactive'"
              :aria-pressed="pricingCategory === cat"
              :data-testid="`pricing-category-${cat}`"
              @click="pricingCategory = cat"
            >
              {{ cat === 'all' ? '全部' : getCategoryLabel(cat) }}
            </button>
          </div>
          <div
            class="hidden overflow-x-auto md:block"
            data-testid="pricing-desktop-table"
          >
            <table class="w-full min-w-[800px]">
              <thead>
                <tr class="border-b border-white/[0.06]">
                  <th class="text-left p-4 text-white font-semibold">
                    工具
                  </th>
                  <th class="text-left p-4 text-white font-semibold">
                    免费额度
                  </th>
                  <th class="text-left p-4 text-white font-semibold">
                    定价
                  </th>
                  <th class="text-left p-4 text-white font-semibold">
                    性价比
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(tool, index) in pricingComparison"
                  :key="tool.name"
                  class="border-b border-white/[0.06] transition-all duration-200"
                  :class="{
                    'opacity-30': !matchesBudget(tool),
                    'bg-primary/10 hover:bg-primary/15': isToolInCombo(tool),
                    [index % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]']: matchesBudget(tool) && !isToolInCombo(tool)
                  }"
                >
                  <td class="p-4">
                    <router-link
                      :to="{ name: 'tool-detail', params: { id: tool.id } }"
                      class="break-words font-semibold transition-colors"
                      :class="isToolInCombo(tool) ? 'text-primary hover:text-primary/80' : 'text-white hover:text-primary'"
                    >
                      {{ tool.name }}
                    </router-link>
                    <span
                      v-if="isToolInCombo(tool)"
                      class="ml-2 inline-flex rounded bg-primary/20 px-1.5 py-0.5 text-xs text-primary"
                    >
                      方案推荐
                    </span>
                    <span
                      v-else
                      class="ml-2 inline-flex break-words text-sm text-white/60"
                    >{{ tool.category }}</span>
                  </td>
                  <td class="p-4 text-white/80 text-sm">
                    {{ tool.free }}
                  </td>
                  <td class="p-4 text-white/80 text-sm">
                    {{ tool.paid }}
                  </td>
                  <td class="p-4">
                    <div class="flex items-center">
                      <div class="flex-1 bg-white/[0.04] rounded-full h-2 mr-2">
                        <div
                          class="h-2 rounded-full bg-[#0a84ff]"
                          :style="{ width: tool.value + '%' }"
                        />
                      </div>
                      <span class="text-sm text-white/60">{{ tool.value }}/100</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            id="pricing-mobile-results"
            class="md:hidden"
            data-testid="pricing-mobile-list"
          >
            <article
              v-for="tool in mobilePricingComparison"
              :key="tool.id"
              class="border-b border-white/[0.06] p-4 transition-all"
              :class="{
                'opacity-40': !matchesBudget(tool),
                'bg-primary/10': isToolInCombo(tool)
              }"
              :data-testid="`pricing-mobile-card-${tool.id}`"
            >
              <div class="mb-3 flex items-start justify-between gap-3">
                <div class="min-w-0">
                  <router-link
                    :to="{ name: 'tool-detail', params: { id: tool.id } }"
                    class="break-words text-base font-semibold text-white"
                  >
                    {{ tool.name }}
                  </router-link>
                  <div class="mt-1 text-xs text-white/55">
                    {{ tool.category }}
                  </div>
                </div>
                <span
                  v-if="isToolInCombo(tool)"
                  class="shrink-0 rounded bg-primary/20 px-2 py-1 text-xs text-primary"
                >
                  方案推荐
                </span>
              </div>

              <div class="space-y-3 text-sm">
                <div>
                  <div class="mb-1 text-xs font-semibold text-white/45">
                    免费额度
                  </div>
                  <div class="break-words text-white/80">
                    {{ tool.free }}
                  </div>
                </div>
                <div>
                  <div class="mb-1 text-xs font-semibold text-white/45">
                    定价
                  </div>
                  <div class="break-words text-white/80">
                    {{ tool.paid }}
                  </div>
                </div>
                <div>
                  <div class="mb-2 text-xs font-semibold text-white/45">
                    性价比
                  </div>
                  <div class="flex items-center">
                    <div class="mr-2 h-2 flex-1 rounded-full bg-white/[0.04]">
                      <div
                        class="h-2 rounded-full bg-[#0a84ff]"
                        :style="{ width: tool.value + '%' }"
                      />
                    </div>
                    <span class="text-sm text-white/60">{{ tool.value }}/100</span>
                  </div>
                </div>
              </div>

              <router-link
                :to="{ name: 'tool-detail', params: { id: tool.id } }"
                class="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-white/10 px-4 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                :data-testid="`pricing-mobile-detail-${tool.id}`"
              >
                查看详情
              </router-link>
            </article>

            <div
              class="border-t border-white/[0.06] p-4 text-center"
              data-testid="pricing-mobile-pagination"
            >
              <p
                class="text-sm text-white/60"
                data-testid="pricing-mobile-count"
                role="status"
                aria-live="polite"
              >
                已显示 {{ mobilePricingComparison.length }} / {{ pricingComparison.length }} 个工具
              </p>
              <button
                v-if="hasMoreMobilePricing"
                type="button"
                class="mt-3 inline-flex min-h-11 items-center justify-center rounded-lg border border-white/10 px-5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                data-testid="pricing-mobile-load-more"
                aria-controls="pricing-mobile-results"
                @click="loadMorePricing"
              >
                <ChevronDown class="mr-2 h-4 w-4" />
                加载更多（再显示 {{ nextMobileBatchSize }} 个）
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Cost Calculator Tip -->
      <div class="mt-12">
        <div class="glass-card p-4 border-l-4 border-l-[#0a84ff]">
          <div class="flex items-start">
            <Calculator class="w-8 h-8 text-primary mr-4 flex-shrink-0" />
            <div>
              <h3 class="text-xl font-bold text-white mb-2">
                订阅成本计算建议
              </h3>
              <p class="text-white/80 mb-4">
                建议每月订阅成本控制在收入的 1-3% 之间。例如：
              </p>
              <ul class="space-y-2 text-white/70 text-sm">
                <li>• 个人开发者（月入 1-2 万）：推荐 $0-50/月 的方案</li>
                <li>• 重度 AI 用户：Claude Code Max $200/月起提供更高用量档，但仍需按当前计划、模型和时段/会话限制核验</li>
                <li>• 小团队（5 人）：推荐 $100-300/月的团队方案</li>
                <li>• 中型团队（20 人）：推荐 $500-1000/月的企业方案</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import {
  DollarSign,
  Star,
  Lightbulb,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  X,
  Scale,
  Calculator,
  Check,
  ChevronDown
} from 'lucide-vue-next'
import { usePricingCatalogStore } from '../stores/pricingCatalog'
import { getCategoryLabel } from '../utils/helpers'
import { analyzeToolPricing, matchesPricingBudget } from '../utils/pricing'
import { formatMetricValue } from '../utils/toolMetadata'
import { recommendedCombos as rawCombos } from '../data/categories.js'

const toolsStore = usePricingCatalogStore()

// Selection state
const selectedBudgetTier = ref(null)
const selectedCombo = ref(null)
const pricingCategory = ref('all')
const MOBILE_PAGE_SIZE = 16
const mobileVisibleCount = ref(MOBILE_PAGE_SIZE)

// Budget tiers overview
const budgetTiers = [
  { id: 'free', name: '免费方案', budget: '$0/月', users: '个人/学生', maxCost: 0 },
  { id: 'light', name: '轻量方案', budget: '$15-30/月', users: '个人开发者', highlight: true, maxCost: 30 },
  { id: 'standard', name: '标准方案', budget: '$50-100/月', users: '小团队', maxCost: 100 },
  { id: 'enterprise', name: '企业方案', budget: '$100+/人/月', users: '中大型团队', maxCost: 200 },
  { id: 'unlimited', name: '不设上限', budget: '$200+/月', users: '重度 AI 用户', maxCost: Infinity }
]

// Map combos to compatible budget tiers
const comboBudgetMap = {
  '不设上限方案': ['unlimited'],
  '预算敏感方案': ['free', 'light'],
  '全栈开发者方案': ['light'],
  '独立开发者方案': ['light', 'standard'],
  '企业团队方案': ['standard', 'enterprise'],
  '后端专项方案': ['light'],
}

// Create immutable copy with highlight flag (avoid mutating imported data)
const recommendedCombos = rawCombos.map(combo => ({
  ...combo,
  highlight: combo.name === '预算敏感方案'
}))

// Filtered combos based on selected budget tier
const filteredCombos = computed(() => {
  if (!selectedBudgetTier.value) return recommendedCombos
  return recommendedCombos.map(combo => ({
    ...combo,
    matches: (comboBudgetMap[combo.name] || []).includes(selectedBudgetTier.value)
  }))
})

// Tools highlighted from selected combo
const comboToolIds = computed(() => {
  if (!selectedCombo.value) return []
  const combo = recommendedCombos.find(c => c.name === selectedCombo.value)
  if (!combo) return []
  return combo.tools.flatMap(tool => Array.isArray(tool.toolIds) ? tool.toolIds : [])
})

// 分类列表
const pricingCategories = computed(() => {
  const cats = new Set(toolsStore.tools.map(t => t.category))
  return ['all', ...Array.from(cats)]
})

// 从真实工具数据生成价格表
const pricingComparison = computed(() => {
  let tools = toolsStore.tools.filter(t => t.versions && t.versions.length > 0)

  if (pricingCategory.value !== 'all') {
    tools = tools.filter(t => t.category === pricingCategory.value)
  }

  return tools.map(tool => {
    const freeInfo = formatMetricValue(tool.freeQuota, '暂无免费额度说明')
    const paidInfo = tool.versions
      .map(v => formatMetricValue(v.pricing, ''))
      .filter(Boolean)
      .join(' / ') || '未公开'
    const teamVersion = tool.versions.find(v =>
      v.pricing && (v.pricing.includes('团队') || v.pricing.includes('Teams') || v.pricing.includes('用户'))
    )
    const pricingSignals = analyzeToolPricing(tool)
    const hasFree = pricingSignals.hasFreeTier
    const rating = tool.personalExperience?.rating || 0
    const value = Math.min(100, Math.round((hasFree ? 40 : 0) + rating * 12))

    return {
      id: tool.id,
      name: tool.name,
      category: getCategoryLabel(tool.category),
      free: freeInfo,
      paid: paidInfo,
      team: formatMetricValue(teamVersion?.pricing, '-'),
      pricingSignals,
      value
    }
  }).sort((a, b) => b.value - a.value)
})

const mobilePricingComparison = computed(() =>
  pricingComparison.value.slice(0, mobileVisibleCount.value)
)
const hasMoreMobilePricing = computed(() =>
  mobileVisibleCount.value < pricingComparison.value.length
)
const nextMobileBatchSize = computed(() =>
  Math.min(MOBILE_PAGE_SIZE, pricingComparison.value.length - mobileVisibleCount.value)
)

watch([pricingCategory, selectedBudgetTier], () => {
  mobileVisibleCount.value = MOBILE_PAGE_SIZE
})

// 判断工具是否匹配所选预算层级
function matchesBudget(tool) {
  if (!selectedBudgetTier.value) return true
  const tier = budgetTiers.find(t => t.id === selectedBudgetTier.value)
  if (!tier) return true

  return matchesPricingBudget(tool.pricingSignals, tier.id)
}

// Check if a tool is in the selected combo
function isToolInCombo(tool) {
  if (!tool || comboToolIds.value.length === 0) return false
  return comboToolIds.value.includes(tool.id)
}

// Selection handlers
function selectBudgetTier(tierId) {
  selectedBudgetTier.value = selectedBudgetTier.value === tierId ? null : tierId
  // Auto-clear combo if it doesn't match the new budget tier
  if (selectedCombo.value && selectedBudgetTier.value) {
    const tiers = comboBudgetMap[selectedCombo.value] || []
    if (!tiers.includes(selectedBudgetTier.value)) {
      selectedCombo.value = null
    }
  }
}

function selectCombo(comboName) {
  selectedCombo.value = selectedCombo.value === comboName ? null : comboName
}

function loadMorePricing() {
  mobileVisibleCount.value = Math.min(
    mobileVisibleCount.value + MOBILE_PAGE_SIZE,
    pricingComparison.value.length
  )
}
</script>
