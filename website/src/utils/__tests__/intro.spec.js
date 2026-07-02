import { describe, it, expect } from 'vitest'
import { shouldAutoShowIntro } from '../intro'

describe('intro', () => {
  it('does not auto-show the intro on the tools catalog route', () => {
    expect(shouldAutoShowIntro({ hasSeenIntro: false, routeName: 'tools' })).toBe(false)
  })

  it('can auto-show the intro on an explicitly immersive landing route', () => {
    expect(shouldAutoShowIntro({ hasSeenIntro: false, routeName: 'landing' })).toBe(true)
  })

  it('does not auto-show the intro after it has been seen', () => {
    expect(shouldAutoShowIntro({ hasSeenIntro: true, routeName: 'landing' })).toBe(false)
  })
})
