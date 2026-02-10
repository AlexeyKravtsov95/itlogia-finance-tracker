import {ValidationUtils} from "../../utils/validation-utils";
import {CategoryService} from "../../services/category-service";
import config from "../../config/config";

export class ExpensesCreate {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;
        this.expensesInput = document.getElementById("expenses-input");
        document.getElementById('create-button').addEventListener('click', this.createCategoryExpenses.bind(this));

        this.validations = [
            {element: this.expensesInput}
        ]
    }

    async createCategoryExpenses(event) {
        event.preventDefault();

        if (ValidationUtils.validateForm(this.validations)) {
            const createExpense = {
                title: this.expensesInput.value,
            }

            const response = await CategoryService.createCategory(config.typeCategories.expenses, createExpense);
            if (response.error) {
                alert(response.error);
                return response.redirect ? this.openNewRoute(response.redirect) : null;
            }

            return this.openNewRoute('/show-expense');
        }
    }
}