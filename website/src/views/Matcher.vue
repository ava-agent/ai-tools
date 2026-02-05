<template>
  <div class="min-h-screen bg-background">
    <div class="container mx-auto px-4 py-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          AI 工具匹配器
        </h1>
        <p class="text-xl text-white/80 max-w-2xl mx-auto">
          回答几个简单问题，为您推荐最合适的 AI 工具组合
        </p>
      </div>

      <!-- Category Selection -->
      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <button
          v-for="cat in categories"
          :key="cat.id"
          class="card p-6 text-left transition-all duration-300 hover:scale-105"
          :class="selectedCategory === cat.id ? 'ring-2 ring-primary' : ''"
          @click="selectCategory(cat.id)"
        >
          <div class="flex items-center mb-4">
            <div
              class="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
              :class="getCategoryBgColor(cat.color)"
            >
              <component
                :is="getCategoryIcon(cat.icon)"
                class="w-6 h-6 text-white"
              />
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">
                {{ cat.nameZh }}
              </h3>
              <p class="text-sm text-white/60">
                {{ cat.name }}
              </p>
            </div>
          </div>
          <p class="text-white/70 text-sm">
            {{ cat.description }}
          </p>
        </button>
      </div>

      <!-- Decision Tree -->
      <div
        v-if="selectedCategory && currentDecision"
        class="max-w-3xl mx-auto"
      >
        <div class="card p-8">
          <h2 class="text-2xl font-bold text-white mb-6 gradient-text">
            {{ currentDecision.title }}
          </h2>

          <!-- Question -->
          <div
            v-if="currentNode && !currentNode.result"
            class="mb-8"
          >
            <div class="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-6">
              <p class="text-xl text-white font-medium">
                {{ currentNode.question }}
              </p>
            </div>

            <!-- Yes/No Options -->
            <div
              v-if="currentNode.yes !== undefined || currentNode.no !== undefined"
              class="grid md:grid-cols-2 gap-4"
            >
              <button
                class="btn-primary py-4 text-lg"
                @click="goTo('yes')"
              >
                <Check class="w-5 h-5 mr-2 inline" />
                是
              </button>
              <button
                class="btn-secondary py-4 text-lg"
                @click="goTo('no')"
              >
                <X class="w-5 h-5 mr-2 inline" />
                否
              </button>
            </div>

            <!-- Multiple Options -->
            <div
              v-else-if="currentNode.options"
              class="grid md:grid-cols-2 gap-4"
            >
              <button
                v-for="option in currentNode.options"
                :key="option.label"
                class="btn-secondary py-4 text-lg"
                @click="goToOption(option.next)"
              >
                {{ option.label }}
              </button>
            </div>
          </div>

          <!-- Result -->
          <div
            v-else-if="currentNode && currentNode.result"
            class="text-center"
          >
            <div class="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-6">
              <CheckCircle2 class="w-12 h-12 text-green-500" />
            </div>
            <h3 class="text-3xl font-bold text-white mb-4">
              推荐工具：{{ currentNode.result }}
            </h3>
            <p class="text-lg text-white/80 mb-8 max-w-lg mx-auto">
              {{ currentNode.reason }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                class="btn-secondary"
                @click="resetDecision"
              >
                <RotateCcw class="w-5 h-5 mr-2 inline" />
                重新选择
              </button>
              <a
                href="/tools"
                class="btn-primary"
              >
                查看工具列表
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Scenario Guide -->
      <div
        v-if="selectedCategory"
        class="max-w-4xl mx-auto mt-12"
      >
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
          <Lightbulb class="w-6 h-6 text-yellow-500 mr-2" />
          快速场景对照表
        </h2>
        <div class="card overflow-hidden">
          <table class="w-full">
            <thead>
              <tr class="border-b border-white/10">
                <th class="text-left p-4 text-white font-semibold">
                  使用场景
                </th>
                <th class="text-left p-4 text-white font-semibold">
                  首选工具
                </th>
                <th class="text-left p-4 text-white font-semibold">
                  备选方案
                </th>
                <th class="text-left p-4 text-white font-semibold">
                  预算
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="scenario in (scenarioGuide || [])"
                :key="scenario.scenario"
                class="border-b border-white/5 hover:bg-white/5"
              >
                <td class="p-4 text-white/90">
                  {{ scenario.scenario }}
                </td>
                <td class="p-4">
                  <span class="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                    {{ scenario.primary }}
                  </span>
                </td>
                <td class="p-4 text-white/70">
                  {{ scenario.backup }}
                </td>
                <td class="p-4 text-white/70">
                  {{ scenario.budget }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Quick Selection Guide -->
      <div class="max-w-4xl mx-auto mt-12">
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
          <Zap class="w-6 h-6 text-yellow-500 mr-2" />
          快速选型指南
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="guide in quickSelectionGuide"
            :key="guide.need"
            class="card"
          >
            <h3 class="text-lg font-bold text-white mb-2">
              {{ guide.need }}
            </h3>
            <div class="space-y-2 text-sm">
              <div class="flex items-center">
                <span class="text-primary mr-2">→</span>
                <span class="text-white/80">首选: <strong class="text-primary">{{ guide.primary }}</strong></span>
              </div>
              <div class="flex items-center">
                <span class="text-white/50 mr-2">→</span>
                <span class="text-white/60">备选: {{ guide.secondary }}</span>
              </div>
              <div class="flex items-start mt-3 pt-3 border-t border-white/10">
                <Lightbulb class="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-white/70 text-xs">{{ guide.tip }}</span>
              </div>
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
import { decisionTrees, scenarioGuide } from '../data/decisions.js'
import { quickSelectionGuide } from '../data/categories.js'
import { categories } from '../data/categories.js'

const selectedCategory = ref('')
const currentNodeRef = ref(null)

const currentDecision = computed(() => {
  if (!selectedCategory.value) return null
  return decisionTrees[selectedCategory.value]
})

const currentNode = computed(() => {
  if (!currentDecision.value) return null

  if (currentNodeRef.value) {
    // Find the node by ID
    const findNode = (nodes, id) => {
      for (const node of nodes) {
        if (node.id === id) return node
        if (node.yes && typeof node.yes === 'object') {
          if (node.yes.result) return null
          const found = findNode(currentDecision.value.nodes, node.yes)
          if (found) return found
        }
        if (node.no && typeof node.no === 'object') {
          if (node.no.result) return null
          const found = findNode(currentDecision.value.nodes, node.no)
          if (found) return found
        }
      }
      return currentDecision.value.nodes.find(n => n.id === id)
    }
    return findNode(currentDecision.value.nodes, currentNodeRef.value)
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

function goToOption(nextId) {
  currentNodeRef.value = nextId
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

function getCategoryBgColor(color) {
  const colorMap = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
    orange: 'bg-orange-500'
  }
  return colorMap[color] || 'bg-gray-500'
}
</script>
