export type ValidateOptions =
    | { pattern: RegExp } | { compareTo: string }

export type ValidationRule = {
    element: HTMLInputElement | HTMLSelectElement,
    options?: ValidateOptions,
}