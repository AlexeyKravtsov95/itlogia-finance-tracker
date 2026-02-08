import {CategoryService} from "../../services/category-service";
import config from "../../config/config";
import {ValidationUtils} from "../../utils/validation-utils";
import {UrlUtils} from "../../utils/url-utils";

export class ExpensesEdit {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;

        this.expenseEditInput = document.getElementById("edit-input");
        document.getElementById('save-button').addEventListener('click', this.updateCategoryExpenses.bind(this));

        this.validations = [
            {element: this.expenseEditInput}
        ]

        const id = UrlUtils.getUrlParam('id')
        if (!id) {
            return this.openNewRoute('/')
        }

        this.getExpense(id).then();
    }

    async getExpense(id) {
        const response = await CategoryService.getCategory(config.typeCategories.expenses, id);

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

            if (this.expenseEditInput.value !== this.categoryOriginalData.title) {
                categoryData.title = this.expenseEditInput.value;
            }

            if (Object.keys(categoryData).length > 0) {
                const response = await CategoryService.updateCategory(config.typeCategories.expenses, this.categoryOriginalData.id, categoryData);

                if (response.error) {
                    alert(response.error);
                    return response.redirect ? this.openNewRoute(response.redirect) : null;
                }

                return this.openNewRoute('/show-expense')
            }
        }
    }
}