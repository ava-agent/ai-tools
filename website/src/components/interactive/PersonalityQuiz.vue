<template>
  <div>
    <!-- Start -->
    <div
      v-if="phase === 'start'"
      class="text-center"
    >
      <div class="inline-flex items-center justify-center w-20 h-20 bg-purple-500/20 rounded-full mb-6">
        <User class="w-10 h-10 text-purple-400" />
      </div>
      <h2 class="text-2xl font-bold text-white mb-4">
        你是哪种 AI 工具？
      </h2>
      <p class="text-white/60 mb-8 max-w-md mx-auto">
        回答 8 个简单问题，发现你的 AI 工具人格类型
      </p>
      <button
        class="btn-primary px-8 py-3 text-lg"
        @click="phase = 'playing'"
      >
        <Play class="w-5 h-5 mr-2 inline" />
        开始测试
      </button>
    </div>

    <!-- Questions -->
    <div v-else-if="phase === 'playing'">
      <!-- Progress -->
      <div class="mb-6">
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm text-white/60">
            第 {{ currentStep + 1 }} / {{ questions.length }} 题
          </span>
        </div>
        <div class="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            class="h-full bg-purple-500 rounded-full transition-all duration-300"
            :style="{ width: `${((currentStep + 1) / questions.length) * 100}%` }"
          />
        </div>
      </div>

      <!-- Current Question -->
      <div class="card">
        <p class="text-lg font-medium text-white mb-6">
          {{ questions[currentStep].question }}
        </p>
        <div class="space-y-3">
          <button
            v-for="(option, i) in questions[currentStep].options"
            :key="i"
            class="w-full text-left px-4 py-3 rounded-xl border bg-white/5 border-white/10 hover:bg-purple-500/10 hover:border-purple-500/30 transition-all duration-200 text-white cursor-pointer"
            @click="selectOption(i)"
          >
            {{ option.text }}
          </button>
        </div>
      </div>
    </div>

    <!-- Result -->
    <PersonalityResult
      v-else-if="phase === 'result' && result"
      :result="result"
      @restart="restart"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { User, Play } from 'lucide-vue-next'
import { personalityQuestions, calculatePersonality } from '../../data/personalityQuiz.js'
import { useGamificationStore } from '../../stores/gamification.js'
import { useAchievementsStore } from '../../stores/achievements.js'
import PersonalityResult from './PersonalityResult.vue'

const gamification = useGamificationStore()
const achievements = useAchievementsStore()

const phase = ref('start')
const currentStep = ref(0)
const answers = ref([])
const result = ref(null)
const questions = personalityQuestions

function selectOption(index) {
  answers.value = [...answers.value, index]

  if (currentStep.value < questions.length - 1) {
    currentStep.value = currentStep.value + 1
  } else {
    // Calculate result
    result.value = calculatePersonality(answers.value)
    gamification.recordPersonalityResult(result.value.name)
    achievements.checkAll()
    phase.value = 'result'
  }
}

function restart() {
  phase.value = 'start'
  currentStep.value = 0
  answers.value = []
  result.value = null
}
</script>
