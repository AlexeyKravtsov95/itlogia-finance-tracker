import {AuthUtils} from "./auth-utils";
import config from '../config/config';
import {ResultResponeType} from "../type/result-respone.type";
import {ParamsRequestType} from "../type/request.type";

export class HttpUtils {
    static async request(url: string, method: string = 'GET', useAuth: boolean = true, body: any = null): Promise<ResultResponeType> {
        const result: ResultResponeType = {
            error: false,
            response: null
        };

        const params: ParamsRequestType = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        };

        let token: string | null = null;

        if (useAuth) {
            token = AuthUtils.getAuthInfo(AuthUtils.accessTokenKey);
            if (token) {
                params.headers['x-auth-token'] = token;
            }
        }

        if (body) {
            params.body = JSON.stringify(body);
        }

        let response: Response = null;
        try {
            response = await fetch(config.api + url, params);
            result.response = await response.json();
        } catch (error) {
            result.error = true;
            return result;
        }

        if (response.status < 200 || response.status >= 300) {
            result.error = true;
            if (useAuth && response.status === 401) {
                if (!token) {
                    result.redirect = '/login';
                } else {
                    const updatedToken: boolean = await AuthUtils.updateRefreshToken();
                    if (updatedToken) {
                        return this.request(url, method, useAuth, body);
                    } else {
                        result.redirect = '/login';
                    }
                }
            }
        }

        return result;
    }
}