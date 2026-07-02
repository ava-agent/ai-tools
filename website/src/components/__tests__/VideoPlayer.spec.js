import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import VideoPlayer from '../VideoPlayer.vue'

const sourcePath = resolve(process.cwd(), 'src/components/VideoPlayer.vue')

describe('VideoPlayer', () => {
  it('marks custom control buttons as inert form-safe buttons', () => {
    const wrapper = mount(VideoPlayer, {
      props: {
        src: '/videos/demo.mp4',
        showControls: false,
      },
    })

    const customButtons = wrapper.findAll('button.control-btn')
    expect(customButtons).toHaveLength(2)
    customButtons.forEach((button) => {
      expect(button.attributes('type')).toBe('button')
      expect(button.attributes('aria-label')).toBeTruthy()
    })
  })

  it('keeps custom controls touch friendly without hover dependency', async () => {
    const source = await readFile(sourcePath, 'utf8')
    const controlBlock = source.match(/\.control-btn\s*\{(?<body>[\s\S]*?)\}/)?.groups?.body || ''

    expect(controlBlock).toContain('min-h-11')
    expect(controlBlock).toContain('min-w-11')
    expect(controlBlock).not.toContain('p-1')
    expect(source).toMatch(/\.control-btn:focus-visible\s*\{[\s\S]*?outline/)
    expect(source).toMatch(/@media\s*\(hover:\s*none\)[\s\S]*?\.video-controls\s*\{[\s\S]*?opacity-100/)
  })
})
