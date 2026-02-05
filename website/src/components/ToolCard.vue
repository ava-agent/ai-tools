<template>
  <div class="card group relative overflow-hidden">
    <!-- 添加悬停光晕效果 -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-accent/0 group-hover:from-primary/5 group-hover:via-transparent group-hover:to-accent/5 transition-all duration-500 pointer-events-none" />

    <div class="relative z-10">
      <!-- 头部：工具名称和评分 -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex-1 min-w-0 pr-4">
          <h3 class="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 truncate">
            {{ tool.name }}
          </h3>
          <p class="text-sm text-white/60 truncate">
            {{ tool.developer }}
          </p>
        </div>
        <div class="flex items-center space-x-0.5 flex-shrink-0">
          <template
            v-for="i in 5"
            :key="i"
          >
            <Star
              v-if="i <= Math.floor(tool.personalExperience?.rating || 0)"
              class="w-5 h-5 transition-transform duration-200 group-hover:scale-110 text-yellow-400 fill-yellow-400/20"
            />
            <StarHalf
              v-else-if="i === Math.ceil(tool.personalExperience?.rating || 0) && (tool.personalExperience?.rating || 0) % 1 !== 0"
              class="w-5 h-5 transition-transform duration-200 group-hover:scale-110 text-yellow-400 fill-yellow-400/20"
            />
            <Star
              v-else
              class="w-5 h-5 transition-transform duration-200 group-hover:scale-110 text-gray-600"
            />
          </template>
        </div>
      </div>

      <!-- 类别标签 -->
      <div class="mb-4 flex items-center gap-2">
        <span
          class="inline-block px-3 py-1.5 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105"
          :class="getCategoryColor(tool.category)"
        >
          {{ getCategoryLabel(tool.category) }}
        </span>
        <span
          v-if="tool.subcategory"
          class="text-xs text-white/50 px-2 py-1 bg-white/5 rounded-full"
        >
          {{ tool.subcategory }}
        </span>
      </div>

      <!-- 工具描述 -->
      <p class="text-white/80 mb-6 leading-relaxed">
        {{ tool.bestFor }}
      </p>

      <!-- 优势劣势 -->
      <div class="space-y-4 mb-6">
        <div class="bg-green-500/5 rounded-lg p-3 border border-green-500/10 group-hover:border-green-500/20 transition-all duration-300">
          <h4 class="text-sm font-semibold text-white mb-2 flex items-center">
            <CheckCircle class="w-4 h-4 text-green-400 mr-2" />
            优势
          </h4>
          <ul class="text-sm text-white/70 space-y-1.5">
            <li
              v-for="pro in (tool.pros || []).slice(0, 3)"
              :key="pro"
              class="flex items-start"
            >
              <span class="text-green-400 mr-2 text-lg">•</span>
              <span>{{ pro }}</span>
            </li>
          </ul>
        </div>

        <div class="bg-red-500/5 rounded-lg p-3 border border-red-500/10 group-hover:border-red-500/20 transition-all duration-300">
          <h4 class="text-sm font-semibold text-white mb-2 flex items-center">
            <AlertCircle class="w-4 h-4 text-red-400 mr-2" />
            劣势
          </h4>
          <ul class="text-sm text-white/70 space-y-1.5">
            <li
              v-for="con in (tool.cons || []).slice(0, 2)"
              :key="con"
              class="flex items-start"
            >
              <span class="text-red-400 mr-2 text-lg">•</span>
              <span>{{ con }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 标签 -->
      <div class="flex flex-wrap gap-2 mb-6">
        <span
          v-for="tag in (tool.tags || [])"
          :key="tag"
          class="px-3 py-1.5 text-xs font-medium rounded-full text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
          :class="getTagColor(tag)"
        >
          {{ tag }}
        </span>
      </div>

      <!-- 链接按钮 -->
      <a
        v-for="version in (tool.versions || [])"
        :key="version.type"
        :href="version.link"
        target="_blank"
        rel="noopener noreferrer"
        class="block w-full btn-secondary text-center mb-2 last:mb-0 group-hover:border-primary/30"
      >
        {{ version.type }} - {{ version.pricing }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { CheckCircle, AlertCircle, Star, StarHalf } from 'lucide-vue-next'
import { getTagColor, getCategoryLabel, getCategoryColor } from '../utils/helpers.js'

defineProps({
  tool: {
    type: Object,
    required: true
  }
})
</script>
