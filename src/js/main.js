
$(document).ready(function () {
    $('.burger').on('click',function () {
       $('.header__menu').toggleClass('header__menu_active')
       $('.burger').toggleClass('open')
    })
});