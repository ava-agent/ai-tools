<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="authStore.showAuthModal"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4"
        @click.self="authStore.closeAuthModal"
        @keydown="handleModalKeydown"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <!-- Modal -->
        <div
          ref="modalRef"
          class="relative max-h-[calc(100dvh-2rem)] w-full max-w-sm overflow-y-auto glass-elevated rounded-2xl shadow-2xl p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="auth-modal-title"
        >
          <!-- Close button -->
          <button
            ref="closeButtonRef"
            type="button"
            data-testid="auth-modal-close"
            class="absolute top-3 right-3 min-h-11 min-w-11 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            aria-label="关闭登录弹窗"
            @click="authStore.closeAuthModal"
          >
            <X
              class="w-5 h-5"
              aria-hidden="true"
            />
          </button>

          <!-- Header -->
          <div class="text-center mb-6">
            <div
              class="w-12 h-12 mx-auto mb-3 rounded-full bg-[#0a84ff]/20 flex items-center justify-center"
            >
              <LogIn class="w-6 h-6 text-[#0a84ff]" />
            </div>
            <h2
              id="auth-modal-title"
              class="text-xl font-bold text-white"
            >
              {{ isSignUp ? '创建账户' : '登录' }}
            </h2>
            <p class="text-sm text-white/50 mt-1">
              登录后可同步进度、参与社区互动
            </p>
          </div>

          <!-- GitHub OAuth -->
          <button
            type="button"
            data-testid="auth-modal-github"
            class="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-full bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.06] text-white font-medium transition-all duration-200 cursor-pointer"
            :disabled="isLoading"
            @click="handleGitHubLogin"
          >
            <Github class="w-5 h-5" />
            使用 GitHub 登录
          </button>

          <!-- Divider -->
          <div class="flex items-center gap-3 my-5">
            <div class="flex-1 border-t border-white/[0.06]" />
            <span class="text-xs text-white/30">或</span>
            <div class="flex-1 border-t border-white/[0.06]" />
          </div>

          <!-- Email form -->
          <form
            class="space-y-3"
            @submit.prevent="handleEmailSubmit"
          >
            <input
              v-model="email"
              type="email"
              data-testid="auth-modal-email"
              aria-label="邮箱"
              placeholder="邮箱"
              required
              :disabled="isLoading"
              class="input-field"
            >
            <input
              v-model="password"
              type="password"
              data-testid="auth-modal-password"
              aria-label="密码"
              placeholder="密码"
              required
              minlength="6"
              :disabled="isLoading"
              class="input-field"
            >
            <button
              type="submit"
              data-testid="auth-modal-submit"
              :disabled="isLoading"
              :aria-busy="isLoading ? 'true' : 'false'"
              class="btn-capsule w-full disabled:opacity-50"
            >
              {{ isLoading ? '处理中...' : (isSignUp ? '注册' : '登录') }}
            </button>
          </form>

          <!-- Success message (for sign-up email confirmation) -->
          <p
            v-if="successMessage"
            data-testid="auth-modal-success"
            role="status"
            aria-live="polite"
            class="mt-3 text-xs text-[#30d158] text-center"
          >
            {{ successMessage }}
          </p>

          <!-- Error message -->
          <p
            v-if="authStore.error"
            data-testid="auth-modal-error"
            role="alert"
            aria-live="assertive"
            class="mt-3 text-xs text-[#ff453a] text-center"
          >
            {{ authStore.error }}
          </p>

          <!-- Toggle sign up / sign in -->
          <p class="mt-4 text-center text-xs text-white/40">
            {{ isSignUp ? '已有账户？' : '没有账户？' }}
            <button
              type="button"
              data-testid="auth-modal-toggle"
              class="inline-flex min-h-11 items-center px-2 text-[#0a84ff] hover:text-[#0a84ff]/80 transition-colors"
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
import { nextTick, ref, watch } from 'vue'
import { X, LogIn, Github } from 'lucide-vue-next'
import { useAuthStore } from '../stores/auth.js'

const authStore = useAuthStore()

const isSignUp = ref(false)
const email = ref('')
const password = ref('')
const isLoading = ref(false)
const successMessage = ref('')
const modalRef = ref(null)
const closeButtonRef = ref(null)
let previouslyFocusedElement = null

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

function getFocusableElements() {
  if (!modalRef.value) return []
  return Array.from(modalRef.value.querySelectorAll(focusableSelector)).filter((element) => {
    return !element.hasAttribute('disabled') && element.tabIndex !== -1
  })
}

function focusInitialElement() {
  const firstFocusable = closeButtonRef.value || getFocusableElements()[0]
  firstFocusable?.focus()
}

function restorePreviousFocus() {
  const target = previouslyFocusedElement
  previouslyFocusedElement = null
  if (target && document.contains(target) && typeof target.focus === 'function') {
    target.focus()
  }
}

// Clear form when modal closes
watch(
  () => authStore.showAuthModal,
  (isOpen) => {
    if (isOpen) {
      previouslyFocusedElement = document.activeElement
      nextTick(focusInitialElement)
      return
    }

    if (!isOpen) {
      email.value = ''
      password.value = ''
      isSignUp.value = false
      isLoading.value = false
      successMessage.value = ''
      nextTick(restorePreviousFocus)
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

function handleModalKeydown(event) {
  if (event.key === 'Escape') {
    authStore.closeAuthModal()
    return
  }

  if (event.key !== 'Tab') return

  const focusableElements = getFocusableElements()
  if (!focusableElements.length) {
    event.preventDefault()
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

async function handleEmailSubmit() {
  isLoading.value = true
  successMessage.value = ''
  if (isSignUp.value) {
    await authStore.signUpWithEmail(email.value, password.value)
    // For sign-up, show success message (user may need to confirm email)
    if (!authStore.error) {
      successMessage.value = '注册成功！请查收邮件确认账户'
      email.value = ''
      password.value = ''
      isSignUp.value = false // Switch to login mode
    }
  } else {
    await authStore.signInWithEmail(email.value, password.value)
    // For sign-in, the watch on isAuthenticated will close the modal
  }
  isLoading.value = false
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
