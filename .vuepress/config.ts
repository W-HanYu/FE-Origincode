import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "Ustinian",
  base: "/FE-Origincode/",
  description:
    "react、vue主流框架源码的输出，包括原理解析以及框架中的算法以及面试频率很高的相关知识点，带你更深入的学习底层原理。",
  head: [
    [
      "link",
      { rel: "icon", href: "./favicon.ico" },
    ],
  ],
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "",
    author: "wangtao",
    authorAvatar: "/head.png",
    // docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "master",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/react/principle-analysis/": [
        {
          text: "基础概念",
          children: ["macro-structure", "workloop", "object-structure"],
        },
        {
          text: "运行核心",
          children: [
            "bootstrap",
            "reconciler-workflow",
            "priority",
            "scheduler",
            "fibertree-prepare",
            "fibertree-create",
            "fibertree-update",
            "fibertree-commit",
          ],
        },
        {
          text: "状态管理",
          children: [
            "state-effects",
            "hook-summary",
            "hook-state",
            "hook-effect",
            "context",
          ],
        },
      ],
      "/docs/react/algorithm": [
        {
          text: "React中的算法",
          children: [
            "diff",
            "bitfield",
            "dfs",
            "heapsort",
            "linkedlist",
            "stack",
          ],
        },
      ],
    },
    navbar: [
      { text: "首页", link: "/" },
      {
        text: "React",
        children: [
          {
            text: "原理篇",
            link: "/docs/react/principle-analysis/macro-structure",
          },
          {
            text: "算法篇",
            link: "/docs/react/algorithm/diff",
          },
        ],
      },
      { text: "Vue", link: "/tags/tag1/1/" },
      {
        text: "小程序",
        children: [
          { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
          { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
        ],
      },
    ],
    bulletin: {
      body: [
        {
          type: "text",
          content: `🎉🎉🎉React、Vue源码已更新，欢迎小伙伴们前来学习，一起讨论，共同进步，有问题的可以提Issues哈。`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "QQ 群",
        },
        {
          type: "text",
          content: `
          <ul>
            <li>QQ群1：1037296104</li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "GitHub",
        },
        {
          type: "text",
          content: `
          <ul>
            <li><a href="https://github.com/W-HanYu/FE-Origincode/issues">Issues<a/></li>
            <li><a href="https://github.com/W-HanYu/FE-Origincode/discussions/1">Discussions<a/></li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "buttongroup",
          children: [
            {
              text: "打赏",
              link: "/docs/others/donate.html",
            },
          ],
        },
      ],
    },
    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  }),
  // debug: true,
});
