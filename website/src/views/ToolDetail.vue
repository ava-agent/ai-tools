<template>
  <div
    v-if="isLoading"
    class="flex min-h-[50vh] items-center justify-center px-5 text-center"
    role="status"
    aria-live="polite"
    data-testid="tool-detail-loading"
  >
    <div>
      <div class="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-white/15 border-t-[#0a84ff]" />
      <p class="mt-4 text-sm text-white/55">
        正在加载工具详情...
      </p>
    </div>
  </div>

  <div
    v-else-if="loadError"
    class="flex min-h-[50vh] items-center justify-center px-5 text-center"
    data-testid="tool-detail-error"
  >
    <div>
      <p
        class="text-lg font-semibold text-white"
        role="alert"
      >
        {{ loadError }}
      </p>
      <div class="mt-5 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          class="btn-capsule"
          @click="retryLoad"
        >
          重新加载
        </button>
        <router-link
          to="/tools"
          class="pill pill-inactive inline-flex min-h-11 items-center px-4"
        >
          返回工具列表
        </router-link>
      </div>
    </div>
  </div>

  <div
    v-else-if="tool"
    class="min-h-screen"
  >
    <!-- Back nav header -->
    <div class="max-w-[720px] mx-auto px-5 py-3 flex items-center gap-3">
      <button
        class="inline-flex min-h-11 items-center rounded-lg px-3 text-[13px] text-[#0a84ff] cursor-pointer hover:bg-white/[0.04]"
        data-testid="tool-detail-back"
        @click="goBack"
      >
        &larr; 返回
      </button>
      <div class="min-w-0 flex-1 truncate text-center text-sm font-semibold text-white">
        {{ tool.name }}
      </div>
      <div class="w-12" />
    </div>

    <!-- Content area -->
    <div class="max-w-[720px] mx-auto px-5 pb-16">
      <!-- Tool header -->
      <section class="mb-5 border-b border-white/[0.08] py-6">
        <div
          class="flex flex-col items-start gap-4 mb-6 sm:flex-row"
          data-testid="tool-detail-hero"
        >
          <ToolLogo
            :tool-id="tool.id"
            :tool-name="tool.name"
            size="xl"
          />
          <div
            class="min-w-0 flex-1"
            data-testid="tool-detail-title-group"
          >
            <h1
              class="break-words text-2xl font-bold tracking-normal text-white"
              data-testid="tool-detail-title"
            >
              {{ tool.name }}
            </h1>
            <div class="text-sm text-white/45 mt-0.5">
              {{ tool.developer }}
            </div>
            <div class="flex flex-wrap items-center gap-2 mt-2">
              <span
                :class="verificationClass"
                :title="verification.description"
              >
                {{ verification.label }}
              </span>
              <span
                v-if="verification.lastVerified"
                class="text-[11px] text-white/35"
              >
                {{ verificationDateLabel }} {{ verification.lastVerified }}
              </span>
            </div>
            <div
              class="mt-3 flex flex-wrap items-center gap-2"
              title="编辑推荐度用于辅助选型，不代表统一基准测试结果"
            >
              <span class="text-xs font-medium text-white/65">编辑推荐度</span>
              <StarRating
                :rating="tool.personalExperience?.rating || 0"
                size="md"
                class="text-[#ffd60a]"
              />
              <div class="text-[13px] font-semibold text-[#30d158]">
                {{ tool.personalExperience?.rating?.toFixed(1) }}
              </div>
            </div>
          </div>
          <a
            v-if="mainLink"
            :href="mainLink"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-capsule inline-flex w-full flex-shrink-0 justify-center sm:w-auto"
            data-testid="tool-detail-main-link"
          >访问官网</a>
        </div>

        <!-- Info grid -->
        <dl class="mb-5 grid grid-cols-1 divide-y divide-white/[0.08] border-y border-white/[0.08] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div class="py-3 text-left sm:px-4 sm:text-center">
            <div class="text-[11px] text-white/35 mb-1">
              定价
            </div>
            <div class="text-sm font-semibold text-white leading-snug break-words">
              {{ pricingDisplay }}
            </div>
          </div>
          <div class="py-3 text-left sm:px-4 sm:text-center">
            <div class="text-[11px] text-white/35 mb-1">
              上下文
            </div>
            <div class="text-sm font-semibold text-white leading-snug break-words">
              {{ contextWindowDisplay }}
            </div>
          </div>
          <div class="py-3 text-left sm:px-4 sm:text-center">
            <div class="text-[11px] text-white/35 mb-1">
              中文支持
            </div>
            <div class="text-sm font-semibold text-white leading-snug break-words">
              {{ chineseSupportDisplay }}
            </div>
          </div>
        </dl>
      </section>

      <!-- Decision summary -->
      <div
        class="glass-card p-4 mb-4"
        data-testid="decision-summary-card"
      >
        <div class="flex items-center justify-between gap-3 mb-3">
          <h2 class="text-[13px] font-semibold text-white">
            结论
          </h2>
          <span
            :class="verificationClass"
            :title="verification.description"
          >
            {{ verification.label }}
          </span>
        </div>

        <p class="text-[15px] font-semibold text-white leading-relaxed mb-4">
          {{ decisionSummary.verdict }}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-[10px]">
          <div class="border-l-2 border-[#30d158]/45 py-1 pl-3">
            <div class="text-[11px] font-semibold text-[#30d158] mb-1">
              适合
            </div>
            <div class="text-xs text-white/55 leading-relaxed">
              {{ decisionSummary.bestFor }}
            </div>
          </div>
          <div class="border-l-2 border-[#ff9f0a]/45 py-1 pl-3">
            <div class="text-[11px] font-semibold text-[#ff9f0a] mb-1">
              避开
            </div>
            <div class="text-xs text-white/55 leading-relaxed">
              {{ decisionSummary.avoidIf }}
            </div>
          </div>
          <div class="border-l-2 border-[#ff453a]/45 py-1 pl-3">
            <div class="text-[11px] font-semibold text-[#ff453a] mb-1">
              主要风险
            </div>
            <div class="text-xs text-white/55 leading-relaxed">
              {{ decisionSummary.mainRisk }}
            </div>
          </div>
        </div>

        <div
          v-if="decisionSummary.alternatives.length"
          class="mt-3 pt-3"
          style="border-top: 1px solid rgba(255, 255, 255, 0.06)"
        >
          <div class="text-[11px] font-semibold text-white/45 mb-2">
            替代方案
          </div>
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="alternative in decisionSummary.alternatives"
              :key="alternative"
              class="tag-pill tag-pill-default"
            >
              {{ alternative }}
            </span>
          </div>
        </div>
      </div>

      <!-- Verification sources -->
      <div
        v-if="publicVerificationSources.length"
        class="glass-card p-4 mb-4"
        data-testid="tool-detail-sources"
      >
        <h2 class="text-[13px] font-semibold text-white mb-3">
          核验来源
        </h2>
        <div class="space-y-2">
          <template
            v-for="source in publicVerificationSources"
            :key="source"
          >
            <a
              v-if="isHttpSource(source)"
              :href="source"
              target="_blank"
              rel="noopener noreferrer"
              class="block min-h-11 rounded-lg border border-white/[0.06] bg-white/[0.04] px-3 py-2.5 text-[12px] transition-colors hover:border-primary/30 hover:bg-primary/10"
            >
              <span class="block break-words font-semibold text-primary">
                {{ formatSourceLabel(source) }}
              </span>
              <span class="mt-0.5 block break-words text-white/45">
                {{ formatSourceValue(source) }}
              </span>
            </a>
            <div
              v-else
              class="block min-h-11 rounded-lg border border-white/[0.06] bg-white/[0.04] px-3 py-2.5 text-[12px]"
            >
              <span class="block break-words font-semibold text-white/70">
                {{ formatSourceLabel(source) }}
              </span>
              <span class="mt-0.5 block break-words text-white/45">
                {{ formatSourceValue(source) }}
              </span>
            </div>
          </template>
        </div>
      </div>

      <!-- Editorial verification note -->
      <div
        v-if="tool.personalExperience?.insights"
        class="mb-4 rounded-lg p-4"
        style="background: rgba(48, 209, 88, 0.04); border-left: 4px solid #30d158"
      >
        <h2 class="text-[13px] font-semibold text-[#30d158] mb-2">
          编辑核验说明
        </h2>
        <div class="text-[13px] text-white/55 leading-relaxed">
          {{ tool.personalExperience.insights }}
        </div>
      </div>

      <!-- Pitfalls -->
      <div
        v-if="tool.personalExperience?.pitfalls?.length"
        class="glass-card p-4 mb-4"
      >
        <h2 class="mb-2 flex items-center gap-2 text-[13px] font-semibold text-[#ffd60a]">
          <AlertTriangle
            class="h-4 w-4"
            aria-hidden="true"
          />
          注意事项
        </h2>
        <div class="text-xs text-white/50 leading-loose">
          <div
            v-for="pitfall in tool.personalExperience.pitfalls"
            :key="pitfall"
          >
            • {{ pitfall }}
          </div>
        </div>
      </div>

      <!-- Radar chart -->
      <div
        v-if="tool.personalExperience"
        class="glass-card p-4 mb-4"
      >
        <h2 class="mb-3 flex items-center gap-2 text-[13px] font-semibold text-white">
          <BarChart3
            class="h-4 w-4 text-[#7dd3fc]"
            aria-hidden="true"
          />
          编辑评估雷达
        </h2>
        <ScoreRadar :tool="tool" />
      </div>

      <!-- SWOT grid -->
      <div
        v-if="tool.swot"
        class="glass-card p-4 mb-4"
      >
        <h2 class="mb-3 flex items-center gap-2 text-[13px] font-semibold text-white">
          <ClipboardList
            class="h-4 w-4 text-[#bf5af2]"
            aria-hidden="true"
          />
          SWOT 分析
        </h2>
        <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div
            class="py-2.5 px-3 rounded-r-lg"
            style="background: rgba(48, 209, 88, 0.06); border-left: 3px solid #30d158"
          >
            <div class="text-[11px] font-semibold text-[#30d158] mb-1">
              S 优势
            </div>
            <div class="text-xs text-white/50">
              {{ tool.swot.S }}
            </div>
          </div>
          <div
            class="py-2.5 px-3 rounded-r-lg"
            style="background: rgba(255, 69, 58, 0.06); border-left: 3px solid #ff453a"
          >
            <div class="text-[11px] font-semibold text-[#ff453a] mb-1">
              W 劣势
            </div>
            <div class="text-xs text-white/50">
              {{ tool.swot.W }}
            </div>
          </div>
          <div
            class="py-2.5 px-3 rounded-r-lg"
            style="background: rgba(10, 132, 255, 0.06); border-left: 3px solid #0a84ff"
          >
            <div class="text-[11px] font-semibold text-[#0a84ff] mb-1">
              O 机会
            </div>
            <div class="text-xs text-white/50">
              {{ tool.swot.O }}
            </div>
          </div>
          <div
            class="py-2.5 px-3 rounded-r-lg"
            style="background: rgba(255, 159, 10, 0.06); border-left: 3px solid #ff9f0a"
          >
            <div class="text-[11px] font-semibold text-[#ff9f0a] mb-1">
              T 威胁
            </div>
            <div class="text-xs text-white/50">
              {{ tool.swot.T }}
            </div>
          </div>
        </div>
      </div>

      <!-- Pros / Cons dual column -->
      <div class="grid grid-cols-1 gap-[10px] mb-4 sm:grid-cols-2">
        <div
          class="rounded-xl p-4"
          style="background: rgba(48, 209, 88, 0.04); border: 1px solid rgba(48, 209, 88, 0.1)"
        >
          <h2 class="text-[13px] font-semibold text-[#30d158] mb-2">
            优势
          </h2>
          <div class="text-xs text-white/50 leading-loose">
            <div
              v-for="pro in tool.pros"
              :key="pro"
            >
              • {{ pro }}
            </div>
          </div>
        </div>
        <div
          class="rounded-xl p-4"
          style="background: rgba(255, 69, 58, 0.04); border: 1px solid rgba(255, 69, 58, 0.1)"
        >
          <h2 class="text-[13px] font-semibold text-[#ff453a] mb-2">
            劣势
          </h2>
          <div class="text-xs text-white/50 leading-loose">
            <div
              v-for="con in tool.cons"
              :key="con"
            >
              • {{ con }}
            </div>
          </div>
        </div>
      </div>

      <!-- Versions -->
      <div
        v-if="tool.versions?.length"
        class="glass-card p-4 mb-4"
      >
        <h2 class="mb-3 flex items-center gap-2 text-[13px] font-semibold text-white">
          <Link
            class="h-4 w-4 text-[#64d2ff]"
            aria-hidden="true"
          />
          版本与链接
        </h2>
        <div class="space-y-2">
          <component
            :is="isHttpSource(version.link) ? 'a' : 'div'"
            v-for="(version, index) in tool.versions"
            :key="getVersionKey(version, index)"
            :data-testid="`tool-version-row-${index}`"
            :href="isHttpSource(version.link) ? version.link : undefined"
            :target="isHttpSource(version.link) ? '_blank' : undefined"
            :rel="isHttpSource(version.link) ? 'noopener noreferrer' : undefined"
            class="block min-h-11 py-2.5 px-3 rounded-lg text-[13px] text-white/60 transition-colors"
            :class="isHttpSource(version.link) ? 'hover:text-white' : 'cursor-default'"
            style="
              background: rgba(255, 255, 255, 0.04);
              border: 1px solid rgba(255, 255, 255, 0.06);
            "
          >
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="font-medium text-white/80">{{ formatVersionType(version.type) }}</span>
              <span class="min-w-0 break-words text-[11px] text-[#0a84ff]">{{
                formatMetricValue(version.pricing, '未公开')
              }}</span>
            </div>
            <div
              v-if="version.models"
              class="break-words text-[11px] text-white/35 mt-0.5"
            >
              {{ formatMetricValue(version.models, '未公开') }}
            </div>
          </component>
        </div>
      </div>

      <!-- Community rating -->
      <div class="glass-card p-4 mb-4">
        <h2 class="mb-3 flex items-center gap-2 text-[13px] font-semibold text-white">
          <Star
            class="h-4 w-4 text-[#ffd60a]"
            aria-hidden="true"
          />
          社区评价
        </h2>
        <ToolRating :tool-id="tool.id" />
      </div>

      <!-- Fun fact -->
      <FunFact
        v-if="tool"
        :tool-id="tool.id"
        class="mb-4"
      />

      <!-- Community reviews -->
      <div class="glass-card p-4 mb-4">
        <ToolReviews :tool-id="tool.id" />
      </div>

      <!-- Tags -->
      <div
        v-if="tool.tags?.length"
        class="flex flex-wrap gap-1.5 mb-4"
      >
        <span
          v-for="tag in tool.tags"
          :key="tag"
          :class="tag === '推荐' ? 'tag-pill tag-pill-highlight' : 'tag-pill tag-pill-default'"
        >
          {{ tag }}
        </span>
      </div>

      <section
        v-if="detailComparisonTools.length >= 2"
        class="mb-4 border-y border-white/[0.08] py-4"
        aria-labelledby="detail-next-step-heading"
        data-testid="tool-detail-next-step"
      >
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div class="min-w-0">
            <h2
              id="detail-next-step-heading"
              class="text-[13px] font-semibold text-white"
            >
              下一步：比较相近方案
            </h2>
            <p class="mt-1 break-words text-xs leading-relaxed text-white/45">
              {{ detailComparisonTools.map((item) => item.name).join('、') }}
            </p>
          </div>
          <router-link
            :to="detailComparisonTarget"
            class="btn-capsule btn-capsule-sm inline-flex min-h-11 flex-shrink-0 items-center justify-center gap-2"
            data-testid="tool-detail-compare-related"
          >
            <GitCompareArrows
              class="h-4 w-4"
              aria-hidden="true"
            />
            直接对比
          </router-link>
        </div>
      </section>

      <!-- Related tools -->
      <div
        v-if="relatedTools.length > 0"
        class="glass-card p-4"
      >
        <h2 class="mb-3 flex items-center gap-2 text-[13px] font-semibold text-white">
          <RefreshCw
            class="h-4 w-4 text-[#30d158]"
            aria-hidden="true"
          />
          相关工具
        </h2>
        <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <router-link
            v-for="related in relatedTools"
            :key="related.id"
            :to="{ name: 'tool-detail', params: { id: related.id } }"
            class="block min-h-11 py-2.5 px-3 rounded-lg transition-colors hover:bg-white/[0.06]"
            :data-testid="`tool-detail-related-${related.id}`"
            style="
              background: rgba(255, 255, 255, 0.03);
              border: 1px solid rgba(255, 255, 255, 0.06);
            "
          >
            <div class="text-[13px] font-semibold text-white truncate">
              {{ related.name }}
            </div>
            <div class="text-[11px] text-white/35 truncate mt-0.5">
              {{ related.developer }}
            </div>
            <div class="flex items-center gap-1 mt-1">
              <StarRating
                :rating="related.personalExperience?.rating || 0"
                size="xs"
                class="text-[#ffd60a]"
              />
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <!-- Not found -->
  <div
    v-else
    class="text-center py-20"
    data-testid="tool-detail-not-found"
  >
    <p class="text-xl text-white/60">
      未找到该工具
    </p>
    <router-link
      to="/tools"
      class="btn-capsule mt-4 inline-block"
    >
      返回工具列表
    </router-link>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import {
  AlertTriangle,
  BarChart3,
  ClipboardList,
  GitCompareArrows,
  Link,
  RefreshCw,
  Star
} from 'lucide-vue-next'
import { useGamificationStore } from '../stores/gamification'
import { useAchievementsStore } from '../stores/achievements'
import {
  hasToolDetail,
  loadToolDetail,
  toolDetailCatalog
} from '../data/generated/toolDetails.js'
import FunFact from '../components/gamification/FunFact.vue'
import ToolRating from '../components/ToolRating.vue'
import ToolReviews from '../components/ToolReviews.vue'
import ScoreRadar from '@/components/ScoreRadar.vue'
import ToolLogo from '../components/ToolLogo.vue'
import StarRating from '../components/StarRating.vue'
import {
  formatChineseSupport,
  formatContextWindow,
  formatMetricValue,
  formatVersionType,
  getDecisionSummary,
  getToolVerification,
  getVerificationBadgeClass
} from '../utils/toolMetadata'

const props = defineProps({
  id: {
    type: String,
    default: ''
  }
})

const gamification = useGamificationStore()
const achievements = useAchievementsStore()
const router = useRouter()

const currentToolId = computed(() => props.id)
const tool = ref(null)
const isLoading = ref(true)
const loadError = ref('')
let detailRequestId = 0

const verification = computed(() => getToolVerification(tool.value))
const verificationClass = computed(() => getVerificationBadgeClass(tool.value))
const verificationDateLabel = computed(() => (verification.value.isVerified ? '核验于' : '检查于'))
const decisionSummary = computed(() => getDecisionSummary(tool.value))
const publicVerificationSources = computed(() => {
  const sources = Array.isArray(tool.value?.sources) ? tool.value.sources : []
  return sources.filter((source) => !isLocalEvidenceSource(source))
})

const relatedTools = computed(() => {
  const current = tool.value
  if (!current) return []
  return toolDetailCatalog
    .filter((t) => t.id !== current.id)
    .map((t) => {
      let score = 0
      if (t.category === current.category) score += 10
      if (t.subcategory === current.subcategory) score += 5
      const sharedTags = (t.tags || []).filter((tag) => (current.tags || []).includes(tag))
      score += sharedTags.length * 2
      return { ...t, _score: score }
    })
    .sort((a, b) => b._score - a._score)
    .slice(0, 4)
})

const detailComparisonTools = computed(() => {
  if (!tool.value) return []
  return [tool.value, ...relatedTools.value.slice(0, 2)]
})

const detailComparisonTarget = computed(() => ({
  name: 'comparison',
  query: {
    tools: detailComparisonTools.value.map((item) => item.id).join(','),
    start: '1'
  }
}))

// Pricing display from first version
const pricingDisplay = computed(() => {
  const versions = tool.value?.versions
  if (!versions || versions.length === 0) return '未公开'
  return formatMetricValue(versions[0].pricing, '未公开')
})

const contextWindowDisplay = computed(() => formatContextWindow(tool.value?.contextWindow))

// Chinese support stars
const chineseSupportDisplay = computed(() => formatChineseSupport(tool.value?.chineseSupport))

// Main link from first version
const mainLink = computed(() => {
  const versions = tool.value?.versions
  if (!versions || versions.length === 0) return null
  const link = versions[0].link
  return isHttpSource(link) ? link : null
})

function updateDocumentTitle(currentTool) {
  if (currentTool) {
    document.title = `${currentTool.name} - AI工具全书`
  }
}

function isHttpSource(source) {
  try {
    const protocol = new URL(source).protocol
    return protocol === 'http:' || protocol === 'https:'
  } catch {
    return false
  }
}

const LEGACY_LOCAL_SOURCE_PREFIX = ['local', 'skill'].join('-') + ':'
const LEGACY_PENDING_SOURCE_PREFIX = ['source', 'pending'].join('-') + ':'

function isLocalEvidenceSource(source) {
  return (
    source?.startsWith(LEGACY_LOCAL_SOURCE_PREFIX) ||
    source?.startsWith('本地核验线索') ||
    source?.startsWith('本地 skill') ||
    source?.startsWith('邻近本地 skill')
  )
}

function formatSourceLabel(source) {
  if (source?.startsWith(LEGACY_PENDING_SOURCE_PREFIX)) return '公开来源不足'
  if (source?.startsWith('公开来源不足')) return '公开来源不足'

  try {
    return new URL(source).hostname.replace(/^www\./, '')
  } catch {
    return source
  }
}

function formatSourceValue(source) {
  if (source?.startsWith(LEGACY_PENDING_SOURCE_PREFIX)) {
    const reason = source.replace(LEGACY_PENDING_SOURCE_PREFIX, '')
    const match = reason.match(/^no exact local (.+?) found(?: on (\d{4}-\d{2}-\d{2}))?$/)
    if (match) {
      const [, , date] = match
      return `公开来源仍需补充${date ? `（检查于 ${date}）` : ''}`
    }
    return '公开来源仍需补充'
  }
  if (source?.startsWith('公开来源不足')) {
    return source.split('：').slice(1).join('：').trim() || '公开来源仍需补充'
  }
  return source
}

function getVersionKey(version, index) {
  return [version.type, version.link, version.models, index].filter(Boolean).join('|')
}

async function loadCurrentTool(id) {
  const requestId = ++detailRequestId
  tool.value = null
  loadError.value = ''
  isLoading.value = true

  if (!id || !hasToolDetail(id)) {
    isLoading.value = false
    return
  }

  try {
    const loadedTool = await loadToolDetail(id)
    if (requestId !== detailRequestId) return
    tool.value = loadedTool
    updateDocumentTitle(loadedTool)
    gamification.trackToolView(id)
    achievements.checkAll()
  } catch {
    if (requestId !== detailRequestId) return
    loadError.value = '工具详情加载失败，请检查网络后重试'
  } finally {
    if (requestId === detailRequestId) {
      isLoading.value = false
    }
  }
}

function retryLoad() {
  void loadCurrentTool(currentToolId.value)
}

watch(currentToolId, (id) => {
  void loadCurrentTool(id)
}, { immediate: true })

function goBack() {
  if (window.history.state?.back) {
    router.back()
  } else {
    void router.push({ name: 'tools' })
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
