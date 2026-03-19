<template>
  <Transition name="fade">
    <div
      v-if="show"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      @click="close"
    >
      <div
        class="relative bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
        @click.stop
      >
        <video
          ref="videoRef"
          autoplay
          muted
          playsinline
          class="block w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain"
          @ended="close"
        >
          <source
            src="/hero-network.mp4"
            type="video/mp4"
          >
        </video>

        <!-- Close Button -->
        <button
          class="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white/80 hover:text-white rounded-full backdrop-blur-sm transition-colors"
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
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  show: Boolean
})

const emit = defineEmits(['close'])
const videoRef = ref(null)
const progress = ref(0)
let progressInterval

function close() {
  emit('close')
}

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
