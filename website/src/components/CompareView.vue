<template>
  <div class="glass-card overflow-hidden p-6">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-bold text-white flex items-center">
        <GitCompareArrows class="w-6 h-6 text-primary mr-2" />
        侧边对比
      </h2>
      <button
        class="btn-secondary text-sm"
        @click="toolsStore.clearCompare()"
      >
        <X class="w-4 h-4 mr-1 inline" />
        清除对比
      </button>
    </div>

    <div class="overflow-x-auto">
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
              class="p-4 text-white/80"
            >
              {{ tool.developer }}
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
              class="p-4 text-white/80 text-sm"
            >
              {{ tool.versions?.[0]?.pricing || 'N/A' }}
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
              class="p-4 text-white/80 text-sm"
            >
              {{ tool.freeQuota || 'N/A' }}
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
              class="p-4 text-white/80 text-sm"
            >
              {{ tool.contextWindow || 'N/A' }}
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
                v-if="tool.chineseSupport"
                class="flex items-center space-x-0.5"
              >
                <Star
                  v-for="i in 5"
                  :key="'cn-' + i"
                  class="w-3.5 h-3.5"
                  :class="i <= tool.chineseSupport ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'"
                />
              </div>
              <span
                v-else
                class="text-white/40 text-sm"
              >N/A</span>
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
  </div>
</template>

<script setup>
import { useToolsStore } from '../stores/tools'
import { getCategoryLabel } from '../utils/helpers'
import { Star, GitCompareArrows, X, Globe } from 'lucide-vue-next'
import ToolLogo from './ToolLogo.vue'

const props = defineProps({
  tools: { type: Array, required: true }
})

const toolsStore = useToolsStore()

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
