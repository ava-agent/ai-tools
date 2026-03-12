<template>
  <div class="min-h-screen bg-background">
    <div class="max-w-[720px] mx-auto px-5 py-6">
      <!-- Header -->
      <div class="text-center mb-10">
        <h1
          class="text-[28px] font-bold text-white mb-3"
          style="letter-spacing: -0.8px"
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
          class="pill transition-all duration-200"
          :class="selectedCategory === cat.id ? 'pill-active' : 'pill-inactive'"
          @click="selectCategory(cat.id)"
        >
          <component
            :is="getCategoryIcon(cat.icon)"
            class="w-4 h-4 mr-1.5"
          />
          {{ cat.nameZh }}
        </button>
      </div>

      <!-- Decision Tree -->
      <div
        v-if="selectedCategory && currentDecision"
        class="mx-auto"
      >
        <div class="glass-card p-5">
          <h2 class="text-lg font-bold text-white mb-5">
            {{ currentDecision.title }}
          </h2>

          <!-- Question -->
          <div
            v-if="currentNode && !currentNode.result"
            class="mb-4"
          >
            <div class="glass-card p-4 mb-4">
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
                @click="goTo('yes')"
              >
                <Check class="w-4 h-4 mr-1.5 inline" />
                是
              </button>
              <button
                class="pill pill-inactive py-3 text-sm"
                @click="goTo('no')"
              >
                <X class="w-4 h-4 mr-1.5 inline" />
                否
              </button>
            </div>

            <!-- Multiple Options -->
            <div
              v-else-if="currentNode.options"
              class="grid grid-cols-2 gap-3"
            >
              <button
                v-for="option in currentNode.options"
                :key="option.label"
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
            <div class="glass-card p-5 mb-5">
              <div class="inline-flex items-center justify-center w-14 h-14 bg-[rgba(48,209,88,0.1)] rounded-full mb-4">
                <CheckCircle2 class="w-8 h-8 text-[#30d158]" />
              </div>
              <h3 class="text-xl font-bold text-white mb-2">
                推荐工具：
                <router-link
                  v-if="resolveToolId(currentNode.result)"
                  :to="{ name: 'tool-detail', params: { id: resolveToolId(currentNode.result) } }"
                  class="text-[#30d158] hover:text-[#30d158]/80 underline decoration-[#30d158]/30 hover:decoration-[#30d158] transition-all"
                >
                  {{ currentNode.result }}
                </router-link>
                <span v-else>{{ currentNode.result }}</span>
              </h3>
              <div class="inline-block px-3 py-1 rounded-full text-xs font-medium text-[#30d158] bg-[rgba(48,209,88,0.1)] mb-3">
                最佳匹配
              </div>
              <p class="text-sm text-white/60 max-w-md mx-auto leading-relaxed">
                {{ currentNode.reason }}
              </p>
            </div>
            <div class="flex gap-3 justify-center">
              <button
                class="pill pill-inactive py-2.5 px-5 text-sm"
                @click="resetDecision"
              >
                <RotateCcw class="w-4 h-4 mr-1.5 inline" />
                重新选择
              </button>
              <router-link
                to="/"
                class="btn-capsule text-sm"
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
          style="letter-spacing: -0.3px"
        >
          <Lightbulb class="w-5 h-5 text-yellow-500 mr-2" />
          快速场景对照表
        </h2>
        <div class="space-y-2">
          <div
            v-for="scenario in (scenarioGuide || [])"
            :key="scenario.scenario"
            class="info-cell"
          >
            <div class="flex items-center justify-between flex-wrap gap-2">
              <span class="text-sm text-white/90 font-medium">{{ scenario.scenario }}</span>
              <div class="flex items-center gap-2">
                <router-link
                  v-if="resolveToolId(scenario.primary)"
                  :to="{ name: 'tool-detail', params: { id: resolveToolId(scenario.primary) } }"
                  class="pill pill-active text-xs py-1 px-3"
                >
                  {{ scenario.primary }}
                </router-link>
                <span
                  v-else
                  class="pill pill-active text-xs py-1 px-3"
                >
                  {{ scenario.primary }}
                </span>
                <span class="text-xs text-white/40">{{ scenario.backup }}</span>
                <span class="text-xs text-white/40">{{ scenario.budget }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Selection Guide -->
      <div class="mx-auto mt-10">
        <h2
          class="text-lg font-bold text-white mb-4 flex items-center"
          style="letter-spacing: -0.3px"
        >
          <Zap class="w-5 h-5 text-yellow-500 mr-2" />
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
                <Lightbulb class="w-3.5 h-3.5 text-yellow-500 mr-1.5 mt-0.5 flex-shrink-0" />
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
  Check,
  X,
  CheckCircle2,
  RotateCcw,
  Lightbulb,
  Zap
} from 'lucide-vue-next'
import { useToolsStore } from '../stores/tools'
import { useGamificationStore } from '../stores/gamification'
import { useAchievementsStore } from '../stores/achievements'
import { resolveToolId as _resolveToolId } from '../utils/helpers'
import { decisionTrees, scenarioGuide } from '../data/decisions.js'
import { quickSelectionGuide, categories } from '../data/categories.js'

const toolsStore = useToolsStore()
const gamification = useGamificationStore()
const achievements = useAchievementsStore()

function resolveToolId(name) {
  return _resolveToolId(name, toolsStore.tools)
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
  return decisionTrees[selectedCategory.value]
})

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
        currentNodeRef.value = { result: next.result, reason: next.reason }
      }
    }
  }
}

function goToOption(option) {
  if (option.result) {
    currentNodeRef.value = { result: option.result, reason: option.reason }
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
    Bot
  }
  return icons[iconName] || Brain
}

</script>
