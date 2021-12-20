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
        'Getting Started': ['getting-started/introduction', 'getting-started/setup'],
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
        ],
        'Components': [
            'hs-components/hs-button',
            'hs-components/hs-button-group',
            'hs-components/hs-card',
            'hs-components/hs-text-field',
        ],
        'Spec': [
            'spec/component-usage'
        ],
    }
};

module.exports = sidebars;
