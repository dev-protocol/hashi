///
//  Copyright (c) 2023 Dev Protocol
//
//  Permission is hereby granted, free of charge, to any person obtaining a copy
//  of this software and associated documentation files (the "Software"), to deal
//  in the Software without restriction, including without limitation the rights
//  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//  copies of the Software, and to permit persons to whom the Software is
//  furnished to do so, subject to the following conditions:
//
//  The above copyright notice and this permission notice shall be included in all
//  copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//  SOFTWARE.
///

export class HSComponentBase {

  protected HS_TARGET_COMPONENT: any;

  constructor(targetComponent: any) {
    if (!targetComponent) {
      console.error(`HSComponentBase: the target component is not found.`);
      return;
    }
    this.HS_TARGET_COMPONENT = targetComponent;
  }

  protected addClass(className: string): void {
    if (!this.HS_TARGET_COMPONENT) {
      console.error(`HSComponentBase: the target component is not found.`);
      return;
    }
    this.HS_TARGET_COMPONENT.classList.add(className);
  }

  protected removeClass(className: string): void {
    if (!this.HS_TARGET_COMPONENT) {
      console.error(`HSComponentBase: the target component is not found.`);
      return;
    }
    this.HS_TARGET_COMPONENT.classList.remove(className);
  }

  protected hasClass(className: string): boolean|undefined {
    if (!this.HS_TARGET_COMPONENT) {
      console.error(`HSComponentBase: the target component is not found.`);
      return;
    }
    return this.HS_TARGET_COMPONENT.classList.contains(className);
  }

  protected getClasses(): DOMTokenList|undefined {
    if (!this.HS_TARGET_COMPONENT) {
      console.error(`HSComponentBase: the target component is not found.`);
      return;
    }
    return this.HS_TARGET_COMPONENT.classList;
  }

  protected getComponent(): Element|HTMLElement|undefined {
    if (!this.HS_TARGET_COMPONENT) {
      console.error(`HSComponentBase: the target component is not found.`);
      return;
    }
    return this.HS_TARGET_COMPONENT;
  }

  protected getId(): string|undefined {
    if (!this.HS_TARGET_COMPONENT) {
      console.error(`HSComponentBase: the target component is not found.`);
      return;
    }
    return this.HS_TARGET_COMPONENT.id;
  }

}