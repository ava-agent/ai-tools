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
        class="relative bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
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
          class="block w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain"
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
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
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { resolvePublicAssetPath } from '../utils/publicAssets.js'

const props = defineProps({
  show: Boolean
})

const emit = defineEmits(['close'])
const introVideoSrc = resolvePublicAssetPath('hero-network.mp4')
const dialogRef = ref(null)
const closeButtonRef = ref(null)
const videoRef = ref(null)
const progress = ref(0)
let progressInterval
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
      nextTick(() => closeButtonRef.value?.focus())
      return
    }

    nextTick(restorePreviousFocus)
  },
  { immediate: true }
)

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.play().catch(() => {
      // Autoplay blocked by browser policy — close the overlay
      close()
    })

    // Update progress
    progressInterval = setInterval(() => {
      if (videoRef.value) {
        progress.value = (videoRef.value.currentTime / videoRef.value.duration) * 100
      }
    }, 100)
  }
})

onUnmounted(() => {
  clearInterval(progressInterval)
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
