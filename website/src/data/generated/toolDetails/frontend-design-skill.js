// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://github.com/openai/plugins/blob/main/plugins/build-web-apps/skills/frontend-app-builder/SKILL.md"
  ],
  "id": "frontend-design-skill",
  "name": "frontend-app-builder",
  "category": "skill",
  "subcategory": "UI/UX设计",
  "developer": "OpenAI",
  "logo": null,
  "versions": [
    {
      "type": "Public plugin skill",
      "pricing": "需要安装并启用 OpenAI Build Web Apps plugin；无独立免费额度声明",
      "models": "frontend-app-builder 处理新前端应用、dashboard、game、creative website 和 redesign/restyle/modernization",
      "link": "https://openai.com/codex/"
    },
    {
      "type": "Validation workflow",
      "pricing": "真实浏览器验证成本取决于本地运行、Browser 插件和模型使用",
      "models": "要求 Browser/IAB 或可说明的 Playwright 降级验证，检查页面身份、非空、console 和截图证据",
      "link": "https://openai.com/codex/"
    }
  ],
  "freeQuota": "无独立免费额度证据；取决于 Codex/插件环境与模型使用",
  "contextWindow": "N/A",
  "chineseSupport": 5,
  "pros": [
    "当前核验环境存在精确 frontend-app-builder Skill",
    "适合新前端应用、仪表盘、游戏、创意网站和 redesign/restyle/modernization",
    "流程强调视觉方向、实现和浏览器验证闭环",
    "要求 Browser/IAB 或可说明的 Playwright 降级验证做渲染检查",
    "适合把页面现代化需求拆成可验证的实现步骤"
  ],
  "cons": [
    "不是固定风格库或一键 UI 生成器",
    "完整视觉流程可能需要明确 brief、截图、浏览器验证和多轮对比",
    "如果没有明确视觉来源，设计方向仍需人工确认"
  ],
  "bestFor": "页面改版、前端视觉现代化、从设计方向到真实浏览器验收的工作流",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 4,
    "insights": "当前核验环境存在精确 frontend-app-builder Skill。它适合作为旧页面现代化入口，但价值在于把设计方向、实现和真实浏览器验证串起来，而不是承诺固定风格库或调色板数量。",
    "pitfalls": [
      "先明确页面目标和视觉来源",
      "不要承诺固定风格库或调色板数量",
      "渲染验收要看真实浏览器截图"
    ]
  },
  "decisionSummary": {
    "verdict": "当前核验环境已确认 frontend-app-builder，可作为页面现代化和前端视觉实现的已核验工作流入口。",
    "bestFor": "需要从视觉方向、前端实现到真实浏览器验收串起来的页面优化任务",
    "avoidIf": "你需要可量化设计系统生成、固定风格库或不经过浏览器验收的静态 UI 建议",
    "mainRisk": "输出质量依赖 brief、视觉来源和浏览器验证；缺少这些边界时容易变成主观改色。",
    "alternatives": [
      "Product Design get-context",
      "Product Design ideate",
      "frontend-testing-debugging"
    ]
  },
  "swot": {
    "S": "已确认前端实现与浏览器验收流程",
    "W": "依赖 brief 和视觉来源质量",
    "O": "可作为旧页面现代化入口",
    "T": "Figma / v0 / Lovable 等设计到代码工具竞争"
  },
  "tags": [
    "Skills",
    "UI/UX",
    "设计",
    "前端",
    "本地核验"
  ]
}
