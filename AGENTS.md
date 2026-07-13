# Repository Guidelines

## Project Structure

- `README.md` is the public project overview for the AI Tools Handbook.
- `website/` is the production Vue 3 + Vite app.
- `website/src/data/tools.js` is the main AI tools catalog.
- `website/src/components/`, `website/src/views/`, and `website/src/stores/` hold UI, route views, and Pinia state.
- `docs/screenshots/` contains README imagery. `vedio/` contains source demo videos.
- `website/dist/`, `website/.vercel/`, and `website/node_modules/` are generated artifacts; do not edit or commit them as source.

## Commands

Run app commands from `website/`:

- `npm ci` installs the locked dependencies.
- `npm run dev` starts Vite on port 8765.
- `npm run build` creates the static production bundle in `dist/`.
- `npm run preview` previews the production bundle on port 8766.
- `npm run lint` checks JavaScript and Vue files without writing changes.
- `npm run lint:fix` applies ESLint fixes when intentional.
- `npm run test` runs Vitest once.
- `npm run test:coverage` runs coverage once.

## Deployment

- Primary production URL: `https://aitools.rxcloud.group`.
- Primary hosting: Vercel, with `website/` as the project root and `dist/` as the output directory.
- Secondary mirror: GitHub Pages at `https://ava-agent.github.io/ai-tools/`, built by `.github/workflows/deploy.yml`.
- Docker/Nginx deployment is supported from `website/Dockerfile`.

## Environment

Use `website/.env.example` as the template. Supabase is optional; without `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`, the catalog still runs while auth, cloud sync, comments, ratings, and battle voting are hidden or inactive.

## Maintenance Notes

- Keep canonical, Open Graph, Twitter, and structured-data URLs aligned with `https://aitools.rxcloud.group`.
- If the GitHub Pages mirror is changed, keep `vite.config.js` base handling in sync with `.github/workflows/deploy.yml`.
- When adding tools, update `website/src/data/tools.js` and run `npm run lint`, `npm run test`, and `npm run build`.

## AnyCap

This project uses [AnyCap](https://anycap.ai) for web search and crawling during content-freshness reviews. Treat search summaries as leads, preserve direct source URLs, and verify important claims against first-party pages before editing the catalog.

AnyCap changes quickly. Before relying on its commands, update the installed skill and verify authentication:

```bash
npx -y skills update
anycap status
```

When an AnyCap command fails unexpectedly, submit feedback with the returned request ID instead of storing credentials or raw secrets in the repository.
