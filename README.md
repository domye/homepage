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

├── public/
├── src/
│   ├── assets/              # 静态资源
│   ├── config/              # 配置文件
│   │   ├── constants.js     # 常量配置
│   │   └── data.js          # 数据配置（项目与网站数据）
│   ├── components/          # 组件
│   │   ├── Left/            # 左侧组件
│   │   ├── Right/           # 右侧组件
│   │   ├── FooterMain.vue
│   │   ├── LeftMain.vue
│   │   ├── RightMain.vue
│   │   └── WelcomePopup.vue
│   ├── router/              # 路由
│   ├── views/               # 页面视图
│   ├── App.vue
│   └── main.js
├── .env.example             # 环境变量示例
├── vue.config.js            # 构建配置
└── package.json

## ⚙️ 环境配置

1.  复制环境变量示例文件：
    ```bash
    cp .env.example .env
    ```
2.  根据实际情况修改 `.env` 文件中的配置。

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
