# AI Tools Handbook 2026 Modernization Design

## Goal

Upgrade `D:\project\ai-tools` from an older AI tool catalog into a more trustworthy, more useful, and more modern AI tool selection site as of 2026-06-25.

The work should preserve the current Vue 3 / Vite / Tailwind / Pinia / Vue Router architecture and avoid deleting existing routes unless a later implementation step proves a route is harmful or unmaintainable.

## Current State Audit

### Product Shape

- The site is a Vue/Vite single-page app under `website/`.
- It currently presents a two-layer experience:
  - `/` landing page with hero, tool landscape, recommendations, and entry cards.
  - `/tools` searchable catalog with 125 tools across 7 categories.
- Secondary routes exist for tool details, comparison, matcher, pricing, workflows, resources, quiz, and profile.
- Supabase is optional. If `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are absent, auth, ratings, reviews, and cloud sync safely skip.

### Data Audit

- `website/src/data/tools.js` contains 125 tools and 129 version links.
- Category counts are internally consistent:
  - `ide`: 13
  - `cli`: 12
  - `llm`: 18
  - `multimodal`: 21
  - `agent`: 20
  - `mcp`: 22
  - `skill`: 19
- No duplicate tool IDs were found in the current dataset.
- All currently scanned tools have the expected core fields used by the UI.
- The data has many strong freshness claims such as exact 2026 model versions, prices, free quotas, rankings, CVE references, star counts, and launch dates. These must be treated as unverified until checked against official sources.
- Several high-impact claims are especially risky because they are time-sensitive:
  - model names and availability for OpenAI, Anthropic, Google, DeepSeek, Qwen, and Sora
  - pricing and plan details for Cursor, Claude Code, GitHub Copilot, Replit, Bolt, v0, Lovable, Warp, and Runway
  - product status for OpenCode, Qoder, Antigravity, Cline, Continue, OpenHands, and Goose
  - quota/free-tier claims for Gemini CLI, Trae, Sora, Runway, and API-backed tools

### Content And Documentation Drift

- Root `README.md` and `website/README.md` align with the 125-tool count and port `8765`.
- Older planning docs still mention the old 82-tool era. These are historical and should not be rewritten unless they confuse current usage.
- `website/TROUBLESHOOTING.md`, `website/FEATURES_UPDATE.md`, and `website/FIXES_SUMMARY.md` still mention `localhost:3000` or `3002`, which contradicts `vite.config.js` port `8765`.
- `website/src/data/tools.js` still starts with a stale comment: "基于调研文档整合 82 款工具".
- Some current marketing copy uses "2026 深度集成与实战教学版" as a universal label. It reads dated and encourages false freshness unless paired with "last verified" metadata.

### Rendered UI Audit

Rendered checks were run against `http://127.0.0.1:8765/`.

- Desktop app loads without relevant console errors.
- Landing page is visually polished, but its first screen is more brand/visual than decision-oriented. It does not immediately answer "which tool should I choose?"
- Landing hero uses animated counters. On mobile, screenshots can catch counters mid-animation, which briefly shows misleading partial values such as unfinished tool/category/insight counts.
- The "1742+ 实战洞察" count is computed from arrays and fields. It needs a clearer label or source explanation to avoid looking fabricated.
- `/tools` is functional, but filtering is mostly keyword/category only. It lacks decision filters such as budget, recommended status, use case, privacy posture, verification state, or "best for".
- `/tools` first visit can show an intro/demo overlay, which blocks the catalog and conflicts with the goal of fast selection.
- Tool cards are compact and readable, but all 5.0-rated tools compete equally. The list does not separate "verified/current" from "strong but stale/unverified".
- Tool detail pages emphasize insights, SWOT, pros/cons, and versions, but need a top decision card:
  - recommended for / avoid if
  - current pricing confidence
  - last verified date
  - best alternatives
  - main risk
- Comparison page is useful for dense tabular comparison, but still reads like a data table rather than a decision aid. It needs scenario presets and clearer "winner by dimension" summaries.
- Workflows page is closer to the desired practical tone. It should become the model for other pages: scenario first, steps second, pitfalls nearby.

### Technical Audit

- `npm test -- --run` passes in the current local setup when `C:\Program Files\nodejs` is placed before the Codex WindowsApps Node path.
- `npm run build` passes under the same PATH condition.
- `npm audit --json` reports 16 vulnerabilities:
  - 6 moderate
  - 9 high
  - 1 critical
- The critical item is `vitest <3.2.6`, with the suggested fix path requiring a major upgrade to `vitest@4.1.9`.
- Vite-related advisories suggest major upgrade pressure (`vite@8.1.0` in npm's suggested path). This should be handled as a dedicated dependency modernization step, not mixed into content/UI updates.

## Optimization Routes

### Option A: Conservative Refresh

Update high-impact tool data, fix obvious docs drift, reduce stale claims, and lightly improve copy and cards.

Pros:
- Lowest risk.
- Fastest to verify.
- Minimal code churn.

Cons:
- The site remains mostly a catalog.
- Does not fully address the "how do I choose?" problem.

### Option B: Medium Restructure

Keep the existing architecture and routes, but change the experience from "browse a catalog" to "make a tool decision".

Scope:
- Add content verification metadata and confidence language.
- Update the top 20-30 high-impact tools first using official sources.
- Improve landing page around selection paths, not just visual impact.
- Improve `/tools` filtering and cards around budget, use case, recommendation, and verification.
- Add a decision summary to tool detail pages.
- Improve comparison presets and dimension summaries.
- Clean docs drift and dependency risks in separate steps.

Pros:
- Best balance of trust, usefulness, and implementation risk.
- Preserves existing routes and most data.
- Directly addresses the user goal without boiling the ocean.

Cons:
- Requires careful staged work.
- Some claims remain "pending verification" after the first pass.

### Option C: Deep Rebuild

Rework the information architecture, data schema, scoring model, and content pipeline around a maintained tool database.

Pros:
- Best long-term maintainability.
- Could support real verification history and source citations.

Cons:
- Largest blast radius.
- High risk of stalling before the site improves.
- Requires a stronger content maintenance model than this repo currently has.

## Recommendation

Use Option B: Medium Restructure.

This route keeps the existing site intact while shifting its center of gravity from "a lot of AI tools" to "credible selection guidance". It gives the user-visible page a real upgrade and creates a maintainable path for content freshness.

## Design Direction

### Content Trust Model

Add a lightweight content freshness convention before changing all 125 tools:

- `lastVerified`: ISO date string for data that has been checked.
- `verificationStatus`: `verified | needs-review | historical | deprecated`.
- `sources`: optional array of official source URLs.
- `decisionSummary`: short fields that power cards and details:
  - `verdict`
  - `bestFor`
  - `avoidIf`
  - `mainRisk`
  - `alternatives`

This can be introduced gradually. Existing tools can default to `needs-review` until verified.

### Content Update Priorities

Do not attempt to rewrite all 125 tools in one pass.

First wave:
- Cursor
- Claude Code
- Codex
- Gemini CLI
- Trae
- Windsurf
- Kiro
- Qoder
- OpenCode
- Aider
- Devin
- Bolt
- Replit
- GitHub Copilot
- Claude
- OpenAI / GPT
- Gemini
- DeepSeek
- Qwen
- Sora

Second wave:
- Cline
- Continue
- OpenHands
- Goose
- Runway
- Kling
- Midjourney
- Context7

Progress as of 2026-06-26:
- Verified with official sources: Cursor, Claude Code, Codex, Gemini CLI, GitHub Copilot, Trae, Windsurf, Kiro, Qoder, OpenCode, Aider, Devin, Bolt, Replit, v0, Lovable, Claude, OpenAI / GPT, Gemini, DeepSeek, Qwen, Sora.
- First-wave content is now complete. The model/multimodal wave removed stale fixed-family labels such as `Claude 4.5 Series`, `GPT-5.2 Series`, and `Gemini 3 Series` where official sources no longer support them as universal "latest" labels.
- Remaining high-impact follow-up priorities move to second-wave tools such as Cline, Continue, OpenHands, Goose, Runway, Kling, Midjourney, Context7, and the separate OpenAI image-generation entry.

### Page Experience

Landing page:
- Keep the visual identity, but add a decision-first section above or immediately after the hero:
  - "我该选哪个？"
  - "日常写代码 / 复杂重构 / 免费方案 / 长文档调研 / 视觉生成"
- Replace or qualify "1742+ 实战洞察" with a clearer claim such as "125 tools, 7 categories, curated practical notes".
- Avoid first-screen counters that can show incomplete values on mobile.

Tools page:
- Keep search and category filters.
- Add decision filters:
  - scenario
  - budget
  - platform
  - verified/current status
  - local/open-source/privacy-friendly
- Add compact chips on cards:
  - `已核验`
  - `待核验`
  - `价格敏感`
  - `推荐主力`
  - `适合作备选`

Tool detail page:
- Add a top "结论" card before long analysis:
  - "一句话结论"
  - "适合谁"
  - "不适合谁"
  - "主要风险"
  - "替代品"
  - "资料核验日期"
- Move community/reviews lower unless Supabase is configured and active.

Comparison page:
- Keep the table, but add scenario presets with summarized winners:
  - "个人主力开发"
  - "团队合规"
  - "零成本"
  - "长上下文"
  - "多模态创作"
- Add "按维度胜出" display for selected tools.

Workflows page:
- Keep the current practical structure.
- Add "recommended stack" for each workflow.
- Link each workflow to verified tools and mark outdated stacks if sources are not yet checked.

### Documentation And Maintenance

- Rewrite current usage docs around port `8765` and actual route structure.
- Keep historical superpowers specs as history, but add a current modernization spec and plan.
- Add a short content maintenance guide:
  - what claims require official source verification
  - how to mark unknowns
  - how to update `lastVerified`

### Dependency Strategy

Handle dependency modernization separately from content/UI changes.

Initial safe steps:
- Record `npm audit` output and affected packages.
- Upgrade patch/minor packages where lockfile impact is small.
- Treat Vite/Vitest major upgrades as a dedicated task with tests/build/browser smoke checks.

## Non-Goals For The First Implementation Pass

- Do not rewrite every tool.
- Do not migrate to a new framework.
- Do not add a backend requirement.
- Do not make Supabase mandatory.
- Do not remove hidden routes solely because they are not in the main nav.
- Do not create a full editorial CMS.

## Success Criteria

- The first screen explains what the site helps the user decide.
- High-impact tools have fresher, source-backed data or are clearly marked as needing review.
- Users can filter by scenario and budget, not only category.
- Tool details start with a decision summary before long analysis.
- Docs match the actual dev port and route structure.
- Tests and production build pass.
- Browser smoke checks cover landing, tools, detail, comparison, workflows, and one mobile viewport.
