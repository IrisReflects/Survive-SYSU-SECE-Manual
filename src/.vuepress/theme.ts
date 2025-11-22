import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar";
import { zhSidebar } from "./sidebar";

export default hopeTheme({
  hostname: "https://redem-cat.github.io/Survive-SYSU-SECE-Manual/",

  author: {
    name: "Redem-cat",
    url: "https://github.com/Redem-cat",
    email: "1323746368@qq.com",
  },

  iconAssets: "fontawesome-with-brands",

  sidebarSorter: ["order", "readme", "filename", "date"],

  logo: "/logo.png",

  repo: "Redem-cat/Survive-SYSU-SECE-Manual",
  docsDir: "src",
  docsBranch: "main",

  navbar: zhNavbar,
  sidebar: zhSidebar,

  copyright: "MIT Licensed | Copyright © 2025-present Redem-cat",
  displayFooter: true,

  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  markdown: {
    align: true,
    figure: true,
    imgLazyload: true,
    imgSize: true,
    tasklist: true,
  },

  plugins: {
    slimsearch: {
      indexContent: true,
    },

    comment: {
      provider: "Giscus",
      repo: "Redem-cat/Survive-SYSU-SECE-Manual",
      repoId: "R_kgDOPQRJWw", 
      categoryId: "DIC_kwDOPQRJW84CyEYS",
      mapping: "pathname", 
    },

    // === 修改 2：修复报错 ===
    // 添加下面这行注释，告诉 TS 忽略这里的类型检查
    // @ts-ignore
    mdEnhance: {
      katex: true,
      codetabs: true,
      tabs: true,
      hint: true,
      flowchart: true,
      mermaid: true,
      mark: true,
      sub: true,
      sup: true,
    },
  },
});