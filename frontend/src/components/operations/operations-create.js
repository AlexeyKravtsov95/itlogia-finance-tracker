import {UrlUtils} from "../../utils/url-utils";
import {CategoryService} from "../../services/category-service";
import {ValidationUtils} from "../../utils/validation-utils";
import {OperationService} from "../../services/operation-service";
import {DateUtils} from "../../utils/date-utils";

export class OperationsCreate {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;

        this.categoryTypeSelect = document.getElementById("categoryTypeSelect");
        this.categorySelect = document.getElementById("categorySelect");
        this.amountInputElement = document.getElementById('amount-input');
        this.dateInputElement = document.getElementById('date-input');
        this.commentInputElement = document.getElementById('comment-input');

        this.init().then();
        this.validations = [
            {element: this.categorySelect},
            {element: this.amountInputElement},
            {element: this.dateInputElement, options: { pattern: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/}},
            {element: this.commentInputElement},
        ];

        document.getElementById('create-button').addEventListener('click', this.createOperations.bind(this));
    }



    async init() {
        this.getTypeOperation()
        this.categoryTypeHandler()
        this.getAllCategoriesByType().then();
    }

    getTypeOperation() {
        const type = UrlUtils.getUrlParam('type');
        if (!type) {
            this.openNewRoute('/income-expense');
        }

        if (this.categoryTypeSelect) {
            this.categoryTypeSelect.value = type;
        }
    }

    async getAllCategoriesByType() {
        const url = UrlUtils.getUrlParam('type');
        if (!url) {
            this.openNewRoute('/income-expense');
        }

        this.categorySelect.innerHTML = '';
        const placeholder = document.createElement('option');
        placeholder.value = "";
        placeholder.textContent = 'Категория';
        placeholder.disabled = true;
        placeholder.selected = true;
        placeholder.hidden = true;
        this.categorySelect.appendChild(placeholder);

        const response = await CategoryService.getAllCategories(url);

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

            this.categorySelect.selectedIndex = 0;
        }
    }

    categoryTypeHandler() {
        this.categoryTypeSelect.addEventListener("change", async () => {
            const newType = this.categoryTypeSelect.value;
            const params = new URLSearchParams(window.location.search);
            params.set("type", newType);
            const newUrl = `${window.location.pathname}?${params.toString()}`;
            history.replaceState(null, '', newUrl);

            await this.getAllCategoriesByType();
        });
    }

    async createOperations(event) {
        event.preventDefault();
        if (ValidationUtils.validateForm(this.validations)) {
            const createData = {
                type: this.categoryTypeSelect.value,
                amount: this.amountInputElement.value,
                date: DateUtils.formatDateToDash(this.dateInputElement.value),
                comment: this.commentInputElement.value,
                category_id: +(this.categorySelect.value)
            }

            const response = await OperationService.createOperation(createData);
            if (response.error) {
                alert(response.error);
                return response.redirect ? this.openNewRoute(response.redirect) : null;
            }

            return this.openNewRoute('/income-expense');
        }
    }
}