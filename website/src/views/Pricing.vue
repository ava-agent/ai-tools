<template>
  <div class="min-h-screen bg-background">
    <div class="max-w-[960px] mx-auto px-5 py-6">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1
          class="text-[28px] font-bold text-white mb-4"
          style="letter-spacing: -0.8px"
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
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div
            v-for="tier in budgetTiers"
            :key="tier.id"
            class="pill cursor-pointer text-center transition-all duration-300 relative overflow-hidden group p-4"
            :class="{
              'pill-active': selectedBudgetTier === tier.id,
              'pill-inactive': selectedBudgetTier !== tier.id,
              'ring-2 ring-primary/50': tier.highlight && !selectedBudgetTier,
            }"
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
          </div>
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
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="combo in filteredCombos"
            :key="combo.name"
            class="glass-card p-4 cursor-pointer transition-all duration-300 relative overflow-hidden group"
            :class="{
              'ring-2 ring-primary': selectedCombo === combo.name,
              'ring-2 ring-green-400/50': selectedBudgetTier && combo.matches && selectedCombo !== combo.name,
              'opacity-30': selectedBudgetTier && !combo.matches,
              'hover:ring-2 hover:ring-primary/30': !selectedBudgetTier || combo.matches
            }"
            @click="combo.matches !== false && selectCombo(combo.name)"
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
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-bold text-white">
                  {{ combo.name }}
                </h3>
                <span class="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  {{ combo.budget }}
                </span>
              </div>
              <div class="space-y-3">
                <div
                  v-for="(tool, index) in combo.tools"
                  :key="index"
                  class="flex items-start justify-between p-3 bg-white/[0.04] rounded-lg"
                >
                  <div class="flex-1">
                    <div class="flex items-center mb-1">
                      <span class="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs text-primary mr-2">
                        {{ index + 1 }}
                      </span>
                      <span class="font-semibold text-white">{{ tool.tool }}</span>
                    </div>
                    <div class="text-sm text-white/60 ml-8">
                      {{ tool.usage }}
                    </div>
                  </div>
                  <span class="text-sm text-primary font-medium">{{ tool.cost }}</span>
                </div>
              </div>
            </div>
          </div>
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
                <span><strong class="text-white">日常任务用免费版</strong>：DeepSeek、Qwen、Gemini CLI 等免费工具足够应对 80% 的日常需求</span>
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
                <span><strong class="text-white">避免重复订阅</strong>：Cursor 和 GitHub Copilot 功能重叠，二选一即可</span>
              </li>
              <li class="flex items-start">
                <X class="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong class="text-white">注意用量限制</strong>：Claude、GPT 等按量计费，关注月度账单</span>
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
              class="pill cursor-pointer transition-all"
              :class="pricingCategory === cat ? 'pill-active' : 'pill-inactive'"
              @click="pricingCategory = cat"
            >
              {{ cat === 'all' ? '全部' : getCategoryLabel(cat) }}
            </button>
          </div>
          <div class="overflow-x-auto">
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
                    'bg-primary/10 hover:bg-primary/15': isToolInCombo(tool.name),
                    [index % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]']: matchesBudget(tool) && !isToolInCombo(tool.name)
                  }"
                >
                  <td class="p-4">
                    <router-link
                      :to="{ name: 'tool-detail', params: { id: tool.id } }"
                      class="font-semibold transition-colors"
                      :class="isToolInCombo(tool.name) ? 'text-primary hover:text-primary/80' : 'text-white hover:text-primary'"
                    >
                      {{ tool.name }}
                    </router-link>
                    <span
                      v-if="isToolInCombo(tool.name)"
                      class="ml-2 px-1.5 py-0.5 bg-primary/20 text-primary text-xs rounded"
                    >
                      方案推荐
                    </span>
                    <span
                      v-else
                      class="text-sm text-white/60 ml-2"
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
                <li>• 重度 AI 用户：Claude Code Max $200/月，无限额度，效率提升远超成本</li>
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
import { ref, computed } from 'vue'
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
  Check
} from 'lucide-vue-next'
import { useToolsStore } from '../stores/tools'
import { getCategoryLabel } from '../utils/helpers'
import { recommendedCombos as rawCombos } from '../data/categories.js'

const toolsStore = useToolsStore()

// Selection state
const selectedBudgetTier = ref(null)
const selectedCombo = ref(null)
const pricingCategory = ref('all')

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
const comboToolNames = computed(() => {
  if (!selectedCombo.value) return []
  const combo = recommendedCombos.find(c => c.name === selectedCombo.value)
  if (!combo) return []
  return combo.tools.map(t => t.tool.toLowerCase().replace(/\s+/g, ''))
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
    const freeInfo = tool.freeQuota || '无'
    const paidInfo = tool.versions.map(v => v.pricing).filter(Boolean).join(' / ') || 'N/A'
    const teamVersion = tool.versions.find(v =>
      v.pricing && (v.pricing.includes('团队') || v.pricing.includes('Teams') || v.pricing.includes('用户'))
    )
    const hasFree = freeInfo !== '无' && freeInfo !== 'N/A' && freeInfo !== '-'
    const rating = tool.personalExperience?.rating || 0
    const value = Math.min(100, Math.round((hasFree ? 40 : 0) + rating * 12))

    return {
      id: tool.id,
      name: tool.name,
      category: getCategoryLabel(tool.category),
      free: freeInfo,
      paid: paidInfo,
      team: teamVersion?.pricing || '-',
      value
    }
  }).sort((a, b) => b.value - a.value)
})

// 判断工具是否匹配所选预算层级
function matchesBudget(tool) {
  if (!selectedBudgetTier.value) return true
  const tier = budgetTiers.find(t => t.id === selectedBudgetTier.value)
  if (!tier) return true

  // 简单匹配: 免费方案匹配有免费额度的; 其他根据价格文本判断
  if (tier.id === 'free') {
    return tool.free !== '无' && tool.free !== '-' && tool.free !== 'N/A'
  }

  const priceMatch = tool.paid.match(/\$(\d+)/)
  if (!priceMatch) return tier.id === 'free'
  const cost = parseInt(priceMatch[1])

  if (tier.id === 'light') return cost <= 30
  if (tier.id === 'standard') return cost <= 100
  if (tier.id === 'enterprise') return cost > 30 && cost <= 200
  return cost >= 100 // unlimited
}

function getPriceValueColor(value) {
  if (value >= 90) return 'bg-green-500'
  if (value >= 70) return 'bg-yellow-500'
  return 'bg-red-500'
}

// Check if a tool is in the selected combo
function isToolInCombo(toolName) {
  if (comboToolNames.value.length === 0) return false
  const normalized = toolName.toLowerCase().replace(/\s+/g, '')
  return comboToolNames.value.some(ct =>
    normalized.includes(ct) || ct.includes(normalized)
  )
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
</script>
