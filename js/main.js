const categoriesSlider = new Swiper('.categories-slider', {
  // Optional parameters
  loop: false,

  slidesPerView: 4,

  watchSlidesProgress: true,

  // Navigation arrows
  navigation: {
    nextEl: '.categories-slider__button--next',
    prevEl: '.categories-slider__button--prev',
  },

});

const unreleasedSlider = new Swiper('.unreleased-slider', {
  // Optional parameters
  loop: false,

  slidesPerView: 5,

  watchSlidesProgress: true,

  // Navigation arrows
  navigation: {
    nextEl: '.unreleased-slider__button--next',
    prevEl: '.unreleased-slider__button--prev',
  },
});