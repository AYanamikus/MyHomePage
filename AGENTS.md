# AGENTS.md

## 项目说明
这是一个 Astro + Tailwind CSS + pnpm 的游戏战斗策划 / 技术策划作品集网站。

## 开发规则
- 使用 pnpm，不要使用 npm
- 不要把 npm 添加到 dependencies 或 devDependencies
- 使用 Node.js 22，且本地可兼容 Node 24
- 不要把敏感 PDF、Word、Excel、完整视频放进 public
- public 只放非敏感图片、缩略图、robots.txt 等
- 全站保持 noindex, nofollow, noarchive
- robots.txt 保持 Disallow: /
- 不生成 sitemap
- 详细 Case Study 内容需要访问码
- 访问码只是轻量隐私保护，不是真正安全的权限系统
- 完整视频和完整文档使用外部私有链接或签名链接
- 保持页面适合 HR 和面试官阅读
- 所有回答优先使用中文

## 常用命令
- pnpm install
- pnpm dev
- pnpm build
- pnpm preview

## 验证要求
每次修改完成前，请运行 pnpm build。
