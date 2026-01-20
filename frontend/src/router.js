import {SignUp} from "./components/auth/signup";
import {Login} from "./components/auth/login";

export class Router {
    constructor() {
        this.titlePageElement = document.getElementById('title');
        this.contentPageElement = document.getElementById('content');
        this.initEvents();
        this.routes = [
            {
              route: '/',
              title: 'Главная',
              filePath: "/templates/pages/main.html"
            },
            {
                route: '/login',
                title: 'Логин',
                filePath: '/templates/pages/auth/login.html',
                load: () => {
                    new Login(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/signup',
                title: 'Регистрация',
                filePath: '/templates/pages/auth/signup.html',
                load: () => {
                    new SignUp(this.openNewRoute.bind(this));
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
                contentBlock.innerHTML = await fetch(newRoute.filePath).then(res => res.text());
            }

            if (newRoute.load && typeof newRoute.load === 'function') {
                newRoute.load();
            }
        } else {
            history.pushState(null, '', '/404');
            await this.activeRoute(null, '', '/404');
        }
    }
}