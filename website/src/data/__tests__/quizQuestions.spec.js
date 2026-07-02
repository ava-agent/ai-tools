import { afterEach, describe, expect, it, vi } from 'vitest'
import { generateQuizSet } from '../quizQuestions'

describe('quizQuestions', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('does not treat N/A context windows as a long-context scenario match', () => {
    const randomValues = [0.99, 0.2, 0, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]
    let index = 0
    vi.spyOn(Math, 'random').mockImplementation(() => randomValues[index++] ?? 0.1)

    const questions = generateQuizSet([
      { id: 'long-context', name: 'LongContext', contextWindow: '200K', bestFor: '长代码文件分析' },
      { id: 'no-context', name: 'NoContext', contextWindow: 'N/A', bestFor: '普通任务' },
      { id: 'design', name: 'DesignTool', contextWindow: '', bestFor: '设计任务' },
      { id: 'search', name: 'SearchTool', contextWindow: null, bestFor: '搜索任务' },
      { id: 'media', name: 'MediaTool', bestFor: '媒体任务' },
    ], 1)

    expect(questions).toHaveLength(1)
    expect(questions[0].question).toContain('超长代码文件')
    expect(questions[0].options.find(option => option.correct)?.text).toBe('LongContext')
    expect(questions[0].options.find(option => option.text === 'NoContext')?.correct ?? false).toBe(false)
  })
})
