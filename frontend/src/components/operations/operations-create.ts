import {UrlUtils} from "../../utils/url-utils";
import {CategoryService} from "../../services/category-service";
import {ValidationUtils} from "../../utils/validation-utils";
import {OperationService} from "../../services/operation-service";
import {DateUtils} from "../../utils/date-utils";
import {OpenNewRouteType} from "../../type/routes.type";
import {ValidationRule} from "../../type/validate.type";
import {CategoryItemType, GetAllCategoriesResultType} from "../../type/category.type";
import {CreateOperationDataType, OperationType, ServiceResultType} from "../../type/operation.type";
import {sharedElement} from "../../extension/htmlElement+ext";

export class OperationsCreate {
    private openNewRoute: OpenNewRouteType;
    private categoryTypeSelect: HTMLSelectElement;
    private categorySelect: HTMLSelectElement;
    private amountInputElement: HTMLInputElement;
    private dateInputElement: HTMLInputElement;
    private commentInputElement: HTMLInputElement;
    private validations: ValidationRule[];

    constructor(openNewRoute: OpenNewRouteType) {
        this.openNewRoute = openNewRoute;

        this.categoryTypeSelect = sharedElement("categoryTypeSelect", HTMLSelectElement);
        this.categorySelect = sharedElement("categorySelect", HTMLSelectElement);
        this.amountInputElement = sharedElement('amount-input', HTMLInputElement);
        this.dateInputElement = sharedElement('date-input', HTMLInputElement);
        this.commentInputElement = sharedElement('comment-input', HTMLInputElement);

        this.init().then();
        this.validations = [
            {element: this.categorySelect},
            {element: this.amountInputElement},
            {element: this.dateInputElement, options: { pattern: /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/}},
            {element: this.commentInputElement},
        ];

        const createButton: HTMLAnchorElement = sharedElement('create-button', HTMLAnchorElement);
        createButton.addEventListener('click', this.createOperations.bind(this));
    }



    private async init(): Promise<void> {
        this.getTypeOperation()
        this.categoryTypeHandler()
        this.getAllCategoriesByType().then();
    }

    private getTypeOperation(): void {
        const type: string = UrlUtils.getUrlParam('type');
        if (!type) {
            this.openNewRoute('/income-expense');
        }

        if (this.categoryTypeSelect) {
            this.categoryTypeSelect.value = type;
        }
    }

    private async getAllCategoriesByType(): Promise<void> {
        const url: string = UrlUtils.getUrlParam('type');
        if (!url) {
            this.openNewRoute('/income-expense');
        }

        this.categorySelect.innerHTML = '';
        const placeholder: HTMLOptionElement = document.createElement('option');
        placeholder.value = "";
        placeholder.textContent = 'Категория';
        placeholder.disabled = true;
        placeholder.selected = true;
        placeholder.hidden = true;
        this.categorySelect.appendChild(placeholder);

        const response: GetAllCategoriesResultType = await CategoryService.getAllCategories(url as OperationType);

        if (response.error) {
            alert(response.error);
            return response.redirect ? this.openNewRoute(response.redirect) : null;
        }

        if (response.categories && response.categories.length > 0) {
            placeholder.remove();

            response.categories.forEach((category: CategoryItemType) => {
                const optionElement: HTMLOptionElement = document.createElement("option");
                optionElement.setAttribute("value", category.id.toString());
                optionElement.innerText = category.title;
                this.categorySelect.appendChild(optionElement);
            });

            this.categorySelect.selectedIndex = 0;
        }
    }

    private categoryTypeHandler(): void {
        this.categoryTypeSelect.addEventListener("change", async () => {
            const newType = this.categoryTypeSelect.value;
            const params = new URLSearchParams(window.location.search);
            params.set("type", newType);
            const newUrl = `${window.location.pathname}?${params.toString()}`;
            history.replaceState(null, '', newUrl);

            await this.getAllCategoriesByType();
        });
    }

    private async createOperations(event: Event): Promise<void> {
        event.preventDefault();
        if (ValidationUtils.validateForm(this.validations)) {
            const createData: CreateOperationDataType = {
                type: this.categoryTypeSelect.value as OperationType,
                amount: Number(this.amountInputElement.value),
                date: DateUtils.formatDateToDash(this.dateInputElement.value),
                comment: this.commentInputElement.value,
                category_id: Number(this.categorySelect.value)
            }

            const response: ServiceResultType = await OperationService.createOperation(createData);
            if (response.error) {
                alert(response.error);
                return response.redirect ? this.openNewRoute(response.redirect) : null;
            }

            return this.openNewRoute('/income-expense');
        }
    }
}