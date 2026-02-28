import {HttpUtils} from "../utils/http-utils";
import {
    ActionCategoryResultType,
    CategoryType,
    CreateCategoryDataType,
    CreateCategoryResultType,
    GetAllCategoriesResultType, GetCategoryResultType, UpdateCategoryDataType
} from "../type/category.type";
import {ResultResponeType} from "../type/result-respone.type";

export class CategoryService {
    static async createCategory(type: CategoryType, data: CreateCategoryDataType): Promise<CreateCategoryResultType> {
        const returnObject: CreateCategoryResultType = {
            error: null,
            redirect: null,
            id: null
        }

        const result: ResultResponeType = await HttpUtils.request('/categories/' + type, 'POST', true, data);

        if (result.redirect || result.error || !result.response || (result.response && result.response.error)) {
            returnObject.error = 'Возникла ошибка при создании категории. Обратитесь в поддержку';
            console.error('Ошибка HTTP запроса:', result);
            if (result.redirect) {
                returnObject.redirect = result.redirect;
            }
            return returnObject;
        }

        returnObject.id = result.response.id
        return returnObject;
    }

    static async getAllCategories(type: CategoryType): Promise<GetAllCategoriesResultType> {
        const returnObject: GetAllCategoriesResultType = {
            error: null,
            redirect: null,
            categories: null
        }

        const result: ResultResponeType = await HttpUtils.request('/categories/' + type);

        if (result.redirect || result.error || !result.response || (result.response && result.response.error)) {
            returnObject.error = 'Возникла ошибка при получении списка категорий. Обратитесь в поддержку';
            console.error('Ошибка HTTP запроса:', result);
            if (result.redirect) {
                returnObject.redirect = result.redirect;
            }
            return returnObject;
        }

        returnObject.categories = result.response;
        return returnObject;
    }

    static async getCategory(type: CategoryType, id: string): Promise<GetCategoryResultType> {
        const returnObject: GetCategoryResultType = {
            error: null,
            redirect: null,
            category: null,
        }

        const result: ResultResponeType = await HttpUtils.request('/categories/' + type + '/' + id);

        if (result.redirect || result.error || !result.response || (result.response && result.response.error)) {
            returnObject.error = 'Возникла ошибка при получении категории. Обратитесь в поддержку';
            console.error('Ошибка HTTP запроса:', result);
            if (result.redirect) {
                returnObject.redirect = result.redirect;
            }
            return returnObject;
        }

        returnObject.category = result.response;
        return returnObject;
    }

    static async updateCategory(type: CategoryType, id: string, data: UpdateCategoryDataType): Promise<ActionCategoryResultType> {
        const returnObject: ActionCategoryResultType = {
            error: null,
            redirect: null,
        }

        const result: ResultResponeType = await HttpUtils.request('/categories/' + type + '/' + id, 'PUT', true, data);

        if (result.redirect || result.error || !result.response || (result.response && result.response.error)) {
            returnObject.error = 'Возникла ошибка при обновлении категории. Обратитесь в поддержку';
            console.error('Ошибка HTTP запроса:', result);
            if (result.redirect) {
                returnObject.redirect = result.redirect;
            }
            return returnObject;
        }

        return returnObject;
    }

    static async deleteCategory(type: CategoryType, id: string): Promise<ActionCategoryResultType> {
        const returnObject: ActionCategoryResultType = {
            error: null,
            redirect: null,
        }

        const result: ResultResponeType = await HttpUtils.request('/categories/' + type + '/' + id, 'DELETE');

        if (result.redirect || result.error || !result.response || (result.response && result.response.error)) {
            returnObject.error = 'Возникла ошибка при удалении категории. Обратитесь в поддержку';
            if (result.redirect) {
                returnObject.redirect = result.redirect;
            }
            return returnObject;
        }

        return returnObject;
    }
}