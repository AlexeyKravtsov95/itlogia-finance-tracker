import {UrlUtils} from "../../utils/url-utils";
import {OperationService} from "../../services/operation-service";
import {DateUtils} from "../../utils/date-utils";
import {CategoryService} from "../../services/category-service";
import {ValidationUtils} from "../../utils/validation-utils";

export class OperationsEdit {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;

        const id = UrlUtils.getUrlParam('id')
        if (!id) {
            return this.openNewRoute('/')
        }
        this.findElements();

        this.validations = [
            {element: this.categorySelect},
            {element: this.amountInputElement},
            {
                element: this.dateInputElement,
                options: {pattern: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/}
            },
            {element: this.commentInputElement},
        ];

        document.getElementById('saveButton').addEventListener('click', this.saveOperation.bind(this));
        this.getOperation(id).then();
    }

    findElements() {
        this.categoryTypeSelect = document.getElementById("categoryTypeSelect");
        this.categorySelect = document.getElementById("categorySelect");
        this.amountInputElement = document.getElementById('amount-input');
        this.dateInputElement = document.getElementById('date-input');
        this.commentInputElement = document.getElementById('comment-input');
    }

    async getOperation(id) {
        const response = await OperationService.getOperation(id)

        if (response.error) {
            alert(response.error);
            return response.redirect ? this.openNewRoute(response.redirect) : null;
        }

        await this.loadCategoryByType(response.operation.type);

        this.categoryTypeSelect.value = response.operation.type;
        this.selectCategory(response.operation.category);
        this.amountInputElement.value = response.operation.amount;
        this.dateInputElement.value = DateUtils.formatDateToDot(response.operation.date);
        this.commentInputElement.value = response.operation.comment;
        this.originalData = response.operation;
    }

    async loadCategoryByType(type) {
        this.categorySelect.innerHTML = '';

        const placeholder = document.createElement("option");
        placeholder.value = '';
        placeholder.textContent = 'Категория';
        placeholder.disabled = true;
        placeholder.selected = true;
        this.categorySelect.appendChild(placeholder);

        const response = await CategoryService.getAllCategories(type);

        if (response.error) {
            alert(response.error);
            return response.redirect ? this.openNewRoute(response.redirect) : null;
        }

        if (response.categories && response.categories.length > 0) {
            placeholder.remove();

            response.categories.forEach((category) => {
                const optionElement = document.createElement("option");
                optionElement.setAttribute("value", category.id);
                optionElement.innerText = category.title;
                this.categorySelect.appendChild(optionElement);
            });
        }
    }

    selectCategory(title) {
        if (!title) {
            return;
        }

        const option = Array.from(this.categorySelect.options).find(option => option.textContent === title);
        if (option) {
            this.categorySelect.value = option.value
        }
    }

    async saveOperation(e) {
        e.preventDefault();

        if (ValidationUtils.validateForm(this.validations)) {
            const operationsData = {
                type: this.categoryTypeSelect.value,
                category_id: +(this.categorySelect.value),
                amount: this.amountInputElement.value,
                date: DateUtils.formatDateToDash(this.dateInputElement.value),
                comment: this.commentInputElement.value,
            }

            const response = await OperationService.updateOperation(this.originalData.id, operationsData);

            if (response.error) {
                alert(response.error);
                return response.redirect ? this.openNewRoute(response.redirect) : null;
            }

            return this.openNewRoute('/income-expense')
        }
    }
}