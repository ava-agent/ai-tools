<template>
  <div class="flex items-center gap-4">
    <!-- 社区平均分 -->
    <div
      v-if="stats"
      class="flex items-center gap-2"
    >
      <div class="flex items-center gap-0.5">
        <Star
          v-for="i in 5"
          :key="i"
          class="w-4 h-4"
          :class="i <= Math.round(stats.avgRating) ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'"
        />
      </div>
      <span class="text-sm text-white/60">
        {{ stats.avgRating }} <span class="text-white/30">({{ stats.ratingCount }})</span>
      </span>
    </div>

    <!-- 分隔线 -->
    <div
      v-if="stats && authStore.isAuthenticated"
      class="w-px h-4 bg-white/10"
    />

    <!-- 用户评分 -->
    <div
      v-if="authStore.isAuthenticated"
      class="flex items-center gap-2"
    >
      <span class="text-xs text-white/40">我的评分:</span>
      <div class="flex items-center gap-0.5">
        <button
          v-for="i in 5"
          :key="i"
          class="cursor-pointer transition-transform hover:scale-125"
          @click="handleRate(i)"
          @mouseenter="hoverRating = i"
          @mouseleave="hoverRating = 0"
        >
          <Star
            class="w-4 h-4"
            :class="i <= displayRating ? 'text-primary fill-primary' : 'text-white/20'"
          />
        </button>
      </div>
    </div>

    <!-- 未登录提示 -->
    <button
      v-if="!authStore.isAuthenticated"
      class="text-xs text-white/30 hover:text-primary transition-colors cursor-pointer"
      @click="authStore.openAuthModal"
    >
      登录后评分
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Star } from 'lucide-vue-next'
import { useAuthStore } from '../stores/auth.js'
import { useCommunityStore } from '../stores/community.js'

const props = defineProps({
  toolId: { type: String, required: true },
})

const authStore = useAuthStore()
const communityStore = useCommunityStore()

const hoverRating = ref(0)
const submitting = ref(false)

const stats = computed(() => communityStore.ratingStats[props.toolId] || null)
const myRating = computed(() => communityStore.myRatings[props.toolId] || 0)
const displayRating = computed(() => hoverRating.value || myRating.value)

async function handleRate(rating) {
  if (!authStore.userId || submitting.value) return
  submitting.value = true
  const error = await communityStore.submitRating(authStore.userId, props.toolId, rating)
  submitting.value = false
  if (error) {
    console.error('[ToolRating] Failed to submit rating:', error.message)
  }
}
</script>
