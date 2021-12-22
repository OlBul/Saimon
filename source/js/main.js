// Menu burger

const buttonMenu = document.querySelector('.button__menu');
const headerNav = document.querySelector('.header__nav');
const body = document.querySelector('body');
const linkActive = document.querySelectorAll('.header__link');

buttonMenu.addEventListener('click', () => {
    buttonMenu.classList.toggle('_menu-active');
    headerNav.classList.toggle('_active-nav');
    body.classList.toggle('lock');
    if (buttonMenu.innerHTML == 'Menu') {
        buttonMenu.innerHTML = 'Close';
    }else {
        buttonMenu.innerHTML = 'Menu';
    }    
});

linkActive.forEach( (headerLink) => {
    headerLink.addEventListener('click', () => {
        buttonMenu.classList.remove('_menu-active');
        headerNav.classList.remove('_active-nav');
        body.classList.remove('lock');
        buttonMenu.innerHTML = 'Menu';
    })
});

const headerLinks = document.querySelectorAll('.header__link[data-goto]');

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
};

// ========== arrow Up ===========================================================================================
const arrowUp = document.querySelector('.arrow__up');

   window.addEventListener('scroll', () => {
    if (window.scrollY > 700) {
        arrowUp.classList.remove('arrow__up_hiden');
      } else if (window.scrollY < 700) {
        arrowUp.classList.add('arrow__up_hiden');
      }
  });  
  
   arrowUp.addEventListener('click', () => {
      window.scrollTo(0,0);
  });


