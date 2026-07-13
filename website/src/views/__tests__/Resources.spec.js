import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Resources from '../Resources.vue'
import { RESOURCE_HISTORY_NOTICE, resources } from '../../data/resources.js'

const firstPdfId = 'ai-dev-tool-ecosystem'

function mountResources() {
  return mount(Resources, {
    global: {
      stubs: {
        PdfViewer: {
          props: ['src', 'title'],
          template: '<div data-testid="pdf-viewer-stub">{{ title }}</div>',
        },
        VideoPlayer: {
          props: ['src', 'showControls', 'deferLoad'],
          template: '<div data-testid="video-player-stub" :data-defer-load="deferLoad" />',
        },
      },
    },
  })
}

describe('Resources', () => {
  it('avoids negative letter spacing in compact page headings', () => {
    const wrapper = mountResources()

    expect(wrapper.html()).not.toContain('letter-spacing: -')
  })

  it('keeps PDF card headers resilient for long titles on mobile', () => {
    const wrapper = mountResources()

    const header = wrapper.get(`[data-testid="resource-pdf-header-${firstPdfId}"]`)
    expect(header.classes()).toEqual(expect.arrayContaining(['flex-col', 'gap-3', 'sm:flex-row']))

    const titleGroup = wrapper.get(`[data-testid="resource-pdf-title-group-${firstPdfId}"]`)
    expect(titleGroup.classes()).toContain('min-w-0')

    const title = wrapper.get(`[data-testid="resource-pdf-title-${firstPdfId}"]`)
    expect(title.classes()).toContain('break-words')

    const titleEn = wrapper.get(`[data-testid="resource-pdf-title-en-${firstPdfId}"]`)
    expect(titleEn.classes()).toContain('break-words')

    const toggle = wrapper.get(`[data-testid="resource-pdf-toggle-${firstPdfId}"]`)
    expect(toggle.classes()).toEqual(expect.arrayContaining(['ml-0', 'w-full', 'justify-center', 'sm:ml-4', 'sm:w-auto']))
  })

  it('shows publication, verification, and source metadata on resource cards', () => {
    const wrapper = mountResources()
    const firstPdf = resources.find(resource => resource.id === firstPdfId)

    const notice = wrapper.get('[data-testid="resources-history-notice"]')
    expect(notice.text()).toBe(RESOURCE_HISTORY_NOTICE)
    expect(notice.text()).toContain('2026-02 历史快照')
    expect(notice.text()).toContain('当前官方来源')

    const metadata = wrapper.get(`[data-testid="resource-meta-${firstPdfId}"]`)
    expect(metadata.text()).toContain(firstPdf.date)
    expect(metadata.text()).toContain('历史信息')
    expect(metadata.text()).toContain(`本地文件核验 ${firstPdf.assetCheckedAt}`)
    expect(metadata.text()).toContain('历史快照')
    expect(metadata.text()).toContain('非实时价格、模型或额度依据')
    expect(metadata.text()).not.toContain('核验于')

    const source = wrapper.get(`[data-testid="resource-local-source-${firstPdfId}-0"]`)
    expect(source.text()).toContain('本地资源')
    expect(source.text()).toContain('PDF')
    expect(wrapper.find(`[data-testid="resource-source-${firstPdfId}-0"]`).exists()).toBe(false)
    expect(wrapper.find(`a[href="${firstPdf.sources[0]}"]`).exists()).toBe(false)
  })

  it('presents the new project introduction as current locally verified media', () => {
    const wrapper = mountResources()
    const projectIntro = resources.find(resource => resource.id === 'project-intro-2026')
    const metadata = wrapper.get('[data-testid="resource-meta-project-intro-2026"]')

    expect(projectIntro.verificationStatus).toBe('verified')
    expect(projectIntro.lastVerified).toBe('2026-07-13')
    expect(metadata.text()).toContain('本地核验')
    expect(metadata.text()).toContain('本地文件核验 2026-07-13')
    expect(metadata.text()).toContain('当前项目导览')
  })

  it('labels historical tool videos and uses the reviewed product terminology', () => {
    const legacyDemos = resources.filter(resource => resource.id.startsWith('demo-'))
    const cursor = resources.find(resource => resource.id === 'demo-cursor')
    const windsurf = resources.find(resource => resource.id === 'demo-windsurf')
    const trae = resources.find(resource => resource.id === 'demo-trae')
    const antigravity = resources.find(resource => resource.id === 'demo-antigravity')
    const agenticDevelopment = resources.find(resource => resource.id === 'agentic-development')

    expect(legacyDemos.every(resource => resource.title.includes('2026-02 旧版界面演示'))).toBe(true)
    expect(cursor.description).toContain('Agent/Plan/Ask')
    expect(windsurf.description).toContain('Cascade 使用 Plan/Code/Ask')
    expect(trae.description).toContain('TRAE Work / SOLO Agent')
    expect(antigravity.title).toContain('Antigravity')
    expect(antigravity.description).toContain('Antigravity AI IDE')
    expect(antigravity.tags).toContain('AI IDE')
    expect(agenticDevelopment.description).toContain('收录若干项目案例示例')
    expect(agenticDevelopment.description).not.toContain('包含多个真实项目案例')
  })

  it('renders local asset sources as metadata instead of external links', () => {
    const wrapper = mountResources()
    const firstPdf = resources.find(resource => resource.id === firstPdfId)

    const localSource = wrapper.get(`[data-testid="resource-local-source-${firstPdfId}-0"]`)
    expect(localSource.text()).toContain('本地资源')
    expect(localSource.text()).toContain('PDF')

    expect(wrapper.find(`[data-testid="resource-source-${firstPdfId}-0"]`).exists()).toBe(false)
    expect(wrapper.find(`a[href="${firstPdf.sources[0]}"]`).exists()).toBe(false)
  })

  it('lets expanded PDF panels scroll instead of clipping controls on mobile', async () => {
    const wrapper = mountResources()

    await wrapper.get(`[data-testid="resource-pdf-toggle-${firstPdfId}"]`).trigger('click')

    const panel = wrapper.get(`[data-testid="resource-pdf-panel-${firstPdfId}"]`)
    expect(panel.attributes('id')).toBe(`pdf-panel-${firstPdfId}`)
    expect(panel.classes()).toEqual(expect.arrayContaining([
      'overflow-auto',
      'max-h-[calc(100vh-8rem)]',
      'sm:max-h-none',
    ]))
  })

  it('keeps video card headers resilient for long titles on mobile', async () => {
    const wrapper = mountResources()

    await wrapper.findAll('button').find(button => button.text().includes('视频')).trigger('click')

    const featuredVideo = resources.find(resource => resource.id === 'ai-coding-tool-map')
    const demoVideo = resources.find(resource => resource.id === 'demo-cursor')

    const featuredMetadata = wrapper.get('[data-testid="resource-meta-ai-coding-tool-map"]')
    expect(featuredMetadata.text()).toContain(featuredVideo.freshnessNote)
    expect(featuredMetadata.text()).toContain(`本地文件核验 ${featuredVideo.assetCheckedAt}`)

    const demoMetadata = wrapper.get('[data-testid="resource-meta-demo-cursor"]')
    expect(demoMetadata.text()).toContain(demoVideo.freshnessNote)
    expect(demoMetadata.text()).toContain(`本地文件核验 ${demoVideo.assetCheckedAt}`)

    const header = wrapper.get('[data-testid="resource-video-header-ai-coding-tool-map"]')
    expect(header.classes()).toEqual(expect.arrayContaining(['items-start', 'gap-3']))

    const titleGroup = wrapper.get('[data-testid="resource-video-title-group-ai-coding-tool-map"]')
    expect(titleGroup.classes()).toContain('min-w-0')

    const title = wrapper.get('[data-testid="resource-video-title-ai-coding-tool-map"]')
    expect(title.classes()).toContain('break-words')

    const titleEn = wrapper.get('[data-testid="resource-video-title-en-ai-coding-tool-map"]')
    expect(titleEn.classes()).toContain('break-words')
  })

  it('defers every resource video until the user chooses to load it', () => {
    const wrapper = mountResources()
    const players = wrapper.findAll('[data-testid="video-player-stub"]')

    expect(players).toHaveLength(resources.filter(resource => resource.type === 'video').length)
    players.forEach((player) => {
      expect(player.attributes('data-defer-load')).toBe('true')
    })
  })
})
