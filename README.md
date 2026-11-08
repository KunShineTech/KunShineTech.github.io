# 坤晟科技官网 | KunShineTech

基于 **Astro 5 + Vue 3 + Tailwind CSS 3** 的静态企业官网，适用于 GitHub Pages + 自定义域名 `kunshine.tech`。

## 功能

- 中文企业官网：主页、解决方案、关于、创始人、博客、联系、404
- Astro Content Collections Markdown 博客，构建时生成静态文章页
- Vue 3 导航交互和复制链接组件（按需加载）
- 响应式布局、基础无障碍支持、低动画偏好支持
- SEO：独立页面 title/description、canonical、Open Graph、JSON-LD、sitemap、robots
- GEO：结构化企业/创始人信息、语义化内容、`llms.txt`
- GitHub Actions 自动构建发布 + CNAME

## 本地运行

要求 Node.js 22+、npm。

```bash
npm install
npm run dev
npm run build
npm run preview
```

首次执行 `npm install` 会生成 `package-lock.json`，建议将锁文件提交到 GitHub，并将部署流程切换为 `npm ci` 以保证可重复构建。

## 发布到 GitHub Pages

1. 在 GitHub 创建仓库，例如 `KunShineTech/kunshine-website`，将本项目文件放到仓库根目录，推送 `main` 分支。
2. 仓库 `Settings → Pages → Build and deployment` 选择 **GitHub Actions**。
3. 推送后等待 `Deploy Astro to GitHub Pages` 工作流完成。
4. 在 `Settings → Pages → Custom domain` 填写 `kunshine.tech`，保存；开启 **Enforce HTTPS**（证书生效后）。
5. 仓库发布产物中包含 `CNAME` 文件，值为 `kunshine.tech`。

### DNS 设置

在域名DNS管理后台，根域名 `@` 设置 GitHub Pages 官方 IPv4 A 记录：

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

可选的 GitHub Pages IPv6 AAAA 记录：

```text
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

可选 `www` 子域名：CNAME 指向 `<github-username-or-org>.github.io`（把占位符替换成实际账号，如 `kunshinetech.github.io`；请以 GitHub 实际组织名为准）。建议将 `www` 重定向到根域名。

**注意**：DNS 的 CNAME 不是 HTTP 302/301 转发。根域名使用 A/AAAA 指向 GitHub Pages，仓库中的 `CNAME` 用于 Pages 绑定自定义域名。若DNS服务商支持 ALIAS/ANAME，也可按其规范配置。DNS生效和HTTPS证书签发可能需要时间。若组织/仓库 Pages 有策略限制，请检查仓库设置。

### 重要：域名与SEO

- `astro.config.mjs` 中 `site` 为 `https://kunshine.tech`，因此 canonical 和 sitemap 均指向正式域名。
- `public/robots.txt` 指向 `/sitemap-index.xml`。
- 站点构建后应检查 `dist/sitemap-index.xml`、`dist/CNAME` 和文章页面。
- 上线后可在 Google Search Console 和 Bing Webmaster Tools 提交站点地图并验证域名。
- GEO（生成式引擎优化）不是排名保证；重点是内容准确、结构清晰、可索引、可验证与持续更新。

## 博客写作

在 `src/content/blog/` 新建 `.md`，例如 `my-article.md`：

```md
---
title: 文章标题
description: 一句话摘要
pubDate: 2026-11-09
tags: [工业软件, AI架构]
author: 坤晟科技
draft: false
---

## 正文标题

这里写 Markdown 正文。
```

文章发布后自动生成 `/blog/my-article/`。设置 `draft: true` 可从公开构建中排除文章。

## 发布前必须确认

- 当前公司介绍、项目方向和创始人资料为基于已提供信息撰写的初稿，应由公司核实后发布。
- 未公开真实客户名称、业绩数据、未核实的荣誉/证书，避免夸大表述。
- 创始人使用姓名 `崔驰坤 (Cui, Richard Kun)`，职位为**架构师**，不是经理人。
- `/contact/` 暂未填写邮箱/电话，请补充真实、获授权的商务联系方式。
- 如需创始人照片，替换 `src/pages/founder.astro` 中的姓名缩写占位图。
- 英文法定名称未核验，页脚的英文公司名称仅作译名，不作为工商登记英文名称声明。
- 中国大陆经营性或非经营性网站备案、公安备案及数据合规需求应根据实际部署与监管要求核实；GitHub Pages 托管与中国大陆服务器部署的要求可能不同。
- 检查历史合同的知识产权、客户保密与项目披露条款。

## 项目目录

```text
src/components/        Vue 3 交互组件
src/content/blog/      Markdown 博客
src/layouts/           SEO和结构化数据公共布局
src/pages/             Astro静态页面与动态文章路由
src/styles/            Tailwind与全局设计系统
public/                favicon、CNAME、robots、llms
.github/workflows/     GitHub Pages CI/CD
```
