<template>
  <div class="min-h-screen bg-background">
    <div class="container mx-auto px-4 py-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          资源中心
        </h1>
        <p class="text-xl text-white/80 max-w-2xl mx-auto">
          PPT 演示文稿、深度解析视频 — 全方位了解 AI 开发工具生态
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="max-w-5xl mx-auto mb-8">
        <div class="flex flex-wrap gap-2 justify-center">
          <button
            v-for="tab in filterTabs"
            :key="tab.id"
            class="px-5 py-2.5 rounded-lg transition-all flex items-center gap-2 cursor-pointer"
            :class="activeFilter === tab.id
              ? 'bg-primary text-white shadow-lg shadow-primary/25'
              : 'bg-surface text-white/80 hover:bg-surface/80'"
            @click="activeFilter = tab.id"
          >
            <component
              :is="tab.icon"
              class="w-4 h-4"
            />
            {{ tab.label }}
            <span
              class="ml-1 px-1.5 py-0.5 text-xs rounded-full"
              :class="activeFilter === tab.id ? 'bg-white/20' : 'bg-white/10'"
            >
              {{ tab.count }}
            </span>
          </button>
        </div>
      </div>

      <!-- Resources Grid -->
      <div class="max-w-5xl mx-auto">
        <!-- PDF Section -->
        <div v-if="filteredPdfs.length > 0">
          <h2
            v-if="activeFilter === 'all'"
            class="text-2xl font-bold text-white mb-6 flex items-center"
          >
            <FileText class="w-6 h-6 text-blue-400 mr-2" />
            PPT 演示文稿
          </h2>
          <div class="grid md:grid-cols-1 gap-6 mb-12">
            <div
              v-for="pdf in filteredPdfs"
              :key="pdf.id"
              class="card group"
            >
              <div class="flex items-start justify-between mb-4">
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-2">
                    <div class="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Presentation class="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-white">
                        {{ pdf.title }}
                      </h3>
                      <p class="text-sm text-white/40">
                        {{ pdf.titleEn }}
                      </p>
                    </div>
                  </div>
                  <p class="text-white/70 mt-3">
                    {{ pdf.description }}
                  </p>
                  <div class="flex flex-wrap gap-2 mt-3">
                    <span
                      v-for="tag in pdf.tags"
                      :key="tag"
                      class="px-2 py-0.5 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
                <button
                  class="ml-4 flex-shrink-0 px-4 py-2 rounded-lg transition-all text-sm font-medium cursor-pointer"
                  :class="expandedPdf === pdf.id
                    ? 'bg-primary text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'"
                  @click="togglePdf(pdf.id)"
                >
                  <component
                    :is="expandedPdf === pdf.id ? ChevronUp : ChevronDown"
                    class="w-4 h-4 inline mr-1"
                  />
                  {{ expandedPdf === pdf.id ? '收起' : '查看' }}
                </button>
              </div>

              <!-- Embedded PDF Viewer -->
              <transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-[80vh]"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 max-h-[80vh]"
                leave-to-class="opacity-0 max-h-0"
              >
                <div
                  v-if="expandedPdf === pdf.id"
                  class="mt-4 overflow-hidden"
                >
                  <PdfViewer
                    :src="pdf.src"
                    :title="pdf.title"
                  />
                </div>
              </transition>
            </div>
          </div>
        </div>

        <!-- Video Section -->
        <div v-if="filteredVideos.length > 0">
          <h2
            v-if="activeFilter === 'all'"
            class="text-2xl font-bold text-white mb-6 flex items-center"
          >
            <Video class="w-6 h-6 text-purple-400 mr-2" />
            讲解视频
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div
              v-for="video in filteredVideos"
              :key="video.id"
              class="card"
            >
              <div class="mb-4">
                <div class="flex items-center gap-3 mb-2">
                  <div class="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Video class="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-white">
                      {{ video.title }}
                    </h3>
                    <p class="text-xs text-white/40">
                      {{ video.titleEn }}
                    </p>
                  </div>
                </div>
                <p class="text-white/70 text-sm mt-2">
                  {{ video.description }}
                </p>
                <div class="flex flex-wrap gap-2 mt-3">
                  <span
                    v-for="tag in video.tags"
                    :key="tag"
                    class="px-2 py-0.5 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
              <VideoPlayer
                :src="video.src"
                :show-controls="true"
              />
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
  FileText,
  Video,
  Presentation,
  ChevronDown,
  ChevronUp,
  Layers
} from 'lucide-vue-next'
import { resources } from '../data/resources.js'
import PdfViewer from '../components/PdfViewer.vue'
import VideoPlayer from '../components/VideoPlayer.vue'

const activeFilter = ref('all')
const expandedPdf = ref(null)

const pdfs = computed(() => resources.filter(r => r.type === 'pdf'))
const videos = computed(() => resources.filter(r => r.type === 'video'))

const filteredPdfs = computed(() => {
  if (activeFilter.value === 'video') return []
  return pdfs.value
})

const filteredVideos = computed(() => {
  if (activeFilter.value === 'pdf') return []
  return videos.value
})

const filterTabs = computed(() => [
  { id: 'all', label: '全部', icon: Layers, count: resources.length },
  { id: 'pdf', label: 'PPT / PDF', icon: FileText, count: pdfs.value.length },
  { id: 'video', label: '讲解视频', icon: Video, count: videos.value.length }
])

function togglePdf(id) {
  expandedPdf.value = expandedPdf.value === id ? null : id
}
</script>
