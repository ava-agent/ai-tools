<template>
  <div class="min-h-screen bg-background">
    <div class="max-w-[960px] mx-auto px-5 py-6">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1
          class="text-[28px] font-bold text-white mb-4"
        >
          趣味竞猜
        </h1>
        <p class="text-xl text-white/80 max-w-2xl mx-auto">
          用最有趣的方式深入了解 AI 工具生态
        </p>
      </div>

      <!-- Tabs -->
      <div class="max-w-2xl mx-auto mb-8">
        <div
          class="flex flex-wrap gap-2 justify-center"
          role="tablist"
          aria-label="趣味竞猜模式"
        >
          <button
            v-for="tab in tabs"
            :key="tab.id"
            class="min-h-11 px-5 py-2.5 rounded-full transition-all flex items-center gap-2 cursor-pointer text-sm font-medium"
            role="tab"
            :aria-selected="activeTab === tab.id"
            :class="activeTab === tab.id
              ? 'bg-[#0a84ff] text-white shadow-lg shadow-[#0a84ff]/25'
              : 'bg-white/[0.04] text-white/60 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'"
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
import { defineAsyncComponent, ref } from 'vue'
import { HelpCircle, User, Swords } from 'lucide-vue-next'

const QuizGame = defineAsyncComponent(() => import('../components/interactive/QuizGame.vue'))
const PersonalityQuiz = defineAsyncComponent(() => import('../components/interactive/PersonalityQuiz.vue'))
const ToolBattle = defineAsyncComponent(() => import('../components/interactive/ToolBattle.vue'))

const activeTab = ref('quiz')

const tabs = [
  { id: 'quiz', label: 'AI 工具竞猜', icon: HelpCircle },
  { id: 'personality', label: '你是哪种 AI 工具？', icon: User },
  { id: 'battle', label: '工具对决', icon: Swords },
]
</script>
