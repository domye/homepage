# 个人主页全面优化计划

## TL;DR

> **快速摘要**: 对 Vue 3 + TypeScript 个人主页进行全方位优化，涵盖代码质量、性能、SEO、开发体验
> 
> **核心问题**: 类型断言重复、内存泄漏风险、构建配置混乱、SEO缺失、无测试/CI/CD
> 
> **预期效果**: 
> - 代码质量: TypeScript严格模式通过，零类型断言
> - 性能: 首屏加载 < 1.5s，包体积减少 30%+
> - SEO: 完整meta标签，可被搜索引擎正确索引
> - 开发体验: 自动化测试、CI/CD、代码格式化
> 
> **预计工作量**: Large（约 8-10 小时）
> **并行执行**: YES - 4 个阶段
> **关键路径**: 清理 → 类型安全 → 性能优化 → SEO/CI

---

## Context

### 原始需求
用户希望对现有的 Vue 3 个人主页进行全面优化，包括：性能优化、代码质量、开发体验、SEO

### 已发现问题汇总

**代码质量问题**:
1. `vue.config.js` 和 `vite.config.ts` 同时存在（构建工具混淆）
2. 11次重复的类型断言 `(svg as Record<string, string>)`
3. `LeftMain.vue` 中 `containerHeight` 定义但未使用
4. `ModalItem` 接口在 `BottomSheetModal.vue` 和 `RightProject.vue` 重复定义
5. `WelcomePopup.vue` setTimeout 未清理（内存泄漏风险）
6. CSS冗余：`RightProject.vue` 多个重复的 `.projectItem` 选择器

**性能问题**:
1. 路由同步加载，缺少代码分割
2. `node_modules` 96MB（过大，需要清理）
3. 无图片优化策略
4. 缺少资源预连接 `<link rel="preconnect">`
5. Vite配置过于简单（仅 `sourcemap: false`）

**SEO问题**:
1. `index.html` 完全没有任何meta标签
2. 无Open Graph标签
3. 无结构化数据

**开发体验问题**:
1. 无Prettier代码格式化
2. 无测试框架
3. 无CI/CD自动化
4. 无Husky预提交钩子

---

## Work Objectives

### 核心目标
通过系统性优化，将个人主页从"能跑"提升到"生产级"质量标准

### 具体交付物
- [ ] 删除 `vue.config.js`，统一使用 Vite
- [ ] 创建 SVG 类型定义，消除所有类型断言
- [ ] 修复内存泄漏（setTimeout清理）
- [ ] 路由懒加载配置
- [ ] Vite构建优化（代码分割、压缩）
- [ ] 完整的SEO配置（meta、OG标签）
- [ ] Prettier + ESLint统一配置
- [ ] Vitest测试框架 + 示例测试
- [ ] GitHub Actions CI/CD流水线
- [ ] Husky + lint-staged预提交钩子

### 完成标准
- [ ] `vue-tsc --noEmit` 零错误
- [ ] `npm run lint` 零警告
- [ ] `npm run test` 全部通过
- [ ] Lighthouse性能评分 > 90
- [ ] SEO评分 > 90
- [ ] 构建产物可成功部署

### Must Have
1. 构建工具统一（删除vue.config.js）
2. 类型安全（零`as`断言）
3. 内存泄漏修复
4. 基础SEO配置
5. 代码格式化工具

### Must NOT Have (Guardrails)
- ❌ 不改变现有UI/UX设计
- ❌ 不添加新功能（纯优化）
- ❌ 不升级Vue/Vite大版本（避免破坏性变更）
- ❌ 不引入复杂的状态管理（保持简洁）

---

## Verification Strategy

### 测试策略
- **测试框架**: Vitest（与Vite原生集成）
- **测试类型**: 
  - 单元测试：工具函数、composables
  - 组件测试：关键UI组件渲染
  - E2E：可选（Playwright）
- **覆盖率目标**: 核心逻辑 > 70%

### QA策略
每个任务必须包含Agent-Executed QA场景：
- **前端/UI**: Playwright浏览器自动化
- **构建**: 验证构建产物
- **代码质量**: ESLint/TypeScript检查
- **性能**: Lighthouse CI测量

---

## Execution Strategy

### 并行执行阶段

```
Wave 0 (清理阶段 - 必须先完成):
├── Task 0.1: 删除vue.config.js + 验证构建 [quick]
├── Task 0.2: 清理node_modules + 重新安装 [quick]
└── Task 0.3: 创建.gitignore优化 [quick]

Wave 1 (类型安全基础 - 4个并行):
├── Task 1.1: 创建SVG类型定义 [quick]
├── Task 1.2: 统一ModalItem接口 [quick]
├── Task 1.3: 修复内存泄漏(setTimeout) [quick]
└── Task 1.4: 删除未使用变量/导入 [quick]

Wave 2 (代码质量工具 - 3个并行):
├── Task 2.1: Prettier配置 [quick]
├── Task 2.2: ESLint规则增强 [quick]
└── Task 2.3: Husky + lint-staged [quick]

Wave 3 (性能优化 - 3个串行):
├── Task 3.1: 路由懒加载 [quick]
├── Task 3.2: Vite构建优化 [unspecified-high]
└── Task 3.3: 图片/资源优化 [unspecified-high]

Wave 4 (SEO + 部署 - 3个并行):
├── Task 4.1: SEO meta标签配置 [quick]
├── Task 4.2: GitHub Actions CI/CD [unspecified-high]
└── Task 4.3: Vitest测试框架 + 示例 [quick]

Wave FINAL (验证阶段 - 4个并行):
├── Task F1: 全量构建验证 [unspecified-high]
├── Task F2: Lighthouse性能测试 [unspecified-high]
├── Task F3: SEO验证 [quick]
└── Task F4: 代码质量最终检查 [quick]

Critical Path: Wave 0 → Wave 1 → Wave 2 → Wave 3 → Wave 4 → Wave FINAL
```

### 依赖矩阵

| 任务 | 依赖 | 被依赖 |
|------|------|--------|
| 0.1 | - | 0.2, 0.3 |
| 0.2 | 0.1 | 1.1-1.4 |
| 1.1-1.4 | 0.2 | 2.1-2.3 |
| 2.1-2.3 | 1.1-1.4 | 3.1 |
| 3.1 | 2.1-2.3 | 3.2 |
| 3.2 | 3.1 | 3.3, 4.1-4.3 |
| 3.3 | 3.2 | F1-F4 |
| 4.1-4.3 | 3.2 | F1-F4 |
| F1-F4 | 所有前置 | - |

### Agent调度摘要

- **Wave 0**: 3个任务 → `quick` × 3
- **Wave 1**: 4个任务 → `quick` × 4
- **Wave 2**: 3个任务 → `quick` × 3
- **Wave 3**: 3个任务 → `quick` × 1, `unspecified-high` × 2
- **Wave 4**: 3个任务 → `quick` × 2, `unspecified-high` × 1
- **Wave FINAL**: 4个任务 → `quick` × 2, `unspecified-high` × 2

---

## TODOs

### Wave 0: 清理阶段（必须先完成）

- [ ] **0.1. 删除vue.config.js并验证构建**

  **What to do**:
  - 删除 `vue.config.js` 文件（与Vite冲突）
  - 确认 `vite.config.ts` 配置完整
  - 运行 `npm run build` 验证构建成功
  - 运行 `npm run dev` 验证开发服务器正常

  **Must NOT do**:
  - 不要修改vite配置（保持现有功能）
  - 不要删除其他配置文件

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: git操作

  **Parallelization**:
  - **Can Run In Parallel**: NO（必须顺序执行）
  - **Parallel Group**: Wave 0
  - **Blocks**: 0.2, 0.3, 所有后续任务
  - **Blocked By**: 无

  **References**:
  - `vue.config.js` - 需要删除的文件
  - `vite.config.ts` - 保留的构建配置

  **Acceptance Criteria**:
  - [ ] `vue.config.js` 不存在
  - [ ] `npm run build` 成功完成
  - [ ] `npm run dev` 启动无错误

  **QA Scenarios**:
  ```
  Scenario: 构建验证
    Tool: Bash
    Steps:
      1. rm vue.config.js
      2. npm run build
    Expected Result: 构建成功，dist目录生成
    Evidence: .sisyphus/evidence/task-0-1-build-success.log
  ```

  **Commit**: YES
  - Message: `chore(build): remove vue.config.js, use vite exclusively`
  - Files: `vue.config.js`

---

- [ ] **0.2. 清理node_modules并重新安装**

  **What to do**:
  - 删除 `node_modules` 目录
  - 删除 `package-lock.json`
  - 运行 `npm install` 重新安装
  - 对比安装前后node_modules大小

  **Must NOT do**:
  - 不要升级任何依赖版本
  - 不要修改package.json

  **Recommended Agent Profile**:
  - **Category**: `quick`

  **Parallelization**:
  - **Can Run In Parallel**: NO（必须在0.1之后）
  - **Blocked By**: 0.1

  **Acceptance Criteria**:
  - [ ] node_modules重新安装成功
  - [ ] npm run build 仍然成功

  **QA Scenarios**:
  ```
  Scenario: 清理后重建
    Tool: Bash
    Steps:
      1. rm -rf node_modules package-lock.json
      2. npm install
      3. npm run build
    Expected Result: 安装成功，构建成功
    Evidence: .sisyphus/evidence/task-0-2-reinstall.log
  ```

  **Commit**: YES
  - Message: `chore(deps): clean and reinstall dependencies`

---

- [ ] **0.3. 优化.gitignore**

  **What to do**:
  - 检查现有 `.gitignore`
  - 添加常见遗漏项：`.idea/`, `.vscode/settings.json`, `*.log`, `.env.local`

  **Must NOT do**:
  - 不要删除已有的有效规则
  - 不要添加 `.env`（可能有示例文件）

  **Recommended Agent Profile**:
  - **Category**: `quick`

  **Parallelization**:
  - **Blocked By**: 0.1

  **Acceptance Criteria**:
  - [ ] .gitignore更新完成

  **Commit**: YES
  - Message: `chore(git): update .gitignore for IDE and local files`

---

### Wave 1: 类型安全基础

- [ ] **1.1. 创建SVG类型定义**

  **What to do**:
  - 创建 `src/types/svg.d.ts`
  - 声明模块 `@/assets/svg.json`
  - 类型为 `Record<string, string>`
  - 删除 `data.ts` 中所有的 `(svg as Record<string, string>)` 断言

  **Must NOT do**:
  - 不要修改 `svg.json` 文件内容

  **Recommended Agent Profile**:
  - **Category**: `quick`

  **Parallelization**:
  - **Can Run In Parallel**: YES（与1.2-1.4并行）
  - **Parallel Group**: Wave 1
  - **Blocks**: 2.1

  **References**:
  - `src/config/data.ts:44-76` - 需要修改的11处类型断言

  **Acceptance Criteria**:
  - [ ] `src/types/svg.d.ts` 创建
  - [ ] `data.ts` 中的类型断言全部删除
  - [ ] `vue-tsc --noEmit` 零错误

  **QA Scenarios**:
  ```
  Scenario: 类型检查通过
    Tool: Bash
    Steps:
      1. 创建svg.d.ts
      2. 修改data.ts
      3. npx vue-tsc --noEmit
    Expected Result: 无类型错误
    Evidence: .sisyphus/evidence/task-1-1-types.log
  ```

  **Commit**: YES
  - Message: `refactor(types): add SVG type declaration, remove assertions`
  - Files: `src/types/svg.d.ts`, `src/config/data.ts`

---

- [ ] **1.2. 统一ModalItem接口**

  **What to do**:
  - 将 `ModalItem` 接口从 `BottomSheetModal.vue` 和 `RightProject.vue` 提取
  - 移动到 `src/types/components.d.ts` 或 `src/config/data.ts`
  - 两个组件都从这个位置导入

  **Must NOT do**:
  - 不要修改接口字段定义

  **Recommended Agent Profile**:
  - **Category**: `quick`

  **Parallelization**:
  - **Can Run In Parallel**: YES

  **References**:
  - `src/components/Right/BottomSheetModal.vue:46-56` - 接口定义
  - `src/components/Right/RightProject.vue:39-48` - 重复的接口

  **Acceptance Criteria**:
  - [ ] 接口定义只存在于一处
  - [ ] 两个组件都能正常导入
  - [ ] TypeScript无错误

  **Commit**: YES
  - Message: `refactor(types): consolidate ModalItem interface`

---

- [ ] **1.3. 修复内存泄漏(setTimeout)**

  **What to do**:
  - 修改 `WelcomePopup.vue`
  - 使用变量存储timeout ID
  - 在 `onUnmounted` 钩子中清理timeout

  **Must NOT do**:
  - 不要改变原有业务逻辑（延迟1秒显示，5秒后消失）

  **Recommended Agent Profile**:
  - **Category**: `quick`

  **References**:
  - `src/components/WelcomePopup.vue:14-31` - 需要修改的代码

  **Acceptance Criteria**:
  - [ ] timeout被正确存储
  - [ ] onUnmounted中清理timeout
  - [ ] 原有功能保持不变

  **QA Scenarios**:
  ```
  Scenario: 弹窗功能正常
    Tool: Playwright
    Steps:
      1. 清除localStorage
      2. 刷新页面
      3. 等待1秒
    Expected Result: 弹窗显示
    Evidence: .sisyphus/evidence/task-1-3-popup.png
  ```

  **Commit**: YES
  - Message: `fix(memory): cleanup setTimeout on unmount in WelcomePopup`

---

- [ ] **1.4. 删除未使用变量/导入**

  **What to do**:
  - 删除 `LeftMain.vue:19` 的 `containerHeight`（如未使用）
  - 检查并删除所有未使用的import
  - 运行 ESLint 的 `no-unused-vars` 规则

  **Must NOT do**:
  - 不要删除实际使用的代码

  **Recommended Agent Profile**:
  - **Category**: `quick`

  **References**:
  - `src/components/LeftMain.vue:19` - containerHeight

  **Acceptance Criteria**:
  - [ ] 无未使用的变量
  - [ ] ESLint无警告

  **Commit**: YES
  - Message: `chore(cleanup): remove unused variables and imports`

---

### Wave 2: 代码质量工具

- [ ] **2.1. Prettier配置**

  **What to do**:
  - 安装 `prettier` 和 `eslint-config-prettier`
  - 创建 `.prettierrc` 配置文件
  - 配置：单引号、无分号、2空格缩进、80字符换行
  - 更新 `package.json` scripts 添加 `format` 命令
  - 运行一次格式化（所有文件）

  **Must NOT do**:
  - 不要修改Prettier配置以外的任何逻辑代码

  **Recommended Agent Profile**:
  - **Category**: `quick`

  **Parallelization**:
  - **Can Run In Parallel**: YES（与2.2、2.3并行）
  - **Parallel Group**: Wave 2

  **Acceptance Criteria**:
  - [ ] Prettier安装完成
  - [ ] `.prettierrc` 配置完成
  - [ ] `npm run format` 可运行
  - [ ] 所有文件已格式化

  **QA Scenarios**:
  ```
  Scenario: 格式化命令运行
    Tool: Bash
    Steps:
      1. npm run format
    Expected Result: 成功格式化所有文件
    Evidence: .sisyphus/evidence/task-2-1-format.log
  ```

  **Commit**: YES
  - Message: `chore(format): add Prettier configuration and format all files`

---

- [ ] **2.2. ESLint规则增强**

  **What to do**:
  - 添加 Vue 3 和 TypeScript 推荐规则
  - 启用 `vue/no-unused-vars` 和 `@typescript-eslint/no-explicit-any`
  - 配置 `.eslintignore` 排除 `dist/` 和 `node_modules/`

  **Must NOT do**:
  - 不要在本次任务中修复所有ESLint错误（留给lint命令）

  **Recommended Agent Profile**:
  - **Category**: `quick`

  **Acceptance Criteria**:
  - [ ] ESLint配置更新
  - [ ] `npm run lint` 可运行

  **Commit**: YES
  - Message: `chore(lint): enhance ESLint rules for Vue 3 and TypeScript`

---

- [ ] **2.3. Husky + lint-staged**

  **What to do**:
  - 安装 `husky` 和 `lint-staged`
  - 初始化 Husky
  - 配置 `pre-commit` 钩子运行 lint-staged
  - lint-staged 配置：对 staged 文件运行 ESLint 和 Prettier

  **Must NOT do**:
  - 不要添加太重的检查（如测试）到pre-commit

  **Recommended Agent Profile**:
  - **Category**: `quick`

  **Acceptance Criteria**:
  - [ ] Husky初始化完成
  - [ ] pre-commit钩子配置完成
  - [ ] 提交时自动运行代码检查

  **QA Scenarios**:
  ```
  Scenario: 预提交钩子测试
    Tool: Bash
    Steps:
      1. 修改一个Vue文件
      2. git add .
      3. git commit -m "test"
    Expected Result: lint-staged自动运行
    Evidence: .sisyphus/evidence/task-2-3-husky.log
  ```

  **Commit**: YES
  - Message: `chore(git): setup Husky and lint-staged for pre-commit checks`

---

### Wave 3: 性能优化

- [ ] **3.1. 路由懒加载**

  **What to do**:
  - 修改 `src/router/index.ts`
  - 将同步导入改为 `() => import('@/views/XXX.vue')`
  - 添加 webpackChunkName 注释用于命名

  **Must NOT do**:
  - 不要改变路由路径或组件逻辑

  **Recommended Agent Profile**:
  - **Category**: `quick`

  **Parallelization**:
  - **Can Run In Parallel**: NO（必须在代码工具之后）
  - **Blocked By**: Wave 2

  **References**:
  - `src/router/index.ts:7,11,15` - 需要改为懒加载的导入

  **Acceptance Criteria**:
  - [ ] 所有路由组件使用懒加载
  - [ ] 构建后生成分离的chunk文件
  - [ ] 路由切换正常工作

  **QA Scenarios**:
  ```
  Scenario: 路由懒加载生效
    Tool: Bash
    Steps:
      1. npm run build
      2. ls -la dist/assets/
    Expected Result: 看到 RightFirst-XXX.js 等独立chunk
    Evidence: .sisyphus/evidence/task-3-1-chunks.log
  ```

  **Commit**: YES
  - Message: `perf(router): implement lazy loading for route components`

---

- [ ] **3.2. Vite构建优化**

  **What to do**:
  - 配置代码分割策略（manualChunks）
  - 启用 brotli/gzip 压缩
  - 配置 CSS 代码分割
  - 添加资源预连接 `<link rel="preconnect">`
  - 安装并配置 `vite-plugin-compression`

  **Must NOT do**:
  - 不要改变开发服务器配置

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`

  **References**:
  - `vite.config.ts` - 需要修改的配置文件
  - `index.html` - 添加预连接标签

  **Acceptance Criteria**:
  - [ ] 构建产物包含压缩版本(.gz/.br)
  - [ ] index.html包含preconnect标签
  - [ ] 构建体积减小

  **QA Scenarios**:
  ```
  Scenario: 构建优化生效
    Tool: Bash
    Steps:
      1. npm run build
      2. ls -la dist/assets/*.gz
    Expected Result: 存在.gz压缩文件
    Evidence: .sisyphus/evidence/task-3-2-compression.log
  ```

  **Commit**: YES
  - Message: `perf(build): optimize Vite config with compression and code splitting`

---

- [ ] **3.3. 图片/资源优化**

  **What to do**:
  - 安装 `vite-plugin-imagemin`
  - 配置图片压缩（PNG、JPG、WebP）
  - 为外部图片（skillicons.dev）添加 loading="lazy"
  - 检查并优化 `src/assets/img/` 中的图片

  **Must NOT do**:
  - 不要删除任何图片文件

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`

  **References**:
  - `src/components/Right/RightSkill.vue:3-4` - 需要添加lazy loading的图片

  **Acceptance Criteria**:
  - [ ] 图片压缩插件配置完成
  - [ ] 外部图片有loading="lazy"
  - [ ] 构建后图片体积减小

  **Commit**: YES
  - Message: `perf(assets): add image optimization and lazy loading`

---

### Wave 4: SEO + 部署

- [ ] **4.1. SEO meta标签配置**

  **What to do**:
  - 修改 `index.html`
  - 添加基础meta标签（charset, viewport, description, keywords, author）
  - 添加 Open Graph 标签（og:title, og:description, og:image, og:url, og:type）
  - 添加 Twitter Card 标签
  - 添加 theme-color meta
  - 创建 `public/robots.txt`
  - 创建 `public/sitemap.xml`（静态或动态生成）

  **Must NOT do**:
  - 不要修改页面可见内容

  **Recommended Agent Profile**:
  - **Category**: `quick`

  **Parallelization**:
  - **Can Run In Parallel**: YES（与4.2、4.3并行）
  - **Parallel Group**: Wave 4
  - **Blocked By**: Wave 3

  **References**:
  - `index.html` - 需要添加meta标签的位置

  **Acceptance Criteria**:
  - [ ] index.html包含完整的meta标签
  - [ ] robots.txt创建完成
  - [ ] sitemap.xml创建完成

  **QA Scenarios**:
  ```
  Scenario: SEO标签验证
    Tool: webfetch (或手动检查)
    Steps:
      1. npm run build
      2. 检查dist/index.html的meta标签
    Expected Result: 包含description、OG标签、Twitter标签
    Evidence: .sisyphus/evidence/task-4-1-seo.html
  ```

  **Commit**: YES
  - Message: `feat(seo): add comprehensive meta tags, robots.txt and sitemap`

---

- [ ] **4.2. GitHub Actions CI/CD**

  **What to do**:
  - 创建 `.github/workflows/ci.yml`
  - 配置工作流：
    - Trigger: push to main, PR
    - Jobs: lint, type-check, test, build
  - 可选：配置自动部署到 GitHub Pages / Vercel / Netlify

  **Must NOT do**:
  - 不要在CI中运行耗时过长的任务

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`

  **Acceptance Criteria**:
  - [ ] CI工作流配置完成
  - [ ] 包含 lint、type-check、test、build 步骤
  - [ ] 推送到main分支时触发CI

  **QA Scenarios**:
  ```
  Scenario: CI触发测试
    Tool: git push
    Steps:
      1. 提交一个变更
      2. git push origin main
    Expected Result: GitHub Actions工作流启动
    Evidence: 查看GitHub Actions页面截图
  ```

  **Commit**: YES
  - Message: `ci(github): setup GitHub Actions workflow for CI/CD`

---

- [ ] **4.3. Vitest测试框架 + 示例测试**

  **What to do**:
  - 安装 `vitest`, `@vue/test-utils`, `jsdom`
  - 创建 `vitest.config.ts`
  - 创建测试目录 `src/__tests__/`
  - 编写示例测试：
    - `WelcomePopup.spec.ts` - 测试弹窗显示逻辑
    - `utils.spec.ts` - 如果有工具函数
  - 更新 `package.json` scripts 添加 `test` 命令

  **Must NOT do**:
  - 不要追求100%覆盖率（示例即可）

  **Recommended Agent Profile**:
  - **Category**: `quick`

  **Acceptance Criteria**:
  - [ ] Vitest安装完成
  - [ ] 至少一个示例测试文件
  - [ ] `npm run test` 可运行并通过

  **QA Scenarios**:
  ```
  Scenario: 测试运行
    Tool: Bash
    Steps:
      1. npm run test
    Expected Result: 测试通过，显示覆盖率
    Evidence: .sisyphus/evidence/task-4-3-test.log
  ```

  **Commit**: YES
  - Message: `test(vitest): setup Vitest and add example tests`

---

## Final Verification Wave

### F1. 全量构建验证

**What to do**:
- 完整清理并重新构建
- 验证所有产物生成
- 检查构建日志无警告

**Agent**: `unspecified-high`

**Acceptance Criteria**:
- [ ] `rm -rf dist node_modules && npm install && npm run build` 成功
- [ ] 构建产物包含所有必要文件
- [ ] 无构建警告

**QA**:
```
Tool: Bash
Command: npm run build
Expected: 成功，exit code 0
Evidence: .sisyphus/evidence/final-build.log
```

---

### F2. Lighthouse性能测试

**What to do**:
- 使用 Lighthouse CI 或手动运行 Lighthouse
- 测试性能、可访问性、最佳实践、SEO
- 记录所有评分

**Agent**: `unspecified-high` (+ playwright skill)

**Acceptance Criteria**:
- [ ] Performance >= 90
- [ ] Accessibility >= 90
- [ ] Best Practices >= 90
- [ ] SEO >= 90

**QA**:
```
Tool: Playwright + Lighthouse
Steps:
  1. 启动预览服务器: npm run preview
  2. 运行Lighthouse测试
Expected: 所有评分 >= 90
Evidence: .sisyphus/evidence/lighthouse-report.html
```

---

### F3. SEO验证

**What to do**:
- 使用在线SEO检查工具或手动验证
- 检查meta标签完整性
- 验证robots.txt可访问性
- 验证sitemap.xml格式正确

**Agent**: `quick`

**Acceptance Criteria**:
- [ ] 所有必要meta标签存在
- [ ] OG标签正确
- [ ] robots.txt可访问
- [ ] sitemap.xml格式正确

**QA**:
```
Tool: curl
Commands:
  - curl http://localhost:4173/robots.txt
  - curl http://localhost:4173/sitemap.xml
Expected: 返回正确内容
Evidence: .sisyphus/evidence/seo-check.log
```

---

### F4. 代码质量最终检查

**What to do**:
- 运行完整 lint
- 运行 type-check
- 运行测试
- 检查git状态（确保无未提交文件）

**Agent**: `quick`

**Acceptance Criteria**:
- [ ] `npm run lint` 零警告
- [ ] `vue-tsc --noEmit` 零错误
- [ ] `npm run test` 全部通过
- [ ] git working tree clean

**QA**:
```
Tool: Bash
Commands:
  1. npm run lint
  2. npx vue-tsc --noEmit
  3. npm run test
  4. git status
Expected: 全部通过，无未提交变更
Evidence: .sisyphus/evidence/quality-check.log
```

---

## Commit Strategy

每个独立任务完成后都应该提交。提交信息格式：
```
<type>(<scope>): <description>

[optional body]
```

Type分类：
- `chore`: 构建、依赖、配置（0.x, 2.x）
- `refactor`: 代码重构（1.x）
- `fix`: Bug修复（1.3）
- `perf`: 性能优化（3.x）
- `feat`: 新功能（4.1）
- `ci`: CI/CD（4.2）
- `test`: 测试（4.3）

---

## Success Criteria

### 量化指标

| 指标 | 优化前 | 目标 | 验证方式 |
|------|--------|------|----------|
| TypeScript错误 | 11+类型断言 | 0 | `vue-tsc --noEmit` |
| ESLint警告 | 未知 | 0 | `npm run lint` |
| 首屏加载时间 | 未知 | < 1.5s | Lighthouse |
| 构建产物体积 | 未知 | -30% | `du -sh dist/` |
| Lighthouse性能 | 未知 | >= 90 | Lighthouse |
| Lighthouse SEO | ~50 | >= 90 | Lighthouse |
| 测试覆盖率 | 0% | > 0% | Vitest报告 |

### 功能验证命令

```bash
# 类型检查
npx vue-tsc --noEmit

# 代码检查
npm run lint

# 运行测试
npm run test

# 构建验证
npm run build

# 性能测试（需要安装lighthouse）
npx lighthouse http://localhost:4173 --output=html --output-path=./lighthouse-report.html
```

### 最终检查清单

- [ ] 所有TODO完成
- [ ] 所有QA场景通过
- [ ] 所有评分指标达标
- [ ] 可成功部署
- [ ] README更新（如果需要）

---

## Additional Notes

### 可选增强（如果还有时间）

- [ ] **PWA支持**: 添加 `vite-plugin-pwa`
- [ ] **组件自动导入**: `unplugin-vue-components`
- [ ] **图标优化**: 将SVG内联改为symbol引用
- [ ] **暗黑模式SSR**: 避免闪烁
- [ ] **A11y增强**: 添加更多ARIA标签

### 已知限制

1. **Vite vs Vue CLI**: README仍提到Vue CLI，需要手动更新文档
2. **测试范围**: 由于时间限制，只添加示例测试而非全覆盖
3. **图片优化**: 外部CDN图片无法优化，只能添加lazy loading

