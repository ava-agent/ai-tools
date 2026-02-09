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
    TTFB: null, // Time to First Byte
    FMP: null,  // First Meaningful Paint
    TTI: null   // Time to Interactive
  }

  onMounted(() => {
    // 仅在生产环境监控
    if (import.meta.env.PROD) {
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
    }
  })

  const observeFCP = () => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            metrics.FCP = entry.startTime
            // 可以上报给分析服务
            reportMetric('FCP', entry.startTime)
          }
        })
      })
      observer.observe({ entryTypes: ['paint'] })
      return observer
    }
  }

  const observeLCP = () => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        metrics.LCP = lastEntry.startTime
        reportMetric('LCP', lastEntry.startTime)
      })
      observer.observe({ entryTypes: ['largest-contentful-paint'] })
      return observer
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
        reportMetric('CLS', clsValue)
      })
      observer.observe({ entryTypes: ['layout-shift'] })
      return observer
    }
  }

  const observeFID = () => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          metrics.FID = entry.processingStart - entry.startTime
          reportMetric('FID', metrics.FID)
        })
      })
      observer.observe({ entryTypes: ['first-input'] })
      return observer
    }
  }

  const observeTTFB = () => {
    if (performance && performance.timing) {
      const timing = performance.timing
      metrics.TTFB = timing.responseStart - timing.requestStart
      reportMetric('TTFB', metrics.TTFB)
    }
  }

  /**
   * 上报指标到分析服务
   * 可替换为 Google Analytics、Sentry 等
   */
  const reportMetric = (name, value) => {
    // 开发环境打印到控制台
    if (import.meta.env.DEV) {
      console.log(`[Performance] ${name}:`, value)
    }
    // 生产环境可上报
    if (import.meta.env.PROD && window.gtag) {
      window.gtag('event', name, {
        value: Math.round(value),
        event_category: 'Performance'
      })
    }
  }

  const getMetrics = () => metrics

  return {
    metrics,
    getMetrics
  }
}

/**
 * 虚拟滚动 Composable
 * 用于大量数据的性能优化
 */
export function useVirtualList(options = {}) {
  const {
    itemHeight = 100,
    containerHeight = 600,
    overscan = 5
  } = options

  const scrollTop = ref(0)
  const containerRef = ref(null)

  const visibleRange = computed(() => {
    const start = Math.max(0, Math.floor(scrollTop.value / itemHeight) - overscan)
    const end = Math.min(
      items.value.length,
      Math.ceil((scrollTop.value + containerHeight) / itemHeight) + overscan
    )
    return { start, end }
  })

  const handleScroll = useThrottle((e) => {
    scrollTop.value = e.target.scrollTop
  }, 16) // ~60fps

  return {
    containerRef,
    visibleRange,
    handleScroll
  }
}

/**
 * 图片懒加载 Hook
 * 使用 Intersection Observer API
 */
export function useLazyImage() {
  let observer = null

  onMounted(() => {
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target
            const src = img.dataset.src
            if (src) {
              // 加载图片
              img.src = src
              img.classList.remove('lazy')
              // 添加淡入动画
              img.classList.add('fade-in')
              observer.unobserve(img)
            }
          }
        })
      }, {
        rootMargin: '50px 0px', // 提前50px开始加载
        threshold: 0.01
      })

      // 观察所有懒加载图片
      requestAnimationFrame(() => {
        document.querySelectorAll('img[data-src]').forEach((img) => {
          observer.observe(img)
        })
      })
    }
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return { observer }
}

/**
 * 防抖函数 Hook
 * 延迟执行函数，适用于搜索、resize 等场景
 */
export function useDebounce() {
  let timeoutId = null

  return (fn, delay = 300) => {
    return (...args) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => fn(...args), delay)
    }
  }
}

/**
 * 节流函数 Hook
 * 限制函数执行频率，适用于 scroll、mousemove 等场景
 */
export function useThrottle() {
  let inThrottle = false

  return (fn, limit = 100) => {
    return (...args) => {
      if (!inThrottle) {
        fn(...args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  }
}

/**
 * 资源预加载 Hook
 * 预加载关键资源以提升性能
 */
export function useResourcePreload() {
  const preloadImage = (src) => {
    if (typeof document !== 'undefined') {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    }
  }

  const preloadScript = (src) => {
    if (typeof document !== 'undefined') {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'script'
      link.href = src
      document.head.appendChild(link)
    }
  }

  const prefetchDNS = (href) => {
    if (typeof document !== 'undefined') {
      const link = document.createElement('link')
      link.rel = 'dns-prefetch'
      link.href = href
      document.head.appendChild(link)
    }
  }

  return {
    preloadImage,
    preloadScript,
    prefetchDNS
  }
}

/**
 * 内存泄漏防护 Hook
 * 自动清理定时器和事件监听器
 */
export function useCleanup() {
  const timers = new Set()
  const eventListeners = new Map()

  onUnmounted(() => {
    // 清理所有定时器
    timers.forEach(timer => clearTimeout(timer))
    timers.clear()

    // 清理所有事件监听器
    eventListeners.forEach((listener, element) => {
      element.removeEventListener(...listener)
    })
    eventListeners.clear()
  })

  return {
    setTimeout: (callback, delay) => {
      const timer = setTimeout(() => {
        callback()
        timers.delete(timer)
      }, delay)
      timers.add(timer)
      return timer
    },
    addEventListener: (element, event, handler, options) => {
      element.addEventListener(event, handler, options)
      eventListeners.set(element, [event, handler, options])
    }
  }
}

/**
 * 请求空闲回调 Hook
 * 在浏览器空闲时执行低优先级任务
 */
export function useIdleCallback() {
  const requestIdleCallback = (callback, options) => {
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      return window.requestIdleCallback(callback, options)
    }
    // 降级到 setTimeout
    return setTimeout(callback, 1)
  }

  const cancelIdleCallback = (id) => {
    if (typeof window !== 'undefined' && 'cancelIdleCallback' in window) {
      window.cancelIdleCallback(id)
    } else {
      clearTimeout(id)
    }
  }

  return { requestIdleCallback, cancelIdleCallback }
}
