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

/*const menuMobile = () => {

}*/

// =====

const headerLinks = document.querySelectorAll('.header__link[data-goto]');
//console.log(headerLinks)

if ( headerLinks.length > 0) {
    headerLinks.forEach (headerLink => {
        headerLink.addEventListener('click', onHeaderLinkClick);
    });

    function onHeaderLinkClick(e) {
        const headerLink = e.target;

        if (headerLink.dataset.goto && document.querySelector(headerLink.dataset.goto)) {
            const gotoBlock = document.querySelector(headerLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
            
            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }
}

/*let elem1 = '5';
let elem2 = 10;

console.log(elem1+++elem2);*/
