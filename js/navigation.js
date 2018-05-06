$(document).ready(function() {
    //Определяем переьенные
    var navToggleButton = $('#navigation__button');
    var navBlock = $('.navigation__list');
    var navBlockOpen = 'navigation__list--open';
    var navLink = $('.navigation__list a');

    //События по клику на иконку
    navToggleButton.on('click', function(e){
        e.preventDefault();
        navBlock.toggleClass(navBlockOpen);
        navButtonToggle();
    })
    //События по клику на ссылки
    navLink.on('click', function(){
        if ( navBlock.hasClass(navBlockOpen) ) {
            navButtonToggle();
        }
        navBlock.removeClass(navBlockOpen);
    })
    //Функция для анимации иконки
    function navButtonToggle() {
      if (navToggleButton.hasClass('active')) {
          navToggleButton.removeClass('active');
      }
      else {
          navToggleButton.addClass('active');
      }
    }
});
