import {HttpUtils} from "../utils/http-utils";

export class CategoryService {
    static async createCategory(type, data) {
        const returnObject = {
            error: false,
            redirect: null,
            id: null
        }

        const result = await HttpUtils.request('/categories/' + type, 'POST', true, data);

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

    static async getAllCategories(type) {
        const returnObject = {
            error: false,
            redirect: null,
            categories: null
        }

        const result = await HttpUtils.request('/categories/' + type, 'GET');

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

    static async getCategory(type, id) {
        const returnObject = {
            error: false,
            redirect: null,
            category: null,
        }

        const result = await HttpUtils.request('/categories/' + type + '/' + id, 'GET');

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

    static async updateCategory(type, id, data) {
        const returnObject = {
            error: false,
            redirect: null,
        }

        const result = await HttpUtils.request('/categories/' + type + '/' + id, 'PUT', true, data);

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

    static async deleteCategory(type, id) {
        const returnObject = {
            error: false,
            redirect: null,
        }

        const result = await HttpUtils.request('/categories/' + type + '/' + id, 'DELETE');

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