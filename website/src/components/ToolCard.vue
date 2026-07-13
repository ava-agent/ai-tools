<template>
  <RouterLink
    :to="{ name: 'tool-detail', params: { id: tool.id } }"
    class="block"
  >
    <article class="glass-card glass-card-interactive p-4">
      <div
        class="grid gap-4 lg:grid-cols-[minmax(220px,1.25fr)_minmax(180px,1fr)_minmax(180px,1fr)_minmax(120px,auto)] lg:items-center"
        data-testid="tool-card-row"
      >
        <!-- Header: Icon + Name + Developer -->
        <div class="flex min-w-0 items-start gap-3">
          <ToolLogo
            :tool-id="tool.id"
            :tool-name="tool.name"
            size="sm"
          />
          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center gap-2">
              <div class="min-w-0 truncate text-[15px] font-semibold text-white">
                {{ tool.name }}
              </div>
              <span
                v-if="primaryTag"
                class="rounded-md border border-[#238636]/30 bg-[#238636]/15 px-1.5 py-0.5 text-[10px] font-medium text-[#7ee787]"
              >
                {{ primaryTag }}
              </span>
            </div>
            <div class="mt-1 flex min-w-0 flex-wrap items-center gap-1.5">
              <div class="text-[11px] text-white/40 truncate">
                {{ tool.developer }}
              </div>
              <span class="rounded-md bg-[#1a1e18] px-1.5 py-0.5 text-[10px] text-[#b9c4b4]">
                {{ categoryLabel }}
              </span>
              <span
                :class="verificationClass"
                :title="verification.description"
              >
                {{ verification.label }}
              </span>
            </div>
          </div>
        </div>

        <div class="min-w-0">
          <div class="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8c9889]">
            最适用
          </div>
          <p class="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-300/85">
            {{ decision.bestFor }}
          </p>
        </div>

        <div class="min-w-0">
          <div class="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8c9889]">
            价格 / 主要风险
          </div>
          <p class="mt-1 line-clamp-1 text-xs text-slate-200">
            {{ pricingSummary }}
          </p>
          <p class="mt-1 line-clamp-1 text-xs text-slate-400">
            {{ decision.mainRisk }}
          </p>
        </div>

        <!-- Footer: Stars + Score Badge -->
        <div class="flex flex-wrap items-center justify-between gap-3 lg:justify-end">
          <div class="min-w-[92px]">
            <StarRating
              :rating="tool.personalExperience?.rating || 0"
              class="text-[#ffd60a]"
            />
            <div
              v-if="tool.personalExperience?.rating"
              class="mt-1 inline-flex rounded-md bg-[#238636]/15 px-2 py-0.5 text-[11px] text-[#7ee787]"
            >
              {{ tool.personalExperience.rating.toFixed(1) }}
            </div>
          </div>
          <div class="text-right text-[11px] leading-5 text-slate-400">
            <div>{{ verification.lastVerified || '待核验日期' }}</div>
            <div>{{ publicSourceCount }} 个公开来源</div>
          </div>
        </div>
      </div>
    </article>
  </RouterLink>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import ToolLogo from './ToolLogo.vue'
import StarRating from './StarRating.vue'
import {
  formatMetricValue,
  getDecisionSummary,
  getToolVerification,
  getVerificationBadgeClass
} from '../utils/toolMetadata'
import { getCategoryLabel } from '../utils/helpers'

const props = defineProps({
  tool: {
    type: Object,
    required: true
  }
})

const verification = computed(() => getToolVerification(props.tool))
const verificationClass = computed(() => getVerificationBadgeClass(props.tool))
const decision = computed(() => getDecisionSummary(props.tool))
const categoryLabel = computed(() => getCategoryLabel(props.tool.category))
const primaryTag = computed(() => props.tool.tags?.[0] || '')
const pricingSummary = computed(() =>
  formatMetricValue(props.tool.versions?.[0]?.pricing, '价格待核验')
)
const publicSourceCount = computed(() => {
  return verification.value.publicSourceCount
})
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
