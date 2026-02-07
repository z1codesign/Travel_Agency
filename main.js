let mobileNav = document.querySelector('.mobile-nav-list-wrapp');
let xmark = document.querySelector('.xmark-icon');
let menuBtn = document.querySelector('.hamburger-btn');
let body = document.querySelector('body');

menuBtn.addEventListener('click', function() {
    mobileNav.classList.add('open');
    body.classList.add('scroll-stop');
})

xmark.addEventListener('click', function() {
    if(mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open')
        body.classList.remove('scroll-stop')
    }
})
