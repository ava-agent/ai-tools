# AI Tools Handbook 2026 Modernization Plan

> Goal: Move the site toward a credible, current, decision-oriented AI tool selection experience as of 2026-06-25.

Spec: `docs/superpowers/specs/2026-06-25-ai-tools-modernization-design.md`

## Phase 1: Audit Baseline

- [x] Scan current docs, routes, stores, data, and core components.
- [x] Verify tool count, category counts, duplicate IDs, and required fields.
- [x] Run dependency audit.
- [x] Run rendered checks on landing, tools, tool detail, comparison, workflows, and mobile.
- [x] Preserve audit findings in the modernization spec.

## Phase 2: Low-Risk Drift Cleanup

- [x] Fix stale `82` comment in `website/src/data/tools.js`.
- [x] Update `website/TROUBLESHOOTING.md` from port `3000` to `8765`.
- [x] Update stale port references in `website/FEATURES_UPDATE.md` and `website/FIXES_SUMMARY.md` where they present current runtime instructions.
- [x] Add a short note to README files that content freshness is being re-verified in staged passes.
- [x] Verify:
  - `npm test -- --run`
  - `npm run build`

## Phase 3: Content Trust Schema

- [x] Add a small content metadata convention in `website/src/data/tools.js` or a companion module:
  - `lastVerified`
  - `verificationStatus`
  - `sources`
  - `decisionSummary`
- [x] Add helper functions with safe defaults for existing tools.
- [x] Update UI to display verification status without breaking tools that do not yet have metadata.
- [x] Add tests for metadata helpers.
- [x] Verify:
  - `npm test -- --run`
  - `npm run build`

## Phase 4: First-Wave Official Content Verification

Use official sources first: product sites, official docs, official pricing pages, official GitHub repositories, and official changelogs. If official confirmation is not found, mark the claim as `needs-review`.

- [x] Verify and update AI IDE / coding tools:
  - [x] Cursor
  - [x] Claude Code
  - [x] Codex
  - [x] Gemini CLI
  - [x] Trae
  - [x] Windsurf
  - [x] Kiro
  - [x] Qoder
  - [x] OpenCode
  - [x] Aider
  - [x] GitHub Copilot
- [x] Verify and update agent/build tools:
  - [x] Devin
  - [x] Bolt
  - [x] Replit
  - [x] v0
  - [x] Lovable
- [x] Verify and update model/multimodal tools:
  - [x] Claude
  - [x] GPT/OpenAI
  - [x] Gemini
  - [x] DeepSeek
  - [x] Qwen
  - [x] Sora
- [x] Record source URLs in the metadata fields.
  - [x] First wave: Cursor, Claude Code, Codex, Gemini CLI, GitHub Copilot.
  - [x] Second wave: Trae, Windsurf, Kiro, Qoder, OpenCode, Aider.
  - [x] Agent/build wave: Devin, Bolt, Replit, v0, Lovable.
  - [x] Model/multimodal wave: Claude, GPT/OpenAI, Gemini, DeepSeek, Qwen, Sora.
- [x] Use conservative Chinese wording for uncertain claims.
  - [x] First wave rewritten with official-source-backed claims and `needs-review` defaults elsewhere.
  - [x] Second wave rewritten to remove stale prices, deprecated project status, and unsupported exact model claims.
  - [x] Agent/build wave rewritten around credits, tokens, included quota, and usage-based cost risks.
  - [x] Model/multimodal wave rewritten to remove stale fixed-family claims like Claude 4.5, GPT-5.2, and Gemini 3 as universal latest labels.
- [x] Verify:
  - `npm test -- --run`
  - `npm run build`

## Phase 5: Landing And Tools Experience

- [x] Replace the landing hero's trust claim with clearer decision-oriented copy.
- [x] Add a "按场景选工具" section for:
  - daily coding
  - complex refactor
  - free stack
  - long-context research
  - visual generation
- [x] Prevent mobile screenshots and first paint from showing misleading partially animated counters.
- [x] Remove or demote the `/tools` intro overlay so first-time users can browse immediately.
- [x] Add scenario/budget/verification filters to `/tools`.
- [x] Update tool cards to show decision and freshness chips.
- [x] Browser smoke check:
  - [x] desktop landing
  - [x] mobile landing
  - [x] desktop tools
  - [x] mobile tools

## Phase 6: Tool Detail Decision Card

- [x] Add a top "结论" card to `ToolDetail.vue`.
- [x] Show:
  - [x] verdict
  - [x] best fit
  - [x] avoid if
  - [x] main risk
  - [x] alternatives
  - [x] last verified/status
- [x] Keep SWOT/pros/cons for depth, but make them secondary.
- [x] Ensure missing metadata has graceful fallback copy.
- [x] Browser smoke check:
  - [x] `/tool/cursor`
  - [x] one default `needs-review` tool (`/tool/kling`)
  - [x] no deprecated or historical tool exists in current data; skipped by condition

## Phase 7: Comparison And Workflow Improvements

- [x] Add scenario presets to comparison.
- [x] Show dimension winners for selected tools.
- [x] Add recommended stacks to workflows.
- [x] Mark workflow tools with verification status.
- [x] Browser smoke check:
  - [x] comparison preset load
  - [x] manual compare flow
  - [x] workflow tab switching

## Phase 8: Dependency Modernization

- [x] Save a readable npm audit summary in docs or issue-style notes.
- [x] Try non-breaking `npm audit fix`.
- [x] Evaluate major upgrade path for Vite and Vitest separately.
  - [x] Result saved in `docs/superpowers/audits/2026-06-26-npm-audit-phase-8.md`.
- [x] If upgrading Vite/Vitest major versions:
  - [x] update configs only as needed
  - [x] rerun tests/build
  - [x] run browser smoke checks
  - Evidence 2026-06-28: upgraded to Vite 8.1.0 / Vitest 4.1.9 / esbuild 0.28.1; `npm.cmd test` passed 19 files / 55 tests; `npm.cmd run build` passed; Browser smoke covered desktop core routes and mobile menu/Matcher route switching.
- [x] Do not mix dependency majors with large UI/content changes.

## Phase 9: Final Verification

- [x] Run with Windows-safe PATH:
  - `$env:Path = 'C:\Program Files\nodejs;' + $env:Path`
- [x] Run:
  - `npm test -- --run`
  - `npm run build`
- [x] Browser smoke check:
  - `/`
  - `/tools`
  - `/tool/cursor`
  - `/comparison`
  - `/pricing`
  - `/resources`
  - `/matcher`
  - `/workflows`
  - `/quiz`
  - mobile `/`
  - mobile `/tools`
  - mobile `/matcher`
  - Evidence 2026-06-28: no framework overlay, no app console errors, no horizontal overflow, old title copy absent; mobile menu closes/hides after route change.
- [x] Final report includes:
  - changed files
  - updated content
  - source-verified claims
  - remaining uncertain claims
  - test/build/browser evidence
  - recommended next steps

## Phase 10: Continued Content Verification

- [x] Recount current metadata coverage before continuing:
  - 2026-06-29 before this phase: 125 tools total; 102 still lacked explicit `verificationStatus` / `lastVerified` / `sources`.
- [x] Verify and update remaining high-exposure coding tools:
  - [x] Qwen CLI: old OAuth free tier removed; current path is Coding Plan or API/provider configuration.
  - [x] Cline: pricing split into Cline Provider / ClinePass / self-managed provider paths.
  - [x] Continue: marked historical because the team joined Cursor and the repository is read-only.
  - [x] Goose: updated current AAIF repository/docs and split open-source software from model/provider cost.
  - [x] OpenHands: split Local / Individual / Enterprise and model/provider costs.
  - [x] JetBrains AI Assistant: updated to AI Free / Pro / Ultimate and AI credits wording.
- [x] Add regression guard in `website/src/utils/__tests__/toolMetadata.spec.js` for this wave:
  - official source URLs must be present,
  - `lastVerified` must be `2026-06-29`,
  - Qwen's old `2000次/天` / `1000次/天` quota must not return,
  - this wave must not use broad `完全免费` claims.
- [x] Verify and update first continued LLM wave:
  - [x] GLM: moved from fixed `GLM-4.7` to GLM / Z.AI family with GLM-5.2-aware pricing source.
  - [x] Kimi: moved from fixed K2.5 to K2.7 Code / K2.6-aware Kimi API source.
  - [x] MiniMax: moved from fixed M2.1 to MiniMax-M3 / M2.7-aware API source.
  - [x] Doubao: moved from single code-model wording to Doubao Seed 2.1 / Volcano Ark model-table wording.
  - [x] Grok: moved from Grok-4 Series / X Premium wording to Grok 4.3 / Grok Build and xAI app/API split.
- [x] Add regression guard in `website/src/utils/__tests__/toolMetadata.spec.js` for the continued LLM wave:
  - official source URLs must be present,
  - `lastVerified` must be `2026-06-29`,
  - stale fixed names (`GLM-4.7`, `Kimi K2.5`, `MiniMax M2.1`, `Grok-4 Series`) must not return as tool names,
  - old Doubao single-model wording and generic free-quota wording must not return.
- [x] Recount current metadata coverage after first LLM wave:
  - 2026-06-29 after this wave: 125 tools total; 91 still lack explicit `verificationStatus` / `lastVerified` / `sources`; LLM remaining unverified count is 8.
- [x] Recount current needs-review queue after subsequent content passes:
  - 2026-07-02 earlier export: 125 tools total; 106 `verified`, 1 `historical`, 5 `deprecated`, 13 intentionally `needs-review`.
  - 2026-07-02 current export after the local-skill/content boundary pass: 125 tools total; 110 `verified`, 2 `historical`, 10 `deprecated`, 3 intentionally `needs-review`.
  - Remaining `needs-review` ids: `yi`, `semgrep-skill`, `differential-review-skill`.
- [x] Close the final public-source review queue:
  - 2026-07-02 final export: 125 tools total; 113 `verified`, 2 `historical`, 10 `deprecated`, 0 `needs-review`.
  - `yi`: moved to `verified` for active 01.AI/Yi ecosystem, Yi open-weight sources, and current platform/license boundaries; API price, SLA, and procurement claims remain explicitly bounded.
  - `semgrep-skill`: moved to `verified` for the public `semgrep/skills` Skill and Semgrep CLI/docs/licensing boundaries; still described as requiring separate installation and human review.
  - `differential-review-skill`: moved to `verified` for the public Trail of Bits plugin Skill; still bounded to PR/commit/diff review, blast radius, test coverage, and human review.
- [x] Add a regression guard for the remaining `needs-review` queue:
  - every item must keep a dated verification pass,
  - every item must keep at least one source or local/public-source caveat,
  - every item must include uncertainty language,
  - queue text must not reintroduce broad claims such as `永久免费`, `完全免费`, `无限额度`, `能力最强`, or `价格最低`.
- [x] Downgrade hard claims in `needs-review` entries:
  - `qinglizi`: remove exact App Store in-app purchase prices from user-facing guidance and point users to current store/product pages.
  - `yi`: replace fixed context/model-spec wording with current-platform confirmation language.
  - `semgrep-skill`: replace exact contributor/Teams-price claims with current pricing/docs/auth-state language.
- [x] Apply second-pass subagent content review fixes:
  - `qinglizi`: soften "one-click evidence" language into source tracing plus human review.
  - `frontend-design-skill` / `webapp-testing-skill`: change developer copy from official-looking plugin wording to current verification-environment signals.
  - `semgrep-skill` / `differential-review-skill` / `second-opinion-skill`: reduce `needs-review` heat labels from `夯夯` to `夯`; fix repeated review wording.
  - `supabase-realtime-skill`: add the official Supabase Realtime docs URL as adjacent public evidence while keeping the item `needs-review`.
- [x] Apply third-pass content and routing fixes from subagent review:
  - `qinglizi`: move to `verified` for product existence, App Store/free app plus IAP signal, and medical disclaimer; keep price/rights/model/clinical claims bounded to current store/product pages.
  - `frontend-design-skill`: repoint the historical alias to the exact local `frontend-app-builder` skill and mark it `verified`.
  - `webapp-testing-skill`: mark exact local `frontend-testing-debugging` workflow as `verified`.
  - `mcp-builder-skill`: repoint to exact `building-mcp-server-on-cloudflare` / Cloudflare Workers remote MCP workflow and mark it `verified`.
  - `second-opinion-skill`, `audit-context-building-skill`, `git-cleanup-skill`, `ask-questions-skill`, and `property-based-testing-skill`: move to `deprecated` because the same work should flow through currently available review, planning, git/worktree, brainstorming, and TDD skills.
  - `supabase-realtime-skill`: move to `historical`, pointing users to the current Supabase skill and official Realtime docs.
  - Matcher AI Skills design path now recommends only `frontend-app-builder`; it no longer promotes deprecated `ui-ux-pro-max` as an active recommendation.
- [x] Add regression guards for this pass:
  - `needs-review` visible text now includes developer, subcategory, fun ranking, tags, and SWOT fields.
  - `needs-review` items must have valid non-future `lastVerified` dates, source provenance markers, main-risk boundary language, and no `一键循证` / strong heat labels.
  - visible metadata must not leak machine-specific phrases such as "本机", "随本地 ... 环境", "本地强相关", or "精确本地来源".
  - `deprecated` entries now share the same conservative queue checks as `needs-review` entries.
  - all catalog SWOT S/O fields must avoid generic growth boilerplate such as `需求增长`, `生态增长`, `需求真实`, or `价值明确`.
- [x] Apply low-risk UI polish from subagent style audit:
  - replay intro button keeps `min-h-11 min-w-11`.
  - review body text uses `break-words` for long URLs or stack-like content.
  - auth modal uses `max-h-[calc(100dvh-2rem)] overflow-y-auto` for short mobile viewports.
  - tool detail source, version, and related links keep `min-h-11` touch targets.
  - Matcher result actions and scenario-guide link rows wrap on narrow viewports and keep 44px touch targets.
  - Resource local PDF/video paths render as non-clickable metadata chips instead of misleading external links.
  - Tool detail version rows and the top website link render links only for `http:` / `https:` URLs.
- [x] Remove non-verified tools from active Matcher recommendation paths:
  - AI Skills quality path now recommends `differential-review-skill` for second-opinion diff review and `test-driven-development` for test strategy.
  - AI Skills security path no longer links deprecated `insecure-defaults-skill` / `sharp-edges-skill`.
  - Data/content paths no longer link historical `supabase-realtime-skill` or deprecated `week-report-skill`.
  - Regression guard now fails if active decision trees or scenario rows link any non-`verified` catalog entry.
- [x] Evidence 2026-07-02:
  - Focused content/UI suite passed: `npm test -- src/data/__tests__/contentFreshness.spec.js src/utils/__tests__/toolMetadata.spec.js src/views/__tests__/Resources.spec.js src/views/__tests__/ToolDetail.spec.js src/views/__tests__/Matcher.spec.js src/views/__tests__/Comparison.spec.js` -> 6 files / 87 tests.
  - `npm test -- --run` passed 40 files / 190 tests.
  - `npm audit --audit-level=moderate` reported 0 vulnerabilities.
  - `npm run build` passed with Vite 8.1.0.
  - Focused dist stale-marker scan passed for generic growth claims and internal audit tokens.
  - Browser QA on `http://127.0.0.1:4175/#/tool/frontend-design-skill` confirmed no console errors, no horizontal overflow, and no internal-source copy in visible text.
  - Browser QA at 320x568 confirmed replay button is at least 44px high, no horizontal overflow, and auth modal scrolls within the viewport.
  - Browser QA at 320x568 on `/matcher` with `AI 技能 -> 前端/体验 -> 设计实现` confirmed no horizontal overflow, wrapped scenario rows, 44px result actions, and no console errors/warnings.
  - Browser QA at 1024x768 on `/comparison` confirmed the desktop table state has no horizontal overflow and the `大型重构` scenario summary renders without console errors/warnings.
  - Browser QA at 390x844 on `/resources` confirmed local PDF/video source chips are not anchors, no page console errors, and no horizontal overflow.
  - Browser QA at 390x844 on `/tool/frontend-design-skill` confirmed `frontend-app-builder` verified copy, no unsafe local-source strings, and no unsafe anchors.
  - Browser QA at 390x844 on `/matcher` confirmed `AI 技能 -> 前端/体验 -> 设计实现` returns only `frontend-app-builder`; the same pass identified the then-unresolved Semgrep review badge, which was resolved in the final queue-closure pass below.
  - Browser QA at 1024x768 on `/comparison` confirmed no horizontal overflow and no page console errors.
- [x] Evidence 2026-07-02 final queue closure:
  - Targeted RED pass failed as intended while `yi`, `semgrep-skill`, and `differential-review-skill` were still `needs-review`; GREEN pass then passed 3 files / 59 tests after metadata and Matcher updates.
  - Focused content/UI suite passed: `npm test -- src/data/__tests__/contentFreshness.spec.js src/utils/__tests__/toolMetadata.spec.js src/views/__tests__/Resources.spec.js src/views/__tests__/ToolDetail.spec.js src/views/__tests__/Matcher.spec.js src/views/__tests__/Comparison.spec.js` -> 6 files / 88 tests.
  - Full test suite passed: `npm test -- --run` -> 40 files / 191 tests.
  - `npm audit --audit-level=moderate` reported 0 vulnerabilities.
  - `npm run build` passed with Vite 8.1.0.
  - Build artifact stale-marker scan passed on `website/dist` for generic growth claims and internal audit tokens.
  - Browser QA on `/tool/yi`, `/tool/semgrep-skill`, and `/tool/differential-review-skill` confirmed `已核验` badges, expected boundary copy, no unsafe internal-source strings, no horizontal overflow, and no console warnings/errors.
  - Browser QA at 390x844 on `/matcher` confirmed `AI 技能 -> 安全审计 -> 代码扫描` returns `semgrep` as `已核验` without a review note and `AI 技能 -> 测试/质量 -> 第二视角审查` returns `differential-review` as `已核验` without a review note.
- [x] Apply completion-audit fixes from final agent review:
  - Tool detail source cards now hide `本地核验线索` / `local-skill:` evidence instead of presenting current installation state as public provenance; public HTTP sources and `公开来源不足` notes still render.
  - Service Worker asset, icon, API, and notification fallback URLs now derive from `self.registration.scope`, so root and `/ai-tools/` GitHub Pages deployments do not cache root-only paths.
  - Landing tool bubbles use a touch-safe 44-64px size range, keep `min-h-11 min-w-11`, and no longer clip their hover/focus tooltips.
  - Intro video close control now has a 44px target, visible focus outline, `type="button"`, and `aria-label`.
  - Tool detail, Matcher, and Workflows inner panels now use lighter divider/rail treatments where they were visually reading as cards inside cards.
  - Resource and browse hero copy now uses historical/verified-decision framing instead of broad “best” or “full ecosystem” claims.
  - GitHub Pages workflow now runs `npm test -- --run` and `npm audit --audit-level=moderate` before `npm run build`.
- [x] Evidence 2026-07-02 final completion audit:
  - Full test suite passed after final fixes: `npm test -- --run` -> 40 files / 193 tests.
  - `npm audit --audit-level=moderate` reported 0 vulnerabilities.
  - `npm run build` passed with Vite 8.1.0.
  - Build artifact stale-marker scan passed on `website/dist` for generic growth claims, unsafe local-source labels, strong ranking copy, and internal audit tokens.
  - Current catalog check passed: 125 tools total; 113 `verified`, 2 `historical`, 10 `deprecated`, 0 `needs-review`; no missing metadata; no active decision/scenario link points to a non-`verified` tool.
  - Browser QA passed on `/tool/frontend-design-skill`, `/tool/semgrep-skill`, `/resources`, `/tools`, `/`, `/workflows`, and 390x844 `/matcher` paths for Semgrep and Differential Review; checks covered local-source hiding, public-source rendering, historical copy, 44px tool bubbles/actions, lighter workflow density, no horizontal overflow, and no page console warnings/errors.
- [ ] Continue periodic revalidation as products, pricing, API terms, and public Skill repositories change; no catalog entries remain in `needs-review` as of 2026-07-02.
