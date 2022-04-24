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

import { ComponentBase } from '../hs-core/component';

export class HSDialog extends ComponentBase {

  private readonly HSDialogID: string;
  private readonly closeButton?: Element;
  private readonly HS_DIALOG_OPEN_STATE: string = 'is-open';

  public isOpen: boolean = false;
  public isClosed: boolean = true;


  constructor(HSDialogID: string) {
    super(document.querySelector('.hs-dialog'));
    this.HSDialogID = HSDialogID;
    this.closeButton = document.getElementById(this.HSDialogID)?.getElementsByClassName('hs-dialog__close-button')[0];
  }

  open(): void {
    if (this.isClosed) {
      document.querySelector(this.HSDialogID)?.classList.add(this.HS_DIALOG_OPEN_STATE);
    }
    this.isOpen = true;
    this.isClosed = false;
  }

  // TODO: Fix this broken close method.
  close(): void {
    if (this.isOpen) {
      document.querySelector(this.HSDialogID)?.classList.remove(this.HS_DIALOG_OPEN_STATE);
    }
    this.isOpen = false;
    this.isClosed = true;
  }

  getCloseButton(): Element|undefined {
    return this.closeButton;
  }

}