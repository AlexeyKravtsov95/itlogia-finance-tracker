export class AuthUtils {
    static accessTokenKey = 'accessToken';
    static refreshTokenKey = 'refreshToken';
    static userInfoKey = 'userInfo';

    static setAuthInfo(accessToken=null, refreshToken=null, userInfo = null) {
        if (accessToken) {
            localStorage.setItem(this.accessTokenKey, accessToken);
        }
        if (refreshToken) {
            localStorage.setItem(this.refreshTokenKey, refreshToken);
        }
        if (userInfo) {
            localStorage.setItem(this.userInfoKey, userInfo);
        }
    }

    static removeAuthInfo() {
        localStorage.removeItem(this.accessTokenKey);
        localStorage.removeItem(this.refreshTokenKey);
        localStorage.removeItem(JSON.stringify(this.userInfoKey));
    }

    static getAuthInfo(key = null) {
        if (key && [this.accessTokenKey, this.refreshTokenKey, this.userInfoKey].includes(key)) {
            return localStorage.getItem(key);
        } else {
            return {
                [this.accessTokenKey]: this.accessTokenKey,
                [this.refreshTokenKey]: this.refreshTokenKey,
                [this.userInfoKey]: this.userInfoKey,
            }
        }
    }

    static async updateRefreshToken() {
        let result = false;
        const refreshToken = localStorage.getItem(this.refreshTokenKey);

        if (refreshToken) {
            const response = await fetch(config.api + '/refresh', {
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
                const tokens = await response.json();
                if (tokens && tokens.error) {
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