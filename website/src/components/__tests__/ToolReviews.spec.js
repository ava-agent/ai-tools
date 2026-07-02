import { describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import ToolReviews from '../ToolReviews.vue'
import { useAuthStore } from '../../stores/auth.js'
import { useCommunityStore } from '../../stores/community.js'

const WRITE_REVIEW_LABEL = '\u5206\u4eab\u4f60\u7684\u4f7f\u7528\u4f53\u9a8c'
const SUBMIT_REVIEW_LABEL = '\u53d1\u5e03\u8bc4\u8bba'
const LOGIN_REVIEW_LABEL = '\u767b\u5f55\u540e\u53d1\u8868\u8bc4\u8bba'

function mountReviews({ authenticated = true } = {}) {
  const pinia = createPinia()
  setActivePinia(pinia)

  const authStore = useAuthStore()
  const communityStore = useCommunityStore()

  if (authenticated) {
    authStore.user = {
      id: 'user-1',
      email: 'ada@example.com',
      user_metadata: {
        full_name: 'Ada Lovelace',
        avatar_url: 'https://example.com/ada.png',
      },
    }
  } else {
    authStore.user = null
  }

  communityStore.reviewCache = {
    cursor: [
      {
        id: 'review-1',
        userId: 'user-1',
        content: 'This tool saves time on refactors. https://example.com/really-long-review-path-without-natural-breaks-or-spaces',
        createdAt: '2026-06-25T08:00:00.000Z',
        displayName: 'Ada Lovelace',
        avatarUrl: 'https://example.com/reviewer.png',
      },
    ],
  }
  vi.spyOn(communityStore, 'fetchReviewsForTool').mockResolvedValue(
    communityStore.reviewCache.cursor,
  )

  const wrapper = mount(ToolReviews, {
    props: { toolId: 'cursor' },
    global: {
      plugins: [pinia],
    },
  })

  return { wrapper, authStore }
}

describe('ToolReviews accessibility', () => {
  it('labels the authenticated review composer and keeps submit controls touch friendly', async () => {
    const { wrapper } = mountReviews()
    await flushPromises()

    const currentUserAvatar = wrapper.get('img[src="https://example.com/ada.png"]')
    expect(currentUserAvatar.attributes('alt')).toContain('Ada Lovelace')

    const textarea = wrapper.get('textarea')
    expect(textarea.attributes('aria-label')).toBe(WRITE_REVIEW_LABEL)

    const submitButton = wrapper.get(`button[aria-label="${SUBMIT_REVIEW_LABEL}"]`)
    expect(submitButton.attributes('type')).toBe('button')
    expect(submitButton.classes()).toEqual(expect.arrayContaining(['min-h-11']))
  })

  it('labels review avatars and owner-only delete actions', async () => {
    const { wrapper } = mountReviews()
    await flushPromises()

    const reviewAvatar = wrapper.get('img[src="https://example.com/reviewer.png"]')
    expect(reviewAvatar.attributes('alt')).toContain('Ada Lovelace')

    const deleteButton = wrapper.get('button[aria-label*="review-1"]')
    expect(deleteButton.attributes('type')).toBe('button')
    expect(deleteButton.classes()).toEqual(expect.arrayContaining(['min-h-11', 'px-3']))
  })

  it('wraps long review text without forcing horizontal overflow', async () => {
    const { wrapper } = mountReviews()
    await flushPromises()

    const content = wrapper.get('[data-testid="review-content"]')
    expect(content.text()).toContain('really-long-review-path')
    expect(content.classes()).toEqual(expect.arrayContaining(['break-words', 'whitespace-pre-wrap']))
  })

  it('labels the unauthenticated login prompt as a button action', async () => {
    const { wrapper, authStore } = mountReviews({ authenticated: false })
    const openAuthModal = vi.spyOn(authStore, 'openAuthModal')
    await flushPromises()

    const loginButton = wrapper.get(`button[aria-label="${LOGIN_REVIEW_LABEL}"]`)
    expect(loginButton.attributes('type')).toBe('button')
    expect(loginButton.classes()).toEqual(expect.arrayContaining(['min-h-11', 'px-4']))

    await loginButton.trigger('click')
    expect(openAuthModal).toHaveBeenCalledTimes(1)
  })
})
