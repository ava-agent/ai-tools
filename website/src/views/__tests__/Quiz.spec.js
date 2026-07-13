import { afterEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Quiz from '../Quiz.vue'

vi.mock('../../components/interactive/QuizGame.vue', () => ({
  default: { template: '<div data-testid="quiz-game">Quiz game</div>' },
}))

vi.mock('../../components/interactive/PersonalityQuiz.vue', () => ({
  default: { template: '<div data-testid="personality-quiz">Personality quiz</div>' },
}))

vi.mock('../../components/interactive/ToolBattle.vue', () => ({
  default: { template: '<div data-testid="tool-battle">Tool battle</div>' },
}))

let wrapper

afterEach(() => {
  wrapper?.unmount()
  wrapper = undefined
})

function mountQuiz() {
  wrapper = mount(Quiz, { attachTo: document.body })
  return wrapper
}

describe('Quiz', () => {
  it('associates each tab with the active tab panel and exposes one tab stop', async () => {
    const quiz = mountQuiz()
    const tabs = quiz.findAll('[role="tab"]')

    expect(tabs).toHaveLength(3)
    expect(tabs[0].attributes()).toMatchObject({
      id: 'quiz-tab-quiz',
      'aria-controls': 'quiz-panel-quiz',
      'aria-selected': 'true',
      tabindex: '0',
    })
    expect(tabs[1].attributes('tabindex')).toBe('-1')
    expect(tabs[2].attributes('tabindex')).toBe('-1')

    const panel = quiz.get('[role="tabpanel"]')
    expect(panel.attributes()).toMatchObject({
      id: 'quiz-panel-quiz',
      'aria-labelledby': 'quiz-tab-quiz',
      tabindex: '0',
    })

    await tabs[1].trigger('click')
    expect(quiz.get('[data-testid="quiz-tab-personality"]').attributes('aria-selected')).toBe('true')
    expect(quiz.get('[role="tabpanel"]').attributes()).toMatchObject({
      id: 'quiz-panel-personality',
      'aria-labelledby': 'quiz-tab-personality',
    })
  })

  it('moves focus and activates tabs with arrow, Home, and End keys', async () => {
    const quiz = mountQuiz()
    const firstTab = quiz.get('[data-testid="quiz-tab-quiz"]')
    firstTab.element.focus()

    await firstTab.trigger('keydown', { key: 'ArrowRight' })
    const personalityTab = quiz.get('[data-testid="quiz-tab-personality"]')
    expect(personalityTab.attributes('aria-selected')).toBe('true')
    expect(document.activeElement).toBe(personalityTab.element)

    await personalityTab.trigger('keydown', { key: 'End' })
    const battleTab = quiz.get('[data-testid="quiz-tab-battle"]')
    expect(battleTab.attributes('aria-selected')).toBe('true')
    expect(document.activeElement).toBe(battleTab.element)

    await battleTab.trigger('keydown', { key: 'Home' })
    expect(quiz.get('[data-testid="quiz-tab-quiz"]').attributes('aria-selected')).toBe('true')
    expect(document.activeElement).toBe(firstTab.element)

    await firstTab.trigger('keydown', { key: 'ArrowLeft' })
    expect(quiz.get('[data-testid="quiz-tab-battle"]').attributes('aria-selected')).toBe('true')
    expect(document.activeElement).toBe(battleTab.element)
  })
})
