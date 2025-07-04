"use strict";

jQuery(function ($) {
  var $menuBtn = $('.js-menuBtn');
  var $nav = $('.nav');
  var $body = $('body');
  var $menuIcon = $menuBtn.find('img');
  var $btnTop = $('.c-btn-top');
  function toggleMenu() {
    $menuBtn.toggleClass('is-active');
    $nav.toggleClass('is-active');
    $body.toggleClass('is-active');
    $btnTop.toggleClass('is-active');

    var isActive = $menuBtn.hasClass('is-active');

    // メニューアイコン画像の切り替え
    var newMenuIconSrc = isActive ? './assets/images/common/sp/menu_btn_close.webp' : './assets/images/common/sp/menu_btn.webp';
    $menuIcon.attr('src', newMenuIconSrc);
  }

  // メニューボタンのクリックで開閉
  $menuBtn.on('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  // ナビゲーションリンクをクリックしたときに閉じる
  $nav.find('a').on('click', function () {
    $menuBtn.removeClass('is-active');
    $nav.removeClass('is-active');
    $body.removeClass('is-active');
    $btnTop.removeClass('is-active');
    $menuIcon.attr('src', './assets/images/common/sp/menu_btn.webp');
  });

  // メニュー外をクリックしたときに閉じる
  $(document).on('click', function (e) {
    if ($nav.hasClass('is-active') && !$(e.target).closest('.nav__items, .js-menuBtn').length) {
      $menuBtn.removeClass('is-active');
      $nav.removeClass('is-active');
      $body.removeClass('is-active');
      $btnTop.removeClass('is-active');
      $menuIcon.attr('src', './assets/images/common/sp/menu_btn.webp');
    }
  });

  //========================================
  // アンカーリンク
  //========================================
  $(function () {
    $('a[href^="#"]').click(function () {
      var adjust = 50; 
      var speed = 800; 
      var href = $(this).attr('href'); 
      var target = $(href == '#' || href == '' ? 'html' : href); 
      var position = target.offset().top - adjust; 
      $('body,html').animate({
        scrollTop: position 
      }, speed,
      'swing' 
      );
      return false; 
    });
  });

  //========================================
  // works-slider
  //========================================
  var swiper = new Swiper('.works-slider', {
    slidesPerView: 'auto',
    // slidesPerView: 1.1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    initialSlide: 0,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination'
    },
    breakpoints: {
      768: {
        // slidesPerView: 'auto',
        slidesPerView: 2.05,
        spaceBetween: 40,
        centeredSlides: false,
        loop: true,
        loopedSlides: 6,
        initialSlide: 0
      }
    },
    on: {
      init: function init() {
        this.slideToLoop(0, 0);
      }
    }
  });

  //========================================
  // TOPに戻る
  //========================================
  $(function () {
    $('.js-btn-top').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });
  $(function () {
    var pagetop = $('.js-btn-top');
    pagetop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
      }
    });
    pagetop.click(function () {
      $('body, html').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
  });

  //========================================
  // フェードイン
  //========================================
  $(window).on('scroll', function () {
    $('.u-fadein').each(function () {
      var elementTop = $(this).offset().top; 
      var windowBottom = $(window).scrollTop() + $(window).height(); 

      if (windowBottom > elementTop + 100) {
        $(this).addClass('is-visible');
      }
    });
  });
});