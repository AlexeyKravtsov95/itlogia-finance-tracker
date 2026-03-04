import {AuthUtils} from "../../utils/auth-utils";
import {ValidationUtils} from "../../utils/validation-utils";
import {AuthService} from "../../services/auth-service";
import {OpenNewRouteType} from "../../type/routes.type";
import {ValidationRule} from "../../type/validate.type";
import {sharedElement} from "../../extension/htmlElement+ext";
import {AuthResponseType} from "../../type/auth-info.type";

export class Login {
    readonly openNewRoute: OpenNewRouteType;
    private emailInputElement: HTMLInputElement;
    private passwordInputElement: HTMLInputElement;
    private rememberMeElement: HTMLInputElement | null;
    readonly validations: ValidationRule[] = [];

    constructor(openNewRoute: OpenNewRouteType) {
        this.openNewRoute = openNewRoute;

        if (AuthUtils.getAuthInfo(AuthUtils.accessTokenKey)) {
            this.openNewRoute('/');
            return;
        }

        this.findElements();

        this.validations = [
            {element: this.passwordInputElement},
            {
                element: this.emailInputElement,
                options: {pattern: /^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/}
            }
        ];

        const loginButton: HTMLElement = document.getElementById('login-button');
        loginButton.addEventListener('click', this.login.bind(this));
    }

    private findElements(): void {
        this.emailInputElement = sharedElement('email', HTMLInputElement);
        this.passwordInputElement = sharedElement('password', HTMLInputElement);
        this.rememberMeElement = sharedElement('remember-me', HTMLInputElement);
    }

    private async login(): Promise<void> {
        if (ValidationUtils.validateForm(this.validations)) {
            const loginResult: false | AuthResponseType = await AuthService.login({
                email: this.emailInputElement.value,
                password: this.passwordInputElement.value,
                rememberMe: this.rememberMeElement.checked,
            });

            if (!loginResult) {
                alert('Ошибка логина')
                return;
            }

            AuthUtils.setAuthInfo(loginResult.tokens.accessToken, loginResult.tokens.refreshToken, {
                id: loginResult.user.id,
                name: loginResult.user.name,
                lastName: loginResult.user.lastName,
            });

            this.openNewRoute('/');
        }
    }
}