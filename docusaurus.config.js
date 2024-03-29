// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Jay's Domain",
  tagline: "Discover, share, and grow",
  url: "https://windsuzu.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "windsuzu", // Usually your GitHub org/user name.
  projectName: "windsuzu.github.io", // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-TW",
    locales: ["zh-TW"],
  },

  themes: ["@docusaurus/theme-live-codeblock"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
          editUrl: "https://github.com/windsuzu/windsuzu.github.io/tree/master",
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarItemsGenerator: async ({
            defaultSidebarItemsGenerator,
            ...args
          }) => {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return reverseSidebarItems(sidebarItems);
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/windsuzu/windsuzu.github.io/tree/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/logo/og-image.png",
      metadata: [
        {
          name: "description",
          content: "Discover, share, and grow",
        },
      ],
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        hideOnScroll: true,
        title: "Jay's Domain",
        logo: {
          alt: "Site Logo",
          src: "img/icon/icon.svg",
          srcDark: "img/icon/icon-dark.svg",
        },
        items: [
          {
            type: "dropdown",
            position: "left",
            label: "閱讀前端",
            items: [
              {
                type: "doc",
                label: "HTML / CSS",
                docId: "frontend/html-css/intro",
              },
              {
                type: "doc",
                label: "JavaScript / TypeScript",
                docId: "frontend/js-ts/intro",
              },
              {
                type: "doc",
                label: "React / Next",
                docId: "frontend/react-next/intro",
              },
              {
                type: "doc",
                label: "Other",
                docId: "frontend/other/intro",
              },
            ],
          },
          {
            type: "doc",
            docId: "learning/intro",
            position: "left",
            label: "學習筆記",
          },
          { to: "/blog", label: "部落格", position: "left" },
          {
            href: "https://www.github.com/windsuzu/windsuzu.github.io",
            label: "Source",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "閱讀前端",
            items: [
              {
                label: "HTML / CSS",
                to: "frontend/html-css/intro",
              },
              {
                label: "JavaScript / TypeScript",
                to: "frontend/js-ts/intro",
              },
              {
                label: "React / Next",
                to: "frontend/react-next/intro",
              },
              {
                label: "Other",
                to: "frontend/other/intro",
              },
            ],
          },
          {
            title: "筆記和部落格",
            items: [
              { label: "學習筆記", to: "learning/intro" },
              { label: "部落格", to: "/blog" },
            ],
          },
          {
            title: "更多",
            items: [
              { label: "My GitHub", href: "https://www.github.com/windsuzu" },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jay's Domain. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        magicComments: [
          {
            className: "code-block-highlight-line",
            line: "highlight-next-line",
            block: { start: "highlight-start", end: "highlight-end" },
          },
          {
            className: "code-block-error-line",
            line: "error-next-line",
            block: { start: "error-start", end: "error-end" },
          },
        ],
      },
    }),
};

module.exports = config;

// Reverse the sidebar items ordering (not including nested category items)
function reverseSidebarItems(items) {
  return items.reverse();
}
