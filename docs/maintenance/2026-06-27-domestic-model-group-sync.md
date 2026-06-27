# Domestic Model Group Sync - 2026-06-27

## Scope

- Repository: `ava-agent/ai-tools`
- Runtime LLM/API use: none
- Live site: `https://aitools.rxcloud.group`

## Changes

- Kept the model directory catalog intact.
- Updated the "domestic model" comparison shortcut to use the existing Doubao/Volcengine entry instead of the legacy default entry.
- Mirrored the same shortcut in the optimization plan so future site work starts from the updated group.

## Validation

- `cd website && npm run build`
- `git diff --check`
- `scan_project.sh .`
- Staged additions old-provider/secret scan

## Notes

- This repository is a public tool directory, not an app runtime. Model entries are catalog data, not production provider configuration.
