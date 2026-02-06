import {SignUp} from "./components/auth/signup";
import {Login} from "./components/auth/login";
import {Logout} from "./components/auth/logout";
import {AuthUtils} from "./utils/auth-utils";
import {LayoutUtils} from "./utils/layout-utils";
import {ExpensesCreate} from "./components/expenses/expenses-create";
import {ExpensesList} from "./components/expenses/expenses-list";
import {ExpensesEdit} from "./components/expenses/expenses-edit";
import {IncomeCreate} from "./components/income/income-create";
import {IncomeList} from "./components/income/income-list";
import {IncomeEdit} from "./components/income/income-edit";
import {OperationsMain} from "./components/operations/operations-main";
import {OperationsCreate} from "./components/operations/operations-create";

export class Router {
    constructor() {
        this.titlePageElement = document.getElementById('title');
        this.contentPageElement = document.getElementById('content');
        this.initEvents();
        this.userName = null;
        this.lastName = null
        this.routes = [
            {
                route: '/',
                title: 'Главная',
                filePath: "/templates/pages/main.html",
                useLayout: '/templates/layout.html',
            },
            {
                route: '/login',
                title: 'Логин',
                filePath: '/templates/pages/auth/login.html',
                load: () => {
                    new Login(this.openNewRoute.bind(this));
                },
                useLayout: false,
            },
            {
                route: '/signup',
                title: 'Регистрация',
                filePath: '/templates/pages/auth/signup.html',
                load: () => {
                    new SignUp(this.openNewRoute.bind(this));
                },
                useLayout: false,
            },
            {
                route: '/logout',
                load: () => {
                    new Logout(this.openNewRoute.bind(this));
                },
            },
            {
                route: '/404',
                title: 'Страница не найдена',
                filePath: '/templates/pages/404.html',
                useLayout: false,
            },
            {
                route: '/income-expense',
                title: 'Доходы и расходы',
                filePath: '/templates/pages/income-expenses/income-expenses-main.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new OperationsMain(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/income-expenses/create',
                title: 'Страница дохода/расхода',
                filePath: '/templates/pages/income-expenses/income-expenses-create.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new OperationsCreate(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/income-expenses/edit',
                title: 'Редактирование дохода/расхода',
                filePath: '/templates/pages/income-expenses/income-expenses-edit.html',
                useLayout: '/templates/layout.html',
            },
            {
                route: '/show-income',
                title: 'Доходы',
                filePath: '/templates/pages/income/income-main.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new IncomeList(this.openNewRoute.bind(this))
                }
            },
            {
                route: '/create-income',
                title: 'Создание категории дохода',
                filePath: '/templates/pages/income/income-create.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new IncomeCreate(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/edit-income',
                title: 'Редактирование категории дохода',
                filePath: '/templates/pages/income/income-edit.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new IncomeEdit(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/show-expense',
                title: 'Расходы',
                filePath: '/templates/pages/expenses/expenses-main.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new ExpensesList(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/create-expenses',
                title: 'Создание категории расходов',
                filePath: '/templates/pages/expenses/expenses-create.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new ExpensesCreate(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/edit-expenses',
                title: 'Редактирование категории расхода',
                filePath: '/templates/pages/expenses/expenses-edit.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new ExpensesEdit(this.openNewRoute.bind(this));
                }
            }
        ];
    }

    initEvents() {
        window.addEventListener('DOMContentLoaded', this.activeRoute.bind(this));
        window.addEventListener('popstate', this.activeRoute.bind(this));
        document.addEventListener('click', this.clickHandler.bind(this));
    }

    async openNewRoute(url) {
        const currentRoute = window.location.pathname;
        history.pushState(null, '', url);
        await this.activeRoute(null, currentRoute)
    }

    async clickHandler(e) {
        let element = null;
        if (e.target.nodeName === 'A') {
            element = e.target;
        } else if (e.target.parentNode.nodeName === 'A') {
            element = e.target.parentNode;
        }

        if (element) {
            e.preventDefault();
            const currentRoute = window.location.pathname;
            const url = element.href.replace(window.location.origin, '');
            if (!url || (currentRoute === url.replace('#', '')) || url.startsWith('javascript:void(0)')) {
                return;
            }

            await this.openNewRoute(url);
        }
    }

    async activeRoute(e, oldRoute = null) {
        const urlRoute = window.location.pathname;
        const newRoute = this.routes.find(item => item.route === urlRoute);

        if (newRoute) {
            if (newRoute.title) {
                this.titlePageElement.innerText = newRoute.title;
            }

            if (newRoute.filePath) {
                let contentBlock = this.contentPageElement;
                if (newRoute.useLayout) {
                    this.contentPageElement.innerHTML = await fetch(newRoute.useLayout).then(res => res.text());
                    contentBlock = document.getElementById('content-layout')
                    this.profileNameElement = document.getElementById('profile-name');
                    if (!this.userName && !this.lastName) {
                        this.profileNameElement = document.getElementById('profile-name');
                        let userInfo = AuthUtils.getAuthInfo(AuthUtils.userInfoKey);
                        if (userInfo) {
                            userInfo = JSON.parse(userInfo);
                            if (userInfo.name && userInfo.lastName) {
                                this.userName = userInfo.name;
                                this.lastName = userInfo.lastName;
                            }
                        }
                    }
                    this.profileNameElement.innerText = `${this.userName} ${this.lastName}`;
                    LayoutUtils.activateMenuItem(newRoute);
                    LayoutUtils.bindDropdownState();
                }
                contentBlock.innerHTML = await fetch(newRoute.filePath).then(res => res.text());
            }

            if (newRoute.load && typeof newRoute.load === 'function') {
                newRoute.load();
            }
        } else {
            history.pushState(null, '', '/404');
            await this.activeRoute(e);
        }
    }
}