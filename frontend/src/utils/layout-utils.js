export class LayoutUtils {
    static activateMenuItem(route) {
        const path = route.route ?? route;
        const navLinks = document.querySelectorAll('.sidebar-nav .nav-link:not(.dropdown-toggle)');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (!href) return;
            const isActive = (href === '/' && path === '/') || (href !== '/' && path.startsWith(href));
            link.classList.toggle('active', isActive);
            link.classList.toggle('link-dark', !isActive);
        });
        const dropdownToggle = document.querySelector('.sidebar-nav .dropdown-toggle');
        if (dropdownToggle) {
            const dropdownLinks = dropdownToggle.closest('.dropdown')?.querySelectorAll('.dropdown-menu a') ?? [];
            const isDropdownActive = Array.from(dropdownLinks).some(link => {
                const href = link.getAttribute('href');
                return href && path.startsWith(href);
            });
            dropdownToggle.classList.toggle('active', isDropdownActive);
            dropdownToggle.classList.toggle('link-dark', !isDropdownActive);
        }
    }

    static bindDropdownState() {
        const dropdown = document.querySelector('.sidebar-nav .dropdown');
        const dropdownToggle = dropdown?.querySelector('.dropdown-toggle');
        if (!dropdown || !dropdownToggle) return;
        dropdown.addEventListener('show.bs.dropdown', () => {
            this.setDropdownOpenState(true);
        });
        dropdown.addEventListener('hide.bs.dropdown', () => {
            this.activateMenuItem(window.location.pathname);
        });
    }

    static setDropdownOpenState(isOpen) {
        const navLinks = document.querySelectorAll('.sidebar-nav .nav-link:not(.dropdown-toggle)');
        navLinks.forEach(link => {
            link.classList.remove('active');
            link.classList.add('link-dark');
        });
        const dropdownToggle = document.querySelector('.sidebar-nav .dropdown-toggle');
        if (dropdownToggle) {
            dropdownToggle.classList.toggle('active', isOpen);
            dropdownToggle.classList.toggle('link-dark', !isOpen);
        }
    }
}