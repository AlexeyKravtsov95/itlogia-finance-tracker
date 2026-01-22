import {HttpUtils} from "../utils/http-utils";

export class AuthService {
    static async signUp(data) {
        const result = await HttpUtils.request('/signup', 'POST', false, data);

        if (result.error || !result.response && (this.responseAuth(result.response))) {
            console.error('Ошибка HTTP запроса:', result);
            return false;
        }

        return result.response;
    }

    static async login(data) {
        const result = await HttpUtils.request('/login', 'POST', false, data);

        if (result.error || !result.response && (this.responseAuth(result.response))) {
            console.error('Ошибка HTTP запро:', result);
            return false;
        }

        return result.response;
    }

    static responseAuth(response) {
        if (response) {
            if (response.tokens) {
                return (
                    !response.tokens.accessTokenKey ||
                    !response.tokens.refreshTokenKey ||
                    !response.user ||
                    !response.user.id ||
                    !response.user.email ||
                    !response.user.name ||
                    !response.user.lastName
                )
            }

            return (
                !response.user ||
                !response.user.id ||
                !response.user.email ||
                !response.user.name ||
                !response.user.lastName
            )
        }
    }
}