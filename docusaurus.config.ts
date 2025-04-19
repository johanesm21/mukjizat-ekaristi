import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Mukjizat Ekaristi',
  tagline: 'Terinspirasi oleh Carlo Acutis. Dihadirkan dalam Bahasa Indonesia.',
  favicon: 'img/eucharist-logo.png',

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
          path: 'daftar-mukjizat',
          routeBasePath: 'daftar-mukjizat',
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

  // scripts: [
  //   {
  //     src: '/js/buttons.js',
  //     async: true,
  //     defer: true,
  //   },
  // ],
  
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Mukjizat Ekaristi',
      hideOnScroll: true,
      logo: {
        alt: 'Mukjizat Ekaristi Logo',
        src: 'img/eucharist-logo.png',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Tentang Carlo Acutis',
          position: 'left',
          items: [
            {
              label: 'Siapa Carlo Acutis?',
              to: 'siapa-carlo-acutis',
            },
            {
              label: 'Perjalanan Carlo Acutis',
              to: 'perjalanan-carlo-acutis',
            },
            {
              label: 'Quotes Carlo Acutis',
              to: 'quotes-carlo-acutis',
            },
          ],
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Daftar Mukjizat',
        },
        {
          type: 'html',
          position: 'right',
          value: '<a href="https://github.com/johanesm21/mukjizat-ekaristi" class="header-github-link" target="_blank" rel="noopener noreferrer"><img src="/img/github-mark.svg" alt="Github" width="24" height="24" style="margin-right: 0.5rem"/>mukjizat-ekaristi</a>',
        },
      ],
    },
    footer: {
      // style: 'dark',
      links: [
      ],
      copyright: `${new Date().getFullYear()} | Mukjizat Ekaristi | Dikelola oleh Johanes Mistrialdo & Meiriska Amelia`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
