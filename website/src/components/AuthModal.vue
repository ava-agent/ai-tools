<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="authStore.showAuthModal"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4"
        @click.self="authStore.closeAuthModal"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <!-- Modal -->
        <div
          class="relative w-full max-w-sm bg-surface border border-white/10 rounded-2xl shadow-2xl p-6"
        >
          <!-- Close button -->
          <button
            class="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            @click="authStore.closeAuthModal"
          >
            <X class="w-5 h-5" />
          </button>

          <!-- Header -->
          <div class="text-center mb-6">
            <div
              class="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center"
            >
              <LogIn class="w-6 h-6 text-primary" />
            </div>
            <h2 class="text-xl font-bold text-white">
              {{ isSignUp ? '创建账户' : '登录' }}
            </h2>
            <p class="text-sm text-white/50 mt-1">
              登录后可同步进度、参与社区互动
            </p>
          </div>

          <!-- GitHub OAuth -->
          <button
            class="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-medium transition-all duration-200"
            :disabled="isLoading"
            @click="handleGitHubLogin"
          >
            <Github class="w-5 h-5" />
            使用 GitHub 登录
          </button>

          <!-- Divider -->
          <div class="flex items-center gap-3 my-5">
            <div class="flex-1 border-t border-white/10" />
            <span class="text-xs text-white/30">或</span>
            <div class="flex-1 border-t border-white/10" />
          </div>

          <!-- Email form -->
          <form
            class="space-y-3"
            @submit.prevent="handleEmailSubmit"
          >
            <input
              v-model="email"
              type="email"
              placeholder="邮箱"
              required
              :disabled="isLoading"
              class="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors text-sm"
            >
            <input
              v-model="password"
              type="password"
              placeholder="密码"
              required
              minlength="6"
              :disabled="isLoading"
              class="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors text-sm"
            >
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full px-4 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium transition-colors text-sm disabled:opacity-50"
            >
              {{ isLoading ? '处理中...' : (isSignUp ? '注册' : '登录') }}
            </button>
          </form>

          <!-- Error message -->
          <p
            v-if="authStore.error"
            class="mt-3 text-xs text-red-400 text-center"
          >
            {{ authStore.error }}
          </p>

          <!-- Toggle sign up / sign in -->
          <p class="mt-4 text-center text-xs text-white/40">
            {{ isSignUp ? '已有账户？' : '没有账户？' }}
            <button
              class="text-primary hover:text-primary/80 transition-colors"
              @click="isSignUp = !isSignUp"
            >
              {{ isSignUp ? '去登录' : '注册' }}
            </button>
          </p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch } from 'vue'
import { X, LogIn, Github } from 'lucide-vue-next'
import { useAuthStore } from '../stores/auth.js'

const authStore = useAuthStore()

const isSignUp = ref(false)
const email = ref('')
const password = ref('')
const isLoading = ref(false)

// Clear form when modal closes
watch(
  () => authStore.showAuthModal,
  (isOpen) => {
    if (!isOpen) {
      email.value = ''
      password.value = ''
      isSignUp.value = false
      isLoading.value = false
    }
  },
)

// Auto-close on successful login
watch(
  () => authStore.isAuthenticated,
  (isAuth) => {
    if (isAuth && authStore.showAuthModal) {
      authStore.closeAuthModal()
    }
  },
)

function handleGitHubLogin() {
  authStore.signInWithGitHub()
}

async function handleEmailSubmit() {
  isLoading.value = true
  if (isSignUp.value) {
    await authStore.signUpWithEmail(email.value, password.value)
  } else {
    await authStore.signInWithEmail(email.value, password.value)
  }
  isLoading.value = false
  // Close on success (no error set)
  if (!authStore.error) {
    authStore.closeAuthModal()
  }
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
