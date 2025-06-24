(function ($) {
  'use strict';

  //============================ Scroll To Top Icon Js Start ========================
  var btn = $('.scroll-top');

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });
  //============================ Scroll To Top Icon Js End ========================


  //============================ Offcanvas Js Start ============================
  $(document).on('click', '.menu__open, .offcanvas__overlay', function () {
    $('.offcanvas__area, .offcanvas__overlay').addClass('active');
  });

  $(document).on('click', '.menu__close, .offcanvas__overlay', function () {
    $('.offcanvas__area, .offcanvas__overlay').removeClass('active');
  });

  //============================ Offcanvas Js End ==============================


  // ========================= Magnific Popup Js Start ===================
  $('.play__btn').magnificPopup({
    type: 'iframe',
  });
  // ========================= Magnific Popup Js End ===================


  // ========================= Testimonial Swiper Js Start =====================
  var swiperTestimonials = new Swiper(".testimonial__slider", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBeteen: 24,
      },
      1024: {
        slidesPerView: 2,
        spaceBeteen: 24,
      },
    },
  });
  // ========================= Testimonial Swiper Js End =====================


  // ========================= Show Hide Password Js Start ===================
  if ($('.password-show-toggle').length) {
    var showBtn = $('.password-show-toggle');
    showBtn.each(function () {
      $(this).on('click', function () {
        let inputField = $(this).closest('.form-group').find('input');
        let openEye = $(this).find('.open-eye-icon');
        let closeEye = $(this).find('.close-eye-icon');

        if (inputField.attr('type') === "password") {
          inputField.attr('type', 'text');
          openEye.hide();
          closeEye.show();
        } else {
          inputField.attr('type', 'password');
          openEye.show();
          closeEye.hide();
        }
      });
    });
  }

  // ========================= Show Hide Password Js End ===================


  // ========================= Scroll Reveal Js Start ===================
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 100,
    reset: false,
  })

  sr.reveal('.hero__content, .section__heading, .cta__wrap', {
    delay: 60,
    interval: 100,
    origin: 'bottom',
  })

  sr.reveal('.about__img', {
    delay: 60,
    interval: 100,
    origin: 'left',
  })

  sr.reveal('.about__info ul li, .testimonial__main', {
    delay: 60,
    interval: 100,
    origin: 'right',
  })

  sr.reveal('.feature__single, .service__card, .pricing__card, .contact__form input, .contact__form textarea', {
    delay: 60,
    interval: 100,
  })
  // ========================= Scroll Reveal Js End ===================


  // ========================= Preloader Js Start =====================
  $(window).on('load', function () {
    $('.preloader').fadeOut();
  });
  // ========================= Preloader Js End=====================


})(jQuery);