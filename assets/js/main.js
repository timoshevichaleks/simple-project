(function($) {

  $('.header-menu__btn').on('click', function() {
    $(this).toggleClass('active');
    $('.header-menu__list').stop(true, true).slideToggle(500);
  });

})(jQuery);

const prevButton = $('#prev');
const nextButton = $('#next');

let slides = $('.slide');
let currentSlide = 0;

function goToSlide(n) {
  $(slides[currentSlide]).toggleClass('active');
  currentSlide = (n + slides.length) % slides.length;
  $(slides[currentSlide]).toggleClass('active');
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);

}

let slideInterval = setInterval(nextSlide, 5000);

prevButton.on('click', prevSlide);
nextButton.on('click', nextSlide);