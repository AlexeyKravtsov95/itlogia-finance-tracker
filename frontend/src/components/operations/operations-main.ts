import {OperationService} from "../../services/operation-service";
import {DateUtils} from "../../utils/date-utils";
import {CategoryService} from "../../services/category-service";
import config from "../../config/config";
import {OpenNewRouteType} from "../../type/routes.type";
import {
    GetOperationsParamsType,
    GetOperationsResultType,
    OperationItemType,
    ServiceResultType
} from "../../type/operation.type";

export class OperationsMain {
    private openNewRoute: OpenNewRouteType;
    private recordsElement: HTMLElement;
    private confirmDeleteButton: HTMLElement;
    private currentPeriod: string;
    private periodButtons: HTMLButtonElement[];
    private intervalFromInput: HTMLInputElement | null = null;
    private intervalToInput: HTMLInputElement | null = null;
    private intervalFromLabel: HTMLElement;
    private intervalToLabel: HTMLElement;

    constructor(openNewRoute: OpenNewRouteType) {
        this.openNewRoute = openNewRoute;

        this.findElements();

        this.recordsElement.addEventListener('click', this.handleDeleteClick.bind(this));
        this.confirmDeleteButton.addEventListener('click', this.handleConfirmDelete.bind(this));

        this.currentPeriod = "today";

        const createIncomeButton: HTMLElement = document.getElementById("create-income");
        const createExpenseButton: HTMLElement = document.getElementById("create-expense");

        createIncomeButton.addEventListener("click", () => {
            this.openNewRoute("/income-expenses/create?type=income");
        });
        createExpenseButton.addEventListener("click", () => {
            this.openNewRoute("/income-expenses/create?type=expense");
        });

        this.bindPeriodButtons();
        this.bindIntervalInputs();
        this.setActivePeriod(this.currentPeriod);
        this.listOperations(this.currentPeriod).then();
    }

    private findElements(): void {
        this.recordsElement = document.getElementById("records");
        this.periodButtons = Array.from(document.querySelectorAll("[data-period]"));
        this.intervalFromInput = document.getElementById("interval-from-date") as HTMLInputElement;
        this.intervalToInput = document.getElementById("interval-to-date") as HTMLInputElement;
        this.intervalFromLabel = document.getElementById("interval-from-label");
        this.intervalToLabel = document.getElementById("interval-to-label");
        this.confirmDeleteButton = document.getElementById('confirm-delete-button');
    }

    private bindPeriodButtons(): void {
        this.periodButtons.forEach((button: HTMLButtonElement) => {
            button.addEventListener("click", async () => {
                const period = button.dataset.period;
                this.setActivePeriod(period);

                if (period === "interval") {
                    this.intervalFromLabel.classList.remove('disabled');
                    this.intervalToLabel.classList.remove('disabled');
                    await this.tryLoadByInterval();
                    return;
                }
                this.intervalFromLabel.classList.add('disabled');
                this.intervalToLabel.classList.add('disabled');
                await this.listOperations(period);
            });
        });
    }

    private bindIntervalInputs(): void {
        const onDateChanged: () => Promise<void> = async (): Promise<void> => {
            this.intervalFromLabel.innerText = this.intervalFromInput.value
                ? DateUtils.formatDateToDot(this.intervalFromInput.value)
                : "День";

            this.intervalToLabel.innerText = this.intervalToInput.value
                ? DateUtils.formatDateToDot(this.intervalToInput.value)
                : "День";

            if (this.currentPeriod !== "interval") {
                return;
            }

            await this.tryLoadByInterval();
        };

        this.intervalFromInput.addEventListener("change", onDateChanged);
        this.intervalToInput.addEventListener("change", onDateChanged);
    }

    private async tryLoadByInterval(): Promise<void> {
        const dateFrom: string = this.intervalFromInput.value;
        const dateTo: string = this.intervalToInput.value;

        const isEditing: boolean =
            document.activeElement === this.intervalFromInput || document.activeElement === this.intervalToInput;

        if (!dateFrom || !dateTo) {
            this.recordsElement.innerHTML = "";
            return;
        }

        if (dateFrom > dateTo) {
            if (!isEditing) {
                alert("Дата начала не может быть позже даты окончания");
            }
            return;
        }

        await this.listOperations("interval", {dateFrom, dateTo});
    }

    private setActivePeriod(period: string): void {
        this.currentPeriod = period;

        this.periodButtons.forEach((button: HTMLButtonElement): void => {
            const isActive: boolean = button.dataset.period === period;
            button.classList.toggle("btn-secondary", isActive);
            button.classList.toggle("btn-outline-secondary", !isActive);
        });
    }

    private async listOperations(period: string, params: GetOperationsParamsType = {}): Promise<void> {
        this.recordsElement.innerHTML = "";

        const result: GetOperationsResultType = await OperationService.getOperations(period, params);
        if (result.error) {
            alert(result.error);
            return result.redirect ? this.openNewRoute(result.redirect) : null;
        }

        this.createTable(result.response);
    }

    private createTable(operations: OperationItemType[]): void {
        for (let i = 0; i < operations.length; i++) {
            const operation: OperationItemType = operations[i];
            const trElement: HTMLTableRowElement = document.createElement("tr");

            const idCell: HTMLTableCellElement = trElement.insertCell();
            idCell.innerText = operation.id.toString();
            idCell.setAttribute("data-label", "№ операции");

            const typeCell: HTMLTableCellElement = trElement.insertCell();
            if (operation.type === "income") {
                typeCell.innerText = "Доход";
                typeCell.style.color = "green";
            } else {
                typeCell.innerText = "Расход";
                typeCell.style.color = "red";
            }
            typeCell.setAttribute("data-label", "Тип");

            const categoryCell: HTMLTableCellElement = trElement.insertCell();
            categoryCell.innerText = operation.category;
            categoryCell.setAttribute("data-label", "Категория");

            const amountCell: HTMLTableCellElement = trElement.insertCell();
            amountCell.innerText = operation.amount.toString();
            amountCell.setAttribute("data-label", "Сумма");

            const dateCell: HTMLTableCellElement = trElement.insertCell();
            dateCell.innerText = DateUtils.formatDateToDot(operation.date);
            dateCell.setAttribute("data-label", "Дата");

            const commentCell: HTMLTableCellElement = trElement.insertCell();
            commentCell.innerText = operation.comment;
            commentCell.setAttribute("data-label", "Комментарий");

            const actionCell: HTMLTableCellElement = trElement.insertCell();
            actionCell.innerHTML = `
                <a href="javascript:void(0)"
                   class="me-2 text-decoration-none"
                   data-action="delete"
                   data-operation-id="${operation.id}"
                   data-bs-target="#modal"
                   data-bs-toggle="modal">
                    <i class="bi bi-trash"></i>
                </a>
                <a href="/income-expenses/edit?id=${operation.id}" class="text-decoration-none">
                    <i class="bi bi-pencil"></i>
                </a>
            `;
            actionCell.setAttribute("data-label", "Действия");

            trElement.dataset.rowId = operation.id.toString();
            this.recordsElement.appendChild(trElement);
        }
    }

    private handleDeleteClick(event: Event): void {
        const target = event.target as HTMLElement;
        const deleteButton = target.closest('[data-action="delete"]') as HTMLElement;
        if (!deleteButton) {
            return
        }

        this.confirmDeleteButton.dataset.id = deleteButton.dataset.operationId;
    }

    private async handleConfirmDelete(): Promise<void> {
        const id: string = this.confirmDeleteButton.dataset.id;
        if (!id) return;

        const response: ServiceResultType = await OperationService.deleteOperation(id);
        if (response.error) {
            alert(response.error);
            return response.redirect ? this.openNewRoute(response.redirect) : null;
        }

        const row: HTMLElement = this.recordsElement.querySelector(`tr[data-row-id="${id}"]`);
        if (row) {
            row.remove();
        }

        delete this.confirmDeleteButton.dataset.id;
    }
}