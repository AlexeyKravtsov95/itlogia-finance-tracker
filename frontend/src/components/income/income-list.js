import {CategoryService} from "../../services/category-service";
import config from "../../config/config";

export class IncomeList {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;
        this.listElement = document.getElementById('list-card');
        this.confirmDeleteButton = document.getElementById('confirm-delete-button');
        this.listElement.addEventListener('click', this.handleDeleteClick.bind(this));
        this.confirmDeleteButton.addEventListener('click', this.handleConfirmDelete.bind(this));

        this.getCategories().then();
    }

    async getCategories() {
        const response = await CategoryService.getAllCategories(config.typeCategories.income);

        if (response.error) {
            alert(response.error);
            return response.redirect ? this.openNewRoute(response.redirect) : null;
        }

        this.showCategories(response.categories);
    }

    showCategories(categories) {
        categories.forEach(category => {
            this.listElement.insertAdjacentHTML('afterbegin', `
                <div class="card income-card" data-card-id="${category.id}">
      <div class="card-body py-3">
        <h3 class="card-title mb-2">${category.title}</h3>
        <div class="d-flex flex-wrap gap-2">
          <a href="/edit-income?id=${category.id}" class="btn btn-primary">Редактировать</a>
          <button type="button" data-delete-id="${category.id}" class="btn btn-danger" data-bs-target="#modal" data-bs-toggle="modal">Удалить</button>
        </div>
      </div>
    </div>
            `
            )
        })
    }

    handleDeleteClick(event) {
        const deleteButton = event.target.closest('[data-delete-id]');
        if (!deleteButton) {
            return
        }

        this.confirmDeleteButton.setAttribute('data-id', deleteButton.dataset.deleteId);
    }

    async handleConfirmDelete() {
        const id = this.confirmDeleteButton.dataset.id;
        if (!id) return;

        const response = await CategoryService.deleteCategory(config.typeCategories.income, id);
        if (response.error) {
            alert(response.error);
            return response.redirect ? this.openNewRoute(response.redirect) : null;
        }

        const card = this.listElement.querySelector(`[data-card-id="${id}"]`);
        if (card) {
            card.remove();
        }

        this.confirmDeleteButton.removeAttribute('data-id');
    }
}