$(document).ready(function () {
  var categoriesSlider = new Swiper('.categories-slider', {
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

var unreleasedSlider = new Swiper('.unreleased-slider', {
  // Optional parameters
  loop: true,

  slidesPerView: 5,

  watchSlidesProgress: true,

  // Navigation arrows
  navigation: {
    nextEl: '.unreleased-slider__button--next',
    prevEl: '.unreleased-slider__button--prev',
  },
});

//play the video

$('.story-main__button').click(function(){
  if(($(".story-main__video").get(0).paused) === true){
    $(".story-main__video").get(0).play();
    $('.story-main__button').hide();
  }
});

$('.story-main__video').click(function(){
  if(($(".story-main__video").get(0).paused) === false){
    $(".story-main__video").get(0).pause();
    $('.story-main__button').show();
  }
});

//video 1

$('.story-secondary__button--first').click(function(){
  if(($(".story-secondary__video--first").get(0).paused) === true){
    $(".story-secondary__video--first").get(0).play();
    $('.story-secondary__button--first').hide();
  }
});

$('.story-secondary__video--first').click(function(){
  if(($(".story-secondary__video--first").get(0).paused) === false){
    $(".story-secondary__video--first").get(0).pause();
    $('.story-secondary__button--first').show();
  }
});

//video 2
$('.story-secondary__button--second').click(function(){
  if(($(".story-secondary__video--second").get(0).paused) === true){
    $(".story-secondary__video--second").get(0).play();
    $('.story-secondary__button--second').hide();
  }
});

$('.story-secondary__video--second').click(function(){
  if(($(".story-secondary__video--second").get(0).paused) === false){
    $(".story-secondary__video--second").get(0).pause();
    $('.story-secondary__button--second').show();
  }
});


//video 3
$('.story-secondary__button--third').click(function(){
  if(($(".story-secondary__video--third").get(0).paused) === true){
    $(".story-secondary__video--third").get(0).play();
    $('.story-secondary__button--third').hide();
  }
});

$('.story-secondary__video--third').click(function(){
  if(($(".story-secondary__video--third").get(0).paused) === false){
    $(".story-secondary__video--third").get(0).pause();
    $('.story-secondary__button--third').show();
  }
});


var menuButton = $(".menu-button");
menuButton.on('click', function(){
  $(".navbar-menu").toggleClass('navbar-menu--mobile--visible');
});

var modalButton = $('[data-toggle=modal]');
var closeModalButton = $(".modal__close");
var mainPageButton = $(".gratitude__button");

modalButton.on('click', openModal);
closeModalButton.on('click', closeModal);
//go to the main page button
mainPageButton.on('click', goToMainPage);

//to go to the main page
function goToMainPage(event){
  event.preventDefault();
  window.location.replace("index.html");
}

//to close the modal window when esc is pressed
//$(document).keydown(closeModalEsc);

// var modal = $(".modal");

// // When the user clicks anywhere outside of the modal, close it
// $(window).click(function(event) {
//   if (event.target == modal) {
//     closeModal(event);
//   }
// });

function openModal(){
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addClass('modal__overlay--visible');
  modalDialog.addClass('modal__dialog--visible');
  $('body').css('overflow','hidden');
}

function closeModal(event){
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass('modal__overlay--visible');
  modalDialog.removeClass('modal__dialog--visible');
  $('body').css('overflow','auto');
}

  //to close the modal window by pressing Esc
  function closeModalEsc(event){
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    if(event.keyCode === 27){
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
    } 
  }

  //Form validation
  $(".form").each(function() {
    $(this).validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
    },
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "Your name must contain more than 2 characters",
      },
      email: {
        required: "We need your email to contact you",
        email: "The format: name@domain.com",
      },
      phone: {
        required: "Phone number is required in format: +7(777)777-77-77",
        minlength: "Please, enter a valid phone number",
      },
    }
  });
  })                               
});