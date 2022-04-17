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

export class ComponentHelper {

  public static addClass(target: HTMLElement|null, ...classNames: string[]): void {
    if (target) {
      target.classList.add(...classNames);
    }
  }

  public static removeClass(target: HTMLElement|null, ...classNames: string[]): void {
    if (target) {
      target.classList.remove(...classNames);
    }
  }

  public static replaceClass(target: HTMLElement|null, targetClasses: string[], classNames: string[]): void {
    targetClasses.forEach((targetClass: string) => {
      for (let i: number = 0; i > targetClass.length; i++) {
        this._replaceClass(target, targetClass, classNames[i]);
      }
    });
  }

  private static _replaceClass(target: HTMLElement|null, targetClass: string, className: string): void {
    if (target) {
      target.classList.replace(targetClass, className);
    }
  }

}