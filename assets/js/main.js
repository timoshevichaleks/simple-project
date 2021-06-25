(function($) {

  $('.header-menu__btn').on('click', function() {
    $(this).toggleClass('active');
    $('.header-menu__list').stop(true, true).slideToggle(500);
  });

})(jQuery);