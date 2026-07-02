# AI-Tools Website 浏览器验证指南

## 服务器状态
✅ **开发服务器默认运行地址**: `http://localhost:8765/`

**重要**: 当前 `vite.config.js` 默认端口是 8765。历史文档中出现过 3000/3002，请以当前配置为准。

---

## 如何访问新页面

### 方法 1: 通过导航栏访问
1. 打开浏览器访问: `http://localhost:8765/`
2. **强制刷新页面** (Ctrl+Shift+R 或 Cmd+Shift+R) 清除缓存
3. 查看顶部导航栏，应该看到以下主导航：
   - 首页
   - 全景浏览
   - 工具对比
   - 工作流

### 方法 2: 直接访问 URL
- **首页**: `http://localhost:8765/#/`
- **全景浏览**: `http://localhost:8765/#/tools`
- **工具对比**: `http://localhost:8765/#/comparison`
- **工作流**: `http://localhost:8765/#/workflows`
- **工具详情**: `http://localhost:8765/#/tool/cursor`（不是 `/#/tools/cursor`）
- **工具匹配器/订阅指南**: `/#/matcher`、`/#/pricing` 仍是路由页面，但不在当前顶部主导航中

---

## 故障排除

### 问题: 看不到当前主导航

**解决方案**:
1. **清除浏览器缓存并强制刷新**
   - Windows: Ctrl + Shift + R
   - Mac: Cmd + Shift + R

2. **检查是否访问正确的端口**
   - 确保访问 `http://localhost:8765/`（不是历史文档里的 3000/3002）

3. **清除浏览器缓存**
   - Chrome: F12 → Application → Clear storage → Clear site data
   - Firefox: Ctrl+Shift+Delete → 选择 "缓存" → 清除

4. **如果本地曾注册过旧 Service Worker，清除站点数据**
   - Chrome: F12 → Application → Service Workers → Unregister
   - 再到 Application → Storage → Clear site data
   - 旧版开发服务器会在 dev 模式注册 `sw.js`，可能导致 `8765` 显示旧组件；当前版本已限制为 production 才注册。

5. **尝试无痕/隐私模式**
   - Chrome: Ctrl+Shift+N
   - Firefox: Ctrl+Shift+P

### 问题: 页面显示 404

**解决方案**:
1. 确保开发服务器正在运行
2. 检查浏览器控制台是否有错误 (F12)
3. 尝试重启开发服务器

### 问题: router-link 不工作

**解决方案**:
如果导航链接不工作，可能是 Vue Router 的问题。请检查浏览器控制台是否有错误信息。

---

## 验证步骤

### 1. 验证服务器运行
```bash
# 在浏览器访问
http://localhost:8765/
```

应该看到首页标题 "AI工具全书"

### 2. 验证导航栏
查看页面顶部，应该有 4 个主导航链接：
- ✅ 首页
- ✅ 全景浏览
- ✅ 工具对比
- ✅ 工作流

### 3. 验证新页面
点击导航链接或直接访问：
- `http://localhost:8765/#/tools` - 应该看到工具全景浏览和筛选
- `http://localhost:8765/#/comparison` - 应该看到 "工具对比" 标题
- `http://localhost:8765/#/workflows` - 应该看到 "AI 工作流最佳实践" 标题
- `http://localhost:8765/#/matcher`、`/#/pricing` - 仍可作为直接路由访问

### 4. 验证页面功能
- **Matcher 页面**: 点击类别卡片，应该出现决策树问题
- **Pricing 页面**: 应该看到预算层级概览和推荐组合
- **Workflows 页面**: 应该看到工作流标签页

---

## 开发者控制台检查

按 F12 打开开发者控制台，检查：

### Console 标签页
- 不应该有红色错误信息
- 可能有黄色的警告（可以忽略）

### Network 标签页
- 刷新页面后，应该看到加载的资源
- 检查是否有失败的请求（红色）

---

## 构建验证

项目已成功构建，输出文件包括：
- `Matcher-DAicT23s.js` ✅
- `Pricing-CmMMKHKo.js` ✅
- `Workflows-BXl8t3RF.js` ✅

所有新页面都已正确打包。

---

## 如果仍然有问题

1. **完全停止开发服务器** (Ctrl+C)
2. **重新启动**:
   ```bash
   cd ai_tools/ai-tools/website
   npm run dev
   ```
3. **清除浏览器缓存** (Ctrl+Shift+R)
4. **使用无痕模式** 访问页面

---

## 移动端测试

在移动设备或浏览器开发者工具的移动模式下：
- 点击汉堡菜单图标
- 应该看到所有导航链接，包括新增的三个页面

---

## 文件清单

### 新增页面
- `src/views/Matcher.vue` ✅
- `src/views/Pricing.vue` ✅
- `src/views/Workflows.vue` ✅

### 修改的文件
- `src/router/index.js` ✅
- `src/components/Header.vue` ✅
- `src/components/Footer.vue` ✅
- `src/components/Hero.vue` ✅
- `src/views/Comparison.vue` ✅
- `src/views/ToolDetail.vue` ✅

---

## 总结

✅ 服务器默认在 `http://localhost:8765/` 运行
✅ 所有新页面已创建并正确配置
✅ 路由配置正确
✅ 构建成功无错误
✅ 导航栏已更新

**下一步**: 请在浏览器中访问 `http://localhost:8765/` 并强制刷新 (Ctrl+Shift+R)
