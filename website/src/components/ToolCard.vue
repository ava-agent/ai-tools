<template>
  <article class="card group relative overflow-hidden">
    <!-- 悬停光晕效果 -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-accent/0 group-hover:from-primary/5 group-hover:via-transparent group-hover:to-accent/5 transition-all duration-500 pointer-events-none" />

    <div class="relative z-10">
      <!-- 头部：工具名称和评分 -->
      <div class="flex items-start justify-between mb-4">
        <div class="flex-1 min-w-0 pr-4">
          <h3 class="text-xl font-bold text-white mb-1 group-hover:text-primary transition-all duration-200 truncate">
            {{ tool.name }}
          </h3>
          <p class="text-sm text-muted truncate">
            {{ tool.developer }}
          </p>
        </div>
        <div class="flex items-center gap-0.5 flex-shrink-0" :aria-label="`评分: ${tool.personalExperience?.rating || 0} 星`">
          <Star
            v-for="i in 5"
            :key="i"
            class="w-4 h-4 transition-colors duration-200"
            :class="getStarClass(i)"
          />
        </div>
      </div>

      <!-- 类别标签 -->
      <div class="mb-4 flex items-center gap-2 flex-wrap">
        <span
          class="tag-pill text-sm"
          :class="getCategoryColor(tool.category)"
        >
          {{ getCategoryLabel(tool.category) }}
        </span>
        <span
          v-if="tool.subcategory"
          class="tag-pill text-xs bg-white/5 text-white/60"
        >
          {{ tool.subcategory }}
        </span>
      </div>

      <!-- 工具描述 -->
      <p class="text-white/80 mb-5 leading-relaxed line-clamp-2">
        {{ tool.bestFor }}
      </p>

      <!-- 优势劣势 -->
      <div class="space-y-3 mb-5">
        <div class="bg-green-500/5 rounded-lg p-3 border border-green-500/10 group-hover:border-green-500/20 transition-all duration-300">
          <h4 class="text-sm font-semibold text-white mb-2 flex items-center">
            <CheckCircle class="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
            <span>优势</span>
          </h4>
          <ul class="text-sm text-muted space-y-1">
            <li
              v-for="pro in (tool.pros || []).slice(0, 3)"
              :key="pro"
              class="flex items-start gap-2"
            >
              <span class="text-green-400 flex-shrink-0">•</span>
              <span class="line-clamp-1">{{ pro }}</span>
            </li>
          </ul>
        </div>

        <div class="bg-red-500/5 rounded-lg p-3 border border-red-500/10 group-hover:border-red-500/20 transition-all duration-300">
          <h4 class="text-sm font-semibold text-white mb-2 flex items-center">
            <AlertCircle class="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
            <span>劣势</span>
          </h4>
          <ul class="text-sm text-muted space-y-1">
            <li
              v-for="con in (tool.cons || []).slice(0, 2)"
              :key="con"
              class="flex items-start gap-2"
            >
              <span class="text-red-400 flex-shrink-0">•</span>
              <span class="line-clamp-1">{{ con }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 标签 -->
      <div class="flex flex-wrap gap-2 mb-5">
        <span
          v-for="tag in (tool.tags || [])"
          :key="tag"
          class="tag-pill text-xs"
          :class="getTagColor(tag)"
        >
          {{ tag }}
        </span>
      </div>

      <!-- 链接按钮 -->
      <div class="space-y-2">
        <a
          v-for="version in (tool.versions || [])"
          :key="version.type"
          :href="version.link"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-secondary text-center block text-sm py-2.5"
          :aria-label="`访问 ${tool.name} ${version.type} 版本`"
        >
          <span class="flex items-center justify-center gap-2">
            <ExternalLink class="w-4 h-4" />
            {{ version.type }} - {{ version.pricing }}
          </span>
        </a>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { CheckCircle, AlertCircle, Star, ExternalLink } from 'lucide-vue-next'
import { getTagColor, getCategoryLabel, getCategoryColor } from '../utils/helpers.js'

const props = defineProps({
  tool: {
    type: Object,
    required: true
  }
})

const getStarClass = (index) => {
  const rating = Math.round((props.tool.personalExperience?.rating || 0) * 2) / 2
  if (index <= rating) {
    return 'text-yellow-400 fill-yellow-400/20'
  }
  return 'text-white/20'
}
</script>
