import {ValidateOptions, ValidationRule} from "../type/validate.type";

export class ValidationUtils {
    static validateForm(validations: ValidationRule[]): boolean {
        let isValid: boolean = true;

        for (const validation of validations) {
            if (!ValidationUtils.validateField(validation.element, validation.options)) {
                isValid = false;
            }
        }

        return isValid;
    }

    private static validateField(element: HTMLInputElement | HTMLSelectElement, options?: ValidateOptions): boolean {
        let condition: boolean = element.value.trim().length > 0;

        if (options) {
            if ("pattern" in options) {
                condition = options.pattern.test(element.value);
            } else if ("compareTo" in options) {
                condition = element.value && element.value === options.compareTo;
            }
        }

        element.classList.toggle('is-invalid', !condition);
        return condition;
    }
}