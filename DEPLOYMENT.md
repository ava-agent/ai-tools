# AI Tools Handbook Deployment

## Public Endpoints

- Primary: `https://aitools.rxcloud.group` on Vercel.
- Secondary mirror: `https://ava-agent.github.io/ai-tools/` on GitHub Pages.
- The organization root `https://ava-agent.github.io` is not the project URL; use the `/ai-tools/` path for the mirror.

## Vercel

Use these settings for the primary production deployment:

- Project root: `website`
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: Vite
- Custom domain: `aitools.rxcloud.group`

`website/vercel.json` owns SPA rewrites, immutable asset caching, and security headers.

## GitHub Pages Mirror

`.github/workflows/deploy.yml` builds `website/` and publishes `website/dist`. `website/vite.config.js` sets `base` to `/ai-tools/` when GitHub Actions builds the mirror, so asset paths work under the repository subpath.

## Docker

```bash
cd website
docker build -t ai-tools-website .
docker run -p 8080:80 ai-tools-website
```

## Environment Variables

Copy the template only when enabling Supabase-backed community features:

```bash
cd website
cp .env.example .env
```

Required variables are `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`. The catalog remains usable without them.

## Verification

```bash
cd website
npm run lint
npm run test
npm run build
```

After deployment, smoke both public endpoints in a real browser and verify the primary page metadata points to `https://aitools.rxcloud.group`.
