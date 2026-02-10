import {ValidationUtils} from "../../utils/validation-utils";
import {AuthService} from "../../services/auth-service";
import {AuthUtils} from "../../utils/auth-utils";

export class SignUp {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;
        if (AuthUtils.getAuthInfo(AuthUtils.accessTokenKey)) {
            return this.openNewRoute('/');
        }

        this.findElements();

        this.validations = [
            {element: this.nameInputElement, options: {pattern: /^[А-Я][а-я]+\s*$/}},
            {element: this.lastNameInputElement, options: {pattern: /^[А-Я][а-я]+\s*$/}},
            {
                element: this.emailInputElement,
                options: {pattern: /^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/}
            },
            {element: this.passwordInputElement, options: {pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/}},
            {element: this.passwordRepeatInputElement, options: {compareTo: this.passwordInputElement.value}}
        ]
        document.getElementById('signup-button').addEventListener('click', this.signUp.bind(this));
    }

    findElements() {
        this.nameInputElement = document.getElementById('name');
        this.lastNameInputElement = document.getElementById('lastName');
        this.emailInputElement = document.getElementById('email');
        this.passwordInputElement = document.getElementById('password');
        this.passwordRepeatInputElement = document.getElementById('repeat-password');
    }

    async signUp() {
        for (let i = 0; i < this.validations.length; i++) {
            if (this.validations[i].element === this.passwordRepeatInputElement) {
                this.validations[i].options.compareTo = this.passwordInputElement.value;
            }
        }

        if (ValidationUtils.validateForm(this.validations)) {
            const signUpResult = await AuthService.signUp({
                    name: this.nameInputElement.value,
                    lastName: this.lastNameInputElement.value,
                    email: this.emailInputElement.value,
                    password: this.passwordInputElement.value,
                    passwordRepeat: this.passwordRepeatInputElement.value,
                }
            )

            if (!signUpResult) {
                alert('Ошибка регистрации')
                return;
            }

            this.openNewRoute('/login');
        }
    }
}