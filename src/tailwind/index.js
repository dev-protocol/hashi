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

import { hsColorTokens } from "./_colors";

module.exports = {
  theme: {
    screens: {
      small: '320px',
      medium: '630px',
      large: '890px'
    },
    colors: {
      hsColorTokens
    },
    // rounded-[]
    borderRadius: {
      'none': 'var(--hs-theme-radius-none)',
      'xs': 'var(--hs-theme-radius-xs)',
      'sm': 'var(--hs-theme-radius-sm)',
      'md': 'var(--hs-theme-radius-md)',
      'lg': 'var(--hs-theme-radius-lg)',
      'xl': 'var(--hs-theme-radius-xl)',
      'pill': 'var(--hs-theme-radius-pill)',
    },
    // border-[]
    borderWidth: {
      DEFAULT: '1px',
      0: 'none',
      1: '1px',
      2: '2px',
      3: '4px',
      4: '6px',
      5: '8px'
    },
    // gap-[]
    gap: {
      0: 'var(--hs-theme-space-none)',
      1: 'var(--hs-theme-space-xs)',
      2: 'var(--hs-theme-space-sm)',
      3: 'var(--hs-theme-space-md)',
      4: 'var(--hs-theme-space-lg)',
      5: 'var(--hs-theme-space-xl)',
      'pill': 'var(--hs-theme-space-pill)',
    },
    // m[]-[]
    margin: {
      0: 'var(--hs-theme-margin-none)',
      1: 'var(--hs-theme-margin-xs)',
      2: 'var(--hs-theme-margin-sm)',
      3: 'var(--hs-theme-margin-md)',
      4: 'var(--hs-theme-margin-lg)',
      5: 'var(--hs-theme-margin-xl)',
      'pill': 'var(--hs-theme-margin-pill)',
    },
    // p[]-[]
    padding: {
      0: 'var(--hs-theme-padding-none)',
      1: 'var(--hs-theme-padding-xs)',
      2: 'var(--hs-theme-padding-sm)',
      3: 'var(--hs-theme-padding-md)',
      4: 'var(--hs-theme-padding-lg)',
      5: 'var(--hs-theme-padding-xl)',
      'pill': 'var(--hs-theme-padding-pill)',
    },
    // outline-[]
    outlineWidth: {
      DEFAULT: '1px',
      0: 'none',
      1: '1px',
      2: '2px',
      3: '4px',
      4: '6px',
      5: '8px'
    },
    // outline-offset-[]
    outlineOffset: {
      0: 'var(--hs-theme-space-none)',
      1: 'var(--hs-theme-space-xs)',
      2: 'var(--hs-theme-space-sm)',
      3: 'var(--hs-theme-space-md)',
      4: 'var(--hs-theme-space-lg)',
      5: 'var(--hs-theme-space-xl)',
      'pill': 'var(--hs-theme-space-pill)',
    },
    // ring-offset-[]
    ringOffsetWidth: {
      0: 'var(--hs-theme-space-none)',
      1: 'var(--hs-theme-space-xs)',
      2: 'var(--hs-theme-space-sm)',
      3: 'var(--hs-theme-space-md)',
      4: 'var(--hs-theme-space-lg)',
      5: 'var(--hs-theme-space-xl)',
      'pill': 'var(--hs-theme-space-pill)',
    },
    // ring-[]
    ringWidth: {
      DEFAULT: '1px',
      0: 'none',
      1: '1px',
      2: '2px',
      3: '4px',
      4: '6px',
      5: '8px'
    },
    // space-[]-[]
    spacing: {
      0: 'var(--hs-theme-space-none)',
      1: 'var(--hs-theme-space-xs)',
      2: 'var(--hs-theme-space-sm)',
      3: 'var(--hs-theme-space-md)',
      4: 'var(--hs-theme-space-lg)',
      5: 'var(--hs-theme-space-xl)',
      'pill': 'var(--hs-theme-space-pill)',
    },
    // font
    fontFamily: {
      'normal': 'var(--hs-theme-family-global)',
      'title': 'var(--hs-theme-family-header)',
      'body': 'var(--hs-theme-family-body)',
      'mono': 'var(--hs-theme-family-code)',
      'action': 'var(--hs-theme-family-action)',
    },
    // text-[]
    fontSize: {
      'title': 'var(--hs-theme-size-h1)',
      'title-sm': 'var(--hs-theme-size-h2)',
      'subtitle': 'var(--hs-theme-size-h3)',
      'subtitle-sm': 'var(--hs-theme-size-h4)',
      'normal': 'var(--hs-theme-size-body)',
      'icon': 'var(--hs-theme-size-icon)',
      'action': 'var(--hs-theme-size-action)',
      'small': 'var(--hs-theme-size-small)',
    },
    // font-[]
    fontWeight: {
      'extrabold': 'var(--hs-theme-weight-h1)',
      'bold': 'var(--hs-theme-weight-h2)',
      'semibold': 'var(--hs-theme-weight-h3)',
      'medium': 'var(--hs-theme-weight-h4)',
      'normal': 'var(--hs-theme-weight-body)',
      'icon': 'var(--hs-theme-weight-icon)',
      'action': 'var(--hs-theme-weight-action)',
      'light': 'var(--hs-theme-weight-small)',
    },
    // leading-[]
    lineHeight: {
      8: 'var(--hs-theme-line-height-h1)',
      6: 'var(--hs-theme-line-height-h2)',
      4: 'var(--hs-theme-line-height-h3)',
      2: 'var(--hs-theme-line-height-h4)',
      'normal': 'var(--hs-theme-line-height-body)',
      'icon': 'var(--hs-theme-line-height-icon)',
      'action': 'var(--hs-theme-line-height-action)',
      'small': 'var(--hs-theme-line-height-small)',
    },
  },
}