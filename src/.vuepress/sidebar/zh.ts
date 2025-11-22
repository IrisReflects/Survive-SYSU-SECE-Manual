import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({

  "/courses/": [
    {
      text: "学业攻略",
      icon: "book-open", 
      link: "/courses/SECE/freshman/", 
      children: [
        {
          text: "大一 (Freshman)",
          icon: "1", 
          prefix: "SECE/freshman/",
          collapsible: true, 
          children: "structure", 
        },
        {
          text: "大二 (Sophomore)",
          icon: "2",
          prefix: "SECE/sophomore/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "大三 (Junior)",
          icon: "3",
          prefix: "SECE/junior/",
          collapsible: true,
          children: "structure",
        },
      ],
    },
  ],

  "/schools/": [
    {
      text: "校园生活指南",
      icon: "mug-hot", 
      prefix: "SECE/",
      link: "/schools/SECE/0.main.md",
      children: "structure", 
    },
  ],


  "/resources/": [
    {
      text: "资源中心",
      icon: "toolbox",
      children: "structure", // 自动读取 resources 文件夹下的所有文件
    },
  ],

 
  "/": [
    "", // 首页 README.md
  ],
});