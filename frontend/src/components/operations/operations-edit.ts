import {UrlUtils} from "../../utils/url-utils";
import {OperationService} from "../../services/operation-service";
import {DateUtils} from "../../utils/date-utils";
import {CategoryService} from "../../services/category-service";
import {ValidationUtils} from "../../utils/validation-utils";
import {OpenNewRouteType} from "../../type/routes.type";
import {ValidationRule} from "../../type/validate.type";
import {
    GetOperationResultType,
    OperationItemType,
    OperationType,
    ServiceResultType,
    UpdateOperationDataType
} from "../../type/operation.type";
import {CategoryItemType, GetAllCategoriesResultType} from "../../type/category.type";

export class OperationsEdit {
    private openNewRoute: OpenNewRouteType;
    private categoryTypeSelect: HTMLSelectElement;
    private categorySelect: HTMLSelectElement;
    private amountInputElement: HTMLInputElement;
    private dateInputElement: HTMLInputElement;
    private commentInputElement: HTMLInputElement;
    private validations: ValidationRule[];
    private originalData: OperationItemType;

    constructor(openNewRoute: OpenNewRouteType) {
        this.openNewRoute = openNewRoute;

        const id: string = UrlUtils.getUrlParam('id')
        if (!id) {
            this.openNewRoute('/')
            return;
        }
        this.findElements();

        this.validations = [
            {element: this.categorySelect},
            {element: this.amountInputElement},
            {element: this.dateInputElement, options: { pattern: /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/}},
            {element: this.commentInputElement},
        ];

        document.getElementById('saveButton').addEventListener('click', this.saveOperation.bind(this));
        this.getOperation(id).then();
    }

    private findElements(): void {
        this.categoryTypeSelect = document.getElementById("categoryTypeSelect") as HTMLSelectElement;
        this.categorySelect = document.getElementById("categorySelect") as HTMLSelectElement;
        this.amountInputElement = document.getElementById('amount-input') as HTMLInputElement;
        this.dateInputElement = document.getElementById('date-input') as HTMLInputElement;
        this.commentInputElement = document.getElementById('comment-input') as HTMLInputElement;
    }

    private async getOperation(id: string): Promise<void> {
        const response: GetOperationResultType = await OperationService.getOperation(id)

        if (response.error) {
            alert(response.error);
            return response.redirect ? this.openNewRoute(response.redirect) : null;
        }

        await this.loadCategoryByType(response.operation.type);

        this.categoryTypeSelect.value = response.operation.type;
        this.selectCategory(response.operation.category);
        this.amountInputElement.value = response.operation.amount.toString();
        this.dateInputElement.value = response.operation.date;
        this.commentInputElement.value = response.operation.comment;
        this.originalData = response.operation;
    }

    private async loadCategoryByType(type: OperationType): Promise<void> {
        this.categorySelect.innerHTML = '';

        const placeholder: HTMLOptionElement = document.createElement("option");
        placeholder.value = '';
        placeholder.textContent = 'Категория';
        placeholder.disabled = true;
        placeholder.selected = true;
        this.categorySelect.appendChild(placeholder);

        const response: GetAllCategoriesResultType = await CategoryService.getAllCategories(type);

        if (response.error) {
            alert(response.error);
            return response.redirect ? this.openNewRoute(response.redirect) : null;
        }

        if (response.categories && response.categories.length > 0) {
            placeholder.remove();

            response.categories.forEach((category: CategoryItemType) => {
                const optionElement = document.createElement("option");
                optionElement.setAttribute("value", category.id.toString());
                optionElement.innerText = category.title;
                this.categorySelect.appendChild(optionElement);
            });
        }
    }

    private selectCategory(title: string): void {
        if (!title) {
            return;
        }

        const option: HTMLOptionElement = Array.from(this.categorySelect.options).find((option: HTMLOptionElement): boolean => option.textContent === title);
        if (option) {
            this.categorySelect.value = option.value
        }
    }

    private async saveOperation(e: Event): Promise<void> {
        e.preventDefault();

        if (ValidationUtils.validateForm(this.validations)) {
            const operationsData: UpdateOperationDataType = {
                type: this.categoryTypeSelect.value as OperationType,
                category_id: Number(this.categorySelect.value),
                amount: this.amountInputElement.value,
                date: DateUtils.formatDateToDash(this.dateInputElement.value),
                comment: this.commentInputElement.value,
            }

            const response: ServiceResultType = await OperationService.updateOperation(this.originalData.id.toString(), operationsData);

            if (response.error) {
                alert(response.error);
                return response.redirect ? this.openNewRoute(response.redirect) : null;
            }

            return this.openNewRoute('/income-expense')
        }
    }
}