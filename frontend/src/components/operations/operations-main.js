export class OperationsMain {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;

        document.getElementById("create-income").addEventListener("click", () => {
            this.openNewRoute('/income-expenses/create?type=income')
        })
        document.getElementById("create-expense").addEventListener("click", () => {
            this.openNewRoute('/income-expenses/create?type=expense');
        })
    }
}