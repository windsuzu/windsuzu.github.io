// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/icon/social.png",
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
            label: "閱讀分享",
            items: [
              {
                type: "doc",
                label: "前端工程",
                docId: "reading/frontend/intro",
                sidebarId: "frontend",
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
            title: "閱讀分享",
            items: [
              {
                label: "前端工程",
                to: "reading/frontend/intro",
              },
            ],
          },
          {
            title: "筆記和部落格",
            items: [
              {
                label: "學習筆記",
                to: "learning/intro",
              },
              {
                label: "部落格",
                to: "/blog",
              },
            ],
          },
          {
            title: "更多",
            items: [
              {
                label: "My GitHub",
                href: "https://www.github.com/windsuzu",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jay's Domain. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
