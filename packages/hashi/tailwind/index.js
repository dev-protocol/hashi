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

const hsColorTokens = {
  'primary': {
    200: 'var(--hs-theme-primary-200)',
    300: 'var(--hs-theme-primary-300)',
    400: 'var(--hs-theme-primary-400)',
    600: 'var(--hs-theme-primary-600)',
    ink: 'var(--hs-theme-primary-ink)',
    'dark': {
      200: 'var(--hs-theme-primary-dark-200)',
      300: 'var(--hs-theme-primary-dark-300)',
      400: 'var(--hs-theme-primary-dark-400)',
      600: 'var(--hs-theme-primary-dark-600)',
      ink: 'var(--hs-theme-primary-dark-ink)',
    },
    'alpha': {
      200: 'var(--hs-theme-primary-alpha-200)',
      300: 'var(--hs-theme-primary-alpha-300)',
      400: 'var(--hs-theme-primary-alpha-400)',
      600: 'var(--hs-theme-primary-alpha-600)',
    }
  },
  'accent': {
    200: 'var(--hs-theme-accent-200)',
    300: 'var(--hs-theme-accent-300)',
    400: 'var(--hs-theme-accent-400)',
    600: 'var(--hs-theme-accent-600)',
    ink: 'var(--hs-theme-accent-ink)',
    'dark': {
      200: 'var(--hs-theme-accent-dark-200)',
      300: 'var(--hs-theme-accent-dark-300)',
      400: 'var(--hs-theme-accent-dark-400)',
      600: 'var(--hs-theme-accent-dark-600)',
      ink: 'var(--hs-theme-accent-dark-ink)',
    },
    'alpha': {
      200: 'var(--hs-theme-accent-alpha-200)',
      300: 'var(--hs-theme-accent-alpha-300)',
      400: 'var(--hs-theme-accent-alpha-400)',
      600: 'var(--hs-theme-accent-alpha-600)',
    }
  },
  'surface': {
    200: 'var(--hs-theme-surface-200)',
    300: 'var(--hs-theme-surface-300)',
    400: 'var(--hs-theme-surface-400)',
    600: 'var(--hs-theme-surface-600)',
    ink: 'var(--hs-theme-surface-ink)',
    'dark': {
      200: 'var(--hs-theme-surface-dark-200)',
      300: 'var(--hs-theme-surface-dark-300)',
      400: 'var(--hs-theme-surface-dark-400)',
      600: 'var(--hs-theme-surface-dark-600)',
      ink: 'var(--hs-theme-surface-dark-ink)',
    },
    'alpha': {
      200: 'var(--hs-theme-surface-alpha-200)',
      300: 'var(--hs-theme-surface-alpha-300)',
      400: 'var(--hs-theme-surface-alpha-400)',
      600: 'var(--hs-theme-surface-alpha-600)',
    }
  },
  'error': {
    200: 'var(--hs-theme-error-200)',
    300: 'var(--hs-theme-error-300)',
    400: 'var(--hs-theme-error-400)',
    600: 'var(--hs-theme-error-600)',
    ink: 'var(--hs-theme-error-ink)',
  }
};

const hsShapeRadius = {
  'none': 0,
  'small': 'var(--hs-theme-radius-small)',
  'medium': 'var(--hs-theme-radius-medium)',
  'large': 'var(--hs-theme-radius-large)',
  'pill': '5000px',
  'circle': '50%',
};

const hsShapeSpacing = {
  'none': 0,
  'xs': '4px',
  'sm': '8px',
  'md': '16px',
  'lg': '24px',
  'xl': '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '80px',
  '5xl': '96px',
  '6xl': '112px',
  // 'pill': 'n/a',
  'auto': 'auto'
};

const hsShapeElSpacing = {
  'none': 0,
  'xs': '0.1rem',
  'sm': '0.3rem',
  'md': '0.7rem',
  'lg': '1.2rem',
  'xl': '2.3rem',
  '2xl': '3.4rem',
  '3xl': '4.5rem',
  '4xl': '6.1rem',
  '5xl': '8.2rem',
  '6xl': '12.3rem',
  // 'pill': 'n/a',
  'auto': 'auto'
}

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
  'supertitle': 'var(--hs-theme-supertitle-family)',
  'title': 'var(--hs-theme-title-family)',
  'subtitle': 'var(--hs-theme-subtitle-family)',
  'body': 'var(--hs-theme-body-family)',
  'mono': 'var(--hs-theme-mono-family)',
  'small': 'var(--hs-theme-small-family)',
};

const hsTypographySize = {
  'supertitle': 'var(--hs-theme-supertitle-size)',
  'title': 'var(--hs-theme-title-size)',
  'subtitle': 'var(--hs-theme-subtitle-size)',
  'body': 'var(--hs-theme-body-size)',
  'mono': 'var(--hs-theme-mono-size)',
  'small': 'var(--hs-theme-small-size)',
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

export default {
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
    gap: hsShapeSpacing,
    // m[]-[]
    margin: hsShapeSpacing,
    // p[]-[]
    padding: hsShapeElSpacing,
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