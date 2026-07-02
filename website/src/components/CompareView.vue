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
            <td class="p-4 text-white/60 text-sm">
              开发者
            </td>
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
            <td class="p-4 text-white/60 text-sm">
              分类
            </td>
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
            <td class="p-4 text-white/60 text-sm">
              评分
            </td>
            <td
              v-for="tool in tools"
              :key="tool.id"
              class="p-4"
              :class="isHighest(tool, 'rating') ? 'bg-green-500/5' : ''"
            >
              <div class="flex items-center space-x-1">
                <Star
                  v-for="i in 5"
                  :key="i"
                  class="w-4 h-4"
                  :class="i <= (tool.personalExperience?.rating || 0) ? 'text-primary fill-primary' : 'text-gray-600'"
                />
              </div>
            </td>
          </tr>

          <!-- 定价 -->
          <tr class="border-b border-white/5">
            <td class="p-4 text-white/60 text-sm">
              定价
            </td>
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
            <td class="p-4 text-white/60 text-sm">
              免费额度
            </td>
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
            <td class="p-4 text-white/60 text-sm">
              上下文
            </td>
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
            <td class="p-4 text-white/60 text-sm">
              <span class="flex items-center gap-1.5">
                <Globe class="w-3.5 h-3.5" />
                中文支持
              </span>
            </td>
            <td
              v-for="tool in tools"
              :key="tool.id"
              class="p-4"
              :class="isHighest(tool, 'chinese') ? 'bg-green-500/5' : ''"
            >
              <div
                v-if="getChineseSupportLevel(tool) > 0"
                class="flex items-center space-x-0.5"
              >
                <Star
                  v-for="i in 5"
                  :key="'cn-' + i"
                  class="w-3.5 h-3.5"
                  :class="i <= getChineseSupportLevel(tool) ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'"
                />
              </div>
              <span
                v-else
                class="text-white/40 text-sm"
              >{{ formatChineseSupport(tool.chineseSupport) }}</span>
            </td>
          </tr>

          <!-- 优势 -->
          <tr class="border-b border-white/5">
            <td class="p-4 text-white/60 text-sm align-top">
              优势
            </td>
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
            <td class="p-4 text-white/60 text-sm align-top">
              劣势
            </td>
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
            <td class="p-4 text-white/60 text-sm align-top">
              适用场景
            </td>
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
      class="space-y-4 md:hidden"
      data-testid="compare-mobile-cards"
    >
      <article
        v-for="tool in tools"
        :key="tool.id"
        class="rounded-lg border border-white/[0.06] bg-white/[0.03] p-4"
        :data-testid="`compare-mobile-card-${tool.id}`"
      >
        <router-link
          :to="{ name: 'tool-detail', params: { id: tool.id } }"
          class="mb-4 flex min-h-11 items-center gap-3 text-white transition-colors hover:text-primary"
        >
          <ToolLogo
            :tool-id="tool.id"
            :tool-name="tool.name"
            size="sm"
          />
          <div class="min-w-0">
            <h3 class="break-words text-base font-semibold">
              {{ tool.name }}
            </h3>
            <p class="break-words text-xs text-white/45">
              {{ formatMetricValue(tool.developer, '待补充') }}
            </p>
          </div>
        </router-link>

        <dl class="space-y-3 text-sm">
          <div class="grid gap-1">
            <dt class="text-xs font-medium text-white/45">
              分类
            </dt>
            <dd
              class="break-words"
              :data-testid="`compare-mobile-field-${tool.id}-category`"
            >
              <span class="inline-flex rounded-full bg-primary/20 px-2 py-1 text-xs text-primary">
                {{ getCategoryLabel(tool.category) }}
              </span>
            </dd>
          </div>

          <div class="grid gap-1">
            <dt class="text-xs font-medium text-white/45">
              评分
            </dt>
            <dd
              class="flex items-center gap-1 rounded-lg p-2"
              :class="isHighest(tool, 'rating') ? 'bg-green-500/5' : 'bg-white/[0.02]'"
              :data-testid="`compare-mobile-field-${tool.id}-rating`"
            >
              <Star
                v-for="i in 5"
                :key="`mobile-rating-${tool.id}-${i}`"
                class="h-4 w-4"
                :class="i <= (tool.personalExperience?.rating || 0) ? 'fill-primary text-primary' : 'text-white/20'"
              />
            </dd>
          </div>

          <div class="grid gap-1">
            <dt class="text-xs font-medium text-white/45">
              定价
            </dt>
            <dd
              class="break-words text-white/80"
              :data-testid="`compare-mobile-field-${tool.id}-pricing`"
            >
              {{ firstVersionValue(tool, 'pricing') }}
            </dd>
          </div>

          <div class="grid gap-1">
            <dt class="text-xs font-medium text-white/45">
              免费额度
            </dt>
            <dd
              class="break-words text-white/80"
              :data-testid="`compare-mobile-field-${tool.id}-free-quota`"
            >
              {{ formatMetricValue(tool.freeQuota, '未公开') }}
            </dd>
          </div>

          <div class="grid gap-1">
            <dt class="text-xs font-medium text-white/45">
              上下文
            </dt>
            <dd
              class="break-words text-white/80"
              :data-testid="`compare-mobile-field-${tool.id}-context`"
            >
              {{ formatContextWindow(tool.contextWindow) }}
            </dd>
          </div>

          <div class="grid gap-1">
            <dt class="flex items-center gap-1.5 text-xs font-medium text-white/45">
              <Globe class="h-3.5 w-3.5" />
              中文支持
            </dt>
            <dd
              class="flex items-center gap-0.5 rounded-lg p-2"
              :class="isHighest(tool, 'chinese') ? 'bg-green-500/5' : 'bg-white/[0.02]'"
              :data-testid="`compare-mobile-field-${tool.id}-chinese`"
            >
              <template v-if="getChineseSupportLevel(tool) > 0">
                <Star
                  v-for="i in 5"
                  :key="`mobile-cn-${tool.id}-${i}`"
                  class="h-3.5 w-3.5"
                  :class="i <= getChineseSupportLevel(tool) ? 'fill-yellow-400 text-yellow-400' : 'text-white/20'"
                />
              </template>
              <span
                v-else
                class="text-white/40"
              >{{ formatChineseSupport(tool.chineseSupport) }}</span>
            </dd>
          </div>

          <div class="grid gap-1">
            <dt class="text-xs font-medium text-white/45">
              优势
            </dt>
            <dd>
              <ul class="space-y-1">
                <li
                  v-for="(pro, index) in (tool.pros || []).slice(0, 4)"
                  :key="pro"
                  class="flex items-start break-words text-white/70"
                  :data-testid="`compare-mobile-pro-${tool.id}-${index}`"
                >
                  <span class="mr-1.5 flex-shrink-0 text-green-500">+</span>
                  <span class="min-w-0 break-words">{{ pro }}</span>
                </li>
              </ul>
            </dd>
          </div>

          <div class="grid gap-1">
            <dt class="text-xs font-medium text-white/45">
              劣势
            </dt>
            <dd>
              <ul class="space-y-1">
                <li
                  v-for="(con, index) in (tool.cons || []).slice(0, 3)"
                  :key="con"
                  class="flex items-start break-words text-white/70"
                  :data-testid="`compare-mobile-con-${tool.id}-${index}`"
                >
                  <span class="mr-1.5 flex-shrink-0 text-red-500">-</span>
                  <span class="min-w-0 break-words">{{ con }}</span>
                </li>
              </ul>
            </dd>
          </div>

          <div class="grid gap-1">
            <dt class="text-xs font-medium text-white/45">
              适用场景
            </dt>
            <dd
              class="break-words text-white/80"
              :data-testid="`compare-mobile-field-${tool.id}-best-for`"
            >
              {{ formatMetricValue(tool.bestFor, '待补充') }}
            </dd>
          </div>
        </dl>
      </article>
    </div>
  </div>
</template>

<script setup>
import { useToolsStore } from '../stores/tools'
import { getCategoryLabel } from '../utils/helpers'
import { formatChineseSupport, formatContextWindow, formatMetricValue } from '../utils/toolMetadata'
import { Star, GitCompareArrows, X, Globe } from 'lucide-vue-next'
import ToolLogo from './ToolLogo.vue'

const props = defineProps({
  tools: { type: Array, required: true }
})

const toolsStore = useToolsStore()

function firstVersionValue(tool, field, fallback = '未公开') {
  return formatMetricValue(tool.versions?.[0]?.[field], fallback)
}

function getChineseSupportLevel(tool) {
  const level = Number(tool.chineseSupport)
  if (!Number.isFinite(level) || level <= 0) return 0
  return Math.min(5, Math.max(0, Math.round(level)))
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
