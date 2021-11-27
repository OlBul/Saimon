// Menu burger

const buttonMenu = document.querySelector('.button__menu');
const headerNav = document.querySelector('.header__nav');
const body = document.querySelector('body');

buttonMenu.addEventListener('click', () => {
    buttonMenu.classList.toggle('_menu-active');
    headerNav.classList.toggle('_active-nav');
    body.classList.toggle('lock');
    if (buttonMenu.innerHTML == 'Menu') {
        buttonMenu.innerHTML = 'Close';
    }else {
        buttonMenu.innerHTML = 'Menu';
    }
    
})

const menuMobile = () => {

}