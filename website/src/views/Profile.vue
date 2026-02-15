<template>
  <div class="min-h-screen bg-background">
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-3xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            我的档案
          </h1>
          <p class="text-xl text-white/80">
            你的 AI 工具学习之旅
          </p>
        </div>

        <!-- Level Card -->
        <div class="card mb-6">
          <div class="flex items-center gap-6 mb-6">
            <LevelBadge size="lg" />
            <div class="flex-1">
              <p class="text-2xl font-bold text-white">
                {{ gamification.levelTitle }}
              </p>
              <p class="text-white/50">
                {{ gamification.xp }} XP 总经验
              </p>
            </div>
            <div class="text-right">
              <div class="flex items-center gap-2">
                <Flame class="w-6 h-6 text-orange-400" />
                <span class="text-3xl font-bold text-orange-400">
                  {{ gamification.streak.current }}
                </span>
              </div>
              <p class="text-white/40 text-sm">
                连续打卡
              </p>
            </div>
          </div>
          <XpBar />
        </div>

        <!-- 打卡日历 (最近30天) -->
        <div class="card mb-6">
          <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Calendar class="w-5 h-5 text-primary" />
            打卡日历
          </h3>
          <div class="grid grid-cols-7 gap-1.5">
            <div
              v-for="day in calendarDays"
              :key="day.date"
              class="aspect-square rounded-md flex items-center justify-center text-xs transition-colors"
              :class="day.visited
                ? 'bg-primary/30 text-primary border border-primary/40'
                : day.future
                  ? 'bg-white/3 text-white/15'
                  : 'bg-white/5 text-white/30'"
              :title="day.date"
            >
              {{ day.dayNum }}
            </div>
          </div>
          <div class="flex items-center justify-between mt-3 text-xs text-white/40">
            <span>{{ calendarStartLabel }}</span>
            <span>今天</span>
          </div>
        </div>

        <!-- 统计仪表板 -->
        <div class="card mb-6">
          <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <BarChart3 class="w-5 h-5 text-primary" />
            学习统计
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div
              v-for="stat in statItems"
              :key="stat.label"
              class="text-center p-4 rounded-xl bg-white/5 border border-white/5"
            >
              <component
                :is="stat.icon"
                class="w-6 h-6 mx-auto mb-2"
                :class="stat.color"
              />
              <p class="text-2xl font-bold text-white">
                {{ stat.value }}
              </p>
              <p class="text-xs text-white/40 mt-1">
                {{ stat.label }}
              </p>
            </div>
          </div>
        </div>

        <!-- 人格测试结果 -->
        <div
          v-if="gamification.stats.personalityResult"
          class="card mb-6"
        >
          <h3 class="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <User class="w-5 h-5 text-purple-400" />
            我的 AI 人格
          </h3>
          <p class="text-white/60">
            你的 AI 人格类型: <strong class="text-purple-400">{{ gamification.stats.personalityResult }}</strong>
          </p>
          <router-link
            to="/quiz"
            class="text-sm text-primary hover:text-primary/80 mt-2 inline-block"
          >
            重新测试
          </router-link>
        </div>

        <!-- 成就 -->
        <div class="card mb-6">
          <AchievementGrid />
        </div>

        <!-- 重置进度 -->
        <div class="text-center">
          <button
            class="text-sm text-white/30 hover:text-red-400 transition-colors cursor-pointer"
            @click="confirmReset"
          >
            重置所有进度
          </button>
        </div>

        <!-- Reset Confirmation Modal -->
        <teleport to="body">
          <transition
            enter-active-class="transition-opacity duration-200"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div
              v-if="showResetConfirm"
              class="fixed inset-0 bg-black/60 z-[80] flex items-center justify-center p-4 backdrop-blur-sm"
              @click.self="showResetConfirm = false"
            >
              <div class="bg-surface rounded-2xl p-6 max-w-sm w-full border border-white/10">
                <h3 class="text-lg font-bold text-white mb-2">
                  确认重置？
                </h3>
                <p class="text-white/60 text-sm mb-6">
                  此操作将清除所有 XP、等级、打卡记录和成就。此操作不可撤销。
                </p>
                <div class="flex gap-3">
                  <button
                    class="flex-1 py-2 rounded-lg bg-white/5 text-white/60 hover:bg-white/10 transition-colors cursor-pointer"
                    @click="showResetConfirm = false"
                  >
                    取消
                  </button>
                  <button
                    class="flex-1 py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors cursor-pointer"
                    @click="doReset"
                  >
                    确认重置
                  </button>
                </div>
              </div>
            </div>
          </transition>
        </teleport>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  Flame, Calendar, BarChart3, Eye, HelpCircle,
  Swords, Target, GitCompare, User, Trophy
} from 'lucide-vue-next'
import { useGamificationStore } from '../stores/gamification.js'
import { useAchievementsStore } from '../stores/achievements.js'
import LevelBadge from '../components/gamification/LevelBadge.vue'
import XpBar from '../components/gamification/XpBar.vue'
import AchievementGrid from '../components/gamification/AchievementGrid.vue'

const gamification = useGamificationStore()
const achievements = useAchievementsStore()

const showResetConfirm = ref(false)

// Calendar: last 28 days (4 weeks, fits 7-col grid)
const calendarDays = computed(() => {
  const days = []
  const today = new Date()
  const visitDates = gamification.stats.visitDates || []

  for (let i = 27; i >= 0; i--) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    const dateStr = d.toISOString().slice(0, 10)
    days.push({
      date: dateStr,
      dayNum: d.getDate(),
      visited: visitDates.includes(dateStr),
      future: false,
    })
  }
  return days
})

const calendarStartLabel = computed(() => {
  if (calendarDays.value.length === 0) return ''
  return calendarDays.value[0].date
})

const statItems = computed(() => [
  { label: '已探索工具', value: gamification.stats.toolsViewed.length, icon: Eye, color: 'text-blue-400' },
  { label: '竞猜次数', value: gamification.stats.quizzesCompleted, icon: HelpCircle, color: 'text-purple-400' },
  { label: '最佳成绩', value: `${gamification.stats.quizBestScore}/10`, icon: Trophy, color: 'text-yellow-400' },
  { label: '对决投票', value: gamification.stats.battlesVoted, icon: Swords, color: 'text-red-400' },
  { label: '工具匹配', value: gamification.stats.matcherCompleted, icon: Target, color: 'text-green-400' },
  { label: '最长连续', value: `${gamification.streak.longest} 天`, icon: Flame, color: 'text-orange-400' },
])

function confirmReset() {
  showResetConfirm.value = true
}

function doReset() {
  gamification.resetAll()
  achievements.resetAll()
  showResetConfirm.value = false
}
</script>
