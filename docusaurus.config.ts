import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Mukjizat Ekaristi',
  tagline: 'Terinspirasi oleh Carlo Acutis. Dihadirkan dalam Bahasa Indonesia.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'johanesm21', // Usually your GitHub org/user name.
  projectName: 'mukjizat-ekaristi', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  scripts: [
    {
      src: 'js/buttons.js',
      async: true,
      defer: true,
    },
  ],
  
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Mukjizat Ekaristi',
      logo: {
        alt: 'Mukjizat Ekaristi Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          position: 'right',
          html: '<a>Follow @johanesmistrialdo</a>',
          href: 'https://github.com/johanesmistrialdo',
          className: 'github-button',
          'aria-label': 'Follow @johanesmistrialdo on GitHub',
          'data-size': 'large',
          'data-color-scheme': 'no-preference: dark; light: dark; dark: dark;',
        },
        {
          type: 'html',
          position: 'right',
          value: '<a class="github-button" href="https://github.com/johanesmistrialdo" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-size="large" aria-label="Follow @johanesmistrialdo on GitHub">Follow @johanesmistrialdo</a>',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `${new Date().getFullYear()} | Mukjizat Ekaristi | Dikelola oleh Johanes Mistrialdo`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
