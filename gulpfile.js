/*
 *  Copyright (c) 2021 Dev Protocol
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

import { config } from './hsconfig';

const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss')

function sassTaskDev() {
    return src(['src/**/*.scss', 'src/**/*.test.scss', '!src/**/main.scss'], {sourcemaps: true})
        .pipe(sass({
            includePaths: ['node_modules']
        }).on('error', sass.logError))
        .pipe(dest('./src', {sourcemaps: '.'}));
}

function sassTaskProd() {
    return src(['src/**/main.scss'], {sourcemaps: true})
        .pipe(sass({
            includePaths: ['node_modules']
        }).on('error', sass.logError))
        .pipe(dest('./src', {sourcemaps: '.'}));
}

function sassTaskTest() {
    return src(config.sass.src, {sourcemaps: true})
        .pipe(sass({
            includePaths: ['node_modules']
        }).on('error', sass.logError))
        .pipe(dest('./tests', {sourcemaps: '.'}));
}

function purge() {
    return src('tests/**/*.css')
        .pipe(purgecss({
            content: ['tests/**/*.html']
        }))
        .pipe(dest('./tests'))
}

function watchTask() {
    watch(['src/**/*.scss', '!src/**/*.test.scss'], sassTaskDev());
    watch(['tests/**/*.scss'], sassTaskTest());
    // watch(['src/main.scss'], sassTaskProd());
    // watch('test/scripts/**/*.ts', tsTask());
}

exports.default = series(
    sassTaskDev,
    sassTaskProd,
    sassTaskTest,
    // purge,
    // watchTask
);
