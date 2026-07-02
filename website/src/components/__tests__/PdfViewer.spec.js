import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import PdfViewer from '../PdfViewer.vue'

const DOWNLOAD_LABEL = '\u4e0b\u8f7d Product Guide'
const OPEN_LABEL = '\u5728\u65b0\u6807\u7b7e\u9875\u6253\u5f00 Product Guide'
const FULLSCREEN_LABEL = '\u5168\u5c4f\u67e5\u770b Product Guide'

describe('PdfViewer accessibility', () => {
  it('labels toolbar actions and keeps them large enough for touch input', () => {
    const wrapper = mount(PdfViewer, {
      props: {
        src: '/docs/product-guide.pdf',
        title: 'Product Guide',
      },
    })

    const download = wrapper.get(`a[aria-label="${DOWNLOAD_LABEL}"]`)
    expect(download.attributes('download')).toBeDefined()
    expect(download.classes()).toEqual(expect.arrayContaining(['min-h-11', 'min-w-11']))

    const openInNewTab = wrapper.get(`a[aria-label="${OPEN_LABEL}"]`)
    expect(openInNewTab.attributes('target')).toBe('_blank')
    expect(openInNewTab.classes()).toEqual(expect.arrayContaining(['min-h-11', 'min-w-11']))

    const fullscreen = wrapper.get(`button[aria-label="${FULLSCREEN_LABEL}"]`)
    expect(fullscreen.attributes('type')).toBe('button')
    expect(fullscreen.classes()).toEqual(expect.arrayContaining(['min-h-11', 'min-w-11']))
  })

  it('requests fullscreen from the PDF container when the toolbar button is pressed', async () => {
    const wrapper = mount(PdfViewer, {
      props: {
        src: '/docs/product-guide.pdf',
        title: 'Product Guide',
      },
      attachTo: document.body,
    })
    const requestFullscreen = vi.fn()
    wrapper.vm.$refs.containerRef.requestFullscreen = requestFullscreen

    await wrapper.get(`button[aria-label="${FULLSCREEN_LABEL}"]`).trigger('click')

    expect(requestFullscreen).toHaveBeenCalledTimes(1)
    wrapper.unmount()
  })
})
