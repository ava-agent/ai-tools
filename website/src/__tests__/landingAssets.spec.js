import { describe, expect, it } from 'vitest'
import { readdir, stat } from 'node:fs/promises'
import { resolve } from 'node:path'

describe('landing image assets', () => {
  it('ships only optimized WebP artwork within the landing budget', async () => {
    const directory = resolve(process.cwd(), 'public/images/landing')
    const files = (await readdir(directory)).sort()
    const expectedFiles = [
      'cat-agent.webp',
      'cat-cli.webp',
      'cat-ide.webp',
      'cat-llm.webp',
      'cat-mcp.webp',
      'cat-multimodal.webp',
      'cat-skill.webp',
      'ecosystem-atlas.webp',
      'entry-browse.webp',
      'entry-compare.webp',
      'entry-workflow.webp',
      'promo-poster.webp',
      'rec-coding.webp',
      'rec-design.webp',
      'rec-free.webp',
      'rec-refactor.webp',
    ]
    const totalBytes = (
      await Promise.all(files.map((name) => stat(resolve(directory, name))))
    ).reduce((sum, file) => sum + file.size, 0)

    expect(files).toEqual(expectedFiles)
    expect(totalBytes).toBeLessThan(384 * 1024)
  })
})
