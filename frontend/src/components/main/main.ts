import {OperationService} from "../../services/operation-service";
import {DateUtils} from "../../utils/date-utils";
import config from "../../config/config";
import {OpenNewRouteType} from "../../type/routes.type";
import {
    GetOperationsParamsType,
    GetOperationsResultType,
    OperationItemType,
    OperationType
} from "../../type/operation.type";
import {SumChartDataType} from "../../type/chart.type";
import {Chart} from "chart.js/auto";
import {sharedElement, sharedElementAll} from "../../extension/htmlElement+ext";

export class Main {
    private openNewRoute: OpenNewRouteType;
    private currentPeriod: string;
    private periodButtons: HTMLButtonElement[];
    private intervalFromInput: HTMLInputElement | null = null;
    private intervalToInput: HTMLInputElement | null = null;
    private intervalFromLabel: HTMLElement;
    private intervalToLabel: HTMLElement;

    constructor(openNewRoute: OpenNewRouteType) {
        this.openNewRoute = openNewRoute;
        this.currentPeriod = "today";

        this.findElements();
        this.bindPeriodButtons();
        this.bindIntervalInputs();
        this.setActivePeriod(this.currentPeriod);
        this.listOperations(this.currentPeriod).then();
    }

    private findElements(): void {
        this.periodButtons = sharedElementAll("[data-period]", HTMLButtonElement);
        this.intervalFromInput = sharedElement("interval-from-date", HTMLInputElement);
        this.intervalToInput = sharedElement("interval-to-date", HTMLInputElement);
        this.intervalFromLabel = sharedElement("interval-from-label", HTMLElement);
        this.intervalToLabel = sharedElement("interval-to-label", HTMLElement);
    }

    async listOperations(period: string, params: GetOperationsParamsType = {}): Promise<void> {
        const result: GetOperationsResultType = await OperationService.getOperations(period, params);
        if (result.error) {
            alert(result.error);
            return result.redirect ? this.openNewRoute(result.redirect) : null;
        }

        await this.getDiagrams(result.response)
    }

    private bindPeriodButtons(): void {
        this.periodButtons.forEach((button: HTMLButtonElement) => {
            button.addEventListener("click", async (): Promise<void> => {
                const period: string = button.dataset.period;
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

    private sumChartData(operations: OperationItemType[], type: OperationType): SumChartDataType {
        const map: Record<string, number> = operations
            .filter((operation: OperationItemType) => operation.type === type)
            .reduce((item: Record<string, number>, operation: OperationItemType) => {
                const key: string = operation.category;
                const amount: number = Number(operation.amount) || 0;
                item[key] = (item[key] || 0) + amount;
                return item;
            }, {});
        return {
            labels: Object.keys(map),
            values: Object.values(map),
        }
    }

    renderChart(canvas: string, labels: string[], values: number[]): void {
        const oldChart = Chart.getChart(canvas);
        const canvasId: HTMLCanvasElement = document.getElementById(canvas) as HTMLCanvasElement;

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

    private async getDiagrams(operations: OperationItemType[] | null): Promise<void> {
        const operation: OperationItemType[] = Array.isArray(operations) ? operations : []
        const incomeChart: SumChartDataType = this.sumChartData(operation, config.typeCategories.income);
        const expenseChart: SumChartDataType = this.sumChartData(operation, config.typeCategories.expenses);

        this.renderChart("chartIncomes", incomeChart.labels, incomeChart.values)
        this.renderChart("chartExpenses", expenseChart.labels, expenseChart.values)

        if (operation.length === 0) {
            console.error("Нет данных за выбранный период — графики очищены")
        }
    }
}