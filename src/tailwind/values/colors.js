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

export const hsColorTokens = {
  surface: {
    200: 'var(--hs-theme-surface-200)',
    300: 'var(--hs-theme-surface-300)',
    400: 'var(--hs-theme-surface-400)',
    600: 'var(--hs-theme-surface-600)',
    'ink': 'var(--hs-theme-surface-ink)'
  },
  neutral: {
    200: 'var(--hs-theme-neutral-200)',
    300: 'var(--hs-theme-neutral-300)',
    400: 'var(--hs-theme-neutral-400)',
    600: 'var(--hs-theme-neutral-600)',
    'ink': 'var(--hs-theme-neutral-ink)'
  },
  disabled: {
    DEFAULT: 'var(--hs-theme-disabled)',
    'ink': 'var(--hs-theme-disabled-ink)'
  },
  scarlet: {
    200: 'var(--hs-theme-scarlet-200)',
    300: 'var(--hs-theme-scarlet-300)',
    400: 'var(--hs-theme-scarlet-400)',
    600: 'var(--hs-theme-scarlet-600)',
    'ink': 'var(--hs-theme-scarlet-ink)'
  },
  plox: {
    200: 'var(--hs-theme-plox-200)',
    300: 'var(--hs-theme-plox-300)',
    400: 'var(--hs-theme-plox-400)',
    600: 'var(--hs-theme-plox-600)',
    'ink': 'var(--hs-theme-plox-ink)'
  },
  'native-blue': {
    200: 'var(--hs-theme-native-blue-200)',
    300: 'var(--hs-theme-native-blue-300)',
    400: 'var(--hs-theme-native-blue-400)',
    600: 'var(--hs-theme-native-blue-600)',
    'ink': 'var(--hs-theme-native-blue-ink)'
  },
  'bright-cyan': {
    200: 'var(--hs-theme-bright-cyan-200)',
    300: 'var(--hs-theme-bright-cyan-300)',
    400: 'var(--hs-theme-bright-cyan-400)',
    600: 'var(--hs-theme-bright-cyan-600)',
    'ink': 'var(--hs-theme-bright-cyan-ink)'
  },
  success: {
    200: 'var(--hs-theme-success-200)',
    300: 'var(--hs-theme-success-300)',
    400: 'var(--hs-theme-success-400)',
    600: 'var(--hs-theme-success-600)',
    'ink': 'var(--hs-theme-success-ink)'
  },
  warning: {
    200: 'var(--hs-theme-warning-200)',
    300: 'var(--hs-theme-warning-300)',
    400: 'var(--hs-theme-warning-400)',
    600: 'var(--hs-theme-warning-600)',
    'ink': 'var(--hs-theme-warning-ink)'
  },
  danger: {
    200: 'var(--hs-theme-danger-200)',
    300: 'var(--hs-theme-danger-300)',
    400: 'var(--hs-theme-danger-400)',
    600: 'var(--hs-theme-danger-600)',
    'ink': 'var(--hs-theme-danger-ink)'
  },
};

hsColorTokens.primary = hsColorTokens.surface;
hsColorTokens.accent = hsColorTokens.scarlet;
hsColorTokens.lightBackground = hsColorTokens.surface['200'];
hsColorTokens.darkBackground = hsColorTokens.surface['600'];