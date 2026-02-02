import {CategoryService} from "../../services/category-service";
import config from "../../config/config";
import {ValidationUtils} from "../../utils/validation-utils";
import {UrlUtils} from "../../utils/url-utils";

export class IncomeEdit {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;

        this.incomeEditInput = document.getElementById("edit-input");
        document.getElementById('save-button').addEventListener('click', this.updateCategoryExpenses.bind(this));

        this.validations = [
            {element: this.incomeEditInput}
        ]

        const id = UrlUtils.getUrlParam('id')
        if (!id) {
            return this.openNewRoute('/')
        }

        this.getExpense(id).then();
    }

    async getExpense(id) {
        const response = await CategoryService.getCategory(config.typeCategories.income, id);

        if (response.error) {
            alert(response.error);
            return response.redirect ? this.openNewRoute(response.redirect) : null;
        }

        this.categoryOriginalData = response.category;
    }

    async updateCategoryExpenses(e) {
        e.preventDefault();

        if (ValidationUtils.validateForm(this.validations)) {
            const categoryData = {};

            if (this.incomeEditInput.value !== this.categoryOriginalData.title) {
                categoryData.title = this.incomeEditInput.value;
            }

            if (Object.keys(categoryData).length > 0) {
                const response = await CategoryService.updateCategory(config.typeCategories.income, this.categoryOriginalData.id, categoryData);

                if (response.error) {
                    alert(response.error);
                    return response.redirect ? this.openNewRoute(response.redirect) : null;
                }

                return this.openNewRoute('/show-income')
            }
        }
    }
}