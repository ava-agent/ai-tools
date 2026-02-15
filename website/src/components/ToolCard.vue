<template>
  <router-link
    :to="{ name: 'tool-detail', params: { id: tool.id } }"
    class="block"
  >
    <article class="card card-interactive group relative overflow-hidden">
      <!-- 悬停光晕效果 -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-accent/0 group-hover:from-primary/5 group-hover:via-transparent group-hover:to-accent/5 transition-all duration-500 pointer-events-none" />

      <div class="relative z-10">
        <!-- 头部：Logo + 工具名称和评分 -->
        <div class="flex items-start gap-3 mb-3">
          <ToolLogo
            :tool-id="tool.id"
            :tool-name="tool.name"
            size="lg"
          />
          <div class="flex-1 min-w-0">
            <h3 class="text-lg font-bold text-white mb-0.5 group-hover:text-primary transition-all duration-200 truncate">
              {{ tool.name }}
            </h3>
            <p class="text-sm text-muted truncate mb-1">
              {{ tool.developer }}
            </p>
            <div
              class="flex items-center gap-0.5"
              :aria-label="`推荐度: ${tool.personalExperience?.rating || 0} 星`"
            >
              <Star
                v-for="i in 5"
                :key="i"
                class="w-3.5 h-3.5 transition-colors duration-200"
                :class="getStarClass(i)"
              />
              <span class="text-xs text-white/40 ml-1">推荐度</span>
            </div>
          </div>
        </div>

        <!-- 类别标签 + 视频标识 -->
        <div class="mb-3 flex items-center gap-2 flex-wrap">
          <div
            v-if="tool.video"
            class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium"
          >
            <Video class="w-3 h-3" />
            <span>视频</span>
          </div>
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
        <p class="text-sm text-white/70 mb-3 leading-relaxed line-clamp-2">
          {{ tool.bestFor }}
        </p>

        <!-- 核心亮点（仅显示第一个优势） -->
        <div
          v-if="tool.pros && tool.pros.length"
          class="mb-3"
        >
          <p class="text-xs text-green-400/80 flex items-start gap-1.5">
            <CheckCircle class="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
            <span class="line-clamp-1">{{ tool.pros[0] }}</span>
          </p>
        </div>

        <!-- 操作提示 -->
        <div class="text-center text-xs text-white/30 group-hover:text-primary transition-colors">
          查看详情
          <ArrowRight class="inline-block w-3.5 h-3.5 ml-0.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </article>
  </router-link>
</template>

<script setup>
import { CheckCircle, Star, Video, ArrowRight } from 'lucide-vue-next'
import ToolLogo from './ToolLogo.vue'
import { getCategoryLabel, getCategoryColor } from '../utils/helpers.js'

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

<style scoped>
/* 防止 router-link 下划线 */
a {
  text-decoration: none;
}
</style>
