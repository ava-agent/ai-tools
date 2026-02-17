import { ref, onMounted, onUnmounted } from 'vue'
import { easterEggs, consoleWelcome, consoleStyle } from '../data/easterEggs.js'

/**
 * Easter egg detection composable
 * - Konami Code: keyboard sequence
 * - Console welcome: on mount
 * - Rainbow mode: provided via returned method
 */
export function useEasterEggs() {
  const konamiActivated = ref(false)
  const rainbowMode = ref(false)

  // ── Konami Code Detection ──
  const sequence = easterEggs.konami.sequence
  let keyBuffer = []

  function handleKeyDown(e) {
    keyBuffer.push(e.key)
    // Keep only the last N keys
    if (keyBuffer.length > sequence.length) {
      keyBuffer = keyBuffer.slice(-sequence.length)
    }
    // Check match
    if (keyBuffer.length === sequence.length &&
        keyBuffer.every((k, i) => k === sequence[i])) {
      triggerKonami()
      keyBuffer = []
    }
  }

  function triggerKonami() {
    if (konamiActivated.value) return
    konamiActivated.value = true

    // Create confetti effect
    createConfetti()

    // Reset after 5 seconds
    setTimeout(() => {
      konamiActivated.value = false
    }, 5000)
  }

  function createConfetti() {
    const colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#f59e0b', '#ef4444', '#22c55e']
    const container = document.createElement('div')
    container.style.cssText = 'position:fixed;inset:0;z-index:9999;pointer-events:none;overflow:hidden'
    document.body.appendChild(container)

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div')
      const color = colors[Math.floor(Math.random() * colors.length)]
      const size = Math.random() * 8 + 4
      const left = Math.random() * 100
      const delay = Math.random() * 2
      const duration = Math.random() * 2 + 2

      particle.style.cssText = `
        position:absolute;
        top:-10px;
        left:${left}%;
        width:${size}px;
        height:${size}px;
        background:${color};
        border-radius:${Math.random() > 0.5 ? '50%' : '2px'};
        animation:confetti-fall ${duration}s ease-in ${delay}s forwards;
      `
      container.appendChild(particle)
    }

    // Add animation keyframes
    if (!document.getElementById('confetti-style')) {
      const style = document.createElement('style')
      style.id = 'confetti-style'
      style.textContent = `
        @keyframes confetti-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `
      document.head.appendChild(style)
    }

    // Clean up after animation
    setTimeout(() => {
      container.remove()
    }, 5000)
  }

  // ── Rainbow Mode ──
  function triggerRainbow() {
    rainbowMode.value = true
    document.querySelectorAll('.gradient-text').forEach(el => {
      el.style.transition = 'all 0.5s'
      el.style.backgroundImage = 'linear-gradient(90deg, #ef4444, #f59e0b, #22c55e, #3b82f6, #8b5cf6, #ec4899)'
    })

    setTimeout(() => {
      rainbowMode.value = false
      document.querySelectorAll('.gradient-text').forEach(el => {
        el.style.backgroundImage = ''
      })
    }, easterEggs.tripleClick.duration)
  }

  // ── Check search query for easter eggs ──
  function checkSearchEasterEgg(query) {
    if (query === '42') {
      return easterEggs.search42.response
    }
    return null
  }

  // ── Console welcome ──
  function printConsoleWelcome() {
    console.log(consoleWelcome, consoleStyle)
  }

  // ── Lifecycle ──
  onMounted(() => {
    window.addEventListener('keydown', handleKeyDown)
    printConsoleWelcome()
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown)
  })

  return {
    konamiActivated,
    rainbowMode,
    triggerRainbow,
    checkSearchEasterEgg,
  }
}
