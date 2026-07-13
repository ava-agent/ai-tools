import { describe, expect, it } from 'vitest'
import { readdir, stat } from 'node:fs/promises'
import { resolve } from 'node:path'
import { toolLogos } from '../toolLogos.js'

describe('tool logo assets', () => {
  it('bundles a local image for every configured product logo', async () => {
    const directory = resolve(process.cwd(), 'public/images/tool-logos')
    const files = (await readdir(directory)).filter((name) => name.endsWith('.png')).sort()
    const expected = Object.entries(toolLogos)
      .filter(([, logo]) => Boolean(logo.logoUrl))
      .map(([id]) => `${id}.png`)
      .sort()
    const sizes = await Promise.all(files.map((name) => stat(resolve(directory, name))))

    expect(files).toEqual(expected)
    expect(sizes.every((file) => file.size < 64 * 1024)).toBe(true)
    expect(sizes.reduce((total, file) => total + file.size, 0)).toBeLessThan(1024 * 1024)
  })
})
