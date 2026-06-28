# AI Tools Handbook Full Exploration And Optimization

Goal:
Thoroughly explore and optimize this repository. The final state must be supported by current evidence: the repository structure and main product flows are inventoried; the `website/` Vue/Vite app's high-priority correctness, UX, responsive, accessibility, performance, asset, and documentation issues are fixed or explicitly recorded as external blockers; and completion is proven by build/test/lint plus desktop/mobile browser smoke checks.

Workdir:
`<repo-root>`

Must read before continuing after any resume:
1. `README.md`
2. `website/package.json`
3. `website/README.md` if present
4. `website/OPTIMIZATION.md`
5. `UX_OPTIMIZATION_ANALYSIS.md`
6. Relevant files under `docs/superpowers/plans/` and `docs/superpowers/specs/`
7. This file: `docs/goals/full-exploration-optimization.md`
8. Current ledger: `docs/goals/full-exploration-optimization-ledger.md`
9. Current completion audit, if created: `docs/goals/full-exploration-optimization-audit.md`

Scope:
- In scope: root docs, `docs/`, `website/src/`, `website/public/`, `website/index.html`, `website` config files, tests, service worker, manifest, routing, data files, and Supabase integration behavior when credentials are absent.
- Out of scope unless the user explicitly approves: production deployment, paid operations, destructive database changes, reading or printing raw secrets, broad redesigns that replace the product identity, and replacing Vue/Vite/Tailwind/Pinia.

Priority:
1. Fix anything that breaks install, test, build, startup, routing, or critical user flows.
2. Fix visible UI defects on desktop/mobile: overflow, unreadable text, broken spacing, broken navigation, or nonfunctional controls.
3. Improve high-impact performance/accessibility issues: media loading, bundle/runtime errors, keyboard/focus/labels, and clearly failing contrast.
4. Bring docs and claims into alignment with current code and verified behavior.
5. Address lower-risk polish only after the higher-priority work is validated.

Core rules:
1. Preserve user work. Check `git status -sb` before editing and before final reporting. Never revert unrelated changes.
2. Make scoped changes only. Do not introduce new frameworks or abstractions unless they remove real complexity or match existing patterns.
3. Use existing scripts and local patterns first.
4. Never output, commit, or summarize raw secrets. Refer only to environment variable names such as `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
5. Keep the evidence ledger current. Do not rely on memory after compaction or resume.
6. Treat missing, stale, or narrow verification as incomplete.
7. If a validator fails, investigate root cause before patching around it.

Milestones:
1. Baseline inventory complete: record branch, remote, package manager, scripts, app routes, major data sources, public assets, deployment configs, tests, and docs surfaces in `docs/goals/full-exploration-optimization-ledger.md`.
2. Current-state audit complete: run baseline validators where possible, inspect primary user flows locally with browser testing, and record concrete findings with severity and reproduction evidence.
3. High-priority fixes complete: resolve P0/P1 build/test/runtime/routing/UI issues and add or update focused tests where risk justifies it.
4. Product-quality optimization complete: address practical responsive layout, accessibility, loading/performance, stale content, and broken asset/doc issues.
5. Completion audit complete: rerun validators and desktop/mobile browser smoke checks, then update `docs/goals/full-exploration-optimization-audit.md`.

Exploration and optimization loop:
1. Inventory the area: identify entry points, dependencies, related routes/components/data files/tests/docs/assets, assumptions, and unknowns.
2. Reproduce or observe: use local commands, browser, tests, or static inspection to prove the issue or opportunity exists.
3. Decide priority:
   - P0: prevents install/build/start/core navigation.
   - P1: user-visible broken behavior, serious mobile/accessibility/performance issue, or major stale docs.
   - P2: polish, maintainability, or minor UX consistency.
4. Implement the smallest complete fix following existing Vue Composition API, Pinia, Vue Router, Tailwind, and project conventions.
5. Validate with the narrowest meaningful check first, then broader validators before completion.
6. Update the ledger with files changed, reason, validation output summary, unresolved risks, and next action.
7. Move to the next highest-priority area.

Baseline commands:
Run from repo root unless specified:

```bash
git status -sb
git remote -v
git branch --show-current
find . -maxdepth 3 -name package.json -o -name vite.config.* -o -name vercel.json -o -name Dockerfile
```

Run from `website/`:

```bash
npm install
npm run build
npm run test -- --run
npm run lint
```

If `npm run lint` modifies files because the script uses `--fix`, inspect the diff and keep only goal-related formatting/fix changes.

Browser validation:
1. Start local dev server from `website/`:

```bash
npm run dev -- --host 127.0.0.1
```

2. Open `http://127.0.0.1:8765` or the port reported by Vite.
3. Validate at least: home or landing page, tool browse/search/filter flow, tool detail page, comparison flow, pricing/resources/workflows pages if routed, quiz/matcher/profile/community-related flows where accessible without credentials, and 404 route.
4. Check desktop and mobile widths.
5. Record console errors, network failures for local assets, visible overflow/overlap, broken controls, slow or heavy media behavior, and keyboard/focus issues for primary controls.

Recommended browser viewports:
- Desktop: 1440x900
- Tablet: 768x1024
- Mobile: 390x844

Supabase behavior:
- The app must remain usable when Supabase env vars are absent.
- Do not require real credentials for this goal.
- If community/auth features need credentials for full validation, verify graceful degradation locally and record live credential validation as an external blocker unless the user explicitly provides access.

Documentation validation:
- Verify docs against current files and commands.
- Do not invent unsupported claims.
- Update stale commands, route descriptions, feature descriptions, screenshot references, and setup instructions when evidence shows mismatch.
- If screenshots or production URLs cannot be verified locally, record that explicitly.

Blocker policy:
- If blocked by platform auth, missing env vars, unavailable production domain, unavailable paid API, DNS, account access, or external service health, finish all safe local work first, record the blocker in the ledger, and continue with other in-scope work.
- A blocker record must include owner/system, timestamp, attempted action, current error/result, why local work cannot continue, exact next action, and whether this is acceptable for goal completion.
- Mark the whole goal blocked only when no meaningful local work can continue and the same blocking condition has repeated under the active blocked-audit rule.
- Do not mark blocked merely because a task is time-consuming or ambiguous.

Completion audit:
Before marking the goal complete:
1. Re-read this file and the current ledger.
2. Enumerate all in-scope surfaces from current files, not memory.
3. Confirm every P0/P1 finding is fixed, not applicable, or recorded as an acceptable external blocker.
4. Re-run from `website/`: `npm run build`, `npm run test -- --run`, and `npm run lint`.
5. Run browser smoke validation on desktop and mobile.
6. Confirm no unrelated user changes were reverted.
7. Confirm no secrets were printed or committed.
8. Update `docs/goals/full-exploration-optimization-audit.md` with final status, command result summaries, browser routes checked, remaining blockers, and residual risks.
9. Mark complete only when the audit proves all requirements are satisfied or acceptably blocked.

Final report:
- Branch and commit/status
- Main changes by area
- Validation commands and results
- Browser flows checked
- Ledger/audit file paths
- Remaining blockers or risks
- Dirty worktree notes
