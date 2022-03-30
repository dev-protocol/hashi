/*
 *  Copyright (c) 2022 Dev Protocol
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 */

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hashi',
  tagline: 'Dev Protocol\'s design system for building bridges from software to user.',
  url: 'https://hashi.devprotocol.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://docs.devprotocol.xyz/_includes/assets/images/devprotocol-logo.png',
  organizationName: 'devprotocol',
  projectName: 'hashi',
  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/dev-protocol/hashi-web/docs',
          breadcrumbs: false,
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/dev-protocol/initto',
        },
        theme: {
          customCss: require.resolve('./src/scss/main.scss'),
        },
      }),
    ],
  ],

  themeConfig: {
    autoCollapseSidebarCategories: false,
    colorMode: { defaultMode: 'dark' },
    navbar: {
      title: 'Hashi',
      items: [
        {
          to: '/docs/next/design',
          label: 'Design',
          position: 'left'
        },
        {
          to: '/docs/next/develop',
          label: 'Develop',
          position: 'left'
        },
        {
          to: 'https://initto.devprotocol.xyz',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/dev-protocol/hashi-web',
          label: 'Source',
          position: 'left',
        },
        {
          type: 'docsVersionDropdown',
          position: 'left',
          dropdownActiveClassDisabled: true,
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Dev Protocol`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  }
};

module.exports = config;
