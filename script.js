'use strict'

const mobMenuBtn = document.querySelector ('.header-menu'),
    mobileMenu = document.querySelector ('.mob-menu-window'),
    page = document.querySelector ('html'),
    closeMobMenu = document.querySelector('.close-header-menu');



const enrollBtn = document.querySelector ('.enroll-button'),
    enrollWindow = document.querySelector ('.enroll-window'),
    enrollWindowCloseBtn = document.querySelector ('.enroll-window-close-button');



const submitBtn = document.querySelector ('.submit-button');



// МЕНЮ 
mobMenuBtn.addEventListener ('click', () => {
    mobileMenu.classList.toggle('active');
    mobileMenu.classList.remove('hidden');
 
    page.classList.toggle('no-scroll');

    closeMobMenu.classList.toggle('active');
    closeMobMenu.classList.remove('hidden');

    mobMenuBtn.classList.toggle('hidden');

});



closeMobMenu.addEventListener ('click', () => {
    closeMobMenu.classList.toggle('hidden');
    closeMobMenu.classList.remove('active');

    mobMenuBtn.classList.toggle('active');
    mobMenuBtn.classList.remove('hidden');

    mobileMenu.classList.remove('active');
    mobileMenu.classList.toggle('hidden');

    page.classList.remove('no-scroll');

});


// ЗАПИСАТЬСЯ



enrollBtn.addEventListener ('click', () => {
    enrollWindow.classList.toggle('active');
    enrollWindow.classList.remove('hidden');


});
enrollWindowCloseBtn.addEventListener ('click', () => {
    enrollWindow.classList.toggle('hidden');
    enrollWindow.classList.remove('active');


});




submitBtn.addEventListener ('click', () => {
    alert ('Заявка отправлена!');
    enrollWindow.classList.toggle('hidden');
    enrollWindow.classList.remove('active');

});