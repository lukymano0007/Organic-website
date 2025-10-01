(function($) {

  "use strict";

  // Preloader
  var initPreloader = function() {
    $(document).ready(function() {
      $('body').addClass('preloader-site');
    });

    $(window).on('load', function() {
      $('.preloader-wrapper').fadeOut();
      $('body').removeClass('preloader-site');
    });
  }

  // Chocolat Lightbox
  var initChocolat = function() {
    if (typeof Chocolat !== 'undefined') {
      Chocolat(document.querySelectorAll('.image-link'), {
        imageSize: 'contain',
        loop: true,
      });
    }
  }

  // Swiper sliders
  var initSwiper = function() {
    if (typeof Swiper === 'undefined') return;

    // Main Swiper
    new Swiper(".main-swiper", {
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // Category carousel
    new Swiper(".category-carousel", {
      slidesPerView: 8,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".category-carousel-next",
        prevEl: ".category-carousel-prev",
      },
      breakpoints: {
        0: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 5 },
        1500: { slidesPerView: 8 },
      }
    });

    // Products carousel
    $(".products-carousel").each(function() {
      var $el_id = $(this).attr('id');
      new Swiper("#" + $el_id + " .swiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 500,
        navigation: {
          nextEl: "#" + $el_id + " .products-carousel-next",
          prevEl: "#" + $el_id + " .products-carousel-prev",
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          991: { slidesPerView: 4 },
          1500: { slidesPerView: 5 },
        }
      });
    });

    // Product single page sliders
    var thumb_slider = new Swiper(".product-thumbnail-slider", {
      slidesPerView: 5,
      spaceBetween: 20,
      direction: "vertical",
      breakpoints: {
        0: { direction: "horizontal" },
        992: { direction: "vertical" },
      },
    });

    new Swiper(".product-large-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      effect: 'fade',
      thumbs: { swiper: thumb_slider },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  // Quantity spinner
  var initProductQty = function() {
    $('.product-qty').each(function() {
      var $el = $(this);
      $el.find('.quantity-right-plus').click(function(e) {
        e.preventDefault();
        var quantity = parseInt($el.find('#quantity').val());
        $el.find('#quantity').val(quantity + 1);
      });
      $el.find('.quantity-left-minus').click(function(e) {
        e.preventDefault();
        var quantity = parseInt($el.find('#quantity').val());
        if (quantity > 0) $el.find('#quantity').val(quantity - 1);
      });
    });
  }

  // Jarallax parallax
  var initJarallax = function() {
    if (typeof jarallax !== 'undefined') {
      jarallax(document.querySelectorAll(".jarallax"));
      jarallax(document.querySelectorAll(".jarallax-keep-img"), { keepImg: true });
    }
  }

  // Optional: Back-to-top button
  var initBackToTop = function() {
    var $btn = $('#back-to-top');
    if (!$btn.length) return;

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) $btn.fadeIn();
      else $btn.fadeOut();
    });

    $btn.click(function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 600);
    });
  }

  // Document ready
  $(document).ready(function() {
    initPreloader();
    initSwiper();
    initProductQty();
    initJarallax();
    initChocolat();
    initBackToTop(); // optional
  });

})(jQuery);
