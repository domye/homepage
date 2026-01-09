# 组件文档

本项目包含多个可复用组件，主要分为左侧（用户信息）和右侧（内容展示）两大部分。

## 基础组件

### WelcomePopup
欢迎弹窗组件，页面加载时显示。
- **功能**: 显示欢迎动画和提示。
- **位置**: `src/components/WelcomePopup.vue`

### FooterMain
页脚组件。
- **功能**: 显示版权信息和备案号。
- **位置**: `src/components/FooterMain.vue`

## 布局组件

### LeftMain
左侧主容器。
- **功能**: 包含头像、标签、时间轴等个人信息。
- **位置**: `src/components/LeftMain.vue`

### RightMain
右侧主容器。
- **功能**: 包含导航栏、路由视图容器、装饰元素。
- **位置**: `src/components/RightMain.vue`

## 功能组件 (Right)

### RightProject
项目展示组件。
- **Props**:
  - `data` (Array): 项目或网站数据列表。
- **位置**: `src/components/Right/RightProject.vue`

### RightTitle
章节标题组件。
- **Props**:
  - `page` (Object): 包含标题文本和SVG图标数据的对象。
- **位置**: `src/components/Right/RightTitle.vue`

### RightSkill
技能展示组件。
- **位置**: `src/components/Right/RightSkill.vue`

---
*更多组件详情请查阅源码。*
