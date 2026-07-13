import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import Footer from '../Footer.vue'

async function mountFooter() {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', name: 'landing', component: { template: '<div />' } },
      { path: '/tools', name: 'tools', component: { template: '<div />' } },
      { path: '/matcher', name: 'matcher', component: { template: '<div />' } },
      { path: '/pricing', name: 'pricing', component: { template: '<div />' } },
      { path: '/workflows', name: 'workflows', component: { template: '<div />' } },
      { path: '/resources', name: 'resources', component: { template: '<div />' } },
      { path: '/comparison', name: 'comparison', component: { template: '<div />' } },
    ],
  })
  await router.push('/')
  await router.isReady()

  return mount(Footer, {
    global: {
      plugins: [router],
    },
  })
}

describe('Footer', () => {
  it('reserves mobile bottom space for fixed controls', async () => {
    const wrapper = await mountFooter()

    expect(wrapper.get('footer').classes()).toContain('footer-safe-bottom')
  })

  it('keeps footer text links large enough to tap comfortably', async () => {
    const wrapper = await mountFooter()

    const homeLink = wrapper.get('a[href="/"]')
    expect(homeLink.classes()).toContain('min-h-11')

    const resourceLink = wrapper.get('a[href="/resources"]')
    expect(resourceLink.classes()).toEqual(expect.arrayContaining(['min-h-11', 'items-center']))

    const githubLink = wrapper.get('a[href="https://github.com/ava-agent/ai-tools"]')
    expect(githubLink.classes()).toEqual(expect.arrayContaining(['min-h-11', 'items-center']))
  })

  it('routes the tool list link to the catalog instead of the landing page', async () => {
    const wrapper = await mountFooter()
    const catalogLink = wrapper.get('a[href="/tools"]')

    expect(catalogLink.text()).toContain('工具列表')
  })
})
