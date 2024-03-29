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

const color = require('./utilities/color.util');
const shape = require('./utilities/shape.util');
const typography = require('./utilities/typography.util');

module.exports = plugin(({ addBase, addComponents, addUtilities, matchUtilities, theme }) => {
  addBase(require('./base'));
  addComponents(require('./components'));

  const utilizeTypePresets = () => {
    const typePresets = typography['type-presets'];
    const utilities = {};
    Object.keys(typePresets).forEach((key) => {
      utilities[`.${key}`] = {
        fontFamily: theme(`fontFamily.${typePresets[key]['family']}`),
        fontSize: theme(`fontSize.${typePresets[key]['size']}`),
        fontWeight: theme(`fontWeight.${typePresets[key]['weight']}`),
        lineHeight: theme(`lineHeight.${typePresets[key]['lineHeight']}`),
      };
    });
    return utilities;
  };

  // [type-preset]
  addUtilities(utilizeTypePresets());

  // family-[]
  matchUtilities({
    'family': (value) => ({
      fontFamily: value,
    })
  }, { values: theme('fontFamily') });

  // size-[]
  matchUtilities({
    'size': (value) => ({
      fontSize: value,
    })
  }, { values: theme('fontSize') });

  // weight-[]
  matchUtilities({
    'weight': (value) => ({
      fontWeight: value,
    })
  }, { values: theme('fontWeight') });


}, {
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
    colors: color,
    // rounded-[]
    borderRadius: shape['radius'],
    // border-[]
    borderWidth: shape['stroke-width'],
    // gap-[]
    gap: shape['gap'],
    // m[]-[]
    margin: shape['spacing'],
    // p[]-[]
    padding: shape['el-spacing'],
    // outline-[]
    outlineWidth: shape['stroke-width'],
    // outline-offset-[]
    outlineOffset: shape['spacing'],
    // ring-offset-[]
    ringOffsetWidth: shape['spacing'],
    // ring-[]
    ringWidth: shape['stroke-width'],
    // space-[]-[]
    spacing: shape['spacing'],
    // family-[]
    fontFamily: typography['font-family'],
    // size-[]
    fontSize: typography['font-size'],
    // weight-[]
    fontWeight: typography['font-weight'],
    // leading-[]
    lineHeight: typography['line-height'],
  }
});