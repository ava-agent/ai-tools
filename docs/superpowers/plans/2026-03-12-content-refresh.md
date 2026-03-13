# AI Tools 全面内容刷新 Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix all outdated model references, expired dates, stale pricing, and inconsistent content across the ai-tools website data layer and research documentation.

**Architecture:** Pure data/content updates across 5 JS data files and 5+ markdown docs. No code logic changes. All views pull data dynamically from these files, so fixing the data layer automatically fixes the UI.

**Tech Stack:** JavaScript (data files), Markdown (docs)

---

## Chunk 1: Critical — decisions.js Model References

The decision tree recommends outdated models (Claude 3.5, Gemini 2.5, GPT-4o). This is the most user-facing issue.

### Task 1: Fix decisions.js outdated model references

**Files:**
- Modify: `website/src/data/decisions.js:74,83-84,92`

- [ ] **Step 1: Update code generation model recommendation**

Line 74: Change `Claude 3.5 Sonnet` → `Claude 4.5 Sonnet`
```javascript
// Before
{ label: '充足', result: 'Claude 3.5 Sonnet', reason: '代码能力最强' },
// After
{ label: '充足', result: 'Claude 4.5 Sonnet', reason: '代码能力最强' },
```

- [ ] **Step 2: Update reasoning model recommendations**

Line 83: Change `Gemini 2.5 Pro` → `Gemini 3 Pro`
Line 84: Change `Claude 3.5` → `Claude 4.5`
```javascript
// Before
{ label: '超长（1M+）', result: 'Gemini 2.5 Pro', reason: '1M 上下文' },
{ label: '长（200K）', result: 'Claude 3.5', reason: '推理稳定' },
// After
{ label: '超长（1M+）', result: 'Gemini 3 Pro', reason: '2M 上下文' },
{ label: '长（200K）', result: 'Claude 4.5', reason: '推理稳定' },
```

- [ ] **Step 3: Update chat model recommendation**

Line 92: Change `GPT-4o` → `GPT-5.2`
```javascript
// Before
{ label: '通用', result: 'GPT-4o', reason: '生态最成熟' },
// After
{ label: '通用', result: 'GPT-5.2', reason: '生态最成熟' },
```

- [ ] **Step 4: Run tests to verify no breakage**

Run: `cd website && npx vitest run`
Expected: All tests pass

- [ ] **Step 5: Commit**

```bash
git add website/src/data/decisions.js
git commit -m "fix: update outdated model references in decision tree (Claude 3.5→4.5, GPT-4o→5.2, Gemini 2.5→3)"
```

---

## Chunk 2: Critical — tools.js Outdated Model References

### Task 2: Fix Warp outdated models (most critical — Claude 3.5 + GPT-4o)

**Files:**
- Modify: `website/src/data/tools.js:1355`

- [ ] **Step 1: Update Warp models**

```javascript
// Before (line 1355)
models: 'Claude 3.5 Sonnet, Claude 3.5 Haiku, GPT-4o'
// After
models: 'Claude Sonnet 4.5, Claude Haiku 4.5, GPT-5.2'
```

- [ ] **Step 2: Commit**

```bash
git add website/src/data/tools.js
git commit -m "fix: update Warp tool model references to current versions"
```

### Task 3: Fix IDE tools outdated model references

**Files:**
- Modify: `website/src/data/tools.js:14,42,69,1253,1303`

- [ ] **Step 1: Update Cursor models**

Line 14: `o1` is outdated model name
```javascript
// Before
models: 'Composer-1.5, Claude, GPT-4o, o1'
// After
models: 'Composer-1.5, Claude, GPT-5.2, o3'
```

- [ ] **Step 2: Update Trae Global models**

Line 42:
```javascript
// Before
models: 'Claude, GPT-4, DeepSeek'
// After
models: 'Claude, GPT-5, DeepSeek'
```

- [ ] **Step 3: Update Windsurf models**

Line 69:
```javascript
// Before
models: 'Claude, GPT-4, SWE-1.5'
// After
models: 'Claude, GPT-5, SWE-1.5'
```

- [ ] **Step 4: Update Bolt.new models**

Line 1253:
```javascript
// Before
models: 'Claude, GPT-4o, Gemini'
// After
models: 'Claude, GPT-5, Gemini'
```

- [ ] **Step 5: Update Lovable models**

Line 1303:
```javascript
// Before
models: 'Claude, GPT-4o'
// After
models: 'Claude, GPT-5'
```

- [ ] **Step 6: Commit**

```bash
git add website/src/data/tools.js
git commit -m "fix: update IDE tools model references (GPT-4o→5, o1→o3)"
```

### Task 4: Fix CLI tools outdated model references

**Files:**
- Modify: `website/src/data/tools.js:391,397,541`

- [ ] **Step 1: Update Qwen CLI outdated comparisons**

Line 391 pros: Change `超越 GPT-4o/Claude 3.5` → `超越 GPT-4o/Claude 3.5（2026年1月基准测试）`
Line 397 insights: Change `超越 GPT-4o 和 Claude 3.5 Sonnet` → `超越 GPT-4o 和 Claude 3.5 Sonnet（2026年初基准测试数据）`

Note: Keep the original comparison targets since benchmarks were run against those specific models. Add date context instead.

- [ ] **Step 2: Update Goose outdated models**

Line 541: Replace `GPT-4o/o1` with `GPT-5/o3`
```javascript
// Before
models: '20+ LLM: Anthropic Claude, OpenAI GPT-4o/o1, Google Gemini, xAI Grok-3, ...'
// After
models: '20+ LLM: Anthropic Claude, OpenAI GPT-5/o3, Google Gemini, xAI Grok-4, ...'
```

- [ ] **Step 3: Commit**

```bash
git add website/src/data/tools.js
git commit -m "fix: update CLI tools model references and benchmark date context"
```

---

## Chunk 3: High — Expired Dates and Stale Temporal References

### Task 5: Fix expired dates in tools.js

**Files:**
- Modify: `website/src/data/tools.js` (multiple lines)

- [ ] **Step 1: Fix Qoder expired free trial**

Line 98:
```javascript
// Before
freeQuota: '2026年2月1-15日免费试用',
// After
freeQuota: 'Pro $20/月、Pro+ $60/月（免费试用已结束）',
```

- [ ] **Step 2: Fix Zed past date → historical tense**

Line 134 insights: Change `2025年10月 Windows 已正式发布` → `Windows 版已于 2025 年 10 月正式发布`

- [ ] **Step 3: Fix Antigravity past dates**

Line 238 insights: Change `Google 2025年11月18日发布的 AI IDE` → `Google 于 2025 年 11 月发布的 AI IDE`

- [ ] **Step 4: Fix GitHub Copilot past date**

Line 265 insights: Change `2025 年 12 月推出 Agent Mode` → `已推出 Agent Mode（2025年12月）`

- [ ] **Step 5: Fix Sora expired free user restriction**

Line 936:
```javascript
// Before
freeQuota: '2026年1月10日起免费用户无法使用',
// After
freeQuota: '需 ChatGPT Plus/Pro 订阅（免费用户已无法使用）',
```

Line 939 pros: Change `2026年初将包含迪士尼品牌角色` → `已集成迪士尼品牌角色（2026年初上线）`

Line 943 insights: Change `2026 年 1 月 10 日起免费用户无法使用` → `免费用户已无法使用`

- [ ] **Step 6: Fix ERNIE past dates**

Line 1460:
```javascript
// Before
freeQuota: '2025年4月起消费者完全免费',
// After
freeQuota: '消费者完全免费（2025年4月起）',
```

Line 1469 insights: Change `2025年3月发布 ERNIE 4.5 和 X1，4月起消费者完全免费。...2025年11月发布 ERNIE 5.0` → `ERNIE 4.5/X1 已发布，消费者完全免费。ERNIE 5.0 于 2025 年底发布，持续迭代中。`

- [ ] **Step 7: Fix Aider stale version**

Line 423 insights: Change `最新版本 v0.86.0 (2025年8月)` → `由 Paul Gauthier 维护的活跃开源项目`

- [ ] **Step 8: Commit**

```bash
git add website/src/data/tools.js
git commit -m "fix: update expired dates and temporal references to current tense"
```

### Task 6: Fix Antigravity stale "新品" tag and preview status

**Files:**
- Modify: `website/src/data/tools.js:242,229`

- [ ] **Step 1: Update Antigravity tags**

Line 242: Remove `'新品'` from tags, replace with `'AgentFirst'`
```javascript
// Before
tags: ['Google', 'Gemini', '新品', 'AgentSkills', 'Beta免费'],
// After
tags: ['Google', 'Gemini', 'AgentFirst', 'AgentSkills', 'Beta免费'],
```

- [ ] **Step 2: Update freeQuota to add uncertainty**

Line 229: Add note about preview status
```javascript
// Before
freeQuota: 'Public Preview期间免费（每 5 小时刷新配额）',
// After
freeQuota: 'Public Preview 期间免费（每 5 小时刷新配额，正式版定价待定）',
```

- [ ] **Step 3: Commit**

```bash
git add website/src/data/tools.js
git commit -m "fix: update Antigravity from '新品' to established status"
```

---

## Chunk 4: High — funFacts.js and Other Data Files

### Task 7: Fix funFacts.js outdated references

**Files:**
- Modify: `website/src/data/funFacts.js:22,32,44,50`

- [ ] **Step 1: Fix Claude Code context window fact**

Line 22:
```javascript
// Before
'Claude Code 拥有 200K Token 的超大上下文窗口，可以一次理解整个项目',
// After
'Claude Code 拥有 1M Token 的超大上下文窗口（Opus 4.6），可以一次理解整个项目',
```

- [ ] **Step 2: Fix Gemini CLI model reference**

Line 32:
```javascript
// Before
'Gemini CLI 使用 Gemini 2.5 Pro 模型，在代码推理方面表现突出',
// After
'Gemini CLI 支持 Gemini 3 Pro 模型，在代码推理方面表现突出',
```

- [ ] **Step 3: Fix DeepSeek GPT-4 comparison**

Line 44:
```javascript
// Before
'DeepSeek 是目前性价比最高的 AI 模型之一，价格仅为 GPT-4 的 1/10',
// After
'DeepSeek 是目前性价比最高的 AI 模型之一，API 价格远低于 GPT-5 和 Claude',
```

- [ ] **Step 4: Fix GPT fun fact**

Line 50:
```javascript
// Before
'GPT-4o 支持多模态输入，可以同时处理文本、图片、音频和视频',
// After
'GPT-5.2 支持多模态输入，可以同时处理文本、图片、音频和视频',
```

- [ ] **Step 5: Fix Gemini fun fact**

Line 60:
```javascript
// Before
'Gemini 2.5 Pro 拥有最长的上下文窗口，可达 100 万 Token',
// After
'Gemini 3 Pro 拥有最长的上下文窗口，可达 200 万 Token',
```

- [ ] **Step 6: Fix Grok fun fact**

Line 69:
```javascript
// Before
'Grok 3 号称是"地球上最聪明的 AI"，在多个基准测试中领先',
// After
'Grok-4 号称是"地球上最聪明的 AI"，在多个基准测试中领先',
```

- [ ] **Step 7: Commit**

```bash
git add website/src/data/funFacts.js
git commit -m "fix: update funFacts model references to current versions"
```

### Task 8: Fix DeepSeek insights GPT-4 reference

**Files:**
- Modify: `website/src/data/tools.js:680`

- [ ] **Step 1: Update DeepSeek insights**

Line 680:
```javascript
// Before
insights: 'DeepSeek R1 推理能力极强，价格极具竞争力。是 GPT-4 的强力替代。...',
// After
insights: 'DeepSeek R1 推理能力极强，价格极具竞争力。API 价格远低于顶级模型。...',
```

- [ ] **Step 2: Commit**

```bash
git add website/src/data/tools.js
git commit -m "fix: update DeepSeek insights to remove GPT-4 comparison"
```

---

## Chunk 5: Medium — Gemini CLI Model Consistency

### Task 9: Fix Gemini CLI models field inconsistency

**Files:**
- Modify: `website/src/data/tools.js:359`

The models field lists "Gemini 2.5 Pro, 2.5 Flash, 2.5 Flash-Lite, 3 Pro" which is inconsistent — it lists both old and new models without clear hierarchy.

- [ ] **Step 1: Update Gemini CLI models to emphasize current**

```javascript
// Before
models: 'Gemini 2.5 Pro, 2.5 Flash, 2.5 Flash-Lite, 3 Pro'
// After
models: 'Gemini 3 Pro, 2.5 Pro, 2.5 Flash, Flash-Lite'
```

- [ ] **Step 2: Commit**

```bash
git add website/src/data/tools.js
git commit -m "fix: reorder Gemini CLI models to prioritize current versions"
```

---

## Chunk 6: Medium — OpenHands Version Inconsistency

### Task 10: Fix OpenHands version inconsistency

**Files:**
- Modify: `website/src/data/tools.js:566,577`

- [ ] **Step 1: Fix OpenHands models outdated GPT reference**

Line 566: Change `GPT-4/GPT-5` → `GPT-5`
```javascript
// Before
models: 'Claude Sonnet 4.5/Opus 4.1, GPT-4/GPT-5, DeepSeek V3.2/R1, ...'
// After
models: 'Claude Sonnet 4.5/Opus 4.1, GPT-5, DeepSeek V3.2/R1, ...'
```

- [ ] **Step 2: Fix OpenHands version inconsistency**

Line 577 insights says "最新版本 1.3.0 (2026-02-02)" but line 571 says "最新版本 1.12.0 (2026-02-09)".
Change line 577:
```javascript
// Before
insights: '...最新版本 1.3.0 (2026-02-02)...'
// After
insights: '...最新版本 1.12.0 (2026-02-09)...'
```

- [ ] **Step 3: Commit**

```bash
git add website/src/data/tools.js
git commit -m "fix: correct OpenHands version inconsistency and model references"
```

---

## Chunk 7: Research Documentation Updates

### Task 11: Update 调研/工具选型决策指南.md model references

**Files:**
- Modify: `ai_tools/调研/工具选型决策指南.md`

- [ ] **Step 1: Read the file to identify exact outdated references**

Read: `调研/工具选型决策指南.md`

- [ ] **Step 2: Update Claude 3.5 → Claude 4.5 references**

Replace all occurrences of `Claude 3.5` with `Claude 4.5` (where it refers to the latest/recommended model).

- [ ] **Step 3: Update Gemini 2.5 Pro → Gemini 3 Pro references**

Where Gemini is recommended as current best, update version.

- [ ] **Step 4: Update GPT-4o → GPT-5.2 references**

Where GPT is recommended as current, update version.

- [ ] **Step 5: Update version date**

Add or update the document date to 2026-03-12.

- [ ] **Step 6: Commit**

```bash
git add 调研/工具选型决策指南.md
git commit -m "docs: update 工具选型决策指南 model references to 2026 Q1 versions"
```

### Task 12: Update 调研/README.md date

**Files:**
- Modify: `ai_tools/调研/README.md:7`

- [ ] **Step 1: Update date**

```markdown
<!-- Before -->
> **更新日期**：2026年1月29日
<!-- After -->
> **更新日期**：2026年3月12日
```

- [ ] **Step 2: Commit**

```bash
git add 调研/README.md
git commit -m "docs: update 调研 README date to 2026-03-12"
```

### Task 13: Clean up PLAN files

**Files:**
- Check: `ai_tools/调研/PLAN2.md`, `PLAN3.md`, `PLAN4.md`

- [ ] **Step 1: Read PLAN files to assess content**

- [ ] **Step 2: If empty/skeleton, mark completed items in 调研/README.md's 待补充清单**

Update the checklist in README.md to reflect what's been completed.

- [ ] **Step 3: Commit if changes made**

```bash
git add 调研/
git commit -m "docs: update PLAN status in README checklist"
```

---

## Chunk 8: Verification and Final Testing

### Task 14: Run full verification

- [ ] **Step 1: Run tests**

```bash
cd website && npx vitest run
```
Expected: All tests pass

- [ ] **Step 2: Run build to verify no compilation errors**

```bash
cd website && npm run build
```
Expected: Build succeeds

- [ ] **Step 3: Run lint**

```bash
cd website && npm run lint
```
Expected: No errors

- [ ] **Step 4: Spot-check key pages in dev server**

Start dev server, verify:
- Home page shows correct tool count
- Decision tree shows updated model names
- Tool detail pages show correct models
- Fun facts show updated content

- [ ] **Step 5: Final commit (if any lint fixes needed)**

```bash
git add -A
git commit -m "chore: lint fixes after content refresh"
```

---

## Summary of All Changes

| File | Changes | Priority |
|------|---------|----------|
| `decisions.js` | 4 model refs: Claude 3.5→4.5, Gemini 2.5→3, GPT-4o→5.2 | Critical |
| `tools.js` | ~20 model refs, 7 expired dates, 1 version inconsistency, 1 stale tag | Critical-High |
| `funFacts.js` | 6 outdated facts (model names, context windows) | High |
| `调研/工具选型决策指南.md` | Model references update | Medium |
| `调研/README.md` | Date update | Medium |

**Total estimated changes:** ~35 edits across 5-7 files
