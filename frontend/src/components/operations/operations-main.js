import {OperationService} from "../../services/operation-service";
import {DateUtils} from "../../utils/date-utils";
import {CategoryService} from "../../services/category-service";
import config from "../../config/config";

export class OperationsMain {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;

        this.findElements();

        this.recordsElement.addEventListener('click', this.handleDeleteClick.bind(this));
        this.confirmDeleteButton.addEventListener('click', this.handleConfirmDelete.bind(this));

        this.currentPeriod = "today";

        document.getElementById("create-income").addEventListener("click", () => {
            this.openNewRoute("/income-expenses/create?type=income");
        });

        document.getElementById("create-expense").addEventListener("click", () => {
            this.openNewRoute("/income-expenses/create?type=expense");
        });

        this.bindPeriodButtons();
        this.bindIntervalInputs();
        this.setActivePeriod(this.currentPeriod);
        this.listOperations(this.currentPeriod).then();
    }

    findElements() {
        this.recordsElement = document.getElementById("records");
        this.periodButtons = Array.from(document.querySelectorAll("[data-period]"));
        this.intervalFromInput = document.getElementById("interval-from-date");
        this.intervalToInput = document.getElementById("interval-to-date");
        this.intervalFromLabel = document.getElementById("interval-from-label");
        this.intervalToLabel = document.getElementById("interval-to-label");
        this.confirmDeleteButton = document.getElementById('confirm-delete-button');
    }

    bindPeriodButtons() {
        this.periodButtons.forEach(button => {
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

    bindIntervalInputs() {
        const onDateChanged = async () => {
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

    async tryLoadByInterval() {
        const dateFrom = this.intervalFromInput.value;
        const dateTo = this.intervalToInput.value;

        const isEditing =
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

    setActivePeriod(period) {
        this.currentPeriod = period;

        this.periodButtons.forEach(button => {
            const isActive = button.dataset.period === period;
            button.classList.toggle("btn-secondary", isActive);
            button.classList.toggle("btn-outline-secondary", !isActive);
        });
    }

    async listOperations(period, params = {}) {
        this.recordsElement.innerHTML = "";

        const result = await OperationService.getOperations(period, params);
        if (result.error) {
            alert(result.error);
            return result.redirect ? this.openNewRoute(result.redirect) : null;
        }

        this.createTable(result.response);
    }

    createTable(operations) {
        for (let i = 0; i < operations.length; i++) {
            const operation = operations[i];
            const trElement = document.createElement("tr");

            const idCell = trElement.insertCell();
            idCell.innerText = operation.id;
            idCell.setAttribute("data-label", "№ операции");

            const typeCell = trElement.insertCell();
            if (operation.type === "income") {
                typeCell.innerText = "Доход";
                typeCell.style.color = "green";
            } else {
                typeCell.innerText = "Расход";
                typeCell.style.color = "red";
            }
            typeCell.setAttribute("data-label", "Тип");

            const categoryCell = trElement.insertCell();
            categoryCell.innerText = operation.category;
            categoryCell.setAttribute("data-label", "Категория");

            const amountCell = trElement.insertCell();
            amountCell.innerText = operation.amount;
            amountCell.setAttribute("data-label", "Сумма");

            const dateCell = trElement.insertCell();
            dateCell.innerText = DateUtils.formatDateToDot(operation.date);
            dateCell.setAttribute("data-label", "Дата");

            const commentCell = trElement.insertCell();
            commentCell.innerText = operation.comment;
            commentCell.setAttribute("data-label", "Комментарий");

            const actionCell = trElement.insertCell();
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

            trElement.dataset.rowId = operation.id;
            this.recordsElement.appendChild(trElement);
        }
    }

    handleDeleteClick(event) {
        const deleteButton = event.target.closest('[data-action="delete"]');
        if (!deleteButton) {
            return
        }

        this.confirmDeleteButton.dataset.id = deleteButton.dataset.operationId;
    }

    async handleConfirmDelete() {
        const id = this.confirmDeleteButton.dataset.id;
        if (!id) return;

        const response = await OperationService.deleteOperation(id);
        if (response.error) {
            alert(response.error);
            return response.redirect ? this.openNewRoute(response.redirect) : null;
        }

        const row = this.recordsElement.querySelector(`tr[data-row-id="${id}"]`);
        if (row) {
            row.remove();
        }

        delete this.confirmDeleteButton.dataset.id;
    }
}