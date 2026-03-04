import {AuthUtils} from "../../utils/auth-utils";
import {AuthService} from "../../services/auth-service";
import {OpenNewRouteType} from "../../type/routes.type";

export class Logout {
    readonly openNewRoute: OpenNewRouteType;

    constructor(openNewRoute: OpenNewRouteType) {
        this.openNewRoute = openNewRoute;

        if (!AuthUtils.getAuthInfo(AuthUtils.accessTokenKey) || !AuthUtils.getAuthInfo(AuthUtils.refreshTokenKey)) {
            this.openNewRoute('/login');
            return;
        }

        this.logout().then();
    }

    async logout(): Promise<void> {
        await AuthService.logout({refreshToken: AuthUtils.getAuthInfo(AuthUtils.refreshTokenKey)});

        AuthUtils.removeAuthInfo();

        this.openNewRoute('/login');
    }
}