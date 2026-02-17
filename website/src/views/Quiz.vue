<template>
  <div class="min-h-screen bg-background">
    <div class="container mx-auto px-4 py-8">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          趣味竞猜
        </h1>
        <p class="text-xl text-white/80 max-w-2xl mx-auto">
          用最有趣的方式深入了解 AI 工具生态
        </p>
      </div>

      <!-- Tabs -->
      <div class="max-w-2xl mx-auto mb-8">
        <div class="flex gap-2 justify-center">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            class="px-5 py-2.5 rounded-lg transition-all flex items-center gap-2 cursor-pointer"
            :class="activeTab === tab.id
              ? 'bg-primary text-white shadow-lg shadow-primary/25'
              : 'bg-surface text-white/60 hover:text-white hover:bg-surface/80'"
            @click="activeTab = tab.id"
          >
            <component
              :is="tab.icon"
              class="w-4 h-4"
            />
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- Tab Content -->
      <div class="max-w-2xl mx-auto">
        <QuizGame v-if="activeTab === 'quiz'" />
        <PersonalityQuiz v-else-if="activeTab === 'personality'" />
        <ToolBattle v-else-if="activeTab === 'battle'" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { HelpCircle, User, Swords } from 'lucide-vue-next'
import QuizGame from '../components/interactive/QuizGame.vue'
import PersonalityQuiz from '../components/interactive/PersonalityQuiz.vue'
import ToolBattle from '../components/interactive/ToolBattle.vue'

const activeTab = ref('quiz')

const tabs = [
  { id: 'quiz', label: 'AI 工具竞猜', icon: HelpCircle },
  { id: 'personality', label: '你是哪种 AI 工具？', icon: User },
  { id: 'battle', label: '工具对决', icon: Swords },
]
</script>
