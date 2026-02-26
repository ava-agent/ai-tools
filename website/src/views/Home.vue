<template>
  <div class="min-h-screen bg-background">
    <IntroVideo
      :show="showIntro"
      @close="handleIntroClose"
    />
    <Hero />
    <SearchBar />

    <!-- 工具列表（核心内容，首屏可见） -->
    <ToolGrid
      :tools="filteredTools"
      @clear-filters="handleClearFilters"
    />

    <!-- 每日推荐 + 冷知识（工具列表之后） -->
    <section class="py-4 px-4">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
        <ToolOfTheDayCompact />
        <FunFact />
      </div>
    </section>

    <!-- 资源推荐横幅 -->
    <section class="py-6 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-bold text-white flex items-center gap-2">
            <PlayCircle class="w-5 h-5 text-primary" />
            精选资源
          </h3>
          <router-link
            to="/resources"
            class="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
          >
            查看全部
            <ArrowRight class="w-4 h-4" />
          </router-link>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          <router-link
            v-for="item in featuredResources"
            :key="item.id"
            to="/resources"
            class="group flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-200"
          >
            <div
              class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              :class="item.type === 'video' ? 'bg-purple-500/20' : 'bg-blue-500/20'"
            >
              <component
                :is="item.type === 'video' ? Video : FileText"
                class="w-4 h-4"
                :class="item.type === 'video' ? 'text-purple-400' : 'text-blue-400'"
              />
            </div>
            <div class="min-w-0">
              <p class="text-sm font-medium text-white truncate group-hover:text-primary transition-colors">
                {{ item.title }}
              </p>
              <p class="text-xs text-white/40">
                {{ item.type === 'video' ? '视频' : 'PPT' }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Replay Intro Button -->
    <Transition name="fade">
      <button
        v-if="!showIntro"
        class="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-3 py-1.5 bg-surface/60 hover:bg-surface text-white/60 hover:text-white text-xs rounded-full shadow-lg border border-white/10 backdrop-blur-sm transition-all hover:scale-105"
        @click="showIntro = true"
      >
        <PlayCircle class="w-3.5 h-3.5 text-primary" />
        演示
      </button>
    </Transition>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { PlayCircle, ArrowRight, Video, FileText } from 'lucide-vue-next'
import { useToolsStore } from '../stores/tools'
import { resources } from '../data/resources.js'
import Hero from '../components/Hero.vue'
import SearchBar from '../components/SearchBar.vue'
import ToolGrid from '../components/ToolGrid.vue'
import IntroVideo from '../components/IntroVideo.vue'
import ToolOfTheDayCompact from '../components/gamification/ToolOfTheDayCompact.vue'
import FunFact from '../components/gamification/FunFact.vue'

const showIntro = ref(false)

function handleIntroClose() {
  showIntro.value = false
  sessionStorage.setItem('hasSeenIntro', 'true')
}

onMounted(() => {
  const hasSeen = sessionStorage.getItem('hasSeenIntro')
  if (!hasSeen) {
    showIntro.value = true
  }
})

const toolsStore = useToolsStore()

const filteredTools = computed(() => toolsStore.filteredTools)

const featuredResources = computed(() => resources.slice(0, 5))

function handleClearFilters() {
  toolsStore.clearFilters()
}
</script>
