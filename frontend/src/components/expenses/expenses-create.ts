import {ValidationUtils} from "../../utils/validation-utils";
import {CategoryService} from "../../services/category-service";
import config from "../../config/config";
import {OpenNewRouteType} from "../../type/routes.type";
import {ValidationRule} from "../../type/validate.type";
import {CreateCategoryDataType, CreateCategoryResultType} from "../../type/category.type";
import {sharedElement} from "../../extension/htmlElement+ext";

export class ExpensesCreate {
    readonly openNewRoute: OpenNewRouteType;
    private expensesInput: HTMLInputElement;
    private validations: ValidationRule[] = [];


    constructor(openNewRoute: OpenNewRouteType) {
        this.openNewRoute = openNewRoute;
        this.expensesInput = sharedElement("expenses-input", HTMLInputElement);
        const createButton: HTMLButtonElement = sharedElement('create-button', HTMLButtonElement);

        createButton.addEventListener('click', this.createCategoryExpenses.bind(this));

        this.validations = [
            {element: this.expensesInput}
        ]
    }

    async createCategoryExpenses(event: Event): Promise<void> {
        event.preventDefault();

        if (ValidationUtils.validateForm(this.validations)) {
            const createExpense: CreateCategoryDataType = {
                title: this.expensesInput.value,
            }

            const response: CreateCategoryResultType = await CategoryService.createCategory(config.typeCategories.expenses, createExpense);
            if (response.error) {
                alert(response.error);
                return response.redirect ? this.openNewRoute(response.redirect) : null;
            }

            return this.openNewRoute('/show-expense');
        }
    }
}