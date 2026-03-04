export function sharedElement<T extends HTMLElement>(id: string, expectedElement: new () => T): T | null {
    const element: HTMLElement = document.getElementById(id);
    if (!element) {
        return null;
    }

    if (!(element instanceof expectedElement)) {
        const actual: string = element.constructor?.name ?? "UnknownElement";
        const expected: string = expectedElement.name ?? "UnknownElement";
        throw new Error(`Ожидался элемент "${expected}" - пришел ${actual}`);
    }

    return element;
}

export function sharedElementAll<T extends Element>(selector: string, expectedElement: new () => T): T[] {
    const elements: Element[] = Array.from(document.querySelectorAll(selector));

    elements.forEach((element: Element, index: number) => {
        if (!(element instanceof expectedElement)) {
            const actual: string = element.constructor?.name ?? "UnknownElement";
            const expected: string = expectedElement.name ?? "UnknownElement";
            throw new Error(`Элемент ${selector} c индексом ${index} пришел с типом ${actual}, ожидался ${expected}`);
        }
    });

    return elements as T[];
}