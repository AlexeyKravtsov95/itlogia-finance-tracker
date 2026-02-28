import {ValidationUtils} from "../../utils/validation-utils";
import {AuthService} from "../../services/auth-service";
import {AuthUtils} from "../../utils/auth-utils";
import {OpenNewRouteType} from "../../type/routes.type";
import {ValidationRule} from "../../type/validate.type";

export class SignUp {
    readonly openNewRoute: OpenNewRouteType;
    private validations: ValidationRule[] = [];
    private nameInputElement: HTMLInputElement;
    private lastNameInputElement: HTMLInputElement;
    private emailInputElement: HTMLInputElement;
    private passwordInputElement: HTMLInputElement;
    private passwordRepeatInputElement: HTMLInputElement;

    constructor(openNewRoute: OpenNewRouteType) {
        this.openNewRoute = openNewRoute;
        if (AuthUtils.getAuthInfo(AuthUtils.accessTokenKey)) {
            this.openNewRoute('/');
            return;
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
        const signUpButton: HTMLElement = document.getElementById('signup-button');
        signUpButton.addEventListener('click', this.signUp.bind(this));
    }

    private findElements(): void {
        this.nameInputElement = document.getElementById('name') as HTMLInputElement;
        this.lastNameInputElement = document.getElementById('lastName') as HTMLInputElement;
        this.emailInputElement = document.getElementById('email') as HTMLInputElement;
        this.passwordInputElement = document.getElementById('password') as HTMLInputElement;
        this.passwordRepeatInputElement = document.getElementById('repeat-password') as HTMLInputElement;
    }

    private async signUp(): Promise<void> {
        for (let i = 0; i < this.validations.length; i++) {
            const rule: ValidationRule = this.validations[i];


            if (rule.element === this.passwordRepeatInputElement && rule.options && "compareTo" in rule.options) {
                rule.options.compareTo = this.passwordInputElement.value;
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