import { describe, it, expect } from 'vitest'
import { getTagColor } from '../helpers'

describe('helpers', () => {
  describe('getTagColor', () => {
    it('returns correct color for known tags', () => {
      expect(getTagColor('推荐')).toBe('bg-green-500')
      expect(getTagColor('国产')).toBe('bg-red-500')
      expect(getTagColor('免费')).toBe('bg-blue-500')
      expect(getTagColor('开源')).toBe('bg-purple-500')
      expect(getTagColor('低价')).toBe('bg-yellow-500')
      expect(getTagColor('推理')).toBe('bg-cyan-500')
      expect(getTagColor('DeepSeek')).toBe('bg-orange-500')
      expect(getTagColor('LLM')).toBe('bg-pink-500')
      expect(getTagColor('代码理解')).toBe('bg-indigo-500')
      expect(getTagColor('长上下文')).toBe('bg-teal-500')
      expect(getTagColor('GitHub')).toBe('bg-gray-700')
      expect(getTagColor('插件')).toBe('bg-slate-600')
      expect(getTagColor('生态')).toBe('bg-emerald-600')
      expect(getTagColor('多模型')).toBe('bg-violet-600')
      expect(getTagColor('VS Code')).toBe('bg-blue-600')
      expect(getTagColor('Agentic')).toBe('bg-rose-600')
      expect(getTagColor('行业标杆')).toBe('bg-amber-600')
    })

    it('returns default color for unknown tags', () => {
      expect(getTagColor('UnknownTag')).toBe('bg-gray-500')
    })
  })
})
