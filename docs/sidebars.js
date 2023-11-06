/*
 *  Copyright (c) 2023 Dev Protocol
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

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  design: {
    'Getting Started': [
      'design/introduction',
      'design/getting-started/terminologies',
    ],
    'UI kit': [
      'design/getting-started/ui-kit',
      'design/getting-started/using-the-sidebar',
      'design/getting-started/slots',
    ],
    'Foundation': [
      {
        'Color': [
          'design/foundation/color/color-theming',
          'design/foundation/color/applying-color',
          'design/foundation/color/color-tokens',
        ],
        'Shape': [
          'design/foundation/shape/shape-theming',
          'design/foundation/shape/surface',
          'design/foundation/shape/shape-tokens',
        ],
        'Typography': [
          'design/foundation/typography/typography-theming',
          'design/foundation/typography/iconography',
          'design/foundation/typography/typography-tokens',
        ],
        'Layout': [
          'design/foundation/layout/grid',
          'design/foundation/layout/spacing',
          'design/foundation/layout/breakpoints',
        ]
      },
    ],
    'Components': [
      'design/components/introduction',
      'design/components/hs-button',
      'design/components/hs-card',
      'design/components/hs-dialog',
      'design/components/hs-form-field',
      'design/components/hs-select-field',
      'design/components/hs-wallet',
    ]
  },
  develop: {
    'Getting Started': [
      'develop/introduction',
      'develop/getting-started/index',
      'develop/getting-started/concepts',
      'develop/getting-started/terminologies',
      'develop/getting-started/gradual-adoption',
      'develop/getting-started/separating-stylesheets',
      'develop/getting-started/dark-mode',
    ],
    'Theming': [
      'develop/theming/index',
      'develop/theming/advanced',
    ],
    'Utilities': [
      'develop/utilities/index',
      'develop/utilities/syntax',
      'develop/utilities/layout-utils',
      'develop/utilities/color-utils',
      'develop/utilities/shape-utils',
      'develop/utilities/typography-utils',
    ],
    'Components': [
      'develop/components/index',
      'develop/components/hs-badge',
      'develop/components/hs-button',
      'develop/components/hs-button-group',
      'develop/components/hs-card',
      'develop/components/hs-dialog',
      'develop/components/hs-form-field',
      'develop/components/hs-link',
      'develop/components/hs-profile',
      'develop/components/hs-select-field',
      'develop/components/hs-tick-field',
      'develop/components/hs-wallet',
    ],
    'Integrations': [
      'develop/integrations/tailwind'
    ],
    'Guide': [
      'develop/guides/authoring-components'
    ],
    'API': [
      'develop/api/initializer',
      'develop/api/tools',
      {
        type: 'category',
        label: 'Composition',
        collapsed: true,
        items: [
          'develop/api/composition/index',
          'develop/api/composition/color',
          'develop/api/composition/shape',
          'develop/api/composition/typography',
        ]
      },
    ]
  }
};

module.exports = sidebars;
