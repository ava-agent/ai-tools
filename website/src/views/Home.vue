<template>
  <div class="min-h-screen bg-background">
    <Hero />
    <SearchBar />

    <!-- 资源推荐横幅 -->
    <section class="py-8 px-4">
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

    <Suspense>
      <template #default>
        <ToolGrid
          :tools="filteredTools"
          @clear-filters="handleClearFilters"
        />
      </template>
      <template #fallback>
        <LoadingSpinner />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { computed, Suspense } from 'vue'
import { PlayCircle, ArrowRight, Video, FileText } from 'lucide-vue-next'
import { useToolsStore } from '../stores/tools'
import { resources } from '../data/resources.js'
import Hero from '../components/Hero.vue'
import SearchBar from '../components/SearchBar.vue'
import ToolGrid from '../components/ToolGrid.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'

const toolsStore = useToolsStore()

const filteredTools = computed(() => toolsStore.filteredTools)

// Show all 5 resources as compact cards
const featuredResources = computed(() => resources)

function handleClearFilters() {
  toolsStore.clearFilters()
}
</script>
