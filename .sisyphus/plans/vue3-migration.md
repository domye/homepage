# Vue 2 → Vue 3 + TypeScript + Vite 迁移计划

## TL;DR

> **目标**：将 Vue 2.6 项目全面升级为 Vue 3.4 + TypeScript + Vite
> 
> **核心变更**：
> - Vue 2 Options API → Vue 3 Composition API
> - Vue CLI → Vite 5.x
> - JavaScript → TypeScript 5.x
> - Vue Router 3 → Vue Router 4
> 
> **预估工作量**：大型（15-25 小时）
> **执行策略**：分 3 个阶段，渐进式迁移
> **关键路径**：Phase 1 → Phase 2 → Phase 3

---

## 上下文

### 原始需求
用户希望将基于 Vue 2 的个人主页项目重构为 Vue 3。

### 技术决策
- **API 风格**：Composition API（现代化写法）
- **构建工具**：Vite（替代 Vue CLI）
- **类型系统**：TypeScript（替代 JavaScript）
- **状态管理**：保持无状态管理（原项目无 Vuex）

### 项目现状
- Vue 2.6.14 + Vue Router 3.5.1
- 24 个 Vue 组件，全部使用 Options API
- 使用 Vue CLI 5.x 构建
- 无 Vuex、无第三方 UI 库

### Metis 审核建议
1. 分阶段迁移风险更可控
2. 环境变量前缀需从 `VUE_APP_` 改为 `VITE_`
3. Vite 需显式配置 `@` 别名
4. 需要创建类型声明文件 `env.d.ts`

---

## 工作目标

### 核心目标
完成 Vue 2 → Vue 3 的全面技术栈升级，保持原有功能不变。

### 具体交付物
1. 完整的 Vite + TypeScript 项目配置
2. 迁移后的 24 个 Vue 组件
3. 更新的路由配置（Vue Router 4）
4. 更新的 ESLint 配置（支持 TypeScript）
5. 完整的功能回归测试

### 完成标准
- [ ] `npm run dev` 启动开发服务器无错误
- [ ] `npm run build` 生产构建成功
- [ ] 所有页面功能与迁移前一致
- [ ] TypeScript 类型检查无错误

### 必须包含
- Vue 3.4+
- Vue Router 4.2+
- TypeScript 5.x
- Vite 5.x
- Composition API 写法

### 必须不包含（边界）
- 不引入 Pinia/Vuex（原项目无状态管理）
- 不引入第三方 UI 库
- 不改变页面设计和交互逻辑

---

## 验证策略

### 测试决策
- **测试基础设施**：无现有测试
- **测试策略**：Agent 执行的手动 QA 场景
- **每个任务包含**：Happy Path + Error Path 场景

### QA 政策
所有任务必须包含 Agent-Executable QA Scenarios，验证实际行为。

**验证方法**：
- **前端页面**：使用 Playwright 打开浏览器，验证 DOM、截图
- **构建验证**：运行 `npm run build`，检查输出
- **类型检查**：运行 `vue-tsc --noEmit`

---

## 执行策略

### 分阶段执行

```
Phase 1: 基础框架迁移（并行）
├── Task 1: 清理并初始化项目
├── Task 2: 创建 Vite 配置
├── Task 3: 创建 TypeScript 配置
├── Task 4: 创建类型声明文件
├── Task 5: 更新 ESLint 配置
└── Task 6: 迁移 main.js → main.ts

Phase 2: 核心文件迁移（并行）
├── Task 7: 迁移 router/index.js → TypeScript
├── Task 8: 迁移 config/constants.js → TypeScript
├── Task 9: 迁移 config/data.js → TypeScript
└── Task 10: 迁移 .env 环境变量

Phase 3: 组件迁移（分批并行）
├── Wave 3.1: 基础组件
│   ├── Task 11: App.vue
│   ├── Task 12: LeftMain.vue
│   ├── Task 13: RightMain.vue
│   └── Task 14: FooterMain.vue
├── Wave 3.2: 左侧组件
│   ├── Task 15: LeftLogo.vue
│   ├── Task 16: LeftDesc.vue
│   ├── Task 17: LeftTag.vue
│   ├── Task 18: LeftTime.vue
│   └── Task 19: LeftTalk.vue
├── Wave 3.3: 右侧组件
│   ├── Task 20: RightDesc.vue
│   ├── Task 21: RightIcon.vue
│   ├── Task 22: RightSwitch.vue
│   ├── Task 23: RightSnake.vue
│   └── Task 24: RightTab.vue
├── Wave 3.4: 更多右侧组件
│   ├── Task 25: RightTitle.vue
│   ├── Task 26: RightProject.vue
│   ├── Task 27: RightSkill.vue
│   ├── Task 28: RightFaq.vue
│   ├── Task 29: RightIntro.vue
│   └── Task 30: BottomSheetModal.vue
├── Wave 3.5: 页面和弹窗
│   ├── Task 31: RightFirst.vue
│   ├── Task 32: RightSecond.vue
│   ├── Task 33: RightThird.vue
│   └── Task 34: WelcomePopup.vue

Phase 4: 最终验证（并行）
├── Task F1: 类型检查验证
├── Task F2: 构建验证
├── Task F3: 功能回归测试
└── Task F4: 代码质量审查
```

### 依赖矩阵

| Task | 依赖 | 阻塞 |
|------|------|------|
| 1-6 | - | 7-10, 11-34 |
| 7-10 | 1-6 | 11-34 |
| 11-34 | 1-10 | F1-F4 |
| F1-F4 | 1-34 | - |

### Agent 分配

- **Phase 1**: `unspecified-high` (配置任务)
- **Phase 2**: `unspecified-high` (配置文件)
- **Phase 3**: `quick` (组件迁移，每个组件独立)
- **Phase 4**: `deep` (验证任务)

---

## TODOs

- [ ] 1. 清理项目并初始化

  **What to do**:
  - 删除 `node_modules` 和 `package-lock.json`
  - 更新 `package.json` 依赖到 Vue 3 + Vite 版本
  - 移除 Vue CLI 相关依赖
  - 安装新的依赖并验证安装成功

  **Must NOT do**:
  - 不要修改任何源代码文件
  - 不要删除 src 目录

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: `git-master`
  - Reason: 简单的文件操作和依赖管理

  **Parallelization**:
  - **Can Run In Parallel**: NO (Phase 1 第一个任务)
  - **Blocks**: Tasks 2-6

  **References**:
  - `package.json` - 当前依赖列表
  - Vue 3 migration guide: https://v3-migration.vuejs.org/

  **Acceptance Criteria**:
  - [ ] `node_modules` 已删除
  - [ ] `package.json` 已更新为 Vue 3 依赖
  - [ ] `npm install` 成功完成

  **QA Scenarios**:
  ```
  Scenario: 验证依赖安装
    Tool: Bash
    Steps:
      1. 运行 npm install
      2. 检查 node_modules/vue/package.json 中的版本
    Expected Result: vue 版本为 ^3.4.0
    Evidence: .sisyphus/evidence/task-1-deps.png
  ```

  **Commit**: YES
  - Message: `chore: migrate to Vue 3 + Vite dependencies`
  - Files: `package.json`, `package-lock.json`

- [ ] 2. 创建 Vite 配置文件

  **What to do**:
  - 创建 `vite.config.ts`
  - 配置 Vue 插件
  - 配置 `@` 别名指向 `src`
  - 配置开发服务器端口为 35729
  - 配置 `productionSourceMap: false`

  **Must NOT do**:
  - 不要配置未使用的插件
  - 不要改变 public 目录结构

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
  - **Skills**: N/A
  - Reason: 配置文件需要准确

  **Parallelization**:
  - **Can Run In Parallel**: YES (与 Task 1 同时)
  - **Blocked By**: None
  - **Blocks**: None

  **References**:
  - `vue.config.js` - 当前配置参考
  - Vite config reference: https://vitejs.dev/config/

  **Acceptance Criteria**:
  - [ ] `vite.config.ts` 文件存在
  - [ ] 包含 `@` 别名配置
  - [ ] 端口配置为 35729

  **QA Scenarios**:
  ```
  Scenario: 验证 Vite 配置
    Tool: Bash
    Steps:
      1. 运行 npx vite --version
      2. 检查 vite.config.ts 语法
    Expected Result: 无语法错误
    Evidence: .sisyphus/evidence/task-2-vite-config.png
  ```

  **Commit**: YES
  - Message: `chore: add Vite configuration`
  - Files: `vite.config.ts`

- [ ] 3. 创建 TypeScript 配置

  **What to do**:
  - 创建 `tsconfig.json`
  - 配置严格的类型检查
  - 配置 `@` 路径映射
  - 配置 Vue 文件支持
  - 创建 `tsconfig.node.json` 用于 Vite 配置

  **Must NOT do**:
  - 不要禁用严格模式
  - 不要跳过类型检查

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
  - **Skills**: N/A
  - Reason: TypeScript 配置需要准确

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Blocked By**: None

  **References**:
  - Vue 3 + TS 指南: https://vuejs.org/guide/typescript/overview.html

  **Acceptance Criteria**:
  - [ ] `tsconfig.json` 存在且语法正确
  - [ ] `tsconfig.node.json` 存在
  - [ ] 包含 `@/*` 路径映射

  **QA Scenarios**:
  ```
  Scenario: 验证 TS 配置
    Tool: Bash
    Steps:
      1. 运行 npx tsc --version
      2. 验证 tsconfig.json 语法
    Expected Result: TypeScript 5.x 版本，配置无错误
    Evidence: .sisyphus/evidence/task-3-tsconfig.png
  ```

  **Commit**: YES
  - Message: `chore: add TypeScript configuration`
  - Files: `tsconfig.json`, `tsconfig.node.json`

- [ ] 4. 创建类型声明文件

  **What to do**:
  - 创建 `env.d.ts` 声明 Vite 客户端类型
  - 创建 `src/vite-env.d.ts` 声明 Vue 组件类型
  - 配置 `.vue` 文件类型支持

  **Must NOT do**:
  - 不要遗漏 Vite 客户端类型声明

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: N/A

  **Parallelization**:
  - **Can Run In Parallel**: YES

  **References**:
  - Vite client types: https://vitejs.dev/guide/env-and-mode.html

  **Acceptance Criteria**:
  - [ ] `env.d.ts` 存在
  - [ ] `src/vite-env.d.ts` 存在
  - [ ] 包含 `*.vue` 模块声明

  **QA Scenarios**:
  ```
  Scenario: 验证类型声明
    Tool: Bash
    Steps:
      1. 检查 env.d.ts 文件内容
      2. 检查包含 /// <reference types="vite/client" />
    Expected Result: 包含 Vite 客户端类型声明
    Evidence: .sisyphus/evidence/task-4-types.png
  ```

  **Commit**: NO (与 Task 3 合并)

- [ ] 5. 更新 ESLint 配置

  **What to do**:
  - 更新 `.eslintrc.cjs`（或创建）
  - 添加 TypeScript ESLint 插件
  - 更新 Vue ESLint 插件到 v9
  - 配置 TypeScript 解析器

  **Must NOT do**:
  - 不要改变现有的代码风格规则（除非必要）

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
  - **Skills**: N/A

  **Parallelization**:
  - **Can Run In Parallel**: YES

  **References**:
  - 当前 `package.json` 中的 eslintConfig
  - TypeScript ESLint: https://typescript-eslint.io/

  **Acceptance Criteria**:
  - [ ] ESLint 配置支持 TypeScript
  - [ ] 支持 `.vue` 文件
  - [ ] 保留原有代码风格规则

  **QA Scenarios**:
  ```
  Scenario: 验证 ESLint
    Tool: Bash
    Steps:
      1. 运行 npm run lint
      2. 检查无配置错误
    Expected Result: ESLint 正常工作
    Evidence: .sisyphus/evidence/task-5-eslint.png
  ```

  **Commit**: YES
  - Message: `chore: update ESLint for TypeScript`

- [ ] 6. 迁移 main.js → main.ts

  **What to do**:
  - 重命名 `main.js` 为 `main.ts`
  - 将 `new Vue()` 改为 `createApp()`
  - 更新 Vue Router 初始化方式
  - 添加类型注解

  **Must NOT do**:
  - 不要改变应用逻辑

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: N/A

  **Parallelization**:
  - **Can Run In Parallel**: NO (等待 Task 1-5)
  - **Blocked By**: Tasks 1-5

  **References**:
  - 当前 `src/main.js`
  - Vue 3 createApp: https://vuejs.org/guide/essentials/application.html

  **Acceptance Criteria**:
  - [ ] `main.ts` 存在
  - [ ] 使用 `createApp()`
  - [ ] 无 TypeScript 错误

  **QA Scenarios**:
  ```
  Scenario: 验证应用启动
    Tool: Bash
    Steps:
      1. 运行 npm run dev
      2. 检查控制台无错误
      3. 访问 http://localhost:35729
    Expected Result: 开发服务器启动，页面加载
    Evidence: .sisyphus/evidence/task-6-dev-server.png
  ```

  **Commit**: YES
  - Message: `refactor: migrate main.js to main.ts with Composition API`

- [ ] 7. 迁移 router/index.js → TypeScript

  **What to do**:
  - 重命名为 `router/index.ts`
  - 更新为 Vue Router 4 语法
  - 使用 `createRouter` 替代 `new VueRouter`
  - 使用 `createWebHistory()` 替代 `mode: 'history'`
  - **关键**：将通配符路由 `path: "*"` 改为 `path: "/:pathMatch(.*)*"`
  - 使用 `createWebHistory` 替代 `mode: 'history'`
  - 更新通配符路由为 `/:pathMatch(.*)*`

  **Must NOT do**:
  - 不要改变路由表结构

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
  - **Skills**: N/A

  **Parallelization**:
  - **Can Run In Parallel**: YES (与 Task 8-10)
  - **Blocked By**: Task 6

  **References**:
  - 当前 `src/router/index.js`
  - Vue Router 4 迁移: https://router.vuejs.org/guide/migration/index.html

  **Acceptance Criteria**:
  - [ ] `router/index.ts` 存在
  - [ ] 使用 Vue Router 4 API
  - [ ] 路由正常工作

  **QA Scenarios**:
  ```
  Scenario: 验证路由
    Tool: Playwright
    Steps:
      1. 访问 /
      2. 点击导航到 /content
      3. 点击导航到 /faq
    Expected Result: 所有路由正常跳转
    Evidence: .sisyphus/evidence/task-7-router.png
  ```

  **Commit**: YES
  - Message: `refactor: migrate router to Vue Router 4 with TypeScript`

- [ ] 8. 迁移 config/constants.js → TypeScript

  **What to do**:
  - 重命名为 `constants.ts`
  - 添加类型定义
  - 导出类型接口

  **Must NOT do**:
  - 不要改变常量值

  **Recommended Agent Profile**:
  - **Category**: `quick`

  **Parallelization**:
  - **Can Run In Parallel**: YES

  **References**:
  - `src/config/constants.js`

  **Acceptance Criteria**:
  - [ ] `constants.ts` 存在
  - [ ] 有类型定义

  **Commit**: NO (与 Task 9-10 合并)

- [ ] 9. 迁移 config/data.js → TypeScript

  **What to do**:
  - 重命名为 `data.ts`
  - 添加类型定义
  - 定义数据接口
  - **关键**：将 `require("@/assets/img/...")` 改为 `new URL('@/assets/img/...', import.meta.url).href`
    - Vite 不支持 webpack 的 `require()` 语法
    - 需要更新所有图片路径引用

  **Must NOT do**:
  - 不要改变数据结构

  **Recommended Agent Profile**:
  - **Category**: `quick`

  **Parallelization**:
  - **Can Run In Parallel**: YES

  **References**:
  - `src/config/data.js`
  - Vite static assets: https://vitejs.dev/guide/assets.html

  **Acceptance Criteria**:
  - [ ] `data.ts` 存在
  - [ ] 有数据类型接口
  - [ ] 所有图片路径使用 `new URL()` 语法
  - [ ] 无 `require()` 调用

  **QA Scenarios**:
  ```
  Scenario: 验证图片路径
    Tool: Bash
    Steps:
      1. 检查 data.ts 中的图片路径
      2. 确认使用 new URL() 语法
      3. 确认无 require() 调用
    Expected Result: 所有路径使用 Vite 兼容语法
    Evidence: .sisyphus/evidence/task-9-images.png
  ```

  **Commit**: NO (与 Task 8,10 合并)

- [ ] 10. 迁移 .env 环境变量

  **What to do**:
  - 更新 `.env` 文件中的变量前缀：`VUE_APP_` → `VITE_`
  - 更新 `.env.example`
  - 更新代码中使用环境变量的地方：`process.env` → `import.meta.env`

  **Must NOT do**:
  - 不要遗漏任何环境变量

  **Recommended Agent Profile**:
  - **Category**: `quick`

  **Parallelization**:
  - **Can Run In Parallel**: YES

  **References**:
  - `.env.example`
  - Vite env: https://vitejs.dev/guide/env-and-mode.html

  **Acceptance Criteria**:
  - [ ] 所有 `VUE_APP_` 改为 `VITE_`
  - [ ] 代码中使用 `import.meta.env`

  **QA Scenarios**:
  ```
  Scenario: 验证环境变量
    Tool: Bash
    Steps:
      1. 检查 .env 文件
      2. 搜索代码中的 import.meta.env
    Expected Result: 环境变量正确使用 VITE_ 前缀
    Evidence: .sisyphus/evidence/task-10-env.png
  ```

  **Commit**: YES
  - Message: `refactor: migrate environment variables to Vite format`

- [ ] 11. 迁移 App.vue

  **What to do**:
  - 重写为 Composition API
  - 添加 TypeScript 类型
  - 保持原有模板和样式

  **Must NOT do**:
  - 不要改变组件行为
  - 不要改变样式

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: N/A

  **Parallelization**:
  - **Can Run In Parallel**: YES (Wave 3.1)
  - **Blocked By**: Tasks 7-10

  **References**:
  - `src/App.vue`

  **Acceptance Criteria**:
  - [ ] 使用 `<script setup lang="ts">`
  - [ ] 类型定义完整
  - [ ] 功能与原组件一致

  **QA Scenarios**:
  ```
  Scenario: 验证 App 组件
    Tool: Playwright
    Steps:
      1. 打开首页
      2. 检查布局渲染正常
    Expected Result: 页面布局与之前一致
    Evidence: .sisyphus/evidence/task-11-app.png
  ```

  **Commit**: NO (Wave 3.1 合并提交)

- [ ] 12-34. 迁移其他组件 (LeftMain, RightMain, FooterMain, ...)

  **What to do**:
  - 每个组件重写为 Composition API + TypeScript
  - 添加 Props 类型定义
  - 使用 `ref`, `computed`, `onMounted` 等
  - 保持模板和样式不变

  **Must NOT do**:
  - 不要改变组件接口（Props）
  - 不要改变事件名称

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: N/A

  **Parallelization**:
  - **Can Run In Parallel**: YES (组件间独立)

  **References**:
  - 原组件文件
  - Vue 3 Composition API: https://vuejs.org/guide/extras/composition-api-faq.html

  **Acceptance Criteria**:
  - [ ] 所有组件使用 `<script setup lang="ts">`
  - [ ] 类型定义完整
  - [ ] 无 TypeScript 错误

  **QA Scenarios**:
  ```
  Scenario: 验证组件功能
    Tool: Playwright
    Steps:
      1. 访问各页面
      2. 检查所有组件渲染正常
      3. 测试交互（点击、切换等）
    Expected Result: 所有组件正常工作
    Evidence: .sisyphus/evidence/task-{N}-{component}.png
  ```

  **Commit**: YES (每批 Wave 一个提交)

- [ ] F1. 类型检查验证

  **What to do**:
  - 运行 `vue-tsc --noEmit`
  - 修复所有类型错误

  **Recommended Agent Profile**:
  - **Category**: `deep`

  **Acceptance Criteria**:
  - [ ] 无 TypeScript 错误

  **QA Scenarios**:
  ```
  Scenario: 类型检查
    Tool: Bash
    Steps:
      1. 运行 npx vue-tsc --noEmit
    Expected Result: 0 errors
    Evidence: .sisyphus/evidence/final-tsc.png
  ```

- [ ] F2. 构建验证

  **What to do**:
  - 运行 `npm run build`
  - 检查 dist 输出

  **Recommended Agent Profile**:
  - **Category**: `deep`

  **Acceptance Criteria**:
  - [ ] 构建成功
  - [ ] dist 目录生成

  **QA Scenarios**:
  ```
  Scenario: 生产构建
    Tool: Bash
    Steps:
      1. 运行 npm run build
    Expected Result: 构建成功，无错误
    Evidence: .sisyphus/evidence/final-build.png
  ```

- [ ] F3. 功能回归测试

  **What to do**:
  - 使用 Playwright 测试所有页面
  - 验证主题切换
  - 验证路由切换
  - 验证所有交互

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
  - **Skills**: `playwright`

  **Acceptance Criteria**:
  - [ ] 所有页面加载正常
  - [ ] 主题切换工作
  - [ ] 路由切换工作

  **QA Scenarios**:
  ```
  Scenario: 完整回归测试
    Tool: Playwright
    Steps:
      1. 访问首页
      2. 切换到夜间主题
      3. 导航到关于页
      4. 导航到 FAQ 页
      5. 返回首页
    Expected Result: 所有功能正常
    Evidence: .sisyphus/evidence/final-regression/
  ```

- [ ] F4. 代码质量审查

  **What to do**:
  - 运行 ESLint
  - 检查代码规范

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`

  **Acceptance Criteria**:
  - [ ] ESLint 无错误
  - [ ] 无 console.log 遗留

---

## 最终验证 Wave

- [ ] F1. 类型检查验证 - `deep`
- [ ] F2. 构建验证 - `deep`
- [ ] F3. 功能回归测试 - `unspecified-high` + `playwright`
- [ ] F4. 代码质量审查 - `unspecified-high`

---

## Commit 策略

- Phase 1: `chore: migrate to Vue 3 + Vite infrastructure`
- Phase 2: `refactor: migrate router and config to TypeScript`
- Phase 3 Waves: `refactor: migrate components to Vue 3 Composition API`
- Phase 4: `chore: final verification and quality checks`

---

## 成功标准

### 验证命令
```bash
npm run dev      # 开发服务器启动
npm run build    # 生产构建成功
npm run lint     # ESLint 通过
npx vue-tsc --noEmit  # TypeScript 检查通过
```

### 最终检查清单
- [ ] 所有 24 个组件已迁移
- [ ] TypeScript 类型检查通过
- [ ] 生产构建成功
- [ ] 功能与原项目一致
- [ ] ESLint 无错误
