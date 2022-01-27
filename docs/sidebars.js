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
                collapsed: false,
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
                collapsed: false,
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
                collapsed: false,
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
        'Spec': [
            'spec/tokens',
            'spec/component-usage',
        ],
    }
};

module.exports = sidebars;
