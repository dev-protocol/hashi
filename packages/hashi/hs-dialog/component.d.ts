import { HSComponentBase } from '../hs-core/component';
export declare class HSDialog extends HSComponentBase {
    private readonly HS_DIALOG_ID;
    private readonly HS_DIALOG_OPEN_STATE;
    private readonly HS_DIALOG_CLOSE_BUTTON?;
    isOpen: boolean;
    isClosed: boolean;
    constructor(hsDialogId: string);
    open(): void;
    close(): void;
    getCloseButton(): Element | undefined;
}
