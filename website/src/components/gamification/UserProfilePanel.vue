<template>
  <teleport to="body">
    <!-- Backdrop -->
    <transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
        @click="requestClose"
      />
    </transition>

    <!-- Panel -->
    <transition
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-200 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div
        v-if="isOpen"
        ref="panelRef"
        role="dialog"
        aria-modal="true"
        aria-label="我的档案"
        tabindex="-1"
        class="fixed top-0 right-0 h-full w-full max-w-md z-[70] overflow-y-auto glass-elevated border-l border-white/[0.06]"
        @keydown="handlePanelKeydown"
      >
        <div class="p-6">
          <!-- Header -->
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-bold text-white">
              我的档案
            </h2>
            <button
              ref="closeButtonRef"
              type="button"
              class="flex min-h-11 min-w-11 items-center justify-center rounded-lg hover:bg-white/[0.04] text-white/60 hover:text-white transition-colors cursor-pointer"
              aria-label="关闭我的档案"
              data-testid="user-profile-close"
              @click="requestClose"
            >
              <X
                class="w-5 h-5"
                aria-hidden="true"
              />
            </button>
          </div>

          <!-- Level & XP -->
          <div class="glass-card mb-4">
            <div class="flex items-center gap-4 mb-4">
              <LevelBadge size="lg" />
              <div class="flex-1">
                <p class="text-white font-bold text-lg">
                  {{ gamification.levelTitle }}
                </p>
                <p class="text-white/50 text-sm">
                  {{ gamification.xp }} XP
                </p>
              </div>
            </div>
            <XpBar />
          </div>

          <!-- Streak -->
          <div class="glass-card mb-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <Flame class="w-5 h-5 text-orange-400" />
                <span class="text-white font-medium">连续打卡</span>
              </div>
              <div class="text-right">
                <span class="text-2xl font-bold text-orange-400">
                  {{ gamification.streak.current }}
                </span>
                <span class="text-white/40 text-sm ml-1">天</span>
              </div>
            </div>
            <p class="text-white/40 text-xs mt-2">
              最长: {{ gamification.streak.longest }} 天
            </p>
          </div>

          <!-- Stats -->
          <div class="glass-card mb-4">
            <h3 class="text-sm font-medium text-white/50 uppercase tracking-wider mb-3">
              统计
            </h3>
            <div class="grid grid-cols-2 gap-3">
              <div
                v-for="stat in statItems"
                :key="stat.label"
                class="flex items-center gap-2"
              >
                <component
                  :is="stat.icon"
                  class="w-4 h-4"
                  :class="stat.color"
                />
                <div>
                  <p class="text-white font-medium text-sm">
                    {{ stat.value }}
                  </p>
                  <p class="text-white/40 text-xs">
                    {{ stat.label }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Achievements -->
          <div class="glass-card mb-4">
            <AchievementGrid />
          </div>

          <!-- Full Profile Link -->
          <router-link
            to="/profile"
            data-testid="user-profile-full-link"
            class="block w-full text-center py-3 rounded-xl bg-[#0a84ff]/10 text-[#0a84ff] hover:bg-[#0a84ff]/20 transition-colors text-sm font-medium"
            @click="requestClose"
          >
            查看完整档案
          </router-link>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { computed, onBeforeUnmount, ref, watch, nextTick } from 'vue'
import { X, Flame, Eye, HelpCircle, Swords, Target, GitCompare } from 'lucide-vue-next'
import { useGamificationStore } from '../../stores/gamification.js'
import LevelBadge from './LevelBadge.vue'
import XpBar from './XpBar.vue'
import AchievementGrid from './AchievementGrid.vue'

const props = defineProps({
  isOpen: { type: Boolean, default: false },
})
const emit = defineEmits(['close'])

const panelRef = ref(null)
const closeButtonRef = ref(null)
let previouslyFocusedElement = null
let previousBodyOverflow = ''

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

function getFocusableElements() {
  if (!panelRef.value) return []
  return Array.from(panelRef.value.querySelectorAll(focusableSelector)).filter((element) => {
    return !element.hasAttribute('disabled') && element.tabIndex !== -1
  })
}

function focusInitialElement() {
  const firstFocusable = closeButtonRef.value || getFocusableElements()[0] || panelRef.value
  firstFocusable?.focus()
}

function restorePreviousFocus() {
  const target = previouslyFocusedElement
  previouslyFocusedElement = null
  if (target && document.contains(target) && typeof target.focus === 'function') {
    target.focus()
  }
}

function requestClose() {
  emit('close')
}

function lockBodyScroll() {
  previousBodyOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
}

function unlockBodyScroll() {
  document.body.style.overflow = previousBodyOverflow
  previousBodyOverflow = ''
}

function handlePanelKeydown(event) {
  if (event.key === 'Escape') {
    requestClose()
    return
  }

  if (event.key !== 'Tab') return

  const focusableElements = getFocusableElements()
  if (!focusableElements.length) {
    event.preventDefault()
    panelRef.value?.focus()
    return
  }

  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault()
    lastElement.focus()
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault()
    firstElement.focus()
  }
}

// Auto-focus panel when opened for keyboard accessibility
watch(() => props.isOpen, async (open) => {
  if (open) {
    previouslyFocusedElement = document.activeElement
    lockBodyScroll()
    await nextTick()
    focusInitialElement()
    return
  }

  unlockBodyScroll()
  await nextTick()
  restorePreviousFocus()
})

onBeforeUnmount(() => {
  if (props.isOpen) {
    unlockBodyScroll()
    restorePreviousFocus()
  }
})

const gamification = useGamificationStore()

const statItems = computed(() => [
  { label: '已查看工具', value: gamification.stats.toolsViewed.length, icon: Eye, color: 'text-blue-400' },
  { label: '竞猜次数', value: gamification.stats.quizzesCompleted, icon: HelpCircle, color: 'text-purple-400' },
  { label: '对决投票', value: gamification.stats.battlesVoted, icon: Swords, color: 'text-red-400' },
  { label: '工具匹配', value: gamification.stats.matcherCompleted, icon: Target, color: 'text-green-400' },
  { label: '对比使用', value: gamification.stats.comparisonsUsed, icon: GitCompare, color: 'text-yellow-400' },
  { label: '最佳成绩', value: `${gamification.stats.quizBestScore}/10`, icon: HelpCircle, color: 'text-cyan-400' },
])
</script>
