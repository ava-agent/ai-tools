import { createRouter, createWebHashHistory } from 'vue-router'

// 路由级代码分割 - Vue Router 原生懒加载（不要使用 defineAsyncComponent）
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'AI工具全书 | 2026深度集成与实战教学版',
      description: '整合10+份调研文档、SWOT分析与30+款AI工具的CN/Global双版本实战数据'
    }
  },
  {
    path: '/tool/:id',
    name: 'tool-detail',
    component: () => import('../views/ToolDetail.vue'),
    props: route => ({ id: route.params.id }),
    meta: {
      title: '工具详情 - AI工具全书',
      description: '查看AI工具的详细评测、SWOT分析和使用建议'
    }
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
      description: 'PPT 演示文稿、深度解析视频 — 全方位了解 AI 开发工具生态'
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
      description: '查看你的 AI 工具学习进度、成就和统计'
    }
  },
  // 404 页面
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: '页面未找到 - AI工具全书',
      description: '您访问的页面不存在'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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

// 全局导航守卫 - 更新页面标题和元数据
router.beforeEach((to, from, next) => {
  const defaultTitle = 'AI工具全书 | 2026深度集成与实战教学版'
  document.title = to.meta.title || defaultTitle

  // 更新 meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription && to.meta.description) {
    metaDescription.setAttribute('content', to.meta.description)
  }

  next()
})

export default router
