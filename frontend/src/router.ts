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
import {OperationsEdit} from "./components/operations/operations-edit";
import {Main} from "./components/main/main";
import {FileUtils} from "./utils/file-utils";
import {MainService} from "./services/main-service";
import {RoutesType} from "./type/routes.type";
import {UserInfoType} from "./type/user-info.type";
import {BalanceType} from "./type/balance.type";

export class Router {
    private titlePageElement: HTMLElement | null;
    readonly contentPageElement: HTMLElement | null;
    private userName: string | null;
    private lastName: string | null;
    private routes: RoutesType[];
    private responseBalance: BalanceType;


    constructor() {
        this.titlePageElement = document.getElementById('title');
        this.contentPageElement = document.getElementById('content');
        this.initEvents();
        this.userName = null;
        this.lastName = null;
        this.routes = [
            {
                route: '/',
                title: 'Главная',
                filePath: "/templates/pages/main.html",
                useLayout: '/templates/layout.html',
                scripts: ['chart.umd.js'],
                load: () => {
                    new Main(this.openNewRoute.bind(this))
                }
            },
            {
                route: '/login',
                title: 'Логин',
                filePath: '/templates/pages/auth/login.html',
                load: () => {
                    new Login(this.openNewRoute.bind(this));
                },
                useLayout: null,
            },
            {
                route: '/signup',
                title: 'Регистрация',
                filePath: '/templates/pages/auth/signup.html',
                load: () => {
                    new SignUp(this.openNewRoute.bind(this));
                },
                useLayout: null,
            },
            {
                route: '/logout',
                load: () => {
                    new Logout(this.openNewRoute.bind(this));
                },
                useLayout: null,
            },
            {
                route: '/404',
                title: 'Страница не найдена',
                filePath: '/templates/pages/404.html',
                useLayout: null,
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
                load: () => {
                    new OperationsEdit(this.openNewRoute.bind(this));
                }
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

    private initEvents(): void {
        window.addEventListener('DOMContentLoaded', this.activeRoute.bind(this));
        window.addEventListener('popstate', this.activeRoute.bind(this));
        document.addEventListener('click', this.clickHandler.bind(this));
    }

    private async openNewRoute(url: string): Promise<void> {
        const currentRoute: string = window.location.pathname;
        history.pushState(null, '', url);
        await this.activeRoute(null, currentRoute)
    }

    async clickHandler(e: MouseEvent): Promise<void> {
        let element: HTMLLinkElement = null;
        if ((e.target as HTMLElement).nodeName === 'A') {
            element = e.target as HTMLLinkElement;
        } else if ((e.target as HTMLElement).parentNode.nodeName === 'A') {
            element = (e.target as HTMLElement).parentNode as HTMLLinkElement;
        }

        if (element) {
            e.preventDefault();
            const currentRoute: string = window.location.pathname;
            const url: string = element.href.replace(window.location.origin, '');
            if (!url || (currentRoute === url.replace('#', '')) || url.startsWith('javascript:void(0)')) {
                return;
            }

            await this.openNewRoute(url);
        }
    }

    async activeRoute(e: any, oldRoute: string | null = null): Promise<void> {
        const urlRoute: string = window.location.pathname;
        const newRoute: RoutesType | null = this.routes.find(item => item.route === urlRoute);
        if (oldRoute) {
            const currentRoute: RoutesType | null = this.routes.find(item => item.route === oldRoute);

            if (currentRoute.scripts && currentRoute.scripts.length > 0) {
                currentRoute.scripts.forEach(script => {
                    document.querySelector(`script[src='/js/${script}']`).remove();
                });
            }

            if (currentRoute.unload && typeof currentRoute.unload === 'function') {
                currentRoute.unload();
            }
        }

        if (newRoute) {
            if (newRoute.scripts && newRoute.scripts.length > 0) {
                for (const script of newRoute.scripts) {
                    await FileUtils.loadPageScript('/js/' + script);
                }
            }
            if (newRoute.title) {
                this.titlePageElement.innerText = newRoute.title;
            }

            if (newRoute.filePath) {
                let contentBlock: HTMLElement = this.contentPageElement;
                if (newRoute.useLayout) {
                    this.contentPageElement.innerHTML = await fetch(newRoute.useLayout).then(res => res.text());
                    contentBlock = document.getElementById('content-layout')
                    const profileNameElement = document.getElementById('profile-name');
                    const userInfoRaw: string | null = AuthUtils.getAuthInfo(AuthUtils.userInfoKey);
                    if (userInfoRaw) {
                        const userInfo: UserInfoType = JSON.parse(userInfoRaw);
                        if (userInfo.name && userInfo.lastName) {
                            this.userName = userInfo.name;
                            this.lastName = userInfo.lastName;
                        }
                    }
                    profileNameElement.innerText = `${this.userName} ${this.lastName}`;

                    const balanceText: HTMLElement | null = document.getElementById("balance-text");
                    this.responseBalance = await MainService.getBalance();

                    const balanceValue: number = this.responseBalance?.balance;
                    balanceText.innerText = balanceValue == null ? "0" : balanceValue.toString();

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