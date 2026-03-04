import {CategoryService} from "../../services/category-service";
import config from "../../config/config";
import {ValidationUtils} from "../../utils/validation-utils";
import {UrlUtils} from "../../utils/url-utils";
import {OpenNewRouteType} from "../../type/routes.type";
import {ValidationRule} from "../../type/validate.type";
import {
    ActionCategoryResultType,
    CategoryItemType,
    GetCategoryResultType,
    UpdateCategoryDataType
} from "../../type/category.type";
import {sharedElement} from "../../extension/htmlElement+ext";

export class ExpensesEdit {
    readonly openNewRoute: OpenNewRouteType;
    private expenseEditInput: HTMLInputElement;
    private validations: ValidationRule[] = [];
    private categoryOriginalData: CategoryItemType;

    constructor(openNewRoute: OpenNewRouteType) {
        this.openNewRoute = openNewRoute;

        this.expenseEditInput = sharedElement("edit-input", HTMLInputElement);

        const saveButton: HTMLButtonElement = sharedElement('save-button', HTMLButtonElement);
        saveButton.addEventListener('click', this.updateCategoryExpenses.bind(this));

        this.validations = [
            {element: this.expenseEditInput}
        ]

        const id: string = UrlUtils.getUrlParam('id')
        if (!id) {
            this.openNewRoute('/')
            return;
        }

        this.getExpense(id).then();
    }

    private async getExpense(id: string): Promise<void> {
        const response: GetCategoryResultType = await CategoryService.getCategory(config.typeCategories.expenses, id);

        if (response.error) {
            alert(response.error);
            return response.redirect ? this.openNewRoute(response.redirect) : null;
        }

        this.expenseEditInput.value = response.category.title;

        this.categoryOriginalData = response.category;
    }

    private async updateCategoryExpenses(e: Event): Promise<void> {
        e.preventDefault();

        if (ValidationUtils.validateForm(this.validations)) {
            const categoryData: UpdateCategoryDataType = {};

            if (this.expenseEditInput.value !== this.categoryOriginalData.title) {
                categoryData.title = this.expenseEditInput.value;
            }

            if (Object.keys(categoryData).length > 0) {
                const response: ActionCategoryResultType = await CategoryService.updateCategory(config.typeCategories.expenses, String(this.categoryOriginalData.id), categoryData);

                if (response.error) {
                    alert(response.error);
                    return response.redirect ? this.openNewRoute(response.redirect) : null;
                }

                return this.openNewRoute('/show-expense')
            }
        }
    }
}