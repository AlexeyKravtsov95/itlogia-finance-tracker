import {AuthUtils} from "../../utils/auth-utils";
import {ValidationUtils} from "../../utils/validation-utils";
import {AuthService} from "../../services/auth-service";

export class Login {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;

        if (AuthUtils.getAuthInfo(AuthUtils.accessTokenKey)) {
            return this.openNewRoute('/');
        }

        this.findElements();

        this.validations = [
            {element: this.passwordInputElement},
            {
                element: this.emailInputElement,
                options: {pattern: /^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/}
            }
        ];

        document.getElementById('login-button').addEventListener('click', this.login.bind(this));
    }

    findElements() {
        this.emailInputElement = document.getElementById('email');
        this.passwordInputElement = document.getElementById('password');
        this.rememberMeElement = document.getElementById('remember-me');
    }

    async login() {
        if (ValidationUtils.validateForm(this.validations)) {
            const loginResult = await AuthService.login({
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