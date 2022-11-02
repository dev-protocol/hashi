"use strict";
/*
 *
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HSNavbar = void 0;
var HSNavbar = /** @class */ (function () {
    function HSNavbar(component, trigger) {
        this.component = '.hs-navbar';
        this.trigger = '.hs-js-navbar__trigger';
        this.component = component;
        this.trigger = trigger;
    }
    HSNavbar.prototype.init = function () {
        var navbar = document.querySelector((this.component));
        var navbarTrigger = document.querySelector((this.trigger));
        var navbarState = false;
        if (!navbar) {
            throw new Error('Navbar class is not provided! Please provide a navbar class');
        }
        if (!navbarTrigger) {
            throw new Error('Navbar trigger class is not provided! Please provide a trigger class');
        }
        navbarTrigger.addEventListener('click', function () {
            navbarState = !navbarState;
            if (!navbarState) {
                navbar.classList.remove('visible');
            }
            else {
                navbar.classList.add('visible');
            }
        });
    };
    return HSNavbar;
}());
exports.HSNavbar = HSNavbar;
