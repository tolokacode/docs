import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'tolokacode',
  tagline: 'Free, open-source plugins for Ukrainian online shops',
  favicon: 'img/logo.svg',
  url: 'https://tolokacode.github.io',
  baseUrl: '/docs/',
  organizationName: 'tolokacode',
  projectName: 'docs',
  onBrokenLinks: 'throw',
  future: {v4: true, faster: true},

  i18n: {
    defaultLocale: 'uk',
    locales: ['uk', 'en'],
    localeConfigs: {
      uk: {label: 'Українська', htmlLang: 'uk'},
      en: {label: 'English', htmlLang: 'en'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'monobank',
        path: 'monobank',
        routeBasePath: 'monobank',
        sidebarPath: './sidebars-monobank.js',
        editUrl: 'https://github.com/tolokacode/docs/edit/main/',
        lastVersion: '0.1.0',
        versions: {
          current: {label: 'Наступна', path: 'next', banner: 'unreleased'},
          '0.1.0': {label: '0.1.0'},
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'checkbox-js',
        path: 'checkbox-js',
        routeBasePath: 'checkbox-js',
        sidebarPath: './sidebars-checkbox-js.js',
        editUrl: 'https://github.com/tolokacode/docs/edit/main/',
      },
    ],
  ],

  themeConfig: {
    colorMode: {respectPrefersColorScheme: true},
    navbar: {
      title: 'tolokacode',
      logo: {alt: 'tolokacode', src: 'img/logo.svg'},
      items: [
        {type: 'docSidebar', docsPluginId: 'monobank', sidebarId: 'monobank', position: 'left', label: 'Toloka for monobank'},
        {type: 'docSidebar', docsPluginId: 'checkbox-js', sidebarId: 'checkbox', position: 'left', label: 'Checkbox SDK'},
        {type: 'docsVersionDropdown', docsPluginId: 'monobank', position: 'right'},
        {type: 'localeDropdown', position: 'right'},
        {href: 'https://github.com/tolokacode', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'tolokacode',
          items: [
            {label: 'GitHub', href: 'https://github.com/tolokacode'},
            {label: 'Як долучитися', href: 'https://github.com/tolokacode/.github/blob/main/CONTRIBUTING.md'},
          ],
        },
        {
          title: 'Toloka for monobank',
          items: [
            {label: 'Документація', to: '/monobank/'},
            {label: 'Помилки та ідеї', href: 'https://github.com/tolokacode/toloka-monobank/issues'},
          ],
        },
        {
          title: 'Checkbox SDK',
          items: [
            {label: 'Документація', to: '/checkbox-js/'},
            {label: 'npm', href: 'https://www.npmjs.com/package/@tolokacode/checkbox'},
            {label: 'Помилки та ідеї', href: 'https://github.com/tolokacode/checkbox-js/issues'},
          ],
        },
      ],
      copyright: 'EUPL-1.2 · tolokacode',
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  },
};

export default config;
