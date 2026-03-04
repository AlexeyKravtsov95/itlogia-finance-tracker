import {HttpUtils} from "../utils/http-utils";
import {AuthResponseType, LoginDataType, LogoutDataType, SignUpDataType} from "../type/auth-info.type";

export class AuthService {
    static async signUp(data: SignUpDataType) {
        const result = await HttpUtils.request('/signup', 'POST', false, data);

        if (result.error || !result.response && (this.responseAuth(result.response))) {
            console.error('Ошибка HTTP запроса:', result);
            return false;
        }

        return result.response;
    }

    static async login(data: LoginDataType): Promise<AuthResponseType | false> {
        const result = await HttpUtils.request('/login', 'POST', false, data);

        if (result.error || !result.response && (this.responseAuth(result.response))) {
            console.error('Ошибка HTTP запроса:', result);
            return false;
        }

        return result.response;
    }

    static async logout(data: LogoutDataType): Promise<void> {
        await HttpUtils.request('/logout', 'POST', false, data);
    }

    static responseAuth(response: AuthResponseType, requireToken: boolean = true): boolean {
        if (!response?.user?.id || !response.user.email || !response.user.name || !response.user.lastName) {
            return true;
        }

        if (requireToken) {
            return !response.tokens?.accessToken || !response.tokens?.refreshToken;
        }

        return false;
    }
}