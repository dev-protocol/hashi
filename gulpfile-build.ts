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

const { src, dest, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function sassTaskDev() {
  return src(['packages/hashi/**/*.scss', '!packages/hashi/**/build.scss'], { sourcemaps: true })
    .pipe(sass({
      includePaths: ['node_modules']
    }).on('error', sass.logError))
    .pipe(dest('./packages/hashi', { sourcemaps: '.' }));
}

// function sassTaskProd() {
//   return src(['packages/hashi/**/build.scss'], { sourcemaps: true })
//     .pipe(sass({
//       includePaths: ['node_modules']
//     }).on('error', sass.logError))
//     .pipe(dest('./packages/hashi', { sourcemaps: '.' }));
// }

function sassTaskTw() {
  return src(['packages/hashi-tailwind/**/index.scss'], { sourcemaps: true })
    .pipe(sass({
      includePaths: ['node_modules']
    }).on('error', sass.logError))
    .pipe(dest('./packages/hashi-tailwind', { sourcemaps: '.' }));
}


exports.default = series(
  sassTaskDev,
  // sassTaskProd,
  sassTaskTw,
);