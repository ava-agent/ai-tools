<template>
  <div>
    <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
      <MessageSquare class="w-5 h-5 text-primary" />
      社区评论
      <span
        v-if="reviews.length"
        class="text-sm font-normal text-white/40"
      >
        ({{ reviews.length }})
      </span>
    </h3>

    <!-- 写评论 -->
    <div
      v-if="authStore.isAuthenticated"
      class="mb-4"
    >
      <div class="flex items-start gap-3">
        <img
          v-if="authStore.avatarUrl"
          :src="authStore.avatarUrl"
          class="w-8 h-8 rounded-full border border-white/10 flex-shrink-0 mt-1"
        >
        <div class="flex-1">
          <textarea
            v-model="newReviewContent"
            placeholder="分享你的使用体验..."
            rows="3"
            maxlength="2000"
            class="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
          />
          <div class="flex items-center justify-between mt-2">
            <span class="text-xs text-white/30">{{ newReviewContent.length }}/2000</span>
            <button
              class="px-4 py-1.5 text-sm rounded-lg transition-colors"
              :class="
                canSubmit
                  ? 'bg-primary hover:bg-primary/90 text-white cursor-pointer'
                  : 'bg-white/5 text-white/20 cursor-not-allowed'
              "
              :disabled="!canSubmit"
              @click="handleSubmitReview"
            >
              {{ submitting ? '发布中...' : '发布' }}
            </button>
          </div>
          <p
            v-if="submitError"
            class="mt-1 text-xs text-red-400"
          >
            {{ submitError }}
          </p>
        </div>
      </div>
    </div>
    <div
      v-else
      class="mb-4 p-3 rounded-xl bg-white/5 border border-white/10 text-center"
    >
      <button
        class="text-sm text-primary hover:text-primary/80 transition-colors cursor-pointer"
        @click="authStore.openAuthModal"
      >
        登录后发表评论
      </button>
    </div>

    <!-- 评论列表 -->
    <div
      v-if="loading"
      class="text-center py-4 text-white/30 text-sm"
    >
      加载中...
    </div>
    <div
      v-else-if="reviews.length === 0"
      class="text-center py-6 text-white/30 text-sm"
    >
      暂无评论，成为第一个评论者吧
    </div>
    <div
      v-else
      class="space-y-3"
    >
      <div
        v-for="review in reviews"
        :key="review.id"
        class="p-3 rounded-xl bg-white/5 border border-white/5"
      >
        <div class="flex items-center gap-2 mb-2">
          <img
            v-if="review.avatarUrl"
            :src="review.avatarUrl"
            class="w-6 h-6 rounded-full border border-white/10"
          >
          <div
            v-else
            class="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center"
          >
            <span class="text-xs text-white/40">{{ (review.displayName || '?')[0] }}</span>
          </div>
          <span class="text-sm font-medium text-white/70">{{ review.displayName }}</span>
          <span class="text-xs text-white/20">{{ formatDate(review.createdAt) }}</span>
          <button
            v-if="review.userId === authStore.userId"
            class="ml-auto text-xs text-white/20 hover:text-red-400 transition-colors cursor-pointer"
            @click="handleDelete(review.id)"
          >
            删除
          </button>
        </div>
        <p class="text-sm text-white/60 whitespace-pre-wrap">
          {{ review.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { MessageSquare } from 'lucide-vue-next'
import { useAuthStore } from '../stores/auth.js'
import { useCommunityStore } from '../stores/community.js'

const props = defineProps({
  toolId: { type: String, required: true },
})

const authStore = useAuthStore()
const communityStore = useCommunityStore()

const newReviewContent = ref('')
const submitting = ref(false)
const submitError = ref(null)
const loading = ref(true)

const reviews = computed(() => communityStore.reviewCache[props.toolId] || [])
const canSubmit = computed(
  () => newReviewContent.value.trim().length >= 10 && !submitting.value,
)

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return ''
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

async function handleSubmitReview() {
  if (!canSubmit.value || !authStore.userId) return
  submitting.value = true
  submitError.value = null
  const { error } = await communityStore.submitReview(
    authStore.userId,
    props.toolId,
    newReviewContent.value.trim(),
  )
  if (error) {
    submitError.value = typeof error === 'string' ? error : '发布失败，请重试'
  } else {
    newReviewContent.value = ''
  }
  submitting.value = false
}

async function handleDelete(reviewId) {
  await communityStore.deleteReview(reviewId, props.toolId, authStore.userId)
}

onMounted(async () => {
  await communityStore.fetchReviewsForTool(props.toolId)
  loading.value = false
})
</script>
