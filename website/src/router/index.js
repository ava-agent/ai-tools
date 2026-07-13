import { createRouter, createWebHistory } from 'vue-router'
import { installChunkRecovery } from './chunkRecovery.js'

const defaultTitle = 'AI工具全书 | 持续核验的实战选型指南'
const productionOrigin = 'https://aitools.rxcloud.group'

function resolveRouteTitle(to) {
  return to.meta.title || defaultTitle
}

export function getCanonicalUrl(path, origin = productionOrigin) {
  const normalizedPath = `/${String(path || '/').replace(/^\/+/, '')}`
  return new URL(normalizedPath, origin).href
}

export function getLegacyHistoryTarget(hash, baseUrl = import.meta.env.BASE_URL) {
  if (!String(hash || '').startsWith('#/')) return null
  const normalizedBase = String(baseUrl || '/').replace(/^\/+|\/+$/g, '')
  const legacyPath = String(hash).slice(2)
  return normalizedBase ? `/${normalizedBase}/${legacyPath}` : `/${legacyPath}`
}

const legacyHistoryTarget = getLegacyHistoryTarget(window.location.hash)
if (legacyHistoryTarget) {
  window.history.replaceState(window.history.state, '', legacyHistoryTarget)
}

function updateRouteMetadata(to) {
  document.title = resolveRouteTitle(to)

  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription && to.meta.description) {
    metaDescription.setAttribute('content', to.meta.description)
  }

  const canonicalUrl = getCanonicalUrl(to.path)
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl)
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)
  document.querySelector('meta[property="twitter:url"]')?.setAttribute('content', canonicalUrl)
  document.querySelector('meta[name="robots"]')?.setAttribute(
    'content',
    to.meta.robots || 'index, follow'
  )
}

// 路由级代码分割 - Vue Router 原生懒加载（不要使用 defineAsyncComponent）
const routes = [
  {
    path: '/',
    name: 'landing',
    component: () => import('../views/Landing.vue'),
    meta: {
      title: 'AI工具全书 | 持续核验的实战选型指南',
      description: '按场景、预算和核验状态筛选 AI 工具的决策指南'
    }
  },
  {
    path: '/tools',
    name: 'tools',
    component: () => import('../views/Home.vue'),
    meta: {
      title: '全景浏览 - AI工具全书',
      description: '125 款 AI 工具分类浏览与搜索'
    }
  },
  {
    path: '/tools/:id',
    name: 'tool-detail',
    component: () => import('../views/ToolDetail.vue'),
    props: route => ({ id: route.params.id }),
    meta: {
      title: '工具详情 - AI工具全书',
      description: '查看AI工具的详细评测、SWOT分析和使用建议'
    }
  },
  {
    path: '/tool/:id',
    redirect: (to) => ({ name: 'tool-detail', params: { id: to.params.id } })
  },
  {
    path: '/comparison',
    name: 'comparison',
    component: () => import('../views/Comparison.vue'),
    meta: {
      title: '工具对比 - AI工具全书',
      description: '横向对比主流AI开发工具的核心特性'
    }
  },
  {
    path: '/matcher',
    name: 'matcher',
    component: () => import('../views/Matcher.vue'),
    meta: {
      title: '工具匹配器 - AI工具全书',
      description: '根据需求推荐最合适的AI工具组合'
    }
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: () => import('../views/Pricing.vue'),
    meta: {
      title: '订阅指南 - AI工具全书',
      description: 'AI工具订阅定价与分层使用策略，帮您把每一分钱都花在刀刃上'
    }
  },
  {
    path: '/workflows',
    name: 'workflows',
    component: () => import('../views/Workflows.vue'),
    meta: {
      title: '工作流最佳实践 - AI工具全书',
      description: '基于真实项目经验总结的AI工作流方案'
    }
  },
  {
    path: '/resources',
    name: 'resources',
    component: () => import('../views/Resources.vue'),
    meta: {
      title: '资源中心 - AI工具全书',
      description: '项目导览、历史演示文稿与解析视频，辅助理解 AI 开发工具生态'
    }
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: () => import('../views/Quiz.vue'),
    meta: {
      title: 'AI 工具竞猜 - AI工具全书',
      description: '趣味竞猜、人格测试、工具对决 — 用最有趣的方式了解 AI 工具'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue'),
    meta: {
      title: '我的档案 - AI工具全书',
      description: '查看你的 AI 工具学习进度、成就和统计',
      robots: 'noindex, follow'
    }
  },
  // 404 页面
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: '页面未找到 - AI工具全书',
      description: '您访问的页面不存在',
      robots: 'noindex, follow'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

installChunkRecovery(router)

// 全局导航守卫 - 更新页面标题和元数据
router.afterEach((to) => {
  updateRouteMetadata(to)
})

export default router
