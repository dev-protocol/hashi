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

const plugin = require('tailwindcss/plugin');

const typographyPresetUtils = plugin(
  ({ matchUtilities, theme }) => {
    const values = theme('typePreset');
    matchUtilities({
      value: ({value}) => ({
        fontFamily: theme(`fontFamily.${value}.family`),
        fontSize: theme(`fontSize.${value}.size`),
        fontWeight: theme(`fontWeight.${value}.weight`),
        lineHeight: theme(`lineHeight.${value}.lineHeight`),
      })
    }, { values });
  }, {
    theme: {
      typePreset: {
        'supertitle': {
          family: 'supertitle',
          size: 'supertitle',
          weight: 'black',
          lineHeight: 'normal'
        },
        'title': {
          family: 'title',
          size: 'title',
          weight: 'bold',
          lineHeight: 'normal'
        },
        'subtitle': {
          family: 'subtitle',
          size: 'subtitle',
          weight: 'bold',
          lineHeight: 'normal'
        },
        'body': {
          family: 'body',
          size: 'body',
          weight: 'normal',
          lineHeight: 'normal'
        },
        'mono': {
          family: 'mono',
          size: 'mono',
          weight: 'normal',
          lineHeight: 'normal'
        },
        'small': {
          family: 'small',
          size: 'small',
          weight: 'light',
          lineHeight: 'normal'
        },
      }
    }
  }
);

const familyUtils = plugin(
  ({ matchUtilities, theme }) => {
    const values = theme('fontFamily');
    matchUtilities({
      'family': (value) => ({
        fontFamily: value,
      })
    }, { values });
  }, {
    theme: {
      fontFamily: {
        'supertitle': 'Syne, sans-serif',
        'title': 'Syne, sans-serif',
        'subtitle': 'Syne, sans-serif',
        'body': 'Whyte, sans-serif',
        'mono': 'IBM Plex Mono, monospace',
        'small': 'Whyte, sans-serif',
      }
    }
  }
);

const sizeUtils = plugin(
  ({ matchUtilities, theme }) => {
    const values = theme('fontSize');
    matchUtilities({
      'size': (value) => ({
        fontSize: value,
      })
    }, { values });
  }, {
    theme: {
      fontSize: {
        'supertitle': '2.625rem',
        'title': '2.25rem',
        'subtitle': '1.5rem',
        'body': '1rem',
        'mono': '1rem',
        'small': ' 0.875rem',
      },
    }
  }
);

const weightUtils = plugin(
  ({ matchUtilities, theme }) => {
    const values = theme('fontWeight');
    matchUtilities({
      'weight': (value) => ({
        fontWeight: value,
      })
    }, { values });
  }, {
    theme: {
      fontWeight: {
        'black': 800,
        'bold': 700,
        'normal': 400,
        'light': 300,
      },
    }
  }
);

const lineHeightUtils = plugin(
  ({ matchUtilities, theme }) => {
    const values = theme('fontWeight');
    matchUtilities({
      'weight': (value) => ({
        fontWeight: value,
      })
    }, { values });
  }, {
    theme: {
      fontWeight: {
        'broad': 1.75,
        'normal': 1.5,
        'condensed': 1.25,
      }
    }
  }
);

module.exports = {
  presets: {},
  family: familyUtils,
  size: sizeUtils,
  weight: weightUtils,
  'line-height': lineHeightUtils
};