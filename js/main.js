const buttonMenu=document.querySelector(".button__menu"),headerNav=document.querySelector(".header__nav"),body=document.querySelector("body");buttonMenu.addEventListener("click",(()=>{buttonMenu.classList.toggle("_menu-active"),headerNav.classList.toggle("_active-nav"),body.classList.toggle("lock"),"Menu"==buttonMenu.innerHTML?buttonMenu.innerHTML="Close":buttonMenu.innerHTML="Menu"}));const headerLinks=document.querySelectorAll(".header__link[data-goto]");if(headerLinks.length>0){function onHeaderLinkClick(e){const t=e.target;if(t.dataset.goto&&document.querySelector(t.dataset.goto)){const n=document.querySelector(t.dataset.goto).getBoundingClientRect().top+scrollY-document.querySelector("header").offsetHeight;window.scrollTo({top:n,behavior:"smooth"}),e.preventDefault()}}headerLinks.forEach((e=>{e.addEventListener("click",onHeaderLinkClick)}))}