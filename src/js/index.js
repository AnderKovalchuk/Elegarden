
window.addEventListener('load', () => {
    menuToggle();
    let pageScroll = new PageScroll();
});

function menuToggle(){
    let burger  = document.querySelector('.header__menu-button')
    let nav     = document.querySelector('.main-menu')
    let header  = document.querySelector('.header')

    burger.addEventListener('click', (e) => {
        e.preventDefault();
        nav.classList.toggle('main-menu--active');
        header.classList.toggle('header--menu-open')
        document.body.style.overflow =  
            document.body.style.overflow ? "" : "hidden";
        if(window.pageYOffset <= 0){
            nav.classList.toggle('main-menu--top-pozition')
        } else {
            burger.classList.toggle('header__menu-button--top-pozition')
        }
    });
}