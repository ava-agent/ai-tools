<template>
  <div class="card">
    <!-- Question -->
    <p class="text-lg font-medium text-white mb-6">
      {{ question.question }}
    </p>

    <!-- Options -->
    <div class="space-y-3">
      <button
        v-for="(option, i) in question.options"
        :key="i"
        class="w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 cursor-pointer"
        :class="getOptionClass(option, i)"
        :disabled="answered"
        @click="selectAnswer(i)"
      >
        <div class="flex items-center gap-3">
          <span
            class="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
            :class="getCircleClass(option, i)"
          >
            {{ ['A', 'B', 'C', 'D'][i] }}
          </span>
          <span>{{ option.text }}</span>
          <CheckCircle
            v-if="answered && option.correct"
            class="w-5 h-5 text-green-400 ml-auto flex-shrink-0"
          />
          <XCircle
            v-if="answered && selectedIndex === i && !option.correct"
            class="w-5 h-5 text-red-400 ml-auto flex-shrink-0"
          />
        </div>
      </button>
    </div>

    <!-- Explanation -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
    >
      <div
        v-if="answered"
        class="mt-4 p-3 rounded-lg text-sm"
        :class="isCorrect ? 'bg-green-500/10 text-green-300 border border-green-500/20' : 'bg-red-500/10 text-red-300 border border-red-500/20'"
      >
        {{ question.explanation }}
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { CheckCircle, XCircle } from 'lucide-vue-next'

const props = defineProps({
  question: { type: Object, required: true },
})

const emit = defineEmits(['answer'])

const selectedIndex = ref(null)
const answered = ref(false)
const isCorrect = ref(false)

function selectAnswer(index) {
  if (answered.value) return
  selectedIndex.value = index
  answered.value = true
  isCorrect.value = props.question.options[index].correct
  emit('answer', isCorrect.value)
}

function getOptionClass(option, index) {
  if (!answered.value) {
    return 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/30 text-white'
  }
  if (option.correct) {
    return 'bg-green-500/10 border-green-500/30 text-white'
  }
  if (selectedIndex.value === index && !option.correct) {
    return 'bg-red-500/10 border-red-500/30 text-white/60'
  }
  return 'bg-white/5 border-white/5 text-white/30'
}

function getCircleClass(option, index) {
  if (!answered.value) {
    return 'bg-white/10 text-white/60'
  }
  if (option.correct) {
    return 'bg-green-500/20 text-green-400'
  }
  if (selectedIndex.value === index && !option.correct) {
    return 'bg-red-500/20 text-red-400'
  }
  return 'bg-white/5 text-white/20'
}
</script>
