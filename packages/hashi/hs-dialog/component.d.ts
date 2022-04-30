import { ComponentBase } from '../hs-core/component';
export declare class HSDialog extends ComponentBase {
    private readonly HSDialogID;
    private readonly closeButton?;
    private readonly HS_DIALOG_OPEN_STATE;
    isOpen: boolean;
    isClosed: boolean;
    constructor(HSDialogID: string);
    open(): void;
    close(): void;
    getCloseButton(): Element | undefined;
}
