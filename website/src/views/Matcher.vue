<template>
  <div class="min-h-screen bg-background">
    <div class="max-w-[720px] mx-auto px-5 py-6">
      <!-- Header -->
      <div class="text-center mb-10">
        <h1
          class="text-[28px] font-bold text-white mb-3"
        >
          AI 工具匹配器
        </h1>
        <p class="text-[15px] text-white/60 max-w-md mx-auto leading-relaxed">
          回答几个简单问题，为您推荐最合适的 AI 工具组合
        </p>
      </div>

      <!-- Category Selection -->
      <div class="flex flex-wrap gap-2 mb-10 justify-center">
        <button
          v-for="cat in categories"
          :key="cat.id"
          type="button"
          :aria-pressed="selectedCategory === cat.id"
          class="pill transition-all duration-200"
          :class="selectedCategory === cat.id ? 'pill-active' : 'pill-inactive'"
          @click="selectCategory(cat.id)"
        >
          <component
            :is="getCategoryIcon(cat.icon)"
            class="w-4 h-4 mr-1.5"
            aria-hidden="true"
          />
          {{ cat.nameZh }}
        </button>
      </div>

      <!-- Decision Tree -->
      <div
        v-if="selectedCategory && currentDecision"
        class="mx-auto"
      >
        <div
          class="glass-card p-5"
          data-testid="matcher-decision-card"
        >
          <h2 class="text-lg font-bold text-white mb-5">
            {{ currentDecision.title }}
          </h2>

          <!-- Question -->
          <div
            v-if="currentNode && !currentNode.result"
            class="mb-4"
          >
            <div class="mb-4 border-l-2 border-primary/45 py-1 pl-4">
              <p class="text-[15px] text-white font-medium leading-relaxed">
                {{ currentNode.question }}
              </p>
            </div>

            <!-- Yes/No Options -->
            <div
              v-if="currentNode.yes !== undefined || currentNode.no !== undefined"
              class="grid grid-cols-2 gap-3"
            >
              <button
                class="pill pill-active py-3 text-sm"
                type="button"
                aria-label="回答 是"
                @click="goTo('yes')"
              >
                <Check
                  class="w-4 h-4 mr-1.5 inline"
                  aria-hidden="true"
                />
                是
              </button>
              <button
                class="pill pill-inactive py-3 text-sm"
                type="button"
                aria-label="回答 否"
                @click="goTo('no')"
              >
                <X
                  class="w-4 h-4 mr-1.5 inline"
                  aria-hidden="true"
                />
                否
              </button>
            </div>

            <!-- Multiple Options -->
            <div
              v-else-if="currentNode.options"
              class="grid grid-cols-1 gap-3 sm:grid-cols-2"
              data-testid="matcher-multi-options"
            >
              <button
                v-for="option in currentNode.options"
                :key="option.label"
                type="button"
                :aria-label="`选择 ${option.label}`"
                class="pill pill-inactive py-3 text-sm"
                @click="goToOption(option)"
              >
                {{ option.label }}
              </button>
            </div>
          </div>

          <!-- Result -->
          <div
            v-else-if="currentNode && currentNode.result"
            class="text-center py-4"
          >
            <div class="mb-5">
              <div class="inline-flex items-center justify-center w-14 h-14 bg-[rgba(48,209,88,0.1)] rounded-full mb-4">
                <CheckCircle2
                  class="w-8 h-8 text-[#30d158]"
                  aria-hidden="true"
                />
              </div>
              <h3 class="text-xl font-bold text-white mb-2">
                推荐工具：
                <span
                  :data-testid="currentResultLinks.length ? 'matcher-result-label' : 'matcher-result-unlinked'"
                >
                  {{ currentNode.result }}
                </span>
              </h3>
              <div
                v-if="currentResultLinks.length"
                class="mb-3 flex flex-wrap justify-center gap-2"
                data-testid="matcher-result-links"
              >
                <router-link
                  v-for="link in currentResultLinks"
                  :key="link.id"
                  :to="{ name: 'tool-detail', params: { id: link.id } }"
                  :data-testid="`matcher-result-tool-link-${link.id}`"
                  class="pill pill-active text-xs py-1.5 px-3"
                >
                  {{ link.name }}
                </router-link>
              </div>
              <div
                v-if="currentResultVerificationLinks.length"
                class="mb-3 flex flex-wrap justify-center gap-2"
                data-testid="matcher-result-verification"
              >
                <span
                  v-for="link in currentResultVerificationLinks"
                  :key="link.id"
                  :class="getVerificationBadgeClass(link.tool)"
                  :title="getToolVerification(link.tool).description"
                  :data-testid="`matcher-result-verification-${link.id}`"
                >
                  {{ getToolVerification(link.tool).label }}
                </span>
              </div>
              <p
                v-if="hasNeedsReview(currentResultVerificationLinks)"
                class="mb-3 text-xs text-white/45"
                data-testid="matcher-result-verification-note"
              >
                资料仍需复核，请点进详情页查看来源状态。
              </p>
              <div class="inline-block px-3 py-1 rounded-full text-xs font-medium text-[#30d158] bg-[rgba(48,209,88,0.1)] mb-3">
                最佳匹配
              </div>
              <p class="text-sm text-white/60 max-w-md mx-auto leading-relaxed">
                {{ currentNode.reason }}
              </p>
            </div>
            <div
              class="flex flex-wrap gap-3 justify-center"
              data-testid="matcher-result-actions"
            >
              <button
                class="pill pill-inactive min-h-11 justify-center py-2.5 px-5 text-sm"
                type="button"
                @click="resetDecision"
              >
                <RotateCcw
                  class="w-4 h-4 mr-1.5 inline"
                  aria-hidden="true"
                />
                重新选择
              </button>
              <router-link
                to="/tools"
                data-testid="matcher-result-tools-link"
                class="btn-capsule min-h-11 justify-center text-sm"
              >
                查看工具列表
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Scenario Guide -->
      <div
        v-if="selectedCategory"
        class="mx-auto mt-10"
      >
        <h2
          class="text-lg font-bold text-white mb-4 flex items-center"
        >
          <Lightbulb
            class="w-5 h-5 text-yellow-500 mr-2"
            aria-hidden="true"
          />
          快速场景对照表
        </h2>
        <div class="space-y-2">
          <div
            v-for="scenario in scenarioRows"
            :key="scenario.scenario"
            class="info-cell"
          >
            <div class="flex items-center justify-between flex-wrap gap-2 min-w-0">
              <span class="min-w-0 break-words text-sm text-white/90 font-medium">{{ scenario.scenario }}</span>
              <div
                class="flex flex-wrap items-center justify-end gap-2 min-w-0"
                data-testid="matcher-scenario-link-row"
              >
                <template v-if="scenario.primaryLinks.length">
                  <router-link
                    v-for="link in scenario.primaryLinks"
                    :key="link.id"
                    :to="{ name: 'tool-detail', params: { id: link.id } }"
                    :data-testid="`matcher-scenario-tool-link-${link.id}`"
                    class="pill pill-active text-xs py-1 px-3"
                  >
                    {{ link.name }}
                  </router-link>
                  <span
                    v-for="link in scenario.primaryVerificationLinks"
                    :key="`verification-${link.id}`"
                    :class="getVerificationBadgeClass(link.tool)"
                    :title="getToolVerification(link.tool).description"
                    :data-testid="`matcher-scenario-verification-${link.id}`"
                  >
                    {{ getToolVerification(link.tool).label }}
                  </span>
                </template>
                <span
                  v-else
                  class="pill pill-active text-xs py-1 px-3"
                >
                  {{ scenario.primary }}
                </span>
                <span class="min-w-0 break-words text-xs text-white/40">{{ scenario.backup }}</span>
                <span class="min-w-0 break-words text-xs text-white/40">{{ scenario.budget }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Selection Guide -->
      <div class="mx-auto mt-10">
        <h2
          class="text-lg font-bold text-white mb-4 flex items-center"
        >
          <Zap
            class="w-5 h-5 text-yellow-500 mr-2"
            aria-hidden="true"
          />
          快速选型指南
        </h2>
        <div class="grid md:grid-cols-2 gap-3">
          <div
            v-for="guide in quickSelectionGuide"
            :key="guide.need"
            class="glass-card p-4"
          >
            <h3 class="text-sm font-bold text-white mb-2">
              {{ guide.need }}
            </h3>
            <div class="space-y-1.5 text-xs">
              <div class="flex items-center">
                <span class="text-[#0a84ff] mr-1.5">→</span>
                <span class="text-white/70">首选: <strong class="text-[#0a84ff]">{{ guide.primary }}</strong></span>
              </div>
              <div class="flex items-center">
                <span class="text-white/30 mr-1.5">→</span>
                <span class="text-white/50">备选: {{ guide.secondary }}</span>
              </div>
              <div class="flex items-start mt-2 pt-2 border-t border-white/[0.06]">
                <Lightbulb
                  class="w-3.5 h-3.5 text-yellow-500 mr-1.5 mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span class="text-white/50 text-[11px] leading-relaxed">{{ guide.tip }}</span>
              </div>
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
  Monitor,
  Terminal,
  Brain,
  Image,
  Bot,
  Plug,
  Wrench,
  Check,
  X,
  CheckCircle2,
  RotateCcw,
  Lightbulb,
  Zap
} from 'lucide-vue-next'
import { useGamificationStore } from '../stores/gamification'
import { useAchievementsStore } from '../stores/achievements'
import { resolveToolLinks as _resolveToolLinks } from '../utils/helpers'
import { getToolVerification, getVerificationBadgeClass } from '../utils/toolMetadata.js'
import { getDecisionTree, scenarioGuide } from '../data/decisions.js'
import { quickSelectionGuide, categories } from '../data/categories.js'
import { matcherCatalog } from '../data/generated/matcherCatalog.js'

const gamification = useGamificationStore()
const achievements = useAchievementsStore()

function resolveToolLinks(name, toolIds) {
  return _resolveToolLinks(name, matcherCatalog, toolIds)
}

function getToolsForLinks(links) {
  return links
    .map(link => ({ ...link, tool: matcherCatalog.find(tool => tool.id === link.id) }))
    .filter(link => link.tool)
}

function hasNeedsReview(links) {
  return links.some(link => getToolVerification(link.tool).status !== 'verified')
}

const selectedCategory = ref('')
const currentNodeRef = ref(null)

// Track when user reaches a result node
watch(currentNodeRef, (val) => {
  if (val && typeof val === 'object' && val.result) {
    gamification.trackMatcherComplete()
    achievements.checkAll()
  }
})

const currentDecision = computed(() => {
  if (!selectedCategory.value) return null
  return getDecisionTree(selectedCategory.value)
})

const currentResultLinks = computed(() =>
  resolveToolLinks(currentNode.value?.result, currentNode.value?.toolIds),
)

const currentResultVerificationLinks = computed(() =>
  getToolsForLinks(currentResultLinks.value),
)

const scenarioRows = computed(() =>
  (scenarioGuide || []).map((scenario) => {
    const primaryLinks = resolveToolLinks(scenario.primary, scenario.primaryToolIds)
    return {
      ...scenario,
      primaryLinks,
      primaryVerificationLinks: getToolsForLinks(primaryLinks),
    }
  }),
)

const currentNode = computed(() => {
  if (!currentDecision.value) return null

  if (currentNodeRef.value) {
    // If currentNodeRef is a result object, return it directly
    if (typeof currentNodeRef.value === 'object' && currentNodeRef.value.result) {
      return currentNodeRef.value
    }
    // Find the node by ID
    return currentDecision.value.nodes.find(n => n.id === currentNodeRef.value) || null
  }

  // Start from the beginning
  return currentDecision.value.nodes.find(n => n.id === 'start')
})

function selectCategory(catId) {
  selectedCategory.value = catId
  currentNodeRef.value = 'start'
}

function goTo(direction) {
  const node = currentNode.value
  if (node) {
    const next = node[direction]
    if (next) {
      if (typeof next === 'string') {
        currentNodeRef.value = next
      } else if (next.result) {
        currentNodeRef.value = { result: next.result, reason: next.reason, toolIds: next.toolIds }
      }
    }
  }
}

function goToOption(option) {
  if (option.result) {
    currentNodeRef.value = { result: option.result, reason: option.reason, toolIds: option.toolIds }
  } else if (option.next) {
    currentNodeRef.value = option.next
  }
}

function resetDecision() {
  currentNodeRef.value = 'start'
}

function getCategoryIcon(iconName) {
  const icons = {
    Monitor,
    Terminal,
    Brain,
    Image,
    Bot,
    Plug,
    Wrench
  }
  return icons[iconName] || Brain
}

</script>
