import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Narrative',
  tagline: 'Narrative framework documentation',
  favicon: 'img/favicon.ico',
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/documentation-test/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'narrative', // Usually your GitHub org/user name.
  projectName: 'narrative', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Narrative Tools Inc',
      logo: {
        alt: 'Narrative Tools Inc Logo',
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
              label: 'Quests & Dialogue',
              to: '/quests-and-dialogue/',
            },
            {
              label: 'Pro',
              to: '/pro/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Epic Marketplace',
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
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
