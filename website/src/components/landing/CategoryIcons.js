/**
 * Category-specific SVG icon components for the ToolLandscape.
 * Each returns an inline SVG matching the category's color theme.
 */
import { h } from 'vue'

const icon = (paths, viewBox = '0 0 24 24') => ({
  props: { color: { type: String, default: '#fff' } },
  render() {
    return h(
      'svg',
      {
        viewBox,
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        class: 'w-4 h-4',
        'aria-hidden': 'true',
      },
      paths(this.color),
    )
  },
})

// IDE - code brackets with cursor
export const IdeIcon = icon((c) => [
  h('path', {
    d: 'M8 3L3 8l5 5M16 3l5 5-5 5',
    stroke: c,
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
  }),
  h('line', {
    x1: '12',
    y1: '14',
    x2: '12',
    y2: '21',
    stroke: c,
    'stroke-width': '2',
    'stroke-linecap': 'round',
    opacity: '0.6',
  }),
])

// CLI - terminal prompt
export const CliIcon = icon((c) => [
  h('rect', {
    x: '2',
    y: '4',
    width: '20',
    height: '16',
    rx: '3',
    stroke: c,
    'stroke-width': '1.5',
  }),
  h('path', {
    d: 'M6 10l3 2-3 2',
    stroke: c,
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
  }),
  h('line', {
    x1: '12',
    y1: '14',
    x2: '16',
    y2: '14',
    stroke: c,
    'stroke-width': '2',
    'stroke-linecap': 'round',
    opacity: '0.6',
  }),
])

// LLM - brain/neural network
export const LlmIcon = icon((c) => [
  h('circle', { cx: '12', cy: '6', r: '2.5', stroke: c, 'stroke-width': '1.5' }),
  h('circle', { cx: '6', cy: '16', r: '2.5', stroke: c, 'stroke-width': '1.5' }),
  h('circle', { cx: '18', cy: '16', r: '2.5', stroke: c, 'stroke-width': '1.5' }),
  h('line', { x1: '12', y1: '8.5', x2: '7.5', y2: '13.5', stroke: c, 'stroke-width': '1.5', opacity: '0.5' }),
  h('line', { x1: '12', y1: '8.5', x2: '16.5', y2: '13.5', stroke: c, 'stroke-width': '1.5', opacity: '0.5' }),
  h('line', { x1: '8.5', y1: '16', x2: '15.5', y2: '16', stroke: c, 'stroke-width': '1.5', opacity: '0.5' }),
])

// Multimodal - image + audio waves
export const MultimodalIcon = icon((c) => [
  h('rect', {
    x: '2',
    y: '3',
    width: '12',
    height: '12',
    rx: '2',
    stroke: c,
    'stroke-width': '1.5',
  }),
  h('circle', { cx: '6', cy: '7', r: '1.5', fill: c, opacity: '0.5' }),
  h('path', {
    d: 'M2 12l3-3 2 2 3-4 2 3',
    stroke: c,
    'stroke-width': '1.5',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    opacity: '0.7',
  }),
  h('path', {
    d: 'M18 8v8M20 10v4M22 6v12M16 11v2',
    stroke: c,
    'stroke-width': '1.5',
    'stroke-linecap': 'round',
    opacity: '0.8',
  }),
])

// Agent - robot/bot
export const AgentIcon = icon((c) => [
  h('rect', {
    x: '5',
    y: '8',
    width: '14',
    height: '12',
    rx: '3',
    stroke: c,
    'stroke-width': '1.5',
  }),
  h('circle', { cx: '9', cy: '14', r: '1.5', fill: c }),
  h('circle', { cx: '15', cy: '14', r: '1.5', fill: c }),
  h('line', { x1: '12', y1: '4', x2: '12', y2: '8', stroke: c, 'stroke-width': '1.5' }),
  h('circle', { cx: '12', cy: '3', r: '1.5', fill: c, opacity: '0.6' }),
])

// MCP - plug/connector
export const McpIcon = icon((c) => [
  h('path', {
    d: 'M12 2v6M8 8h8M8 8v4a4 4 0 008 0V8',
    stroke: c,
    'stroke-width': '1.5',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
  }),
  h('line', { x1: '12', y1: '16', x2: '12', y2: '22', stroke: c, 'stroke-width': '1.5', 'stroke-linecap': 'round' }),
  h('path', { d: 'M8 22h8', stroke: c, 'stroke-width': '1.5', 'stroke-linecap': 'round' }),
])

// Skill - lightning bolt
export const SkillIcon = icon((c) => [
  h('path', {
    d: 'M13 2L4 14h7l-1 8 9-12h-7l1-8z',
    stroke: c,
    'stroke-width': '1.5',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    fill: c,
    'fill-opacity': '0.15',
  }),
])

// Map category id to icon component
export const categoryIconMap = {
  ide: IdeIcon,
  cli: CliIcon,
  llm: LlmIcon,
  multimodal: MultimodalIcon,
  agent: AgentIcon,
  mcp: McpIcon,
  skill: SkillIcon,
}
