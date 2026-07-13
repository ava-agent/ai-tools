import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { createPinia, setActivePinia } from 'pinia'
import { createMemoryHistory, createRouter } from 'vue-router'
import Header from '../Header.vue'
import { useAuthStore } from '../../stores/auth.js'

function makeRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', name: 'landing', component: { template: '<div />' } },
      { path: '/tools', name: 'tools', component: { template: '<div />' } },
      { path: '/comparison', name: 'comparison', component: { template: '<div />' } },
      { path: '/workflows', name: 'workflows', component: { template: '<div />' } },
      { path: '/matcher', name: 'matcher', component: { template: '<div />' } },
      { path: '/pricing', name: 'pricing', component: { template: '<div />' } },
      { path: '/resources', name: 'resources', component: { template: '<div />' } },
    ],
  })
}

async function mountHeader({ user = null, attachTo, authAvailable = true } = {}) {
  const pinia = createPinia()
  setActivePinia(pinia)
  const authStore = useAuthStore()
  authStore.user = user
  const router = makeRouter()
  await router.push('/')
  await router.isReady()

  const wrapper = mount(Header, {
    props: { authAvailable },
    attachTo,
    global: {
      plugins: [pinia, router],
      stubs: {
        UserProfilePanel: {
          props: ['isOpen'],
          template: '<div data-testid="user-profile-panel" :data-open="String(isOpen)" />',
        },
      },
    },
  })

  return { wrapper, router, authStore }
}

describe('Header accessibility', () => {
  it('uses link semantics for navigation and exposes public routes in the mobile menu', async () => {
    const { wrapper } = await mountHeader()

    const toolsLink = wrapper.get('nav[aria-label="主导航"] a[href="/tools"]')
    expect(toolsLink.text()).toContain('全景浏览')
    expect(toolsLink.classes()).toContain('segment')

    const comparisonLink = wrapper.get('nav[aria-label="主导航"] a[href="/comparison"]')
    expect(comparisonLink.text()).toContain('工具对比')

    await wrapper.get('button[aria-label="打开菜单"]').trigger('click')
    const mobileMenu = wrapper.get('#mobile-navigation')
    expect(mobileMenu.get('a[href="/matcher"]').text()).toContain('帮我选')
    expect(mobileMenu.get('a[href="/pricing"]').text()).toContain('订阅')
    expect(mobileMenu.get('a[href="/resources"]').text()).toContain('资源')
  })

  it('labels icon-only actions and keeps mobile tap targets usable', async () => {
    const { wrapper, router } = await mountHeader()

    const logo = wrapper.get('a[href="/"]')
    expect(logo.attributes('aria-label')).toBe('返回首页')
    expect(logo.classes()).toEqual(expect.arrayContaining(['min-h-11', 'min-w-11']))

    const searchButton = wrapper.get('button[aria-label="打开工具搜索"]')
    expect(searchButton.classes()).toEqual(expect.arrayContaining(['min-h-11', 'min-w-11']))

    const menuButton = wrapper.get('button[aria-label="打开菜单"]')
    expect(menuButton.classes()).toEqual(expect.arrayContaining(['min-h-11', 'min-w-11']))
    expect(menuButton.attributes('aria-controls')).toBe('mobile-navigation')
    await menuButton.trigger('click')
    expect(wrapper.get('#mobile-navigation').exists()).toBe(true)
    expect(wrapper.get('button[aria-label="关闭菜单"]').attributes('aria-expanded')).toBe('true')

    await router.push('/tools')
    await router.isReady()
    await nextTick()
    await nextTick()
    await new Promise(resolve => setTimeout(resolve, 220))

    expect(wrapper.find('#mobile-navigation').exists()).toBe(false)
    expect(wrapper.get('button[aria-label="打开菜单"]').attributes('aria-expanded')).toBe('false')

    await wrapper.get('button[aria-label="打开菜单"]').trigger('click')
    expect(wrapper.get('#mobile-navigation').exists()).toBe(true)

    window.dispatchEvent(new PopStateEvent('popstate'))
    await nextTick()
    await new Promise(resolve => setTimeout(resolve, 220))

    expect(wrapper.find('#mobile-navigation').exists()).toBe(false)
  })

  it('keeps desktop secondary navigation links touch friendly', async () => {
    const { wrapper } = await mountHeader()

    const resourcesLink = wrapper.get('a[href="/resources"]')
    expect(resourcesLink.classes()).toEqual(expect.arrayContaining([
      'min-h-11',
      'items-center',
      'lg:inline-flex',
    ]))
    expect(resourcesLink.classes()).not.toContain('block')
  })

  it('moves focus into the mobile menu and restores it on Escape', async () => {
    const { wrapper } = await mountHeader({ attachTo: document.body })
    const menuButton = wrapper.get('button[aria-label="打开菜单"]')

    await menuButton.trigger('click')
    await nextTick()

    const mobileNavigation = wrapper.get('nav[aria-label="移动导航"]')
    expect(document.activeElement).toBe(mobileNavigation.get('a').element)

    mobileNavigation.element.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'Escape',
      bubbles: true,
      cancelable: true,
    }))
    await nextTick()
    await new Promise(resolve => setTimeout(resolve, 180))

    expect(wrapper.find('#mobile-navigation').exists()).toBe(false)
    expect(document.activeElement).toBe(menuButton.element)
    wrapper.unmount()
  })

  it('gives guests clear touch-friendly login actions on desktop and mobile', async () => {
    const { wrapper, authStore } = await mountHeader()
    const openAuthModal = vi.spyOn(authStore, 'openAuthModal')

    const desktopLogin = wrapper.get('[data-testid="desktop-login"]')
    expect(desktopLogin.text()).toBe('登录')
    expect(desktopLogin.classes()).toEqual(expect.arrayContaining(['min-h-11', 'md:inline-flex']))

    await desktopLogin.trigger('click')
    expect(openAuthModal).toHaveBeenCalledTimes(1)

    await wrapper.get('button[aria-label="打开菜单"]').trigger('click')
    const mobileLogin = wrapper.get('[data-testid="mobile-login"]')
    expect(mobileLogin.text()).toBe('登录')
    expect(mobileLogin.classes()).toEqual(expect.arrayContaining(['min-h-11', 'w-full']))

    await mobileLogin.trigger('click')
    expect(openAuthModal).toHaveBeenCalledTimes(2)
    expect(wrapper.get('button[aria-label="打开菜单"]').attributes('aria-expanded')).toBe('false')
  })

  it('does not advertise login when no authentication backend is configured', async () => {
    const { wrapper } = await mountHeader({ authAvailable: false })

    expect(wrapper.find('[data-testid="desktop-login"]').exists()).toBe(false)
    await wrapper.get('button[aria-label="打开菜单"]').trigger('click')
    expect(wrapper.find('[data-testid="mobile-login"]').exists()).toBe(false)
  })

  it('keeps authenticated users connected to the profile panel on desktop and mobile', async () => {
    const { wrapper } = await mountHeader({
      user: { id: 'user-1', email: 'ada@example.com' },
    })

    expect(wrapper.find('[data-testid="desktop-login"]').exists()).toBe(false)
    expect(wrapper.find('[data-testid="mobile-login"]').exists()).toBe(false)

    await wrapper.get('[data-testid="desktop-profile"]').trigger('click')
    expect(wrapper.get('[data-testid="user-profile-panel"]').attributes('data-open')).toBe('true')

    await wrapper.get('button[aria-label="打开菜单"]').trigger('click')
    const mobileProfile = wrapper.get('[data-testid="mobile-profile"]')
    expect(mobileProfile.text()).toBe('个人中心')
    expect(mobileProfile.classes()).toEqual(expect.arrayContaining(['min-h-11', 'w-full']))

    await mobileProfile.trigger('click')
    expect(wrapper.get('button[aria-label="打开菜单"]').attributes('aria-expanded')).toBe('false')
    expect(wrapper.get('[data-testid="user-profile-panel"]').attributes('data-open')).toBe('true')
  })

  it('reserves top safe-area space for sticky mobile navigation', async () => {
    const { wrapper } = await mountHeader()

    expect(wrapper.get('header').classes()).toContain('pt-[env(safe-area-inset-top)]')
  })
})
