import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Narrative',
  tagline: 'Narrative framework documentation',
  favicon: 'img/favicon.ico',
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    }
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Set the production url of your site here
  url: 'https://docs.narrativetools.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'narrative', // Usually your GitHub org/user name.
  projectName: 'narrative', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          // Please change this to your repo.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/narrative-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Narrative Tools',
      logo: {
        alt: 'Narrative Tools Logo',
        src: 'img/logo.svg',
      },
      items: [
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Products',
          items: [
            {
              label: 'Common UI',
              to: '/common-ui/',
            },
            {
              label: 'Interaction',
              to: '/interaction/',
            },
            {
              label: 'Inventory',
              to: '/inventory/',
            },
            {
              label: 'Navigator',
              to: '/navigator/',
            },
            {
              label: 'Pro',
              to: '/pro/',
            },
            {
              label: 'Tales',
              to: '/tales/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Fab Marketplace',
              href: 'https://www.unrealengine.com/marketplace/en-US/profile/Narrative+Tools+Inc.',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/qyVJmpQ2Pn',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@narrativetools',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Narrative Tools Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      magicComments: [
        // Remember to extend the default highlight class name as well!
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-error-line',
          line: 'removed',
          block: {start: 'removed-start', end: 'removed-end'},
        },
        {
          className: 'code-block-added-line',
          line: 'added',
          block: {start: 'added-start', end: 'added-end'},
        },
      ]
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'CZOV7T0F1R',

      // Public API key: it is safe to commit it
      apiKey: 'c51b1b57b62de8e6782b37a079d4c239',

      indexName: 'd3kryptionio',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      //... other Algolia params
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
