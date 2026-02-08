import {ValidationUtils} from "../../utils/validation-utils";
import {CategoryService} from "../../services/category-service";
import config from "../../config/config";

export class IncomeCreate {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;
        this.incomeInput = document.getElementById("income-input");
        document.getElementById('create-button').addEventListener('click', this.createCategoryIncome.bind(this));

        this.validations = [
            {element: this.incomeInput}
        ]
    }

    async createCategoryIncome(event) {
        event.preventDefault();

        if (ValidationUtils.validateForm(this.validations)) {
            const createExpense = {
                title: this.incomeInput.value,
            }

            const response = await CategoryService.createCategory(config.typeCategories.income, createExpense);
            if (response.error) {
                alert(response.error);
                return response.redirect ? this.openNewRoute(response.redirect) : null;
            }

            return this.openNewRoute('/show-income');
        }
    }
}