export declare class ComponentHelper {
    static addClass(target: HTMLElement | null, ...classNames: string[]): void;
    static removeClass(target: HTMLElement | null, ...classNames: string[]): void;
    static replaceClass(target: HTMLElement | null, targetClasses: string[], classNames: string[]): void;
    private static _replaceClass;
}
