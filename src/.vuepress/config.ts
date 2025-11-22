import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/", 
  lang: "zh-CN",
  // 2. 修改标题和描述，更符合你的项目
  title: "中山大学本科生自救指南(电通版)",
  description: "中山大学电子与通信工程学院（SECE）课程攻略、生存指南与资源汇总",

  // 3. 头部配置 (Head)
  head: [
    // 设置浏览器标签页的小图标 (Favicon)
    ["link", { rel: "icon", href: "/logo.png" }],
    ["meta", { name: "keywords", content: "中山大学, SECE, 电通院, 课程攻略, 选课指南, 考研" }],
  ],

  bundler: viteBundler(),
  
  theme, // 引用 theme.ts

  shouldPrefetch: false,
  pagePatterns: ["**/*.md", "!**/*.snippet.md", "!.vuepress", "!node_modules"],
});