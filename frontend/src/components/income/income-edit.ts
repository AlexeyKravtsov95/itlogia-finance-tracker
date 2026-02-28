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

export class IncomeEdit {
    private openNewRoute: OpenNewRouteType;
    private incomeEditInput: HTMLInputElement;
    private validations: ValidationRule[];
    private categoryOriginalData: CategoryItemType;

    constructor(openNewRoute: OpenNewRouteType) {
        this.openNewRoute = openNewRoute;

        this.incomeEditInput = document.getElementById("edit-input") as HTMLInputElement;

        const saveButton = document.getElementById('save-button');
        saveButton.addEventListener('click', this.updateCategoryExpenses.bind(this));

        this.validations = [
            {element: this.incomeEditInput}
        ]

        const id = UrlUtils.getUrlParam('id')
        if (!id) {
            this.openNewRoute('/')
            return;
        }

        this.getExpense(id).then();
    }

    private async getExpense(id: string): Promise<void> {
        const response: GetCategoryResultType = await CategoryService.getCategory(config.typeCategories.income, id);

        if (response.error) {
            alert(response.error);
            return response.redirect ? this.openNewRoute(response.redirect) : null;
        }
        this.incomeEditInput.value = response.category.title;

        this.categoryOriginalData = response.category;
    }

    async updateCategoryExpenses(e: Event): Promise<void> {
        e.preventDefault();

        if (ValidationUtils.validateForm(this.validations)) {
            const categoryData: UpdateCategoryDataType = {} = {};

            if (this.incomeEditInput.value !== this.categoryOriginalData.title) {
                categoryData.title = this.incomeEditInput.value;
            }

            if (Object.keys(categoryData).length > 0) {
                const response: ActionCategoryResultType = await CategoryService.updateCategory(config.typeCategories.income, this.categoryOriginalData.id.toString(), categoryData);

                if (response.error) {
                    alert(response.error);
                    return response.redirect ? this.openNewRoute(response.redirect) : null;
                }

                return this.openNewRoute('/show-income')
            }
        }
    }
}