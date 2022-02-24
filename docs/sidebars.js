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
      'design/getting-started/introduction',
      'design/getting-started/ui-kit'
    ],
    'Design Fundamentals': [
      'design/fundamentals/colors',
      'design/fundamentals/typography'
    ],
    'Components': [
      'design/hs-components/hs-button',
      'design/hs-components/hs-card',
      'design/hs-components/hs-text-field',
    ]
  },
  develop: {
    'Getting Started': [
      'develop/getting-started/introduction',
      'develop/getting-started/setup',
      'develop/getting-started/concepts'],
    'Core': [
      {
        type: 'category',
        label: 'Tokens',
        collapsed: true,
        items: [
          'develop/hs-core/tokens/tokens-index',
          'develop/hs-core/tokens/color-tokens',
          'develop/hs-core/tokens/shape-tokens',
          'develop/hs-core/tokens/type-tokens'
        ]
      },
      {
        type: 'category',
        label: 'Core API',
        collapsed: true,
        items: [
          'develop/hs-core/core-apis/init',
          'develop/hs-core/core-apis/render',
          'develop/hs-core/core-apis/extend',
          'develop/hs-core/core-apis/token',
          'develop/hs-core/core-apis/key',
        ]
      },
      {
        type: 'category',
        label: 'Helpers',
        collapsed: true,
        items: [
          'develop/hs-core/helpers/breakpoints',
          'develop/hs-core/helpers/dark-mode',
        ]
      },
    ],
    'Components': [
      'develop/hs-components/hs-button',
      'develop/hs-components/hs-button-group',
      'develop/hs-components/hs-card',
      'develop/hs-components/hs-link',
      'develop/hs-components/hs-profile',
      'develop/hs-components/hs-select-field',
      'develop/hs-components/hs-text-field',
      'develop/hs-components/hs-utils',
    ],
    'Integrations': [
      'develop/integrations/tailwind'
    ],
    'Spec': [
      'develop/spec/tokens',
      'develop/spec/component-usage',
    ],
  }
};

module.exports = sidebars;
