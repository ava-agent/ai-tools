# AI Tools Handbook content review

Review date: 2026-07-13

## Research preferences

- Delivery: repository fixes plus a local Markdown audit report.
- Images: no generated illustrations; use source material only when needed.
- Scope: broad review of all 125 catalog entries, with deeper checks for exact prices, quotas, product status, official ownership, and deprecated or historical entries.
- Source policy: prefer official product pages, documentation, pricing pages, release notes, and official repositories. Search snippets and aggregators are discovery aids only.

## Review questions

1. Are all 125 entries still active, correctly named, and assigned to the right developer and category?
2. Are pricing, free quota, model, platform, and capability claims current and traceable to official sources?
3. Are MCP entries correctly distinguished as official, community, hosted, local, beta, or historical?
4. Are internal and third-party skills represented as skills rather than official vendor products?
5. Do public pages avoid false precision, unsupported superlatives, stale dates, and misleading exact scores?
6. Are source and outbound links reachable, and are canonical/indexing signals consistent with the production domain?

## Initial evidence

- AnyCap live crawl, homepage: request `trc_2106aa1cd340979f2634db3fca97fcfa`.
- AnyCap live crawl, Cursor detail: request `trc_6f86a14619237eac158c9f51105c98f2`.
- AnyCap live crawl, pricing page: request `trc_59b53d831a073430f4fbbd7f68975f67`.
- AnyCap live SERP scan for `AI 工具对比 2026`: request `trc_d53a2aff489faa644caaf84f298545c5`.
- AnyCap cross-product freshness grounding: request `trc_cfdd419479e1f74935a558e27b93d998`.
- Catalog structure before this review: 125 unique IDs, 7 categories, 120 verified, 2 historical, 3 deprecated, no missing source arrays.

## Initial findings

- The homepage shows exact counts as `125+` and `7+`; the catalog currently contains exactly 125 tools in exactly 7 categories.
- The pricing page exposes a derived `valueScore` as an exact `100/100` style score without a visible methodology. Treat it as a heuristic or remove the false precision.
- README copy still uses `125+` in several current-facing locations even though the catalog count is generated and exact.
- Historical planning documents contain old claims by design; they should not be rewritten as current product documentation.
- Automated reachability check covered 395 unique source and version URLs. One confirmed stale URL returned 404: `https://docs.qoder.com/account/credits`; the current official page is `https://docs.qoder.com/Credits`.
- Another 80 URLs returned 403, timeout, or network errors from automated fetch. These are not classified as broken without a second official-source check because many vendor sites block scripted requests.
- The cross-product grounding response incorrectly claimed that Codex was retired and used secondary release aggregators despite an official-source-only prompt. None of its claims are accepted without checking the linked first-party page directly.

## Agent team coverage

Four independent review slices covered the complete catalog with official sources as the acceptance boundary:

| Slice | Entries | Focus |
| --- | ---: | --- |
| AI IDE, CLI, core LLM | 1-32 | plans, model names, ownership, context limits, canonical docs |
| Creative tools and agent platforms | 33-64 | current model generations, credits, licenses, regional products |
| Agent SDKs and MCP servers | 65-96 | endpoints, tool counts, deprecations, local versus hosted paths |
| Automation, cloud models, skills | 97-125 | task pricing, platform migration, public skill provenance, historical aliases |

## Applied corrections

- Replaced stale plan and model claims for Cursor, JetBrains AI, GPT-5.6, GLM, Grok, Midjourney, Mistral/Vibe, Devin, n8n, Zapier, Make, Cohere, Amazon Nova, and other high-change entries.
- Corrected product ownership for Cline, Continue, OpenHands, Crush, Dify, LangChain, Coze Global/CN, AgentScope, CAMEL-AI, Verdent, and medical/creative products.
- Removed unsupported region-specific prices from Antigravity and unsupported page-update timestamps from Doubao.
- Marked Kiro, Kling, Coze, Yi, and the mixed `research-skill` entry as `needs-review` where official pages conflict, require login, or combine unrelated products.
- Marked Continue, AutoGen, Supabase Realtime alias, `week-report-generator`, and `think-harder` as `historical`.
- Restored `ui-ux-pro-max` as a verified, actively maintained third-party skill and documented the MIT Basic versus commercial Premium boundary.
- Replaced local-environment-only skill evidence with public upstream `SKILL.md` sources for OpenAI Build Web Apps, Cloudflare, OpenAI skill-creator, Semgrep, Supabase, and ui-ux-pro-max.
- Removed `needs-review` entries from active matcher recommendations while retaining them in the searchable catalog.
- Replaced exact `125+` / `7+` counts with generated exact counts and relabeled the pricing heuristic as a directory reference score with a visible methodology warning.

## Final catalog state

- 125 total entries across 7 categories.
- 115 `verified` entries.
- 5 `needs-review` entries: Kiro, Kling, Coze, Yi, and `research-skill`.
- 5 `historical` entries: Continue, AutoGen, Supabase Realtime alias, `week-report-generator`, and `think-harder`.
- 0 `deprecated` entries.
- Every entry has `lastVerified: 2026-07-13` and a non-empty source list.

## Validation status

- Content, metadata, pricing, and hero guard tests: 79/79 passed.
- Full Vitest suite: 55 files and 308 tests passed. One router test initially hit its 5-second timeout while tests, audit, lint, and Gitleaks ran concurrently; it passed alone and the subsequent isolated full suites passed.
- ESLint: 0 errors and 4 pre-existing warnings.
- Generated catalogs: 125 entries and `check:data` clean.
- Landing assets: 14 WebP files, 161,732 bytes total.
- Vercel/root production build: passed with Node 24.
- GitHub Pages `/ai-tools/` production build: passed with Node 24.
- Browser QA: root and `/ai-tools/` homepage, pricing, and GPT-5.6 detail routes rendered on desktop; homepage and pricing rendered on a 390 x 844 mobile viewport; no horizontal overflow, failed images, framework overlay, or console errors were observed.
- Dependency audit: 0 vulnerabilities.
- Gitleaks 8.30.1: no leaks found across approximately 399.82 MB.
- Git diff whitespace check: clean.

## Independent final review

A fifth read-only agent reviewed status/date integrity, generated-data consistency, active recommendations, landing/pricing surfaces, and test strength. Its findings were resolved before delivery:

- Temporary `dist-vercel` and `dist-pages` directories were removed before the final lint gate.
- Every `needs-review` detail now displays `待复核`; historical entries display `历史` or `归档` instead of an active ranking.
- Non-verified entries were removed from landing featured lists and scenario backups.
- Pricing projections now retain `verificationStatus`, and ranked pricing recommendations only include verified entries.
- Freshness safeguards now apply conservative ranking checks to historical as well as needs-review/deprecated records.
