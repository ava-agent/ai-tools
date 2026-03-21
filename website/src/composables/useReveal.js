import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Scroll-triggered reveal composable using IntersectionObserver.
 * Returns a template ref and reactive boolean for CSS class binding.
 *
 * Usage:
 *   const { sectionRef, isRevealed } = useReveal()
 *   <section ref="sectionRef" :class="{ revealed: isRevealed }">
 *     <div class="reveal-item" style="--reveal-i: 0">...</div>
 *     <div class="reveal-item" style="--reveal-i: 1">...</div>
 *   </section>
 */
export function useReveal(options = {}) {
  const sectionRef = ref(null)
  const isRevealed = ref(false)
  let observer = null

  onMounted(() => {
    if (!sectionRef.value) return

    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      isRevealed.value = true
      return
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isRevealed.value = true
          observer.disconnect()
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px 0px -60px 0px',
      },
    )
    observer.observe(sectionRef.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { sectionRef, isRevealed }
}
