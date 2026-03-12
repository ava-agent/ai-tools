<template>
  <div class="text-center">
    <!-- Error State -->
    <div
      v-if="hasError"
      class="py-8 text-white/50 text-sm"
    >
      分享卡片生成失败，请稍后重试
    </div>

    <template v-else>
      <!-- Canvas Preview -->
      <div class="inline-block rounded-xl overflow-hidden border border-white/[0.06] shadow-2xl mb-6">
        <canvas
          ref="canvasRef"
          class="max-w-full h-auto"
        />
      </div>

      <!-- Actions -->
      <div class="flex gap-3 justify-center">
        <button
          class="pill pill-inactive text-sm"
          @click="download"
        >
          <Download class="w-4 h-4 mr-2 inline" />
          下载 PNG
        </button>
        <button
          class="pill pill-inactive text-sm"
          @click="copyToClipboard"
        >
          <Copy class="w-4 h-4 mr-2 inline" />
          {{ copied ? '已复制' : '复制到剪贴板' }}
        </button>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { Download, Copy } from 'lucide-vue-next'
import { useShareCard } from '../../composables/useShareCard.js'

const props = defineProps({
  type: { type: String, required: true },
  data: { type: Object, required: true },
})

const canvasRef = ref(null)
const copied = ref(false)
const shareCard = useShareCard()
let generatedCanvas = null

const hasError = ref(false)

onMounted(async () => {
  await nextTick()

  try {
    if (props.type === 'quiz') {
      generatedCanvas = shareCard.generateQuizCard(props.data)
    } else if (props.type === 'personality') {
      generatedCanvas = shareCard.generatePersonalityCard(props.data)
    }

    if (generatedCanvas && canvasRef.value) {
      const ctx = canvasRef.value.getContext('2d')
      canvasRef.value.width = generatedCanvas.width
      canvasRef.value.height = generatedCanvas.height
      ctx.drawImage(generatedCanvas, 0, 0)
    }
  } catch {
    hasError.value = true
  }
})

function download() {
  if (generatedCanvas) {
    shareCard.downloadCard(generatedCanvas, `ai-tools-${props.type}.png`)
  }
}

async function copyToClipboard() {
  if (generatedCanvas) {
    const success = await shareCard.copyCardToClipboard(generatedCanvas)
    if (success) {
      copied.value = true
      setTimeout(() => { copied.value = false }, 2000)
    }
  }
}
</script>
