import {OperationService} from "../../services/operation-service";
import {DateUtils} from "../../utils/date-utils";
import config from "../../config/config";
import {MainService} from "../../services/main-service";

export class Main {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;
        this.currentPeriod = "today";

        this.findElements();
        this.bindPeriodButtons();
        this.bindIntervalInputs();
        this.setActivePeriod(this.currentPeriod);
        this.listOperations(this.currentPeriod).then();
        this.getBalance().then();
    }

    findElements() {
        this.periodButtons = Array.from(document.querySelectorAll("[data-period]"));
        this.intervalFromInput = document.getElementById("interval-from-date");
        this.intervalToInput = document.getElementById("interval-to-date");
        this.intervalFromLabel = document.getElementById("interval-from-label");
        this.intervalToLabel = document.getElementById("interval-to-label");
    }

    async listOperations(period, params = {}) {
        const result = await OperationService.getOperations(period, params);
        if (result.error) {
            alert(result.error);
            return result.redirect ? this.openNewRoute(result.redirect) : null;
        }

        await this.getDiagrams(result.response)
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

    sumChartData(operations, type) {
        const map = operations
            .filter(operation => operation.type === type)
            .reduce((item, operation) => {
                const key = operation.category;
                const amount = Number(operation.amount) || 0;
                item[key] = (item[key] || 0) + amount;
                return item;
            }, {});
        return {
            labels: Object.keys(map),
            values: Object.values(map),
        }
    }

    renderChart(canvas, labels, values) {
        const oldChart = Chart.getChart(canvas);
        const canvasId = document.getElementById(canvas)

        if (oldChart) {
            oldChart.destroy();
        }

        if (labels.length > 0 && values.length > 0) {
            new Chart(canvasId, {
                type: 'pie',
                data: {
                    labels: labels,
                    datasets: [{
                        data: values,
                        backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue'],
                    }],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                        }
                    }
                }
            })
        }
    }

    async getDiagrams(operations) {
        const operation = Array.isArray(operations) ? operations : []
        const incomeChart = this.sumChartData(operation, config.typeCategories.income);
        const expenseChart = this.sumChartData(operation, config.typeCategories.expenses);

        this.renderChart("chartIncomes", incomeChart.labels, incomeChart.values)
        this.renderChart("chartExpenses", expenseChart.labels, expenseChart.values)

        if (operation.length === 0) {
            console.error("Нет данных за выбранный период — графики очищены")
        }
    }

    async getBalance() {
        const balance = document.getElementById("balance-text");
        const response = await MainService.getBalance();

        balance.innerText = response.balance;
    }
}