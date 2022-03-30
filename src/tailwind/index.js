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

import { hsColorTokens } from "./values/colors";
import { hsShapeRadius, hsShapeSpacing, hsShapePadding, hsShapeMargin, hsShapeGap, hsShapeBorderWidth } from './values/shapes';
import { hsTypographyFamily, hsTypographyLineHeight, hsTypographySize, hsTypographyWeight } from "./values/typography";

module.exports = {
  theme: {
    screens: {
      small: '320px',
      medium: '630px',
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