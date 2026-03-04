import {ValidationUtils} from "../../utils/validation-utils";
import {CategoryService} from "../../services/category-service";
import config from "../../config/config";
import {OpenNewRouteType} from "../../type/routes.type";
import {ValidationRule} from "../../type/validate.type";
import {CreateCategoryDataType, CreateCategoryResultType} from "../../type/category.type";
import {sharedElement} from "../../extension/htmlElement+ext";

export class IncomeCreate {
    readonly openNewRoute: OpenNewRouteType;
    private incomeInput: HTMLInputElement;
    private validations: ValidationRule[] = [];

    constructor(openNewRoute: OpenNewRouteType) {
        this.openNewRoute = openNewRoute;
        this.incomeInput = sharedElement("income-input", HTMLInputElement);

        const createButton: HTMLButtonElement = sharedElement('create-button', HTMLButtonElement);
        createButton.addEventListener('click', this.createCategoryIncome.bind(this));

        this.validations = [
            {element: this.incomeInput}
        ]
    }

    private async createCategoryIncome(event: Event): Promise<void> {
        event.preventDefault();

        if (ValidationUtils.validateForm(this.validations)) {
            const createExpense: CreateCategoryDataType = {
                title: this.incomeInput.value,
            }

            const response: CreateCategoryResultType = await CategoryService.createCategory(config.typeCategories.income, createExpense);
            if (response.error) {
                alert(response.error);
                return response.redirect ? this.openNewRoute(response.redirect) : null;
            }

            return this.openNewRoute('/show-income');
        }
    }
}