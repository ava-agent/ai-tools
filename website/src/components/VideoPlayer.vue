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
        :poster="posterUrl"
        :controls="showControls"
        preload="metadata"
        @play="isPlaying = true"
        @pause="isPlaying = false"
        @ended="onEnded"
        @timeupdate="onTimeUpdate"
        @loadedmetadata="onLoadedMetadata"
        @error="onVideoError"
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
          type="button"
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

        <input
          ref="progressRef"
          class="progress-slider"
          type="range"
          min="0"
          :max="duration || 0"
          step="0.1"
          :value="currentTime"
          aria-label="视频播放进度"
          :aria-valuetext="`${formatTime(currentTime)} / ${formatTime(duration)}`"
          :style="{ '--progress': progressPercent + '%' }"
          @input="seekToValue"
        >

        <span class="time-display">{{ formatTime(currentTime) }} / {{ formatTime(duration) }}</span>

        <button
          type="button"
          class="control-btn"
          aria-label="全屏"
          @click="toggleFullscreen"
        >
          <Maximize class="w-5 h-5" />
        </button>
      </div>

      <!-- 播放按钮覆盖层 -->
      <button
        v-if="!isPlaying && !hasStarted"
        type="button"
        class="play-overlay"
        aria-label="播放视频"
        @click="togglePlay"
      >
        <div class="play-button">
          <Play class="w-12 h-12" />
        </div>
      </button>
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
const videoError = ref(false)
let hideControlsTimer = null
let playPromise = null

const videoSrc = computed(() => videoError.value ? null : props.src)
const posterUrl = computed(() => props.thumbnail)

const progressPercent = computed(() => {
  if (duration.value === 0) return 0
  return (currentTime.value / duration.value) * 100
})

const togglePlay = async () => {
  if (!videoRef.value) return

  if (videoRef.value.paused) {
    try {
      playPromise = videoRef.value.play()
      if (playPromise) await playPromise
      hasStarted.value = true
      showCustomControls.value = true
    } catch {
      // play() was interrupted or failed — ignore
    }
    playPromise = null
  } else {
    // Wait for pending play() before pausing
    if (playPromise) {
      try { await playPromise } catch { /* ignore */ }
      playPromise = null
    }
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

const onVideoError = () => {
  videoError.value = true
}

const seekToValue = (event) => {
  if (!videoRef.value) return
  videoRef.value.currentTime = Number(event.target.value)
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

onMounted(async () => {
  if (props.autoplay && videoRef.value) {
    await togglePlay()
  }
})

onUnmounted(() => {
  clearTimeout(hideControlsTimer)
})
</script>

<style scoped>
.video-player {
  @apply w-full rounded-2xl overflow-hidden;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
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
  @apply flex min-h-11 min-w-11 items-center justify-center;
  @apply text-white hover:text-[#0a84ff] transition-colors;
  @apply bg-transparent border-none cursor-pointer;
  @apply p-0 rounded-full;
}

.control-btn:focus-visible {
  outline: 2px solid #0a84ff;
  outline-offset: 2px;
}

@media (hover: none), (pointer: coarse) {
  .video-controls {
    @apply opacity-100;
    pointer-events: auto;
  }
}

.progress-slider {
  @apply flex-1 h-11 cursor-pointer appearance-none bg-transparent;
}

.progress-slider::-webkit-slider-runnable-track {
  height: 4px;
  border-radius: 999px;
  background: linear-gradient(to right, #0a84ff var(--progress), rgba(255, 255, 255, 0.2) var(--progress));
}

.progress-slider::-webkit-slider-thumb {
  width: 16px;
  height: 16px;
  margin-top: -6px;
  appearance: none;
  border-radius: 999px;
  background: #fff;
  border: 2px solid #0a84ff;
}

.progress-slider::-moz-range-track {
  height: 4px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.2);
}

.progress-slider::-moz-range-progress {
  height: 4px;
  border-radius: 999px;
  background: #0a84ff;
}

.progress-slider::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 999px;
  background: #fff;
  border: 2px solid #0a84ff;
}

.time-display {
  @apply text-xs text-white/80 font-mono;
}

.play-overlay {
  @apply absolute inset-0 flex items-center justify-center;
  @apply bg-black/40 cursor-pointer;
  @apply transition-opacity duration-300;
  @apply border-none;
}

.play-button {
  @apply w-16 h-16 rounded-full;
  background: rgba(10, 132, 255, 0.9);
  @apply flex items-center justify-center;
  @apply text-white;
  @apply transition-colors;
  @apply shadow-lg;
}

.play-button:hover {
  background: rgba(10, 132, 255, 1);
}

.video-placeholder {
  @apply flex flex-col items-center justify-center;
  @apply py-12 px-4 rounded-2xl;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
}
</style>
