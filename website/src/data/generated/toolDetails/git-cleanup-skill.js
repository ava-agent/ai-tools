// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://trailofbits.com/skills/git-cleanup/",
    "邻近本地 skill: superpowers:using-git-worktrees"
  ],
  "id": "git-cleanup-skill",
  "name": "git-cleanup",
  "category": "skill",
  "subcategory": "开发工具",
  "developer": "Trail of Bits / public upstream",
  "logo": null,
  "versions": [
    {
      "type": "Public upstream",
      "pricing": "公开上游已验证；需单独安装 Trail of Bits plugin",
      "models": "清理本地分支和 worktree 的流程；仅执行本地清理，并设置两次确认",
      "link": "https://trailofbits.com/skills/git-cleanup/"
    }
  ],
  "freeQuota": "暂无独立免费额度证据；本地 Git 操作本身无平台额度",
  "contextWindow": "N/A",
  "chineseSupport": 3,
  "pros": [
    "公开上游已验证；需要通过 Trail of Bits plugin 单独安装",
    "Trail of Bits 页面说明该 Skill 处理 local branches and worktrees，并强调 local cleanup only",
    "清理流程包含 two confirmation gates，要求用户在删除前确认目标和计划",
    "using-git-worktrees 提供隔离工作区检测和创建流程",
    "强调先检测现有 worktree 和 submodule，避免破坏 harness 状态",
    "任何清理动作都应 dry-run、列出目标并等待明确确认"
  ],
  "cons": [
    "需要单独安装该 Skill，当前页面按公开上游能力展示",
    "不要自动删除分支，仍应作为人工维护流程入口",
    "分支状态可能与远端和 PR 状态不一致"
  ],
  "bestFor": "Git 工作区隔离、worktree 状态检查、清理前审计清单，而不是自动删除分支",
  "funRanking": "归档",
  "personalExperience": {
    "rating": 3,
    "insights": "截至 2026-07-13，git-cleanup 有 Trail of Bits 公开上游，定位是清理 local branches and worktrees；它强调 local cleanup only、two confirmation gates 和人工确认，适合作为谨慎的 Git 维护流程入口。",
    "pitfalls": [
      "先列出目标和理由",
      "不要自动删除本地分支",
      "确认是否有 worktree 或未推送提交"
    ]
  },
  "decisionSummary": {
    "verdict": "公开上游已验证，需单独安装；适合作为 local branches and worktrees 清理前的人工确认工作流。",
    "bestFor": "开始 feature work 前确认是否在 isolated workspace，或清理前生成人工审计清单",
    "avoidIf": "你希望无确认地自动删除本地分支、worktree 或远端引用",
    "mainRisk": "Git 删除操作不可逆风险高；即便使用公开上游，也必须保留 two confirmation gates 和人工确认。",
    "alternatives": [
      "using-git-worktrees",
      "git branch --merged",
      "Git GUI cleanup tools"
    ]
  },
  "swot": {
    "S": "Git 维护前审计线索清晰",
    "W": "需单独安装且删除动作风险高",
    "O": "可作为 worktree 清理前检查清单",
    "T": "Git GUI 和原生命令竞争"
  },
  "tags": [
    "Skills",
    "Git",
    "维护",
    "已核验",
    "public-upstream"
  ]
}
