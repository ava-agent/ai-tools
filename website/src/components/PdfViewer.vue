<template>
  <div class="pdf-viewer">
    <div class="pdf-toolbar">
      <div class="min-w-0 flex items-center gap-3">
        <FileText
          class="w-5 h-5 text-primary"
          aria-hidden="true"
        />
        <span class="min-w-0 truncate text-white font-medium">{{ title }}</span>
      </div>
      <div class="flex items-center justify-end gap-2">
        <a
          :href="resolvedSrc"
          download
          :aria-label="downloadLabel"
          class="toolbar-btn min-h-11 min-w-11 justify-center"
          title="下载 PDF"
        >
          <Download
            class="w-4 h-4"
            aria-hidden="true"
          />
          <span class="hidden sm:inline ml-1 text-sm">下载</span>
        </a>
        <a
          :href="resolvedSrc"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="openLabel"
          class="toolbar-btn min-h-11 min-w-11 justify-center"
          title="新标签页打开"
        >
          <ExternalLink
            class="w-4 h-4"
            aria-hidden="true"
          />
          <span class="hidden sm:inline ml-1 text-sm">新窗口</span>
        </a>
        <button
          type="button"
          :aria-label="fullscreenLabel"
          class="toolbar-btn min-h-11 min-w-11 justify-center"
          title="全屏查看"
          @click="toggleFullscreen"
        >
          <Maximize
            class="w-4 h-4"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
    <div
      ref="containerRef"
      class="pdf-container"
    >
      <iframe
        :src="resolvedSrc"
        class="pdf-iframe"
        :title="title"
        loading="lazy"
        @load="onLoad"
        @error="onError"
      />
      <div
        v-if="loading"
        class="pdf-loading"
      >
        <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-primary" />
        <p class="text-white/60 mt-3">
          正在加载 PDF...
        </p>
      </div>
      <div
        v-if="error"
        class="pdf-error"
      >
        <FileText
          class="w-12 h-12 text-white/30 mb-3"
          aria-hidden="true"
        />
        <p class="text-white/60 mb-3">
          PDF 加载失败
        </p>
        <a
          :href="resolvedSrc"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="openLabel"
          class="btn-secondary text-sm"
        >
          在新标签页中打开
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { FileText, Download, ExternalLink, Maximize } from 'lucide-vue-next'
import { resolvePublicAssetPath } from '../utils/publicAssets.js'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: 'PDF 文档'
  }
})

const containerRef = ref(null)
const loading = ref(true)
const error = ref(false)

const downloadLabel = computed(() => `\u4e0b\u8f7d ${props.title}`)
const openLabel = computed(() => `\u5728\u65b0\u6807\u7b7e\u9875\u6253\u5f00 ${props.title}`)
const fullscreenLabel = computed(() => `\u5168\u5c4f\u67e5\u770b ${props.title}`)
const resolvedSrc = computed(() => resolvePublicAssetPath(props.src))

function onLoad() {
  loading.value = false
}

function onError() {
  loading.value = false
  error.value = true
}

function toggleFullscreen() {
  if (!containerRef.value) return
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    containerRef.value.requestFullscreen()
  }
}
</script>

<style scoped>
.pdf-viewer {
  @apply w-full rounded-xl overflow-hidden border border-white/10;
  background: #1a1a2e;
}

.pdf-toolbar {
  @apply flex flex-col items-stretch gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between;
  @apply border-b border-white/10 bg-white/5;
}

.toolbar-btn {
  @apply flex items-center px-3 py-1.5 rounded-lg;
  @apply text-white/60 hover:text-white hover:bg-white/10;
  @apply transition-all duration-200 cursor-pointer;
  @apply border-none bg-transparent;
}

.pdf-container {
  @apply relative;
  height: 60vh;
  min-height: 280px;
}

@media (min-width: 640px) {
  .pdf-container {
    height: 70vh;
    min-height: 400px;
  }
}

.pdf-iframe {
  @apply w-full h-full border-none;
  background: white;
}

.pdf-loading,
.pdf-error {
  @apply absolute inset-0 flex flex-col items-center justify-center;
  @apply bg-background/90;
}
</style>
