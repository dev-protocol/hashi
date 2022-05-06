import { HSComponentBase } from '../hs-core/component';
export declare class HSDialog extends HSComponentBase {
    private readonly HS_DIALOG_OPEN_STATE;
    isOpen: boolean;
    isClosed: boolean;
    constructor(targetDialog: string);
    open(): void;
    close(): void;
}
