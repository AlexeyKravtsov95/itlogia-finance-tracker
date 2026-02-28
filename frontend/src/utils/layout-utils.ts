import {RoutesType} from "../type/routes.type";

export class LayoutUtils {
    static activateMenuItem(route: RoutesType | string): void {
        const path: string | RoutesType = (route as RoutesType).route ?? route;
        const navLinks: NodeListOf<Element> = document.querySelectorAll('.sidebar-nav .nav-link:not(.dropdown-toggle)');
        navLinks.forEach(link => {
            const href: string = link.getAttribute('href');
            if (!href) return;
            if (typeof path === "string") {
                const isActive = (href === '/' && path === '/') || (href !== '/' && path.startsWith(href));
                link.classList.toggle('active', isActive);
                link.classList.toggle('link-dark', !isActive);
            }
        });
        const dropdownToggle: Element = document.querySelector('.sidebar-nav .dropdown-toggle');
        if (dropdownToggle) {
            const dropdownLinks = dropdownToggle.closest('.dropdown')?.querySelectorAll('.dropdown-menu a') ?? [];
            const isDropdownActive = Array.from(dropdownLinks).some(link => {
                const href = link.getAttribute('href');
                return href && (path as string).startsWith(href);
            });
            dropdownToggle.classList.toggle('active', isDropdownActive);
            dropdownToggle.classList.toggle('link-dark', !isDropdownActive);
        }
    }

    static bindDropdownState(): void {
        const dropdown: Element = document.querySelector('.sidebar-nav .dropdown');
        const dropdownToggle: Element = dropdown?.querySelector('.dropdown-toggle');
        if (!dropdown || !dropdownToggle) return;
        dropdown.addEventListener('show.bs.dropdown', () => {
            this.setDropdownOpenState(true);
        });
        dropdown.addEventListener('hide.bs.dropdown', () => {
            this.activateMenuItem(window.location.pathname);
        });
    }

    private static setDropdownOpenState(isOpen: boolean): void {
        const navLinks: NodeListOf<Element> = document.querySelectorAll('.sidebar-nav .nav-link:not(.dropdown-toggle)');
        navLinks.forEach(link => {
            link.classList.remove('active');
            link.classList.add('link-dark');
        });
        const dropdownToggle: Element = document.querySelector('.sidebar-nav .dropdown-toggle');
        if (dropdownToggle) {
            dropdownToggle.classList.toggle('active', isOpen);
            dropdownToggle.classList.toggle('link-dark', !isOpen);
        }
    }
}