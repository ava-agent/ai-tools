<template>
  <section
    v-if="topTools.length"
    class="mb-5"
    aria-labelledby="decision-shortlist-heading"
    data-testid="decision-shortlist"
  >
    <div class="mb-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2
          id="decision-shortlist-heading"
          class="text-[18px] font-semibold tracking-normal text-white"
        >
          本轮短名单
        </h2>
        <p class="mt-1 text-xs leading-relaxed text-white/40">
          根据当前筛选和评分排序，先看这 {{ topTools.length }} 个，再决定是否进入对比。
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-2">
        <RouterLink
          :to="topComparisonTarget"
          class="pill pill-inactive inline-flex min-h-11 items-center gap-2 px-3 py-2 text-xs"
          :aria-disabled="topTools.length < 2"
          data-testid="decision-shortlist-compare-top"
          @click="compareTopTools"
        >
          <GitCompareArrows
            class="h-4 w-4"
            aria-hidden="true"
          />
          直接对比前 {{ Math.min(3, topTools.length) }} 个
        </RouterLink>
        <RouterLink
          v-if="selectedCompareCount >= 2"
          :to="selectedComparisonTarget"
          class="btn-capsule btn-capsule-sm inline-flex min-h-11 items-center"
          data-testid="decision-shortlist-open-compare"
        >
          对比已选 {{ selectedCompareCount }} 个
        </RouterLink>
      </div>
    </div>

    <p
      v-if="compareLimitReached"
      class="mb-3 text-xs text-[#ffd60a]"
      role="status"
      data-testid="decision-shortlist-limit-message"
    >
      对比已满 4 个；请先移除一个已选工具再添加。
    </p>

    <div class="grid gap-3 lg:grid-cols-3">
      <article
        v-for="(tool, index) in topTools"
        :key="tool.id"
        class="glass-card glass-card-interactive p-4"
        :data-testid="`decision-shortlist-card-${tool.id}`"
      >
        <div class="mb-3 flex items-start justify-between gap-3">
          <div class="flex min-w-0 items-start gap-3">
            <ToolLogo
              :tool-id="tool.id"
              :tool-name="tool.name"
              size="sm"
            />
            <div class="min-w-0">
              <div class="flex flex-wrap items-center gap-2">
                <span class="rounded-md bg-[#238636]/15 px-2 py-0.5 text-[11px] text-[#7ee787]">
                  #{{ index + 1 }}
                </span>
                <span :class="getVerificationClass(tool)">
                  {{ getVerification(tool).label }}
                </span>
              </div>
              <RouterLink
                :to="{ name: 'tool-detail', params: { id: tool.id } }"
                class="mt-2 block break-words text-[16px] font-semibold text-white transition-colors hover:text-[#7ee787]"
              >
                {{ tool.name }}
              </RouterLink>
              <div class="mt-0.5 break-words text-xs text-white/40">
                {{ tool.developer }}
              </div>
            </div>
          </div>

          <button
            type="button"
            class="inline-flex min-h-11 min-w-11 flex-shrink-0 items-center justify-center rounded-lg text-white/45 transition-colors hover:bg-white/[0.05] hover:text-white"
            :aria-pressed="isCompared(tool.id)"
            :aria-label="getCompareLabel(tool)"
            :disabled="isCompareDisabled(tool.id)"
            :title="isCompareDisabled(tool.id) ? '最多只能同时对比 4 个工具' : undefined"
            :data-testid="`decision-shortlist-toggle-${tool.id}`"
            @click="toggleCompare(tool.id)"
          >
            <Check
              v-if="isCompared(tool.id)"
              class="h-4 w-4 text-[#7ee787]"
              aria-hidden="true"
            />
            <Plus
              v-else
              class="h-4 w-4"
              aria-hidden="true"
            />
          </button>
        </div>

        <div class="space-y-3">
          <div>
            <div class="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8c9889]">
              先看理由
            </div>
            <p class="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-300/85">
              {{ getDecision(tool).bestFor }}
            </p>
          </div>

          <div>
            <div class="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8c9889]">
              主要风险
            </div>
            <p class="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-400">
              {{ getDecision(tool).mainRisk }}
            </p>
          </div>
        </div>

        <div class="mt-4 flex flex-wrap items-center justify-between gap-2 text-[11px] text-white/35">
          <span>{{ formatRating(tool) }}</span>
          <span>{{ getPublicSourceCount(tool) }} 个公开来源</span>
          <span>{{ getVerification(tool).lastVerified || '待核验日期' }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { Check, GitCompareArrows, Plus } from 'lucide-vue-next'
import { useCatalogStore } from '../stores/catalog'
import ToolLogo from './ToolLogo.vue'
import {
  getDecisionSummary,
  getToolVerification,
  getVerificationBadgeClass
} from '../utils/toolMetadata'

const props = defineProps({
  tools: {
    type: Array,
    required: true
  }
})

const toolsStore = useCatalogStore()

const topTools = computed(() => props.tools.slice(0, 3))
const selectedCompareCount = computed(() => toolsStore.comparedToolIds.length)
const compareLimitReached = computed(() => selectedCompareCount.value >= 4)
const topComparisonTarget = computed(() => ({
  name: 'comparison',
  query: {
    tools: topTools.value.slice(0, 3).map((tool) => tool.id).join(','),
    start: '1'
  }
}))
const selectedComparisonTarget = computed(() => ({
  name: 'comparison',
  query: {
    tools: toolsStore.comparedToolIds.join(','),
    start: '1'
  }
}))

function getDecision(tool) {
  return getDecisionSummary(tool)
}

function getVerification(tool) {
  return getToolVerification(tool)
}

function getVerificationClass(tool) {
  return getVerificationBadgeClass(tool)
}

function getPublicSourceCount(tool) {
  return getToolVerification(tool).publicSourceCount
}

function formatRating(tool) {
  const rating = Number(tool.personalExperience?.rating || 0)
  return rating > 0 ? `评分 ${rating.toFixed(1)}` : '暂无评分'
}

function isCompared(toolId) {
  return toolsStore.comparedToolIds.includes(toolId)
}

function toggleCompare(toolId) {
  if (isCompared(toolId)) {
    toolsStore.removeFromCompare(toolId)
    return
  }
  toolsStore.addToCompare(toolId)
}

function isCompareDisabled(toolId) {
  return compareLimitReached.value && !isCompared(toolId)
}

function compareTopTools(event) {
  if (topTools.value.length < 2) {
    event?.preventDefault()
    return
  }
  toolsStore.clearCompare()
  topTools.value.slice(0, 3).forEach((tool) => toolsStore.addToCompare(tool.id))
}

function getCompareLabel(tool) {
  if (isCompareDisabled(tool.id)) return `对比已满，无法加入 ${tool.name}`
  return isCompared(tool.id) ? `从对比中移除 ${tool.name}` : `加入对比 ${tool.name}`
}
</script>
