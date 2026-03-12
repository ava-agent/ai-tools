<template>
  <div>
    <!-- Start Screen -->
    <div
      v-if="phase === 'start'"
      class="text-center"
    >
      <div class="inline-flex items-center justify-center w-20 h-20 bg-[#0a84ff]/20 rounded-full mb-6">
        <HelpCircle class="w-10 h-10 text-[#0a84ff]" />
      </div>
      <h2 class="text-2xl font-bold text-white mb-4">
        AI 工具知识竞猜
      </h2>
      <p class="text-white/60 mb-8 max-w-md mx-auto">
        从 {{ totalTools }} 款 AI 工具的真实数据中随机出题，测试你对 AI 工具生态的了解程度
      </p>
      <button
        class="btn-capsule px-8 py-3 text-lg"
        @click="startQuiz"
      >
        <Play class="w-5 h-5 mr-2 inline" />
        开始竞猜 (10 题)
      </button>
    </div>

    <!-- Quiz in progress -->
    <div v-else-if="phase === 'playing'">
      <!-- Progress -->
      <div class="mb-6">
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm text-white/60">
            第 {{ currentIndex + 1 }} / {{ questions.length }} 题
          </span>
          <span class="text-sm font-medium text-[#0a84ff]">
            {{ score }} 分
          </span>
        </div>
        <div class="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
          <div
            class="h-full bg-[#0a84ff] rounded-full transition-all duration-300"
            :style="{ width: `${((currentIndex + 1) / questions.length) * 100}%` }"
          />
        </div>
      </div>

      <!-- Current Question -->
      <QuizQuestion
        :key="currentIndex"
        :question="questions[currentIndex]"
        @answer="handleAnswer"
      />

      <!-- Next Button -->
      <div
        v-if="questionAnswered"
        class="text-center mt-6"
      >
        <button
          class="btn-capsule px-6 py-2"
          @click="nextQuestion"
        >
          {{ isLastQuestion ? '查看结果' : '下一题' }}
          <ArrowRight class="w-4 h-4 ml-2 inline" />
        </button>
      </div>
    </div>

    <!-- Results -->
    <div
      v-else-if="phase === 'results'"
      class="text-center"
    >
      <div
        class="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6"
        :class="isPerfect ? 'bg-yellow-500/20' : score >= 7 ? 'bg-green-500/20' : 'bg-blue-500/20'"
      >
        <component
          :is="isPerfect ? Star : score >= 7 ? Trophy : Target"
          class="w-12 h-12"
          :class="isPerfect ? 'text-yellow-400' : score >= 7 ? 'text-green-400' : 'text-blue-400'"
        />
      </div>
      <h2 class="text-3xl font-bold text-white mb-2">
        {{ score }} / {{ questions.length }}
      </h2>
      <p class="text-white/60 mb-2">
        {{ resultMessage }}
      </p>
      <p class="text-sm text-[#0a84ff] font-medium mb-8">
        +{{ xpEarned }} XP
      </p>
      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          class="pill pill-inactive"
          @click="resetQuiz"
        >
          <RotateCcw class="w-4 h-4 mr-2 inline" />
          再来一次
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { HelpCircle, Play, ArrowRight, RotateCcw, Star, Trophy, Target } from 'lucide-vue-next'
import { useToolsStore } from '../../stores/tools.js'
import { useGamificationStore } from '../../stores/gamification.js'
import { useAchievementsStore } from '../../stores/achievements.js'
import { generateQuizSet } from '../../data/quizQuestions.js'
import QuizQuestion from './QuizQuestion.vue'

const toolsStore = useToolsStore()
const gamification = useGamificationStore()
const achievements = useAchievementsStore()

const phase = ref('start')
const questions = ref([])
const currentIndex = ref(0)
const score = ref(0)
const questionAnswered = ref(false)
const xpEarned = ref(0)

const totalTools = computed(() => toolsStore.tools.length)
const isLastQuestion = computed(() => currentIndex.value >= questions.value.length - 1)
const isPerfect = computed(() => score.value === questions.value.length)

const resultMessage = computed(() => {
  if (questions.value.length === 0) return '加油！去工具列表多逛逛吧'
  const ratio = score.value / questions.value.length
  if (ratio === 1) return '满分！你是真正的 AI 工具专家！'
  if (ratio >= 0.8) return '非常棒！你对 AI 工具了如指掌'
  if (ratio >= 0.6) return '不错！继续探索更多工具吧'
  if (ratio >= 0.4) return '还需努力，多看看工具详情页'
  return '加油！去工具列表多逛逛吧'
})

function startQuiz() {
  questions.value = generateQuizSet(toolsStore.tools, 10)
  currentIndex.value = 0
  score.value = 0
  questionAnswered.value = false
  xpEarned.value = 0
  phase.value = 'playing'
}

function handleAnswer(correct) {
  if (correct) {
    score.value = score.value + 1
  }
  questionAnswered.value = true
}

function nextQuestion() {
  if (isLastQuestion.value) {
    finishQuiz()
  } else {
    currentIndex.value = currentIndex.value + 1
    questionAnswered.value = false
  }
}

function finishQuiz() {
  xpEarned.value = gamification.trackQuizComplete(score.value, questions.value.length)
  achievements.checkAll()
  phase.value = 'results'
}

function resetQuiz() {
  phase.value = 'start'
}
</script>
