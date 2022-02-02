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
 * @access private
 * @type {string}
 */
const prefix = 'hs';

/**
 * @access private
 * @type {string}
 */
const context = 'theme';

/**
 * Generates a variable name
 * @access private
 * @param token {string}
 * @returns {string}
 */
function tokenVar(token) {
  return `var(--${prefix}-${context}-${token})`;
}

/**
 * Color module generator
 * @access private
 * @param name {string}
 * @param variants {[]}
 * @returns {{}}
 * @private
 */
function tokenModule(name, variants) {
  let finalModule = {};
  variants.forEach(variant => {
    const tokenName = variant === 'DEFAULT' || variant === '' ? `${name}` : `${name}-${variant}`;
    finalModule[`${variant}`] = tokenVar(tokenName);
  });
  return finalModule;
}

module.exports = {
  theme: {
    screens: {
      small: '320px',
      medium: '630px',
      large: '890px'
    },
    colors: {
      surface: tokenModule('surface', [200, 300, 400, 600, 'ink']),
      neutral: tokenModule('neutral', [200, 300, 400, 600, 'ink']),
      disabled: tokenModule('disabled', ['DEFAULT', 'ink']),
      scarlet: tokenModule('scarlet', [200, 300, 400, 600, 'ink']),
      plox: tokenModule('plox', [200, 300, 400, 600, 'ink']),
      'native-blue': tokenModule('native-blue', [200, 300, 400, 600, 'ink']),
      'bright-cyan': tokenModule('bright-cyan', [200, 300, 400, 600, 'ink']),
      success: tokenModule('success', [200, 300, 400, 600, 'ink']),
      warning: tokenModule('warning', [200, 300, 400, 600, 'ink']),
      danger: tokenModule('danger', [200, 300, 400, 600, 'ink']),
    },
    borderRadius: tokenModule('radius', ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'pill']),
    borderWidth: {
      DEFAULT: '1px',
      'none': 'none',
      'xs': '1px',
      'sm': '2px',
      'md': '4px',
      'lg': '6px',
      'xl': '8px'
    },
    gap: tokenModule('space', ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'pill']),
    margin: tokenModule('margin', ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'pill']),
    padding: tokenModule('padding', ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'pill']),
    outlineWidth: {
      DEFAULT: '1px',
      'none': 'none',
      'xs': '1px',
      'sm': '2px',
      'md': '4px',
      'lg': '6px',
      'xl': '8px'
    },
    outlineOffset: tokenModule('space', ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'pill']),
    ringOffsetWidth: tokenModule('space', ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'pill']),
    ringWidth: {
      DEFAULT: '1px',
      'none': 'none',
      'xs': '1px',
      'sm': '2px',
      'md': '4px',
      'lg': '6px',
      'xl': '8px'
    },
    spacing: tokenModule('space', ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'pill']),
    fontFamily: tokenModule('family', ['global', 'header', 'body', 'action', 'code']),
    fontSize: tokenModule('size', ['h1', 'h2', 'h3', 'h4', 'body', 'icon', 'action', 'small']),
    fontWeight: tokenModule('weight', ['h1', 'h2', 'h3', 'h4', 'body', 'icon', 'action', 'small']),
    lineHeight: tokenModule('line-height', ['h1', 'h2', 'h3', 'h4', 'body', 'icon', 'action', 'small']),
  },
}