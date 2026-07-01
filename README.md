# Combat Design Portfolio

一个面向 HR 和面试官的游戏战斗策划 / 技术策划个人作品集网站，使用 Astro + Tailwind CSS + pnpm 构建，适合部署到 Vercel。

## 当前技术栈
- Astro
- Tailwind CSS
- pnpm 10.12.1
- Node.js >=22.12.0 <25

## 本地运行
```bash
pnpm install
pnpm dev
```

## 安装依赖
```bash
pnpm install
```

## 开发服务器
```bash
pnpm dev
```

## 构建
```bash
pnpm build
```

## 部署到 Vercel
推荐设置：
- Framework Preset: Astro
- Install Command: pnpm install
- Build Command: pnpm build
- Output Directory: dist
- Node.js Version: 22

## 添加自定义域名
在 Vercel Project Settings 的 Domains 中添加域名，根据提示配置 DNS 记录。上线前请确认是否仍需保留 `noindex, nofollow, noarchive` 和 `robots.txt` 的 `Disallow: /`。

## 替换项目数据
项目数据集中在 `src/data/projects.ts`。可替换标题、角色、工具、摘要、标签、缩略图占位说明和受限案例链接。

## 替换私有视频和文档链接
页面中的 `PRIVATE_VIDEO_URL`、`PRIVATE_DOCUMENT_URL` 是占位符。请替换为外部私有链接、签名链接或受权限保护的云盘链接。

## 为什么不要把敏感文件放进 public
Astro 的 `public/` 会作为静态资源直接发布，任何知道 URL 的人都可能访问。不要把敏感 PDF、Word、Excel 或完整视频放进 `public/`。

## 访问码说明
访问码配置在 `src/config/access.ts`，也可通过 `PUBLIC_PORTFOLIO_ACCESS_CODE` 环境变量覆盖。访问码只是在浏览器端用 localStorage 做的轻量隐私保护，不是真正安全的权限系统；不能替代服务器端认证、Vercel 访问控制或签名 URL。

## 隐私和索引
- 全站布局包含 `<meta name="robots" content="noindex, nofollow, noarchive">`
- `public/robots.txt` 内容为 `User-agent: *` 和 `Disallow: /`
- 项目不生成 sitemap
- 全站显示 “Shared for recruitment evaluation only. Please do not redistribute.”
