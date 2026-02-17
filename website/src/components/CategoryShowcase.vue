<template>
  <section class="py-8 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-bold text-white flex items-center gap-2">
          <LayoutGrid class="w-5 h-5 text-primary" />
          工具分类
        </h2>
        <button
          v-if="toolsStore.selectedCategory !== 'all'"
          class="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
          @click="clearCategory"
        >
          <X class="w-4 h-4" />
          清除筛选
        </button>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        <button
          v-for="cat in categories"
          :key="cat.id"
          class="relative overflow-hidden rounded-xl p-4 text-left transition-all duration-300 border cursor-pointer group"
          :class="[
            toolsStore.selectedCategory === cat.id
              ? 'ring-2 ring-primary border-primary/50 bg-primary/10'
              : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20',
          ]"
          @click="selectCategory(cat.id)"
        >
          <!-- Background gradient -->
          <div
            class="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
            :class="getGradient(cat.color)"
          />

          <div class="relative z-10">
            <!-- Icon + Count -->
            <div class="flex items-center justify-between mb-3">
              <div
                class="w-10 h-10 rounded-lg flex items-center justify-center"
                :class="getBgColor(cat.color)"
              >
                <component
                  :is="getIcon(cat.icon)"
                  class="w-5 h-5 text-white"
                />
              </div>
              <span class="text-xs text-white/40 bg-white/5 px-2 py-0.5 rounded-full">
                {{ getToolCount(cat.id) }} 款
              </span>
            </div>

            <!-- Name -->
            <h3 class="text-sm font-bold text-white mb-0.5">
              {{ cat.nameZh }}
            </h3>
            <p class="text-xs text-white/50 mb-2">
              {{ cat.name }}
            </p>

            <!-- Example tools -->
            <div class="flex flex-wrap gap-1">
              <span
                v-for="example in cat.examples.slice(0, 3)"
                :key="example"
                class="text-xs px-1.5 py-0.5 rounded bg-white/5 text-white/60"
              >
                {{ example }}
              </span>
            </div>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Monitor, Terminal, Brain, Image, Bot, LayoutGrid, X } from 'lucide-vue-next'
import { useToolsStore } from '../stores/tools'
import { categories } from '../data/categories.js'

const toolsStore = useToolsStore()

function selectCategory(catId) {
  if (toolsStore.selectedCategory === catId) {
    toolsStore.setSelectedCategory('all')
  } else {
    toolsStore.setSelectedCategory(catId)
  }
}

function clearCategory() {
  toolsStore.setSelectedCategory('all')
}

function getToolCount(catId) {
  return toolsStore.tools.filter(t => t.category === catId).length
}

function getIcon(iconName) {
  const icons = { Monitor, Terminal, Brain, Image, Bot }
  return icons[iconName] || Brain
}

function getBgColor(color) {
  const map = {
    blue: 'bg-blue-500/80',
    green: 'bg-green-500/80',
    purple: 'bg-purple-500/80',
    pink: 'bg-pink-500/80',
    orange: 'bg-orange-500/80',
  }
  return map[color] || 'bg-gray-500/80'
}

function getGradient(color) {
  const map = {
    blue: 'bg-gradient-to-br from-blue-500 to-blue-700',
    green: 'bg-gradient-to-br from-green-500 to-green-700',
    purple: 'bg-gradient-to-br from-purple-500 to-purple-700',
    pink: 'bg-gradient-to-br from-pink-500 to-pink-700',
    orange: 'bg-gradient-to-br from-orange-500 to-orange-700',
  }
  return map[color] || 'bg-gradient-to-br from-gray-500 to-gray-700'
}
</script>
