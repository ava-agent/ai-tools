<template>
  <Transition name="fade">
    <div
      v-if="show"
      data-testid="intro-video-overlay"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      @click="close"
      @keydown="handleDialogKeydown"
    >
      <div
        ref="dialogRef"
        class="relative w-full max-w-[min(90vw,1440px)] overflow-hidden rounded-lg bg-black shadow-2xl ring-1 ring-white/10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="intro-video-title"
        tabindex="-1"
        @click.stop
      >
        <h2
          id="intro-video-title"
          class="sr-only"
        >
          AI 工具全书介绍视频
        </h2>

        <video
          ref="videoRef"
          aria-labelledby="intro-video-title"
          autoplay
          muted
          playsinline
          :poster="posterSrc"
          preload="metadata"
          class="block aspect-video w-full max-h-[90vh] object-contain"
          @timeupdate="updateProgress"
          @ended="close"
        >
          <source
            :src="introVideoSrc"
            type="video/mp4"
          >
        </video>

        <!-- Close Button -->
        <button
          ref="closeButtonRef"
          data-testid="intro-video-close"
          class="absolute top-4 right-4 z-10 flex min-h-11 min-w-11 items-center justify-center rounded-full bg-black/50 text-white/80 backdrop-blur-sm transition-colors hover:bg-black/70 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          type="button"
          aria-label="关闭介绍视频"
          @click="close"
        >
          <X
            class="h-5 w-5"
            aria-hidden="true"
          />
        </button>

        <!-- Progress bar -->
        <div class="absolute bottom-0 left-0 w-full h-1 bg-white/10">
          <div
            class="h-full bg-primary transition-all duration-100 ease-linear"
            :style="{ width: `${progress}%` }"
          />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { nextTick, onUnmounted, ref, watch } from 'vue'
import { X } from 'lucide-vue-next'
import { resolvePublicAssetPath } from '../utils/publicAssets.js'

const props = defineProps({
  show: Boolean
})

const emit = defineEmits(['close'])
const introVideoSrc = resolvePublicAssetPath('hero-network.mp4')
const posterSrc = resolvePublicAssetPath('images/landing/promo-poster.webp')
const dialogRef = ref(null)
const closeButtonRef = ref(null)
const videoRef = ref(null)
const progress = ref(0)
let previouslyFocusedElement = null

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])'
].join(',')

function close() {
  emit('close')
}

function updateProgress() {
  const duration = videoRef.value?.duration
  progress.value = Number.isFinite(duration) && duration > 0
    ? (videoRef.value.currentTime / duration) * 100
    : 0
}

function getFocusableElements() {
  if (!dialogRef.value) return []

  return Array.from(dialogRef.value.querySelectorAll(focusableSelector)).filter((element) => {
    return !element.hasAttribute('disabled') && element.tabIndex !== -1
  })
}

function restorePreviousFocus() {
  const target = previouslyFocusedElement
  previouslyFocusedElement = null

  if (target && document.contains(target) && typeof target.focus === 'function') {
    target.focus()
  }
}

function handleDialogKeydown(event) {
  if (event.key === 'Escape') {
    event.preventDefault()
    close()
    return
  }

  if (event.key !== 'Tab') return

  const focusableElements = getFocusableElements()
  if (!focusableElements.length) {
    event.preventDefault()
    dialogRef.value?.focus()
    return
  }

  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]
  const activeElement = document.activeElement

  if (event.shiftKey && (activeElement === firstElement || !dialogRef.value?.contains(activeElement))) {
    event.preventDefault()
    lastElement.focus()
  } else if (!event.shiftKey && (activeElement === lastElement || !dialogRef.value?.contains(activeElement))) {
    event.preventDefault()
    firstElement.focus()
  }
}

watch(
  () => props.show,
  (isOpen) => {
    if (isOpen) {
      previouslyFocusedElement = document.activeElement
      progress.value = 0
      nextTick(async () => {
        closeButtonRef.value?.focus()
        try {
          await videoRef.value?.play()
        } catch {
          close()
        }
      })
      return
    }

    videoRef.value?.pause()
    nextTick(restorePreviousFocus)
  },
  { immediate: true }
)

onUnmounted(() => {
  restorePreviousFocus()
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
