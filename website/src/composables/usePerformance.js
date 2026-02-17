import { onMounted } from 'vue'

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
  }

  onMounted(() => {
    // 仅在生产环境监控
    if (import.meta.env.PROD) {
      observeFCP()
      observeLCP()
      observeCLS()
      observeFID()
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
    // Use Navigation Timing Level 2 API (performance.timing is deprecated)
    if ('PerformanceObserver' in window) {
      try {
        const [nav] = performance.getEntriesByType('navigation')
        if (nav) {
          metrics.TTFB = nav.responseStart - nav.requestStart
          reportMetric('TTFB', metrics.TTFB)
        }
      } catch {
        // Navigation Timing not supported
      }
    }
  }

  /**
   * 上报指标到分析服务
   */
  const reportMetric = (name, value) => {
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
