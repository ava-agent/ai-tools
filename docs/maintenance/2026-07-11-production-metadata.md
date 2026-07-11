# AI Tools Handbook 生产元数据维护

更新时间：2026-07-11

## 本次调整

- 以 `https://aitools.rxcloud.group` 作为 canonical、Open Graph、Twitter Card 和结构化数据的主站地址。
- 保留 `https://ava-agent.github.io/ai-tools/` 作为 GitHub Pages 镜像。
- 将 `npm run lint` 固定为只检查不写入，将自动修复拆分为 `npm run lint:fix`。
- 将 Vitest 默认命令固定为单次运行，避免 CI 进入 watch 模式。
- 补充仓库工作规则和部署说明。
- 让 landing 页公共图片使用 `BASE_URL`，避免 GitHub Pages `/ai-tools/` 子路径下出现 404。
- 将 Service Worker 缓存版本升级为 `ai-tools-v3`，使回访用户淘汰旧 landing chunk 缓存。

## 验证要求

- `npm run lint`
- `npm run test`
- `npm run build`
- Vercel 与 GitHub Pages 主路径浏览器 smoke
- 当前工作树 gitleaks 扫描
