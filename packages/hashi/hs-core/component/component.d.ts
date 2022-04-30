export declare class ComponentBase {
    protected targetComponent: HTMLElement | null;
    constructor(targetComponent: HTMLElement | null);
    protected getComponent(): HTMLElement | null;
    protected getClasses(): DOMTokenList | undefined;
    protected getId(): string | undefined;
}
