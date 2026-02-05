<template>
  <div class="min-h-screen bg-background">
    <div class="container mx-auto px-4 py-8">
      <div
        v-if="loading"
        class="flex items-center justify-center py-20"
      >
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
      
      <div
        v-else-if="tool"
        class="max-w-4xl mx-auto"
      >
        <button 
          class="mb-6 flex items-center text-white/60 hover:text-white transition-colors" 
          @click="goBack"
        >
          <ArrowLeft class="w-5 h-5 mr-2" />
          返回列表
        </button>

        <div class="card mb-8">
          <div class="flex items-start justify-between mb-6">
            <div>
              <h1 class="text-4xl font-bold text-white mb-2">
                {{ tool.name }}
              </h1>
              <p class="text-lg text-white/80">
                {{ tool.developer }}
              </p>
            </div>
            <div class="flex items-center space-x-1">
              <Star
                v-for="i in 5"
                :key="i"
                class="w-6 h-6"
                :class="i <= (tool.personalExperience?.rating || 0) ? 'text-primary fill-primary' : 'text-gray-600'"
              />
            </div>
          </div>

          <div class="mb-6 flex items-center gap-3">
            <span 
              class="inline-block px-4 py-2 text-white text-lg rounded-full"
              :class="getCategoryColor(tool.category)"
            >
              {{ getCategoryLabel(tool.category) }}
            </span>
            <span
              v-if="tool.subcategory"
              class="text-white/60"
            >
              {{ tool.subcategory }}
            </span>
          </div>

          <div
            v-if="tool.freeQuota || tool.contextWindow"
            class="mb-6 flex flex-wrap gap-4 text-sm"
          >
            <div
              v-if="tool.freeQuota"
              class="flex items-center text-white/70"
            >
              <span class="text-green-400 mr-2">💡</span>
              免费额度: {{ tool.freeQuota }}
            </div>
            <div
              v-if="tool.contextWindow"
              class="flex items-center text-white/70"
            >
              <span class="text-blue-400 mr-2">📏</span>
              上下文: {{ tool.contextWindow }}
            </div>
            <div
              v-if="tool.chineseSupport"
              class="flex items-center text-white/70"
            >
              <span class="text-red-400 mr-2">🇨🇳</span>
              中文支持: {{ '★'.repeat(tool.chineseSupport) }}
            </div>
          </div>

          <p class="text-xl text-white/90 mb-8">
            {{ tool.bestFor }}
          </p>

          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 class="text-2xl font-bold text-white mb-4 flex items-center">
                <CheckCircle class="w-6 h-6 text-green-500 mr-2" />
                优势
              </h2>
              <ul class="space-y-3 text-white/80">
                <li
                  v-for="pro in (tool.pros || [])"
                  :key="pro"
                  class="flex items-start"
                >
                  <span class="text-green-500 mr-3 text-xl">•</span>
                  <span>{{ pro }}</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-white mb-4 flex items-center">
                <AlertCircle class="w-6 h-6 text-red-500 mr-2" />
                劣势
              </h2>
              <ul class="space-y-3 text-white/80">
                <li
                  v-for="con in (tool.cons || [])"
                  :key="con"
                  class="flex items-start"
                >
                  <span class="text-red-500 mr-3 text-xl">•</span>
                  <span>{{ con }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex flex-wrap gap-2 mb-8">
            <span
              v-for="tag in (tool.tags || [])"
              :key="tag"
              class="px-3 py-1 text-sm rounded-full text-white"
              :class="getTagColor(tag)"
            >
              {{ tag }}
            </span>
          </div>

          <div class="space-y-4">
            <a
              v-for="version in (tool.versions || [])"
              :key="version.type"
              :href="version.link"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full btn-secondary text-center"
            >
              {{ version.type }} 版本 - {{ version.pricing }}
              <span class="block text-sm text-white/60 mt-1">{{ version.models }}</span>
            </a>
          </div>
        </div>

        <div class="card mb-8">
          <h2 class="text-2xl font-bold text-white mb-6 gradient-text">
            个人使用经验
          </h2>
          
          <div class="mb-6">
            <div class="flex items-center mb-3">
              <span class="text-sm text-white/60 mr-2">综合评分：</span>
              <div class="flex items-center space-x-1">
                <Star
                  v-for="i in 5"
                  :key="i"
                  class="w-5 h-5"
                  :class="i <= (tool.personalExperience?.rating || 0) ? 'text-primary fill-primary' : 'text-gray-600'"
                />
              </div>
            </div>
            <p class="text-white/80">
              {{ tool.personalExperience?.insights || '' }}
            </p>
          </div>

          <div v-if="tool.personalExperience?.pitfalls?.length">
            <h3 class="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle class="w-5 h-5 text-yellow-500 mr-2" />
              注意事项
            </h3>
            <ul class="space-y-2 text-white/70">
              <li
                v-for="pitfall in (tool.personalExperience?.pitfalls || [])"
                :key="pitfall"
                class="flex items-start"
              >
                <span class="text-yellow-500 mr-3">⚠</span>
                <span>{{ pitfall }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="card">
          <h2 class="text-2xl font-bold text-white mb-6 gradient-text">
            SWOT 分析
          </h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h3 class="text-lg font-bold text-green-400 mb-2">
                  优势 (Strengths)
                </h3>
                <p class="text-white/80">
                  {{ tool.swot?.S || '' }}
                </p>
              </div>

              <div class="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <h3 class="text-lg font-bold text-red-400 mb-2">
                  劣势 (Weaknesses)
                </h3>
                <p class="text-white/80">
                  {{ tool.swot?.W || '' }}
                </p>
              </div>
            </div>

            <div class="space-y-4">
              <div class="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <h3 class="text-lg font-bold text-blue-400 mb-2">
                  机会 (Opportunities)
                </h3>
                <p class="text-white/80">
                  {{ tool.swot?.O || '' }}
                </p>
              </div>

              <div class="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                <h3 class="text-lg font-bold text-yellow-400 mb-2">
                  威胁 (Threats)
                </h3>
                <p class="text-white/80">
                  {{ tool.swot?.T || '' }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else
        class="text-center py-20"
      >
        <p class="text-xl text-white/60">
          未找到该工具
        </p>
        <button
          class="btn-secondary mt-4"
          @click="goBack"
        >
          返回列表
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useToolsStore } from '../stores/tools'
import { getTagColor, getCategoryLabel, getCategoryColor } from '../utils/helpers'
import { ArrowLeft, CheckCircle, AlertCircle, AlertTriangle, Star } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()
const toolsStore = useToolsStore()

const loading = ref(true)
const tool = computed(() => {
  return toolsStore.tools.find(t => t.id === route.params.id)
})

onMounted(() => {
  loading.value = false
  document.title = `${tool.value?.name || '工具详情'} - AI工具全书`
})

const goBack = () => {
  router.push({ name: 'home' })
}
</script>
