export declare class HSComponentBase {
    protected HS_TARGET_COMPONENT: Element | HTMLElement | null;
    constructor(targetComponent: Element | HTMLElement | null);
    protected addClass(className: string): void;
    protected removeClass(className: string): void;
    protected hasClass(className: string): boolean;
    protected getClasses(): DOMTokenList | undefined;
    protected getComponent(): Element | HTMLElement | null;
    protected getId(): string | undefined;
}
