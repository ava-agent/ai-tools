import { beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import QuizGame from '../QuizGame.vue'

const loaderMocks = vi.hoisted(() => ({
  loadInteractiveCatalog: vi.fn()
}))

vi.mock('../../../data/generated/interactiveCatalogLoader.js', () => loaderMocks)

const quizTools = [
  {
    id: 'cursor', name: 'Cursor', developer: 'Anysphere', category: 'ide', tags: ['云端'],
    freeQuota: 'Hobby 免费', contextWindow: '200K', bestFor: '日常开发',
    pros: ['代码补全'], cons: ['成本波动'], personalExperience: { rating: 5 }
  },
  {
    id: 'trae', name: 'Trae', developer: 'ByteDance', category: 'ide', tags: ['云端'],
    freeQuota: 'Free plan', contextWindow: '128K', bestFor: '快速原型',
    pros: ['上手快'], cons: ['额度变化'], personalExperience: { rating: 4 }
  },
  {
    id: 'claude', name: 'Claude', developer: 'Anthropic', category: 'llm', tags: [],
    freeQuota: 'Free plan', contextWindow: '200K', bestFor: '技术调研',
    pros: ['长上下文'], cons: ['价格较高'], personalExperience: { rating: 5 }
  },
  {
    id: 'gemini', name: 'Gemini', developer: 'Google', category: 'llm', tags: [],
    freeQuota: 'Free tier', contextWindow: '1M', bestFor: '多模态研究',
    pros: ['上下文长'], cons: ['入口复杂'], personalExperience: { rating: 4.5 }
  },
  {
    id: 'aider', name: 'Aider', developer: 'Open source', category: 'cli', tags: [],
    freeQuota: '开源免费', contextWindow: 'N/A', bestFor: '终端开发',
    pros: ['开源'], cons: ['需要配置'], personalExperience: { rating: 4 }
  }
]

function mountQuizGame() {
  const pinia = createPinia()
  setActivePinia(pinia)
  return mount(QuizGame, { global: { plugins: [pinia] } })
}

describe('QuizGame deferred catalog', () => {
  beforeEach(() => {
    loaderMocks.loadInteractiveCatalog.mockReset()
  })

  it('loads quiz data only after the user starts a round', async () => {
    loaderMocks.loadInteractiveCatalog.mockResolvedValue(quizTools)
    const wrapper = mountQuizGame()

    expect(wrapper.text()).toContain('从 125 款 AI 工具')
    expect(loaderMocks.loadInteractiveCatalog).not.toHaveBeenCalled()

    await wrapper.get('button').trigger('click')
    await flushPromises()

    expect(loaderMocks.loadInteractiveCatalog).toHaveBeenCalledTimes(1)
    expect(wrapper.text()).toContain('第 1 /')
  })

  it('shows a retryable error without leaving the start screen', async () => {
    loaderMocks.loadInteractiveCatalog.mockRejectedValue(new Error('chunk failed'))
    const wrapper = mountQuizGame()

    await wrapper.get('button').trigger('click')
    await flushPromises()

    expect(wrapper.get('[data-testid="quiz-load-error"]').text()).toContain('题库加载失败')
    expect(wrapper.text()).toContain('开始竞猜 (10 题)')
  })
})
