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

const hsColorTokens = {
  'dp-white': {
    200: '#ffffff',
    300: '#f1f1f1',
    400: '#d7d7d7',
    600: '#c4c4c4',
    'ink': '#040b10',
  },
  'dp-black': {
    200: '#383838',
    300: '#272727',
    400: '#171717',
    600: '#000000',
    'ink': '#ffffff',
  },
  'dp-blue-grey': {
    200: '#3a4158',
    300: '#222b3d',
    400: '#111827',
    600: '#040b10',
    ink: '#ffffff',
  },
  'dp-black-alpha': {
    DEFAULT: 'rgba(0, 0, 0, .12)',
    'ink': 'rgba(0, 0, 0, .37)',
  },
  'dp-white-alpha': {
    DEFAULT: 'rgba(255, 255, 255, .12)',
    'ink': 'rgba(255, 255, 255, .37)',
  },
  scarlet: {
    200: '#ff7860',
    300: '#ff583a',
    400: '#ff3815',
    600: '#b71f04',
    'ink': '#ffffff',
  },
  plox: {
    200: '#eb48f8',
    300: '#e71cf7',
    400: '#d500e6',
    600: '#91009c',
    'ink': '#ffffff',
  },
  'native-blue': {
    200: '#88aeff',
    300: '#6d9bff',
    400: '#5b8bf5',
    600: '#315ab4',
    'ink': '#ffffff',
  },
  'bright-cyan': {
    200: '#51e0ff',
    300: '#27d9ff',
    400: '#00d0fd',
    600: '#008dac',
    'ink': '#000000',
  },
  success: {
    200: '#67cf72',
    300: '#43c451',
    400: '#30a83d',
    600: '#197a23',
    'ink': '#ffffff',
  },
  warning: {
    200: '#ffc751',
    300: '#ffbb27',
    400: '#fdad00',
    600: '#ac7600',
    'ink': '#000000',
  },
  danger: {
    200: '#e45d5d',
    300: '#df3737',
    400: '#c92020',
    600: '#920d0d',
    'ink': '#ffffff',
  },
};

const hsShapeRadius = {
  'none': '0',
  'xs': '0.3rem',
  'sm': '0.5rem',
  'md': '0.7rem',
  'lg': '1rem',
  'xl': '1.7rem',
  'pill': '700px',
  'small': 'var(--hs-theme-radius-small)',
  'medium': 'var(--hs-theme-radius-medium)',
  'large': 'var(--hs-theme-radius-large)',
};

const hsShapeGap = {
  'none': 0,
  'xs': '0.3rem',
  'sm': '0.5rem',
  'md': '0.8rem',
  'lg': '1.5rem',
  'xl': '2rem',
  'pill': '1.5rem',
};

const hsShapeMargin = {
  'none': 0,
  'xs': '0.5rem',
  'sm': '1rem',
  'md': '2rem',
  'lg': '4rem',
  'xl': '8rem',
  'pill': '1rem',
};

const hsShapePadding = {
  'none': 0,
  'xs': '0.3rem',
  'sm': '0.5rem',
  'md': '0.8rem',
  'lg': '1.5rem',
  'xl': '2rem',
  'pill': '1.5rem',
};

const hsShapeSpacing = {
  'none': 0,
  'xs': '0.3rem',
  'sm': '0.5rem',
  'md': '0.8rem',
  'lg': '1.5rem',
  'xl': '2rem',
  'pill': '8rem',
};

const hsShapeBorderWidth = {
  DEFAULT: '1px',
  'none': 'none',
  'xs': '1px',
  'sm': '2px',
  'md': '4px',
  'lg': '6px',
  'xl': '8px'
};

const hsTypographyFamily = {
  'supertitle': 'Syne, sans-serif',
  'title': 'Syne, sans-serif',
  'subtitle': 'Syne, sans-serif',
  'body': 'Whyte, sans-serif',
  'mono': 'IBM Plex Mono, monospace',
  'small': 'Whyte, sans-serif',
};

const hsTypographySize = {
  'supertitle': '2.625rem',
  'title': '2.25rem',
  'subtitle': '1.5rem',
  'body': '1rem',
  'mono': '1rem',
  'small': ' 0.875rem',
};

const hsTypographyWeight = {
  'black': 800,
  'bold': 700,
  'normal': 400,
  'light': 300,
};

const hsTypographyLineHeight = {
  'broad': 1.75,
  'normal': 1.5,
  'condensed': 1.25,
};

module.exports = {
  theme: {
    screens: {
      // Duplicated for backwards compat.
      sm: '320px',
      small: '320px',
      md: '630px',
      medium: '630px',
      lg: '890px',
      large: '890px'
    },
    colors: hsColorTokens,
    // rounded-[]
    borderRadius: hsShapeRadius,
    // border-[]
    borderWidth: hsShapeBorderWidth,
    // gap-[]
    gap: hsShapeGap,
    // m[]-[]
    margin: hsShapeMargin,
    // p[]-[]
    padding: hsShapePadding,
    // outline-[]
    outlineWidth: hsShapeBorderWidth,
    // outline-offset-[]
    outlineOffset: hsShapeSpacing,
    // ring-offset-[]
    ringOffsetWidth: hsShapeSpacing,
    // ring-[]
    ringWidth: hsShapeBorderWidth,
    // space-[]-[]
    spacing: hsShapeSpacing,
    // font
    fontFamily: hsTypographyFamily,
    // text-[]
    fontSize: hsTypographySize,
    // font-[]
    fontWeight: hsTypographyWeight,
    // leading-[]
    lineHeight: hsTypographyLineHeight,
  },
}