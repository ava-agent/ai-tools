import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUIStore = defineStore('ui', () => {
  const isMobileMenuOpen = ref(false)
  const isDarkMode = ref(true)
  const isLoading = ref(false)

  // Toast 通知系统
  const toasts = ref([])
  let toastIdCounter = 0

  function showToast(message, type = 'success', duration = 3000) {
    const id = ++toastIdCounter
    toasts.value = [...toasts.value, { id, message, type }]
    setTimeout(() => {
      toasts.value = toasts.value.filter(t => t.id !== id)
    }, duration)
  }

  function removeToast(id) {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }

  function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  function closeMobileMenu() {
    isMobileMenuOpen.value = false
  }

  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  function setLoading(loading) {
    isLoading.value = loading
  }

  return {
    isMobileMenuOpen,
    isDarkMode,
    isLoading,
    toasts,
    toggleMobileMenu,
    closeMobileMenu,
    toggleDarkMode,
    setLoading,
    showToast,
    removeToast
  }
})
