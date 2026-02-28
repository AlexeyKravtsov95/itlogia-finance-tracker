import {CategoryService} from "../../services/category-service";
import config from "../../config/config";
import {OpenNewRouteType} from "../../type/routes.type";
import {ActionCategoryResultType, CategoryItemType, GetAllCategoriesResultType} from "../../type/category.type";

export class ExpensesList {
    private openNewRoute: OpenNewRouteType;
    private listElement: HTMLElement;
    private confirmDeleteButton: HTMLElement;

    constructor(openNewRoute: OpenNewRouteType) {
        this.openNewRoute = openNewRoute;
        this.listElement = document.getElementById('list-card');
        this.confirmDeleteButton = document.getElementById('confirm-delete-button');
        this.listElement.addEventListener('click', this.handleDeleteClick.bind(this));
        this.confirmDeleteButton.addEventListener('click', this.handleConfirmDelete.bind(this));

        this.getCategories().then();
    }

    private async getCategories(): Promise<void> {
        const response: GetAllCategoriesResultType = await CategoryService.getAllCategories(config.typeCategories.expenses);

        if (response.error) {
            alert(response.error);
            return response.redirect ? this.openNewRoute(response.redirect) : null;
        }

        this.showCategories(response.categories);
    }

    private showCategories(categories: CategoryItemType[]): void {
        categories.forEach(category => {
            this.listElement.insertAdjacentHTML('afterbegin', `
                <div class="card expenses-card" data-card-id="${category.id}">
      <div class="card-body py-3">
        <h3 class="card-title mb-2">${category.title}</h3>
        <div class="d-flex flex-wrap gap-2">
          <a href="/edit-expenses?id=${category.id}" class="btn btn-primary">Редактировать</a>
          <button type="button" data-delete-id="${category.id}" class="btn btn-danger" data-bs-target="#modal" data-bs-toggle="modal">Удалить</button>
        </div>
      </div>
    </div>
            `
            )
        })
    }

    private handleDeleteClick(event: Event): void {
        const target = event.target as HTMLElement;
        const deleteButton: HTMLElement = target.closest('[data-delete-id]') as HTMLElement;
        if (!deleteButton) {
            return
        }

        this.confirmDeleteButton.setAttribute('data-id', deleteButton.dataset.deleteId);
    }

    private async handleConfirmDelete(): Promise<void> {
        const id: string = this.confirmDeleteButton.dataset.id;
        if (!id) return;

        const response: ActionCategoryResultType = await CategoryService.deleteCategory(config.typeCategories.expenses, id);
        if (response.error) {
            alert(response.error);
            return response.redirect ? this.openNewRoute(response.redirect) : null;
        }

        const card: HTMLElement = this.listElement.querySelector(`[data-card-id="${id}"]`);
        if (card) {
            card.remove();
        }

        this.confirmDeleteButton.removeAttribute('data-id');
    }
}