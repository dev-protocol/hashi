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
    docs: {
        'Getting Started': ['getting-started/introduction', 'getting-started/setup', 'getting-started/philosophy'],
        'Core': [
            {
                type: 'category',
                label: 'Tokens',
                collapsed: true,
                items: [
                    'hs-core/tokens/tokens-index',
                    'hs-core/tokens/color-tokens',
                    'hs-core/tokens/shape-tokens',
                    'hs-core/tokens/type-tokens'
                ]
            },
            {
                type: 'category',
                label: 'Core API',
                collapsed: true,
                items: [
                    'hs-core/core-apis/init',
                    'hs-core/core-apis/render',
                    'hs-core/core-apis/extend',
                    'hs-core/core-apis/token',
                    'hs-core/core-apis/key',
                ]
            },
            {
                type: 'category',
                label: 'Helpers',
                collapsed: true,
                items: [
                    'hs-core/helpers/breakpoints',
                    'hs-core/helpers/dark-mode',
                ]
            },
        ],
        'Components': [
            'hs-components/hs-button',
            'hs-components/hs-button-group',
            'hs-components/hs-card',
            'hs-components/hs-link',
            'hs-components/hs-profile',
            'hs-components/hs-select-field',
            'hs-components/hs-text-field',
            'hs-components/hs-utils',
        ],
        'Integrations': [
            'integrations/tailwind'
        ],
        'Spec': [
            'spec/tokens',
            'spec/component-usage',
        ],
    }
};

module.exports = sidebars;
