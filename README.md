# KunShine.tech

大连坤晟科技有限公司中英文官网。Astro + Tailwind CSS + GitHub Actions + GitHub Pages。

## 开发

使用 Node.js 22.12+，推荐 Node.js 24 LTS。

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

中文 `/`，英文 `/en/`。内容集中在 `src/components/Website.astro`，样式在 `src/styles/global.css`。正式地址配置在 `astro.config.mjs`。

## 部署

1. 将代码推送到 `main`。仓库 Settings → Pages → Source 选择 **GitHub Actions**。
2. 先在 Settings → Pages → Custom domain 填 `kunshine.tech` 并保存，再配置 DNS。建议先在组织设置验证域名归属。
3. 如需 www，配置 CNAME `www` → `kunshinetech.github.io`。
4. 域名根记录 `@` 配置 GitHub Pages A 记录：`185.199.108.153`、`185.199.109.153`、`185.199.110.153`、`185.199.111.153`。以 [GitHub 官方文档](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) 当前说明为准，删除冲突记录。
5. DNS 校验和证书签发完成后启用 **Enforce HTTPS**。Actions 部署仍需在 Pages 设置填写域名，不能只依赖 CNAME 文件。

工作流 `.github/workflows/deploy.yml` 完成类型检查、构建及部署；产物为 `dist/`，包含 `public/CNAME`。本地构建完成不等于远程发布成功。

## 联系入口与内容

当前通过本仓库 GitHub Issues 发起合作交流，需登录且内容公开。请确认仓库已启用 Issues；收到真实企业邮箱后可替换页面中的联系链接。网站未虚构邮箱、客户、项目成效或普遍效率承诺。

网站无分析追踪、无第三方字体依赖、不收集表单数据。上线前核对公司介绍与实际业务范围。
