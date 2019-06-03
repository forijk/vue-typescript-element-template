# Admin-TypeScript-Vue

## 一款轻量级、简单易用、结构清晰的 Vue CLI3 + TypeScript + ElementUI 开发的企业级后台模板。

- 使用方法
  - git clone https://github.com/forijk/Admin-TypeScript-Vue.git
  - 安装依赖: npm install
  - 本地运行: npm run serve
  - 代码Lint: npm run lint
  - 本地构建: npm run build

- 特点：
  - 多入口项目；也改成单入口，直接修改 vue.config.js 即可
  - 采用 ESLint 作为代码规范工具，内置对 typescript 语法的支持
  - 文件目录结构清晰
    - pages 项目目录
    - 工具类 utils
    - 插件类 plugins
    - 公共组件 components
  - 已对 router、store 进行了简单的配置，拿来即用
  - 集成三级菜单、面包屑功能等功能
  - 已抽离公共组建 Layout、Header、Side、Breadcrumb 等组件，简单易用，便于扩展

### 目录结构

```javascript
├── README.md
├── babel.config.js
├── dist
├── package.json
├── postcss.config.js
├── public
├── src
│   ├── assets
│   ├── common
│   │   ├── Bus.ts
│   │   └── common.scss
│   ├── components
│   │   ├── Breadcrumb.vue
│   │   ├── Header.vue
│   │   ├── Layout.vue
│   │   └── Side.vue
│   ├── pages
│   │   ├── home
│   │   │   ├── App.vue
│   │   │   └── main.ts
│   │   ├── index
│   │   │   ├── App.vue
│   │   │   ├── components
│   │   │   ├── main.ts
│   │   │   ├── router.ts
│   │   │   ├── shims-tsx.d.ts
│   │   │   ├── shims-vue.d.ts
│   │   │   ├── store
│   │   │   └── views
│   │   │       ├── About.vue
│   │   │       └── Dashboard.vue
│   │   └── initialize.ts
│   ├── plugins
│   └── utils
├── tsconfig.json
└── vue.config.js
```

### 后续将持续更新。希望能够帮助到大家，有所收获，也希望大家多多提建议。

### 感谢 ~
