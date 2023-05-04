/*
 *
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
 *
 */

const { getPrimitiveToken } = require("../core/tokens");

const getColorTokens = (parentToken, darkParentToken = parentToken) => {
  return {
    200: getPrimitiveToken(`${parentToken}.200`),
    300: getPrimitiveToken(`${ parentToken}.300`),
    400: getPrimitiveToken(`${parentToken}.400`),
    600: getPrimitiveToken(`${parentToken}.600`),
    ink: getPrimitiveToken(`${parentToken}.ink`),
    'dark': {
      200: getPrimitiveToken(`${darkParentToken}.200`),
      300: getPrimitiveToken(`${darkParentToken}.300`),
      400: getPrimitiveToken(`${darkParentToken}.400`),
      600: getPrimitiveToken(`${darkParentToken}.600`),
      ink: getPrimitiveToken(`${darkParentToken}.ink`),
    }
  }
}

module.exports = {
  'primary': getColorTokens('dp-black', 'dp-white'),
  'accent': getColorTokens('dp-blue'),
  'surface': getColorTokens('dp-white', 'dp-blue-gray'),
  'error': getColorTokens('dp-red'),
};