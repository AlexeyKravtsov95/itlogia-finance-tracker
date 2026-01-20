import {HttpUtils} from "../utils/http-utils";

export class AuthService {
    static async signUp(data) {
        const result = await HttpUtils.request('/signup', 'POST', false, data);

        if (result.error || !result.response) {
            console.error('Ошибка HTTP запроса:', result);
            return false;
        }

        if (!result.response.user ||
            !result.response.user.id ||
            !result.response.user.email ||
            !result.response.user.name ||
            !result.response.user.lastName) {
            console.error('Неверная структура ответа:', result.response);
            return false;
        }

        return result.response;
    }

    static responseSignup(response) {
        return (
            response.user.id && response.user.email && response.user.name && response.user.lastName
        )
    }
}