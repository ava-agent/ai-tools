<template>
  <div class="min-h-screen bg-background">
    <div class="max-w-[960px] mx-auto px-5 py-6">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1
          class="text-[28px] font-bold text-white mb-4"
        >
          资源中心
        </h1>
        <p class="text-xl text-white/80 max-w-2xl mx-auto">
          历史演示文稿与解析视频，可辅助理解当时的 AI 开发工具生态
        </p>
      </div>

      <div
        class="mb-8 rounded-xl border border-[#ffd60a]/15 bg-[#ffd60a]/[0.06] p-4 text-sm leading-relaxed text-white/70"
        data-testid="resources-history-notice"
      >
        {{ RESOURCE_HISTORY_NOTICE }}
      </div>

      <!-- Filter Tabs -->
      <div class="mb-8">
        <div class="flex flex-wrap gap-2 justify-center">
          <button
            v-for="tab in filterTabs"
            :key="tab.id"
            class="min-h-11 px-5 py-2.5 rounded-full transition-all flex items-center gap-2 cursor-pointer text-sm font-medium"
            :class="activeFilter === tab.id
              ? 'bg-[#0a84ff] text-white shadow-lg shadow-[#0a84ff]/25'
              : 'bg-white/[0.04] text-white/80 hover:bg-white/[0.08] border border-white/[0.06]'"
            :aria-pressed="activeFilter === tab.id"
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
      <div>
        <!-- PDF Section -->
        <div v-if="filteredPdfs.length > 0">
          <h2
            v-if="activeFilter === 'all'"
            class="text-2xl font-bold text-white mb-6 flex items-center"
          >
            <FileText class="w-6 h-6 text-[#0a84ff] mr-2" />
            PPT 演示文稿
          </h2>
          <div class="grid md:grid-cols-1 gap-6 mb-12">
            <div
              v-for="pdf in filteredPdfs"
              :key="pdf.id"
              class="glass-card rounded-2xl p-5 group"
              :data-testid="`resource-pdf-card-${pdf.id}`"
            >
              <div
                class="mb-4 flex flex-col items-start justify-between gap-3 sm:flex-row"
                :data-testid="`resource-pdf-header-${pdf.id}`"
              >
                <div class="min-w-0 flex-1">
                  <div class="flex items-start gap-3 mb-2">
                    <div class="w-10 h-10 rounded-lg bg-[#0a84ff]/20 flex items-center justify-center flex-shrink-0">
                      <Presentation class="w-5 h-5 text-[#0a84ff]" />
                    </div>
                    <div
                      class="min-w-0"
                      :data-testid="`resource-pdf-title-group-${pdf.id}`"
                    >
                      <h3
                        class="text-xl font-bold text-white break-words"
                        :data-testid="`resource-pdf-title-${pdf.id}`"
                      >
                        {{ pdf.title }}
                      </h3>
                      <p
                        class="text-sm text-white/40 break-words"
                        :data-testid="`resource-pdf-title-en-${pdf.id}`"
                      >
                        {{ pdf.titleEn }}
                      </p>
                    </div>
                  </div>
                  <p class="text-white/70 mt-3 break-words">
                    {{ pdf.description }}
                  </p>
                  <div class="flex flex-wrap gap-2 mt-3">
                    <span
                      v-for="tag in pdf.tags"
                      :key="tag"
                      class="px-2 py-0.5 text-xs rounded-full bg-[#0a84ff]/10 text-[#0a84ff] border border-[#0a84ff]/20"
                    >
                      {{ tag }}
                    </span>
                  </div>
                  <div
                    class="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-white/40"
                    :data-testid="`resource-meta-${pdf.id}`"
                  >
                    <span class="rounded-full border border-white/[0.06] bg-white/[0.04] px-2 py-0.5">
                      发布 {{ pdf.date }}
                    </span>
                    <span
                      :class="getResourceVerificationClass(pdf)"
                      :title="getResourceVerification(pdf).description"
                    >
                      {{ getResourceVerification(pdf).label }}
                    </span>
                    <span
                      v-if="pdf.assetCheckedAt"
                      class="rounded-full border border-white/[0.06] bg-white/[0.04] px-2 py-0.5"
                    >
                      本地文件核验 {{ pdf.assetCheckedAt }}
                    </span>
                    <span
                      v-if="pdf.freshnessNote"
                      class="rounded-full border border-[#ffd60a]/15 bg-[#ffd60a]/[0.06] px-2 py-0.5 text-[#ffd60a]/80"
                    >
                      {{ pdf.freshnessNote }}
                    </span>
                    <template
                      v-for="(source, index) in getResourceVerification(pdf).sources"
                      :key="source"
                    >
                      <a
                        v-if="isHttpSource(source)"
                        :href="source"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex max-w-full items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.04] px-2 py-0.5 text-white/45 transition-colors hover:border-primary/30 hover:text-primary"
                        :data-testid="`resource-source-${pdf.id}-${index}`"
                      >
                        <ExternalLink
                          class="h-3 w-3 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span class="min-w-0 break-words">{{ formatResourceSourceLabel(pdf, source) }}</span>
                      </a>
                      <span
                        v-else
                        class="inline-flex max-w-full items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.04] px-2 py-0.5 text-white/45"
                        :data-testid="`resource-local-source-${pdf.id}-${index}`"
                      >
                        <span class="text-white/35">本地资源</span>
                        <span class="min-w-0 break-words">{{ formatResourceSourceLabel(pdf, source) }}</span>
                      </span>
                    </template>
                  </div>
                </div>
                <button
                  class="ml-0 flex min-h-11 w-full flex-shrink-0 items-center justify-center px-4 py-2 rounded-full transition-all text-sm font-medium cursor-pointer sm:ml-4 sm:w-auto"
                  :class="expandedPdf === pdf.id
                    ? 'bg-[#0a84ff] text-white'
                    : 'bg-white/[0.04] text-white/60 hover:bg-white/[0.08] hover:text-white border border-white/[0.06]'"
                  :aria-expanded="expandedPdf === pdf.id"
                  :aria-controls="`pdf-panel-${pdf.id}`"
                  :data-testid="`resource-pdf-toggle-${pdf.id}`"
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
                enter-to-class="opacity-100 max-h-[calc(100vh-8rem)] sm:max-h-none"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 max-h-[calc(100vh-8rem)] sm:max-h-none"
                leave-to-class="opacity-0 max-h-0"
              >
                <div
                  v-if="expandedPdf === pdf.id"
                  :id="`pdf-panel-${pdf.id}`"
                  class="mt-4 max-h-[calc(100vh-8rem)] overflow-auto rounded-xl sm:max-h-none"
                  :data-testid="`resource-pdf-panel-${pdf.id}`"
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

        <!-- Featured Videos -->
        <div v-if="featuredVideos.length > 0 && activeFilter !== 'pdf'">
          <h2
            v-if="activeFilter === 'all'"
            class="text-2xl font-bold text-white mb-6 flex items-center"
          >
            <Video class="w-6 h-6 text-purple-400 mr-2" />
            专题视频
          </h2>
          <div class="grid md:grid-cols-2 gap-6 mb-12">
            <div
              v-for="video in featuredVideos"
              :key="video.id"
              class="glass-card rounded-2xl p-5"
            >
              <div class="mb-4">
                <div
                  class="flex items-start gap-3 mb-2"
                  :data-testid="`resource-video-header-${video.id}`"
                >
                  <div class="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Video class="w-5 h-5 text-purple-400" />
                  </div>
                  <div
                    class="min-w-0"
                    :data-testid="`resource-video-title-group-${video.id}`"
                  >
                    <h3
                      class="text-lg font-bold text-white break-words"
                      :data-testid="`resource-video-title-${video.id}`"
                    >
                      {{ video.title }}
                    </h3>
                    <p
                      class="text-xs text-white/40 break-words"
                      :data-testid="`resource-video-title-en-${video.id}`"
                    >
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
                <div
                  class="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-white/40"
                  :data-testid="`resource-meta-${video.id}`"
                >
                  <span class="rounded-full border border-white/[0.06] bg-white/[0.04] px-2 py-0.5">
                    发布 {{ video.date }}
                  </span>
                  <span
                    :class="getResourceVerificationClass(video)"
                    :title="getResourceVerification(video).description"
                  >
                    {{ getResourceVerification(video).label }}
                  </span>
                  <span
                    v-if="video.assetCheckedAt"
                    class="rounded-full border border-white/[0.06] bg-white/[0.04] px-2 py-0.5"
                  >
                    本地文件核验 {{ video.assetCheckedAt }}
                  </span>
                  <span
                    v-if="video.freshnessNote"
                    class="rounded-full border border-[#ffd60a]/15 bg-[#ffd60a]/[0.06] px-2 py-0.5 text-[#ffd60a]/80"
                  >
                    {{ video.freshnessNote }}
                  </span>
                  <template
                    v-for="(source, index) in getResourceVerification(video).sources"
                    :key="source"
                  >
                    <a
                      v-if="isHttpSource(source)"
                      :href="source"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex max-w-full items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.04] px-2 py-0.5 text-white/45 transition-colors hover:border-primary/30 hover:text-primary"
                      :data-testid="`resource-source-${video.id}-${index}`"
                    >
                      <ExternalLink
                        class="h-3 w-3 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span class="min-w-0 break-words">{{ formatResourceSourceLabel(video, source) }}</span>
                    </a>
                    <span
                      v-else
                      class="inline-flex max-w-full items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.04] px-2 py-0.5 text-white/45"
                      :data-testid="`resource-local-source-${video.id}-${index}`"
                    >
                      <span class="text-white/35">本地资源</span>
                      <span class="min-w-0 break-words">{{ formatResourceSourceLabel(video, source) }}</span>
                    </span>
                  </template>
                </div>
              </div>
              <VideoPlayer
                :src="video.src"
                :label="`${video.title} 演示视频`"
                :show-controls="true"
                :defer-load="true"
              />
            </div>
          </div>
        </div>

        <!-- Demo Videos -->
        <div v-if="demoVideos.length > 0 && activeFilter !== 'pdf'">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
            <Monitor class="w-6 h-6 text-[#0a84ff] mr-2" />
            工具演示
            <span class="ml-2 text-sm font-normal text-white/40">{{ demoVideos.length }} 个</span>
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div
              v-for="video in demoVideos"
              :key="video.id"
              class="glass-card rounded-2xl p-5"
            >
              <div class="mb-4">
                <div
                  class="flex items-start gap-3 mb-2"
                  :data-testid="`resource-video-header-${video.id}`"
                >
                  <div class="w-10 h-10 rounded-lg bg-[#0a84ff]/20 flex items-center justify-center flex-shrink-0">
                    <Monitor class="w-5 h-5 text-[#0a84ff]" />
                  </div>
                  <div
                    class="min-w-0"
                    :data-testid="`resource-video-title-group-${video.id}`"
                  >
                    <h3
                      class="text-lg font-bold text-white break-words"
                      :data-testid="`resource-video-title-${video.id}`"
                    >
                      {{ video.title }}
                    </h3>
                    <p
                      class="text-xs text-white/40 break-words"
                      :data-testid="`resource-video-title-en-${video.id}`"
                    >
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
                    class="px-2 py-0.5 text-xs rounded-full bg-[#0a84ff]/10 text-[#0a84ff] border border-[#0a84ff]/20"
                  >
                    {{ tag }}
                  </span>
                </div>
                <div
                  class="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-white/40"
                  :data-testid="`resource-meta-${video.id}`"
                >
                  <span class="rounded-full border border-white/[0.06] bg-white/[0.04] px-2 py-0.5">
                    发布 {{ video.date }}
                  </span>
                  <span
                    :class="getResourceVerificationClass(video)"
                    :title="getResourceVerification(video).description"
                  >
                    {{ getResourceVerification(video).label }}
                  </span>
                  <span
                    v-if="video.assetCheckedAt"
                    class="rounded-full border border-white/[0.06] bg-white/[0.04] px-2 py-0.5"
                  >
                    本地文件核验 {{ video.assetCheckedAt }}
                  </span>
                  <span
                    v-if="video.freshnessNote"
                    class="rounded-full border border-[#ffd60a]/15 bg-[#ffd60a]/[0.06] px-2 py-0.5 text-[#ffd60a]/80"
                  >
                    {{ video.freshnessNote }}
                  </span>
                  <template
                    v-for="(source, index) in getResourceVerification(video).sources"
                    :key="source"
                  >
                    <a
                      v-if="isHttpSource(source)"
                      :href="source"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex max-w-full items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.04] px-2 py-0.5 text-white/45 transition-colors hover:border-primary/30 hover:text-primary"
                      :data-testid="`resource-source-${video.id}-${index}`"
                    >
                      <ExternalLink
                        class="h-3 w-3 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span class="min-w-0 break-words">{{ formatResourceSourceLabel(video, source) }}</span>
                    </a>
                    <span
                      v-else
                      class="inline-flex max-w-full items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.04] px-2 py-0.5 text-white/45"
                      :data-testid="`resource-local-source-${video.id}-${index}`"
                    >
                      <span class="text-white/35">本地资源</span>
                      <span class="min-w-0 break-words">{{ formatResourceSourceLabel(video, source) }}</span>
                    </span>
                  </template>
                </div>
              </div>
              <VideoPlayer
                :src="video.src"
                :label="`${video.title} 演示视频`"
                :show-controls="true"
                :defer-load="true"
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
  Layers,
  Monitor,
  ExternalLink
} from 'lucide-vue-next'
import { RESOURCE_HISTORY_NOTICE, resources } from '../data/resources.js'
import { getToolVerification, getVerificationBadgeClass } from '../utils/toolMetadata.js'
import PdfViewer from '../components/PdfViewer.vue'
import VideoPlayer from '../components/VideoPlayer.vue'

const activeFilter = ref('all')
const expandedPdf = ref(null)

const pdfs = computed(() => resources.filter(r => r.type === 'pdf'))
const videos = computed(() => resources.filter(r => r.type === 'video'))
const featuredVideos = computed(() => videos.value.filter(v => !v.id.startsWith('demo-')))
const demoVideos = computed(() => videos.value.filter(v => v.id.startsWith('demo-')))

const filteredPdfs = computed(() => {
  if (activeFilter.value === 'video') return []
  return pdfs.value
})

const filterTabs = computed(() => [
  { id: 'all', label: '全部', icon: Layers, count: resources.length },
  { id: 'pdf', label: 'PPT / PDF', icon: FileText, count: pdfs.value.length },
  { id: 'video', label: '视频', icon: Video, count: videos.value.length }
])

function togglePdf(id) {
  expandedPdf.value = expandedPdf.value === id ? null : id
}

function getResourceVerification(resource) {
  return getToolVerification(resource)
}

function getResourceVerificationClass(resource) {
  return getVerificationBadgeClass(resource)
}

function formatResourceSourceLabel(resource, source) {
  if (resource.type === 'pdf') return 'PDF 文件'
  if (resource.type === 'video') return '视频文件'
  return source.replace(/^\//, '')
}

function isHttpSource(source) {
  try {
    const protocol = new URL(source).protocol
    return protocol === 'http:' || protocol === 'https:'
  } catch {
    return false
  }
}
</script>
