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

  $(document).on('click', '.menu__close, .offcanvas__overlay, .offcanvas__menu ul li a', function () {
    $('.offcanvas__area, .offcanvas__overlay').removeClass('active');
  });

  //============================ Offcanvas Js End ==============================


  //============================ Sidebar Js Start ============================
  $(document).on('click', '.sidebar__open', function () {
    $('.dashboard__sidebar').addClass('active');
  });

  $(document).on('click', '.sidebar__close', function () {
    $('.dashboard__sidebar').removeClass('active');
  });

  //============================ Sidebar Js End ==============================


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


  // ========================= Dashboard Home Chart Js Start ===================
  // Common axis style
  const darkAxisStyle = {
    labels: {
      style: {
        colors: '#ccc'
      }
    },
    axisBorder: {
      color: '#444'
    },
    axisTicks: {
      color: '#444'
    }
  };

  // -------------------- Chart 1: Stacked Bar --------------------
  if ($('#chart__one').length) {
    var options1 = {
      series: [{
          data: [44, 55, 41, 67, 22, 43]
        },
        {
          data: [13, 23, 20, 8, 13, 27]
        },
        {
          data: [11, 17, 15, 15, 21, 14]
        },
        {
          data: [21, 7, 25, 13, 22, 8]
        }
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        background: 'transparent',
        foreColor: '#f0f0f0',
        toolbar: {
          show: false,
          tools: {
            download: true
          }
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'last'
        }
      },
      xaxis: {
        type: 'datetime',
        categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT'],
        ...darkAxisStyle
      },
      yaxis: {
        labels: {
          style: {
            colors: '#ccc'
          }
        }
      },
      legend: {
        show: false // hide legend
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ['#fff']
        }
      },
      grid: {
        borderColor: '#444'
      },
      tooltip: {
        theme: 'dark'
      },
      fill: {
        opacity: 1
      }
    };

    var chart1 = new ApexCharts(document.querySelector("#chart__one"), options1);
    chart1.render();
  }



  // -------------------- Chart 2: Area Line --------------------
  var monthDataSeries1 = {
    prices: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
    dates: [
      "2022-01-01", "2022-01-02", "2022-01-03", "2022-01-04", "2022-01-05",
      "2022-01-06", "2022-01-07", "2022-01-08", "2022-01-09", "2022-01-10", "2022-01-11"
    ]
  };

  if ($('#chart__two').length) {
    var options2 = {
      series: [{
        name: "STOCK ABC",
        data: monthDataSeries1.prices
      }],
      chart: {
        type: 'area',
        height: 350,
        background: 'transparent',
        foreColor: '#f0f0f0',
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ['#ffffff']
        }
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Fundamental Analysis of Stocks',
        align: 'left',
        style: {
          color: '#ffffff'
        }
      },
      subtitle: {
        text: 'Price Movements',
        align: 'left',
        style: {
          color: '#cccccc'
        }
      },
      labels: monthDataSeries1.dates,
      xaxis: {
        type: 'datetime',
        ...darkAxisStyle
      },
      yaxis: {
        opposite: true,
        labels: {
          style: {
            colors: '#ccc'
          }
        }
      },
      grid: {
        borderColor: '#444'
      },
      legend: {
        horizontalAlign: 'left',
        labels: {
          colors: '#ffffff'
        }
      },
      tooltip: {
        theme: 'dark'
      }
    };

    var chart2 = new ApexCharts(document.querySelector("#chart__two"), options2);
    chart2.render();
  }



  // -------------------- Chart 3: Positive vs Negative Area --------------------
  var rawData = [0, -41, 35, -51, 0, 62, -69, 32, -32, 54, 16, -50];
  var positiveData = rawData.map(v => v >= 0 ? v : null);
  var negativeData = rawData.map(v => v < 0 ? v : null);

  if ($('#chart__three').length) {
    var options3 = {
      series: [{
          name: 'Positive',
          data: positiveData
        },
        {
          name: 'Negative',
          data: negativeData
        }
      ],
      chart: {
        type: 'area',
        height: 350,
        background: 'transparent',
        foreColor: '#f0f0f0',
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ['#ffffff']
        }
      },
      stroke: {
        curve: 'straight',
        width: 2
      },
      title: {
        text: 'Negative color for values less than 0',
        align: 'left',
        style: {
          color: '#ffffff'
        }
      },
      xaxis: {
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        ...darkAxisStyle
      },
      yaxis: {
        labels: {
          style: {
            colors: '#ccc'
          }
        }
      },
      grid: {
        borderColor: '#444'
      },
      tooltip: {
        theme: 'dark'
      },
      fill: {
        type: 'solid'
      },
      colors: ['#00e676', '#ff4d4d'], // green & red
      legend: {
        labels: {
          colors: '#ffffff'
        }
      }
    };

    var chart3 = new ApexCharts(document.querySelector("#chart__three"), options3);
    chart3.render();
  }

  // ========================= Dashboard Home Chart Js End ===================


  // ========================= Preloader Js Start =====================
  $(window).on('load', function () {
    $('.preloader').fadeOut();
  });
  // ========================= Preloader Js End=====================


})(jQuery);