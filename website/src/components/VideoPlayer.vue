<template>
  <div
    class="video-player"
    :class="{ 'video-player--compact': compact }"
  >
    <div
      v-if="videoSrc"
      class="video-container"
    >
      <video
        ref="videoRef"
        class="video-element"
        :poster="thumbnail"
        :controls="showControls"
        preload="metadata"
        @play="isPlaying = true"
        @pause="isPlaying = false"
        @ended="onEnded"
        @timeupdate="onTimeUpdate"
        @loadedmetadata="onLoadedMetadata"
      >
        <source
          :src="videoSrc"
          type="video/mp4"
        >
        您的浏览器不支持视频播放。
      </video>

      <!-- 自定义控制栏 -->
      <div
        v-if="!showControls"
        class="video-controls"
        :class="{ 'video-controls--visible': showCustomControls }"
      >
        <button
          class="control-btn"
          :aria-label="isPlaying ? '暂停' : '播放'"
          @click="togglePlay"
        >
          <Pause
            v-if="isPlaying"
            class="w-5 h-5"
          />
          <Play
            v-else
            class="w-5 h-5"
          />
        </button>

        <div
          ref="progressRef"
          class="progress-container"
          @click="seekTo"
        >
          <div class="progress-bar">
            <div
              class="progress-filled"
              :style="{ width: progressPercent + '%' }"
            />
          </div>
        </div>

        <span class="time-display">{{ formatTime(currentTime) }} / {{ formatTime(duration) }}</span>

        <button
          class="control-btn"
          aria-label="全屏"
          @click="toggleFullscreen"
        >
          <Maximize class="w-5 h-5" />
        </button>
      </div>

      <!-- 播放按钮覆盖层 -->
      <div
        v-if="!isPlaying && !hasStarted"
        class="play-overlay"
        @click="togglePlay"
      >
        <div class="play-button">
          <Play class="w-12 h-12" />
        </div>
      </div>
    </div>

    <div
      v-else
      class="video-placeholder"
    >
      <Video class="w-12 h-12 text-muted" />
      <p class="text-muted mt-2">
        暂无演示视频
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Play, Pause, Maximize, Video } from 'lucide-vue-next'

const props = defineProps({
  src: {
    type: String,
    default: null
  },
  thumbnail: {
    type: String,
    default: null
  },
  compact: {
    type: Boolean,
    default: false
  },
  showControls: {
    type: Boolean,
    default: false
  },
  autoplay: {
    type: Boolean,
    default: false
  }
})

const videoRef = ref(null)
const progressRef = ref(null)
const isPlaying = ref(false)
const hasStarted = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const showCustomControls = ref(false)
let hideControlsTimer = null

const videoSrc = computed(() => props.src)
const thumbnail = computed(() => props.thumbnail)

const progressPercent = computed(() => {
  if (duration.value === 0) return 0
  return (currentTime.value / duration.value) * 100
})

const togglePlay = () => {
  if (!videoRef.value) return

  if (videoRef.value.paused) {
    videoRef.value.play()
    hasStarted.value = true
  } else {
    videoRef.value.pause()
  }
}

const onEnded = () => {
  isPlaying.value = false
}

const onTimeUpdate = () => {
  if (videoRef.value) {
    currentTime.value = videoRef.value.currentTime
  }
}

const onLoadedMetadata = () => {
  if (videoRef.value) {
    duration.value = videoRef.value.duration
  }
}

const seekTo = (event) => {
  if (!videoRef.value || !progressRef.value) return

  const rect = progressRef.value.getBoundingClientRect()
  const percent = (event.clientX - rect.left) / rect.width
  videoRef.value.currentTime = percent * duration.value
}

const toggleFullscreen = () => {
  if (!videoRef.value) return

  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    videoRef.value.requestFullscreen()
  }
}

const formatTime = (seconds) => {
  if (!seconds || isNaN(seconds)) return '0:00'

  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

onMounted(() => {
  if (props.autoplay && videoRef.value) {
    togglePlay()
  }
})

onUnmounted(() => {
  clearTimeout(hideControlsTimer)
})
</script>

<style scoped>
.video-player {
  @apply w-full bg-black rounded-lg overflow-hidden;
}

.video-player--compact {
  @apply max-w-md;
}

.video-container {
  @apply relative;
}

.video-element {
  @apply w-full h-auto block;
  max-height: 500px;
}

.video-controls {
  @apply absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent;
  @apply flex items-center gap-3 px-4 py-3;
  @apply opacity-0 transition-opacity duration-300;
  pointer-events: none;
}

.video-controls--visible {
  @apply opacity-100;
  pointer-events: auto;
}

.video-container:hover .video-controls {
  @apply opacity-100;
  pointer-events: auto;
}

.control-btn {
  @apply flex items-center justify-center;
  @apply text-white hover:text-primary transition-colors;
  @apply bg-transparent border-none cursor-pointer;
  @apply p-1 rounded;
}

.progress-container {
  @apply flex-1 cursor-pointer;
}

.progress-bar {
  @apply h-1 bg-white/30 rounded-full overflow-hidden;
}

.progress-filled {
  @apply h-full bg-primary transition-all duration-100;
}

.time-display {
  @apply text-xs text-white/80 font-mono;
}

.play-overlay {
  @apply absolute inset-0 flex items-center justify-center;
  @apply bg-black/40 cursor-pointer;
  @apply transition-opacity duration-300;
}

.play-button {
  @apply w-16 h-16 rounded-full bg-primary/90;
  @apply flex items-center justify-center;
  @apply text-white;
  @apply hover:bg-primary transition-colors;
  @apply shadow-lg;
}

.video-placeholder {
  @apply flex flex-col items-center justify-center;
  @apply py-12 px-4 bg-white/5 rounded-lg;
}
</style>
