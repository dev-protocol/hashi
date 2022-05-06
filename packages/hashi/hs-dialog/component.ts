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

import { HSComponentBase } from '../hs-core/component';

export class HSDialog extends HSComponentBase {

  private readonly HS_DIALOG_OPEN_STATE: string = 'is-open';

  public isOpen: boolean = false;
  public isClosed: boolean = true;

  constructor(targetDialog: string) {
    super(document.querySelector(targetDialog));
  }

  open(): void {
    if (this.isClosed) {
      this.addClass(this.HS_DIALOG_OPEN_STATE);
    }
    this.isOpen = true;
    this.isClosed = false;
  }

  close(): void {
    if (this.isOpen) {
      this.removeClass(this.HS_DIALOG_OPEN_STATE);
    }
    this.isOpen = false;
    this.isClosed = true;
  }

}