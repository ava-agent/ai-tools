import { onMounted, onUnmounted } from 'vue'

/**
 * 性能监控 Composable
 * 监控 Web Vitals 指标
 */
export function usePerformance() {
  const metrics = {
    FCP: null,  // First Contentful Paint
    LCP: null,  // Largest Contentful Paint
    FID: null,  // First Input Delay
    CLS: null,  // Cumulative Layout Shift
    TTFB: null  // Time to First Byte
  }

  onMounted(() => {
    // 监控 FCP
    observeFCP()
    
    // 监控 LCP
    observeLCP()
    
    // 监控 CLS
    observeCLS()
    
    // 监控 FID
    observeFID()
    
    // 监控 TTFB
    observeTTFB()
  })

  const observeFCP = () => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            metrics.FCP = entry.startTime
            console.log('FCP:', entry.startTime)
          }
        })
      })
      observer.observe({ entryTypes: ['paint'] })
    }
  }

  const observeLCP = () => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        metrics.LCP = lastEntry.startTime
        console.log('LCP:', lastEntry.startTime)
      })
      observer.observe({ entryTypes: ['largest-contentful-paint'] })
    }
  }

  const observeCLS = () => {
    if ('PerformanceObserver' in window) {
      let clsValue = 0
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        })
        metrics.CLS = clsValue
        console.log('CLS:', clsValue)
      })
      observer.observe({ entryTypes: ['layout-shift'] })
    }
  }

  const observeFID = () => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          metrics.FID = entry.processingStart - entry.startTime
          console.log('FID:', metrics.FID)
        })
      })
      observer.observe({ entryTypes: ['first-input'] })
    }
  }

  const observeTTFB = () => {
    if (performance && performance.timing) {
      const timing = performance.timing
      metrics.TTFB = timing.responseStart - timing.requestStart
      console.log('TTFB:', metrics.TTFB)
    }
  }

  const getMetrics = () => metrics

  return {
    metrics,
    getMetrics
  }
}

/**
 * 图片懒加载
 */
export function useLazyImage() {
  let observer = null

  onMounted(() => {
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target
            img.src = img.dataset.src
            img.classList.remove('lazy')
            observer.unobserve(img)
          }
        })
      })

      // 观察所有懒加载图片
      document.querySelectorAll('img[data-src]').forEach((img) => {
        observer.observe(img)
      })
    }
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
}

/**
 * 防抖函数
 */
export function useDebounce(fn, delay = 300) {
  let timeoutId
  
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

/**
 * 节流函数
 */
export function useThrottle(fn, limit = 300) {
  let inThrottle
  
  return (...args) => {
    if (!inThrottle) {
      fn(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}
