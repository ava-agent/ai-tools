<template>
  <div class="text-center">
    <div
      class="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6"
      :class="result.bg"
    >
      <Sparkles class="w-12 h-12" :class="result.color" />
    </div>

    <h2 class="text-3xl font-bold text-white mb-2">
      {{ result.name }}
    </h2>
    <p class="text-white/50 mb-4">
      你的 AI 人格类型
    </p>

    <div
      class="card max-w-lg mx-auto mb-6"
      :class="[result.bg, result.border]"
    >
      <p class="text-white/80 mb-4">
        {{ result.description }}
      </p>

      <div class="flex flex-wrap justify-center gap-2 mb-4">
        <span
          v-for="trait in result.traits"
          :key="trait"
          class="px-3 py-1 rounded-full text-sm border"
          :class="[result.color, result.border]"
        >
          {{ trait }}
        </span>
      </div>

      <div class="pt-4 border-t border-white/10">
        <p class="text-white/50 text-sm mb-2">
          最匹配的 AI 工具
        </p>
        <p class="text-xl font-bold" :class="result.color">
          {{ result.tool }}
        </p>
      </div>
    </div>

    <p class="text-sm text-primary font-medium mb-6">
      +40 XP
    </p>

    <button
      class="btn-secondary"
      @click="$emit('restart')"
    >
      <RotateCcw class="w-4 h-4 mr-2 inline" />
      重新测试
    </button>
  </div>
</template>

<script setup>
import { Sparkles, RotateCcw } from 'lucide-vue-next'

defineProps({
  result: { type: Object, required: true },
})

defineEmits(['restart'])
</script>
