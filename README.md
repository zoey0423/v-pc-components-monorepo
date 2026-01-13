pc-ui-monorepo
├─ apps/                    # 可运行应用（不会发布）
├─ packages/                # 可发布的 npm 包
├─ docs/                    # 纯文档内容（MD / MDX）
├─ plop-templates/          # 代码 / 文档自动生成模板
├─ pnpm-workspace.yaml
├─ package.json             # monorepo 级别
├─ pnpm-lock.yaml
├─ plopfile.mjs
└─ README.md

apps/docs-site/src
├─ components/              # 文档站点“自己的 UI 组件”
├─ layouts/                 # 页面骨架（Header / Sidebar / Content）
├─ pages/                   # 页面类型（中转站）
├─ routes/                  # 文档 & 页面映射配置（核心）
├─ docs/                    # 文档入口（实际 mdx 在顶层 docs/）
├─ utils/                   # 工具函数（sidebar 生成等）
├─ App.tsx
└─ main.tsx

routes/
├─ components.ts            # 所有组件文档的路由定义
├─ guide.ts                 # 设计规范 / 开发指南
└─ index.ts                 # 汇总导出


-apps/docs-site/src/components: 用于展示组件，包括**DemoBlock, CodeViewer, PropsTable, Sidebar, MDXWrapper**等
-packages/ui: 真正发布给业务的组件库
-docs/components/*.mdx: 说明文档