import config from "../config/config";
import {UserInfoType} from "../type/user-info.type";
import {AuthKey, AuthUtilsType} from "../type/auth-info.type";
import {RefreshResponseType, RefreshTokenType} from "../type/tokens-type";

export class AuthUtils {
    static accessTokenKey: AuthKey = AuthKey.accessToken;
    static refreshTokenKey: AuthKey = AuthKey.refreshToken;
    static userInfoKey: AuthKey = AuthKey.userInfo;
    static rememberMeKey: AuthKey = AuthKey.rememberMe;

    static setAuthInfo(accessToken: string, refreshToken: string, userInfo: UserInfoType | null = null, rememberMe: boolean = false): void {
        if (accessToken) {
            localStorage.setItem(this.accessTokenKey, accessToken);
        }
        if (refreshToken) {
            localStorage.setItem(this.refreshTokenKey, refreshToken);
        }
        if (userInfo) {
            localStorage.setItem(this.userInfoKey, JSON.stringify(userInfo));
        }
        if (rememberMe) {
            localStorage.setItem(this.rememberMeKey, JSON.stringify(rememberMe));
        }
    }

    static removeAuthInfo(): void {
        localStorage.removeItem(this.accessTokenKey);
        localStorage.removeItem(this.refreshTokenKey);
        localStorage.removeItem(this.userInfoKey);
        localStorage.removeItem(this.rememberMeKey);
    }

    static getAuthInfo(key: AuthKey): string | null;
    static getAuthInfo(keys: AuthKey[]): AuthUtilsType;
    static getAuthInfo(keyOrKeys: AuthKey | AuthKey[]): string | AuthUtilsType | null {
        if (Array.isArray(keyOrKeys)) {
            return {
                accessToken: keyOrKeys.includes(AuthKey.accessToken)
                    ? localStorage.getItem(this.accessTokenKey)
                    : null,
                refreshToken: keyOrKeys.includes(AuthKey.refreshToken)
                    ? localStorage.getItem(this.refreshTokenKey)
                    : null,
                userInfo: keyOrKeys.includes(AuthKey.userInfo)
                    ? localStorage.getItem(this.userInfoKey)
                    : null,
                rememberMe: keyOrKeys.includes(AuthKey.rememberMe)
                    ? localStorage.getItem(this.rememberMeKey)
                    : null,
            };
        }

        return localStorage.getItem(keyOrKeys);
    }

    static async updateRefreshToken(): Promise<boolean> {
        let result: boolean = false;
        const refreshToken: string | null = localStorage.getItem(this.refreshTokenKey);

        if (refreshToken) {
            const response: Response = await fetch(config.api + '/refresh', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    refreshToken: refreshToken,
                })
            });

            if (response && response.status === 200) {
                const data: RefreshResponseType = await response.json();
                const tokens: RefreshTokenType = data.tokens;
                if (tokens && !tokens.error) {
                    this.setAuthInfo(tokens.accessToken, tokens.refreshToken);
                    result = true;
                }
            }
        }

        if (!result) {
            this.removeAuthInfo();
        }

        return result;
    }
}