import {UrlUtils} from "../../utils/url-utils";
import {CategoryService} from "../../services/category-service";

export class OperationsCreate {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;
        this.categoryTypeSelect = document.getElementById("categoryTypeSelect");
        this.categorySelect = document.getElementById("categorySelect");

        this.init().then();
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

        const response = await CategoryService.getAllCategories(url);

        if (response.error) {
            alert(response.error);
            return response.redirect ? this.openNewRoute(response.redirect) : null;
        }

        response.categories.forEach((category) => {
            const optionElement = document.createElement("option");
            optionElement.setAttribute("value", category.id);
            optionElement.innerText = category.title;
            this.categorySelect.appendChild(optionElement);
        })
    }

    categoryTypeHandler() {
        this.categoryTypeSelect.addEventListener("change", async () => {
            const newType = this.categoryTypeSelect.value;
            const params = new URLSearchParams(window.location.search);
            params.set("type", newType);
            const newUrl = `${window.location.pathname}?${params.toString()}`;
            history.replaceState(null, '', newUrl);

            if (this.categorySelect) {
                this.categorySelect.innerHTML = '';
            }

            await this.getAllCategoriesByType();
        });
    }
}