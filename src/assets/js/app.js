window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav__menu'),
    menuItem = document.querySelectorAll('.nav__menu_item'),
    hamburger = document.querySelector('.nav__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('nav__hamburger_active');
        menu.classList.toggle('nav__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('nav__hamburger_active');
            menu.classList.toggle('nav__menu_active');
        });
    });
});