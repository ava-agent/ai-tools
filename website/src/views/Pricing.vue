<template>
  <div class="min-h-screen bg-background">
    <div class="container mx-auto px-4 py-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          AI 工具订阅指南
        </h1>
        <p class="text-xl text-white/80 max-w-2xl mx-auto">
          AI 工具订阅是一笔不小的开支。我们整理了 2026 年的主流定价与"分层使用策略"，帮您把每一分钱都花在刀刃上。
        </p>
      </div>

      <!-- Budget Overview -->
      <div class="max-w-4xl mx-auto mb-12">
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
        <div class="grid md:grid-cols-4 gap-4">
          <div
            v-for="tier in budgetTiers"
            :key="tier.id"
            class="card text-center cursor-pointer transition-all duration-300 relative overflow-hidden group"
            :class="{
              'ring-2 ring-primary': selectedBudgetTier === tier.id,
              'ring-2 ring-primary/50': tier.highlight && !selectedBudgetTier,
              'hover:ring-2 hover:ring-primary/30': selectedBudgetTier !== tier.id
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
          点击选择适合的预算方案
        </p>
      </div>

      <!-- Recommended Combinations -->
      <div class="max-w-6xl mx-auto mb-12">
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
        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="combo in recommendedCombos"
            :key="combo.name"
            class="card cursor-pointer transition-all duration-300 relative overflow-hidden group"
            :class="{
              'ring-2 ring-primary': selectedCombo === combo.name,
              'ring-2 ring-primary/50': combo.highlight && !selectedCombo,
              'hover:ring-2 hover:ring-primary/30': selectedCombo !== combo.name
            }"
            @click="selectCombo(combo.name)"
          >
            <!-- Selected indicator -->
            <div
              v-if="selectedCombo === combo.name"
              class="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center z-10"
            >
              <Check class="w-4 h-4 text-white" />
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
                  class="flex items-start justify-between p-3 bg-white/5 rounded-lg"
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
          点击选择推荐的组合方案
        </p>
      </div>

      <!-- Cost Optimization Tips -->
      <div class="max-w-4xl mx-auto mb-12">
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
          <Lightbulb class="w-6 h-6 text-yellow-500 mr-2" />
          成本优化策略
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="card">
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

          <div class="card">
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
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
          <Scale class="w-6 h-6 text-blue-500 mr-2" />
          主流工具价格对比
        </h2>
        <div class="card overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full min-w-[800px]">
              <thead>
                <tr class="border-b border-white/10">
                  <th class="text-left p-4 text-white font-semibold">
                    工具
                  </th>
                  <th class="text-left p-4 text-white font-semibold">
                    免费版
                  </th>
                  <th class="text-left p-4 text-white font-semibold">
                    付费版
                  </th>
                  <th class="text-left p-4 text-white font-semibold">
                    团队版
                  </th>
                  <th class="text-left p-4 text-white font-semibold">
                    性价比
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="tool in pricingComparison"
                  :key="tool.name"
                  class="border-b border-white/5 hover:bg-white/5"
                >
                  <td class="p-4">
                    <span class="font-semibold text-white">{{ tool.name }}</span>
                    <span class="text-sm text-white/60 ml-2">{{ tool.category }}</span>
                  </td>
                  <td class="p-4 text-white/80">
                    {{ tool.free }}
                  </td>
                  <td class="p-4 text-white/80">
                    {{ tool.paid }}
                  </td>
                  <td class="p-4 text-white/80">
                    {{ tool.team || '-' }}
                  </td>
                  <td class="p-4">
                    <div class="flex items-center">
                      <div class="flex-1 bg-white/10 rounded-full h-2 mr-2">
                        <div
                          class="h-2 rounded-full"
                          :class="getPriceValueColor(tool.value)"
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
      <div class="max-w-4xl mx-auto mt-12">
        <div class="card bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
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
import { ref } from 'vue'
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
import { recommendedCombos } from '../data/categories.js'
import { aiToolsData } from '../data/tools.js'

// Selection state
const selectedBudgetTier = ref(null)
const selectedCombo = ref(null)

// Budget tiers overview
const budgetTiers = [
  { id: 'free', name: '免费方案', budget: '$0/月', users: '个人/学生' },
  { id: 'light', name: '轻量方案', budget: '$15-30/月', users: '个人开发者', highlight: true },
  { id: 'standard', name: '标准方案', budget: '$50-100/月', users: '小团队' },
  { id: 'enterprise', name: '企业方案', budget: '$100+/人/月', users: '中大型团队' }
]

// Pricing comparison data
const pricingComparison = [
  { name: 'Cursor', category: 'AI IDE', free: '有限试用', paid: '$20/月', team: '$40/月', value: 75 },
  { name: 'Trae', category: 'AI IDE', free: '免费预览期', paid: '待公布', team: '-', value: 95 },
  { name: 'Windsurf', category: 'AI IDE', free: '功能强大', paid: '$15/月', team: '-', value: 85 },
  { name: 'Claude', category: 'AI 模型', free: '有限', paid: '$20/月', team: '定制', value: 80 },
  { name: 'GPT-4o', category: 'AI 模型', free: '有限', paid: '$20/月', team: '$30/月', value: 70 },
  { name: 'DeepSeek', category: 'AI 模型', free: '强大', paid: '便宜', team: '-', value: 100 },
  { name: 'Gemini CLI', category: 'AI CLI', free: '1000/天', paid: '-', team: '-', value: 95 },
  { name: 'Claude Code', category: 'AI CLI', free: '-', paid: '$20/月', team: '-', value: 75 }
]

function getPriceValueColor(value) {
  if (value >= 90) return 'bg-green-500'
  if (value >= 70) return 'bg-yellow-500'
  return 'bg-red-500'
}

// Selection handlers
function selectBudgetTier(tierId) {
  selectedBudgetTier.value = selectedBudgetTier.value === tierId ? null : tierId
}

function selectCombo(comboName) {
  selectedCombo.value = selectedCombo.value === comboName ? null : comboName
}

// Highlight a recommended combo
recommendedCombos.forEach(combo => {
  if (combo.name === '预算敏感方案') {
    combo.highlight = true
  }
})
</script>
