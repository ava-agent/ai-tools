<template>
  <div class="glass-card overflow-hidden p-4 sm:p-6">
    <div class="flex flex-col gap-3 mb-6 sm:flex-row sm:items-center sm:justify-between">
      <h2 class="text-2xl font-bold text-white flex items-center">
        <GitCompareArrows class="w-6 h-6 text-primary mr-2" />
        侧边对比
      </h2>
      <button
        type="button"
        class="btn-secondary min-h-11 min-w-11 justify-center text-sm"
        data-testid="compare-clear-button"
        @click="toolsStore.clearCompare()"
      >
        <X class="w-4 h-4 mr-1 inline" />
        清除对比
      </button>
    </div>

    <div
      class="hidden overflow-x-auto md:block"
      data-testid="compare-desktop-table"
    >
      <table class="w-full min-w-[600px]">
        <thead>
          <tr class="border-b border-white/10">
            <th class="text-left p-4 text-white/60 font-medium w-32">
              属性
            </th>
            <th
              v-for="tool in tools"
              :key="tool.id"
              class="text-left p-4"
            >
              <router-link
                :to="{ name: 'tool-detail', params: { id: tool.id } }"
                class="flex items-center gap-2 text-white font-semibold hover:text-primary transition-colors"
              >
                <ToolLogo
                  :tool-id="tool.id"
                  :tool-name="tool.name"
                  size="sm"
                />
                {{ tool.name }}
              </router-link>
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- 开发者 -->
          <tr class="border-b border-white/5">
            <th
              scope="row"
              class="p-4 text-left text-white/60 text-sm"
            >
              开发者
            </th>
            <td
              v-for="tool in tools"
              :key="tool.id"
              class="p-4 text-white/80 break-words"
            >
              {{ formatMetricValue(tool.developer, '待补充') }}
            </td>
          </tr>

          <!-- 分类 -->
          <tr class="border-b border-white/5">
            <th
              scope="row"
              class="p-4 text-left text-white/60 text-sm"
            >
              分类
            </th>
            <td
              v-for="tool in tools"
              :key="tool.id"
              class="p-4"
            >
              <span class="px-2 py-1 bg-primary/20 text-primary text-sm rounded-full">
                {{ getCategoryLabel(tool.category) }}
              </span>
            </td>
          </tr>

          <!-- 评分 -->
          <tr class="border-b border-white/5">
            <th
              scope="row"
              class="p-4 text-left text-white/60 text-sm"
            >
              评分
            </th>
            <td
              v-for="tool in tools"
              :key="tool.id"
              class="p-4"
              :class="isHighest(tool, 'rating') ? 'bg-green-500/5' : ''"
            >
              <div
                class="flex items-center gap-1"
                role="img"
                :aria-label="getRatingLabel(tool)"
              >
                <Star
                  v-for="i in 5"
                  :key="i"
                  class="w-4 h-4"
                  :class="i <= (tool.personalExperience?.rating || 0) ? 'text-primary fill-primary' : 'text-gray-600'"
                  aria-hidden="true"
                />
                <span
                  v-if="isHighest(tool, 'rating')"
                  class="ml-1 text-[10px] font-semibold text-green-400"
                >最高</span>
              </div>
            </td>
          </tr>

          <!-- 定价 -->
          <tr class="border-b border-white/5">
            <th
              scope="row"
              class="p-4 text-left text-white/60 text-sm"
            >
              定价
            </th>
            <td
              v-for="tool in tools"
              :key="tool.id"
              class="p-4 text-white/80 text-sm break-words"
            >
              {{ firstVersionValue(tool, 'pricing') }}
            </td>
          </tr>

          <!-- 免费额度 -->
          <tr class="border-b border-white/5">
            <th
              scope="row"
              class="p-4 text-left text-white/60 text-sm"
            >
              免费额度
            </th>
            <td
              v-for="tool in tools"
              :key="tool.id"
              class="p-4 text-white/80 text-sm break-words"
            >
              {{ formatMetricValue(tool.freeQuota, '未公开') }}
            </td>
          </tr>

          <!-- 上下文窗口 -->
          <tr class="border-b border-white/5">
            <th
              scope="row"
              class="p-4 text-left text-white/60 text-sm"
            >
              上下文
            </th>
            <td
              v-for="tool in tools"
              :key="tool.id"
              class="p-4 text-white/80 text-sm break-words"
            >
              {{ formatContextWindow(tool.contextWindow) }}
            </td>
          </tr>

          <!-- 中文支持 -->
          <tr class="border-b border-white/5">
            <th
              scope="row"
              class="p-4 text-left text-white/60 text-sm"
            >
              <span class="flex items-center gap-1.5">
                <Globe class="w-3.5 h-3.5" />
                中文支持
              </span>
            </th>
            <td
              v-for="tool in tools"
              :key="tool.id"
              class="p-4"
              :class="isHighest(tool, 'chinese') ? 'bg-green-500/5' : ''"
            >
              <div
                v-if="getChineseSupportLevel(tool) > 0"
                class="flex items-center gap-0.5"
                role="img"
                :aria-label="getChineseSupportLabel(tool)"
              >
                <Star
                  v-for="i in 5"
                  :key="'cn-' + i"
                  class="w-3.5 h-3.5"
                  :class="i <= getChineseSupportLevel(tool) ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'"
                  aria-hidden="true"
                />
                <span
                  v-if="isHighest(tool, 'chinese')"
                  class="ml-1 text-[10px] font-semibold text-green-400"
                >最高</span>
              </div>
              <span
                v-else
                class="text-white/40 text-sm"
              >{{ formatChineseSupport(tool.chineseSupport) }}</span>
            </td>
          </tr>

          <!-- 优势 -->
          <tr class="border-b border-white/5">
            <th
              scope="row"
              class="p-4 text-left text-white/60 text-sm align-top"
            >
              优势
            </th>
            <td
              v-for="tool in tools"
              :key="tool.id"
              class="p-4 align-top"
            >
              <ul class="space-y-1">
                <li
                  v-for="pro in (tool.pros || []).slice(0, 4)"
                  :key="pro"
                  class="text-sm text-white/70 flex items-start"
                >
                  <span class="text-green-500 mr-1.5 flex-shrink-0">+</span>
                  <span>{{ pro }}</span>
                </li>
              </ul>
            </td>
          </tr>

          <!-- 劣势 -->
          <tr class="border-b border-white/5">
            <th
              scope="row"
              class="p-4 text-left text-white/60 text-sm align-top"
            >
              劣势
            </th>
            <td
              v-for="tool in tools"
              :key="tool.id"
              class="p-4 align-top"
            >
              <ul class="space-y-1">
                <li
                  v-for="con in (tool.cons || []).slice(0, 3)"
                  :key="con"
                  class="text-sm text-white/70 flex items-start"
                >
                  <span class="text-red-500 mr-1.5 flex-shrink-0">-</span>
                  <span>{{ con }}</span>
                </li>
              </ul>
            </td>
          </tr>

          <!-- 适用场景 -->
          <tr>
            <th
              scope="row"
              class="p-4 text-left text-white/60 text-sm align-top"
            >
              适用场景
            </th>
            <td
              v-for="tool in tools"
              :key="tool.id"
              class="p-4 text-white/80 text-sm align-top"
            >
              {{ tool.bestFor }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      class="md:hidden"
      data-testid="compare-mobile-matrix"
    >
      <div
        class="-mx-4 overflow-x-auto px-4"
        data-testid="compare-mobile-scroll"
      >
        <table
          class="table-fixed border-separate border-spacing-0 text-sm"
          :style="{ minWidth: `${104 + tools.length * 220}px` }"
        >
          <caption class="sr-only">
            移动端工具横向对比
          </caption>
          <thead>
            <tr>
              <th class="sticky left-0 z-20 w-[104px] border-b border-white/10 bg-[#0b0d0b] p-3 text-left text-xs font-medium text-white/45">
                指标
              </th>
              <th
                v-for="tool in tools"
                :key="`mobile-head-${tool.id}`"
                class="w-[220px] border-b border-white/10 bg-[#0b0d0b] p-3 text-left"
              >
                <router-link
                  :to="{ name: 'tool-detail', params: { id: tool.id } }"
                  class="flex min-h-11 items-center gap-2 font-semibold text-white hover:text-primary"
                >
                  <ToolLogo
                    :tool-id="tool.id"
                    :tool-name="tool.name"
                    size="xs"
                  />
                  <span class="break-words">{{ tool.name }}</span>
                </router-link>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in mobileRows"
              :key="row.id"
            >
              <th
                scope="row"
                class="sticky left-0 z-10 w-[104px] border-b border-white/[0.06] bg-[#0b0d0b] p-3 text-left text-xs font-medium text-white/45"
              >
                {{ row.label }}
              </th>
              <td
                v-for="tool in tools"
                :key="`${row.id}-${tool.id}`"
                class="w-[220px] break-words border-b border-white/[0.06] p-3 align-top text-xs leading-relaxed text-white/75"
                :data-testid="`compare-mobile-field-${tool.id}-${row.id}`"
                :role="row.id === 'rating' || row.id === 'chinese' ? 'img' : undefined"
                :aria-label="row.id === 'rating' ? getRatingLabel(tool) : row.id === 'chinese' ? getChineseSupportLabel(tool) : undefined"
              >
                <template v-if="row.id === 'rating'">
                  <span class="inline-flex items-center gap-1">
                    <span>{{ formatRatingValue(tool) }}</span>
                    <span
                      v-if="isHighest(tool, 'rating')"
                      class="text-[10px] font-semibold text-green-400"
                    >最高</span>
                  </span>
                </template>
                <template v-else-if="row.id === 'chinese'">
                  <span class="inline-flex items-center gap-1">
                    <span>{{ formatChineseSupport(tool.chineseSupport) }}</span>
                    <span
                      v-if="isHighest(tool, 'chinese')"
                      class="text-[10px] font-semibold text-green-400"
                    >最高</span>
                  </span>
                </template>
                <span
                  v-else
                  class="break-words"
                >{{ getMobileRowValue(tool, row.id) }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="mt-4 space-y-2"
        data-testid="compare-mobile-details"
      >
        <details
          v-for="tool in tools"
          :key="`mobile-details-${tool.id}`"
          class="rounded-lg border border-white/[0.06] bg-white/[0.025]"
          :data-testid="`compare-mobile-detail-${tool.id}`"
        >
          <summary class="flex min-h-11 cursor-pointer items-center px-3 py-2 text-sm font-semibold text-white">
            {{ tool.name }}：优势与风险
          </summary>
          <div class="grid gap-4 border-t border-white/[0.06] p-3 text-sm sm:grid-cols-2">
            <div>
              <div class="mb-2 text-xs font-semibold text-green-400">
                优势
              </div>
              <ul class="space-y-1">
                <li
                  v-for="(pro, index) in (tool.pros || []).slice(0, 4)"
                  :key="pro"
                  class="flex items-start break-words text-white/70"
                  :data-testid="`compare-mobile-pro-${tool.id}-${index}`"
                >
                  <span class="mr-1.5 text-green-500">+</span><span class="break-words">{{ pro }}</span>
                </li>
              </ul>
            </div>
            <div>
              <div class="mb-2 text-xs font-semibold text-red-400">
                风险
              </div>
              <ul class="space-y-1">
                <li
                  v-for="(con, index) in (tool.cons || []).slice(0, 3)"
                  :key="con"
                  class="flex items-start break-words text-white/70"
                  :data-testid="`compare-mobile-con-${tool.id}-${index}`"
                >
                  <span class="mr-1.5 text-red-500">-</span><span class="break-words">{{ con }}</span>
                </li>
              </ul>
            </div>
          </div>
        </details>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useComparisonStore } from '../stores/comparison'
import { getCategoryLabel } from '../utils/helpers'
import { formatChineseSupport, formatContextWindow, formatMetricValue } from '../utils/toolMetadata'
import { Star, GitCompareArrows, X, Globe } from 'lucide-vue-next'
import ToolLogo from './ToolLogo.vue'

const props = defineProps({
  tools: { type: Array, required: true }
})

const toolsStore = useComparisonStore()
const mobileRows = [
  { id: 'developer', label: '开发者' },
  { id: 'category', label: '分类' },
  { id: 'rating', label: '评分' },
  { id: 'pricing', label: '定价' },
  { id: 'free-quota', label: '免费额度' },
  { id: 'context', label: '上下文' },
  { id: 'chinese', label: '中文支持' },
  { id: 'best-for', label: '适用场景' }
]

function firstVersionValue(tool, field, fallback = '未公开') {
  return formatMetricValue(tool.versions?.[0]?.[field], fallback)
}

function getChineseSupportLevel(tool) {
  const level = Number(tool.chineseSupport)
  if (!Number.isFinite(level) || level <= 0) return 0
  return Math.min(5, Math.max(0, Math.round(level)))
}

function formatRatingValue(tool) {
  const rating = Number(tool.personalExperience?.rating || 0)
  return rating > 0 ? `${rating} / 5` : '未评分'
}

function getMobileRowValue(tool, rowId) {
  if (rowId === 'developer') return formatMetricValue(tool.developer, '待补充')
  if (rowId === 'category') return getCategoryLabel(tool.category)
  if (rowId === 'pricing') return firstVersionValue(tool, 'pricing')
  if (rowId === 'free-quota') return formatMetricValue(tool.freeQuota, '未公开')
  if (rowId === 'context') return formatContextWindow(tool.contextWindow)
  if (rowId === 'best-for') return formatMetricValue(tool.bestFor, '待补充')
  return '未公开'
}

function getRatingLabel(tool) {
  const rating = Number(tool.personalExperience?.rating || 0)
  const value = rating > 0 ? `${rating} / 5` : '未评分'
  return `评分 ${value}${isHighest(tool, 'rating') ? '，并列最高' : ''}`
}

function getChineseSupportLabel(tool) {
  const level = getChineseSupportLevel(tool)
  const value = level > 0 ? `${level} / 5` : formatChineseSupport(tool.chineseSupport)
  return `中文支持 ${value}${isHighest(tool, 'chinese') ? '，并列最高' : ''}`
}

function isHighest(tool, field) {
  if (props.tools.length < 2) return false
  if (field === 'rating') {
    const rating = tool.personalExperience?.rating || 0
    const max = Math.max(...props.tools.map(t => t.personalExperience?.rating || 0))
    return rating === max && max > 0
  }
  if (field === 'chinese') {
    const score = tool.chineseSupport || 0
    const max = Math.max(...props.tools.map(t => t.chineseSupport || 0))
    return score === max && max > 0
  }
  return false
}
</script>
