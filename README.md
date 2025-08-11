# HomePage

基于 Vue2的个人主页项目，简约而不简单，丝滑而又不臃肿

## 🚀 技术栈

- 前端框架：Vue.js
- 路由管理：Vue Router
- 包管理：npm/yarn
- 代码规范：ESLint

## 💕陈述

该项目灵感来自以下项目：

- [ZYYO主页](https://github.com/ZYYO666/homepage)（修订自）
- [xxynet](https://github.com/xxynet/HomePage)（参考）
- [Xhofe](https://nn.ci/)（参考）
- [第乌](https://ddiu.io/)（参考）

## 🎈特征

- [x] 支持夜间主题切换
- [x] 切换主题时平滑过渡
- [x] 切换页面平滑过渡
- [x] 优化页面动画效果
- [x] 组件拆分

## 📸 项目截图

 <table>    <tr>      <td><img src="https://cdn.domye.top/uploads/08/1754907086.webp" alt="Pc端主页" width="400"></td>      <td><img src="https://cdn.domye.top/uploads/08/1754906993.webp" alt="Pc端介绍页面" width="400"></td>    </tr>    <tr>      <td><img src="https://cdn.domye.top/uploads/08/1754906992.webp" alt="Pc端FAQ页面" width="400"></td>      <td><img src="https://cdn.domye.top/uploads/08/1754906991.webp" alt="移动端" width="400"></td>    </tr>  </table>

## 📁 目录结构说明

```
├── img/# 图片资源文件夹
├── svgjson/# SVG图标的JSON数据文件夹
├── components/# 可复用组件库
│├── LeftDesc.vue# 左侧头像下的说明组件
│├── LeftLogo.vue# 左侧头像组件
│├── LeftTag.vue# 左侧标签组件
│├── LeftTime.vue# 左侧时间轴组件
│├── RightDesc.vue# 右侧装饰组件
│├── RightIcon.vue# 右侧图标组件
│├── RightIntro.vue# 右侧个人介绍组件
│├── RightProject.vue # 项目展示组件
│├── RightSkill.vue# 技术栈组件
│├── RightSnake.vue# Github贪吃蛇组件
│├── RightSwitch.vue# 黑白主题切换组件
│├── RightTab.vue# 右侧选项卡组件
│├── FooterMain.vue# 页脚主组件
│├── LeftMain.vue# 左侧主内容组件
│└── RightMan.vue# 右侧主内容组件
├── router/# 路由配置文件夹
│└── index.js# 路由定义文件（需自行创建，配置页面跳转）
├── views/# 页面视图文件夹（对应路由页面）
│├── RightFirst.vue # 项目展示
│├── RightSecond.vue # 关于我
│└── RightThird.vue #常见问题
├── main.js# 项目入口文件（初始化Vue实例、引入路由/组件）
├── package.json# 项目依赖与脚本配置
└── README.md# 项目说明文档
```

## ⚙️ 安装与运行

1. **克隆仓库**

```bash
git clone https://github.com/your-username/your-repo-name.git
```

2. **进入项目目录**

```bash
cd your-repo-name
```

3. **安装依赖**

```bash
npm install# 或 yarn install
```

4. **启动开发服务器**（热更新）

```bash
npm run serve# 访问 http://localhost:8080 查看效果
```

5. **打包生产环境**（用于部署）

```bash
npm run build# 生成的`dist`文件夹可部署至服务器
```

## 📜 脚本命令说明

在`package.json`中定义了以下常用脚本：

- `npm run serve`：启动开发服务器（支持热更新）
- `npm run build`：打包生产环境代码（优化、压缩）
- `npm run lint`：运行 ESLint 检查代码风格（自动修复部分问题）

## ⚙️ 自定义配置

如需修改项目配置（如端口、别名、插件），可参考 Vue CLI 官方文档：
[Vue CLI Configuration Reference](https://cli.vuejs.org/config/)

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支（`git checkout -b feature/xxx`）
3. 提交修改（`git commit -m "feat: 添加xxx功能"`，遵循[Conventional Commits](https://www.conventionalcommits.org/zh-hans/)规范）
4. 推送分支（`git push origin feature/xxx`）
5. 提交 Pull Request
