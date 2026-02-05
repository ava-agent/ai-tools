import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUIStore = defineStore('ui', () => {
  const isMobileMenuOpen = ref(false)
  const isDarkMode = ref(true)
  const isLoading = ref(false)

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
    toggleMobileMenu,
    closeMobileMenu,
    toggleDarkMode,
    setLoading
  }
})
