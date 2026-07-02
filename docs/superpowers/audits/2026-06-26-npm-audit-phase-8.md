# Phase 8 npm Audit Result

Date: 2026-06-26

Scope: `website`

Superseded note (2026-06-28): the dependency upgrade has since been applied in this worktree. Current lockfile versions are `vite@8.1.0`, `vitest@4.1.9`, `@vitejs/plugin-vue@6.0.7`, and `esbuild@0.28.1`; keep the older Vite 5 / Vitest 1 entries below as the historical pre-upgrade audit snapshot only.

## Commands Run

- `npm audit --json`
- `npm audit fix`
- `npm audit --json`
- `npm ls vite vitest vite-node esbuild rollup postcss --depth=1`
- `npm test -- --run`
- `npm run build`

## Before Non-Breaking Fix

Fresh audit reported 16 vulnerabilities:

- 6 moderate
- 9 high
- 1 critical

Main clusters:

- Vite / Vitest / vite-node / esbuild chain.
- Transitive development dependencies such as Rollup, PostCSS, minimatch, brace-expansion, picomatch, lodash, flatted, js-yaml, js-cookie, and ajv.

## Non-Breaking Fix Applied

`npm audit fix` was run without `--force`.

Result:

- `website/package-lock.json` changed.
- `website/package.json` did not change.
- Lockfile-only updates moved several transitive dependencies forward.
- Confirmed key installed versions after the fix:
  - `vite@5.4.21`
  - `vitest@1.6.1`
  - `vite-node@1.6.1`
  - `esbuild@0.21.5`
  - `rollup@4.62.2`
  - `postcss@8.5.15`

## Remaining Audit Status

After the non-breaking fix, audit reported 4 remaining vulnerabilities:

- 2 moderate
- 1 high
- 1 critical

Remaining cluster:

- `vitest <=3.2.5` critical advisory.
- `vite <=6.4.2` high/moderate advisories.
- `vite-node <=2.2.0-beta.2` through Vitest.
- `esbuild <=0.24.2` through Vite.

`npm audit` says these require semver-major changes:

- `vite@8.1.0`
- `vitest@4.1.9`

## Major Upgrade Evaluation

Do not run `npm audit fix --force` in the current mixed UI/content modernization worktree.

Current local runtime is compatible with the proposed major versions:

- Node: `v22.23.1`
- npm: `11.6.0`
- `vite@8.1.0` requires Node `^20.19.0 || >=22.12.0`
- `vitest@4.1.9` requires Node `^20.0.0 || ^22.0.0 || >=24.0.0`
- Latest `@vitejs/plugin-vue@6.0.7` supports Vite `^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0`

Recommended separate upgrade branch:

1. Update `vite`, `vitest`, and `@vitejs/plugin-vue` together.
2. Keep the change limited to dependency/config/test compatibility.
3. Run:
   - `npm test -- --run`
   - `npm run build`
   - browser smoke for `/`, `/tools`, `/tool/cursor`, `/comparison`, and `/workflows`.
4. Re-run `npm audit --json` and require zero critical/high vulnerabilities or document any upstream blocker.

## Verification

After `npm audit fix` in the historical pre-upgrade pass:

- `npm test -- --run`: 8 test files passed, 29 tests passed.
- `npm run build`: passed with Vite 5.4.21 at the time. This was superseded by the later Vite 8 / Vitest 4 upgrade and must not be read as the current dependency state.
