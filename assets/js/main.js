(function ($) {
	"use strict";

	// Vanilla Calendar
	document.addEventListener('DOMContentLoaded', () => {
		const calendar = new VanillaCalendar('.vanilla-calendar');
		calendar.init();
	});

	// Back To Top
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('.backtotop:hidden').stop(true, true).fadeIn();
		} else {
			$('.backtotop').stop(true, true).fadeOut();
		}
	});

	$(function () {
		$(".scroll").on('click', function () {
			$("html,body").animate({ scrollTop: 0 }, "slow");
			return false
		});
	});

	// Sticky Header
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 0) {
			$('.site_header').addClass("sticky")
		} else {
			$('.site_header').removeClass("sticky")
		}
	});

	// OffCanvas
	$(document).ready(function () {
		$('.offCanvas_close_btn, .offCanvas_overlay').on('click', function () {
			$('.filter_offcanvas.position-fixed').removeClass('active');
			$('.offCanvas_overlay').removeClass('active');
		});

		$('.offCanvas_open_btn').on('click', function () {
			$('.filter_offcanvas.position-fixed').addClass('active');
			$('.offCanvas_overlay').addClass('active');
		});
	});

	// wow.js
	var wow = new WOW({
		animateClass: 'animated',
		offset: 100,
		mobile: true,
		duration: 400,
	});
	wow.init();

	// Tilt
	$('.tilt').tilt({
		maxTilt: 12,
		perspective: 1000,
		scale: 1,
		speed: 1000,
		glare: false,
		maxGlare: 1
	});

	// Dropdown
	$(document).ready(function () {
		$(".dropdown").on('mouseover', function () {
			$(this).find('> .dropdown-menu').addClass('show');
		});

		$(".dropdown").on('mouseout', function () {
			$(this).find('> .dropdown-menu').removeClass('show');
		});
	});

	// Mouse Move Parallax
	$('.mouse_move').parallax({
		scalarX: 10.0,
		scalarY: 10.0,
	});

	// Videos & Images
	$('.popup_video').magnificPopup({
		type: 'iframe',
		preloader: false,
		removalDelay: 160,
		mainClass: 'mfp-fade',
		fixedContentPos: false
	});

	$('.zoom-gallery').magnificPopup({
		delegate: '.popup_image',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		gallery: {
			enabled: true
		},

		zoom: {
			enabled: true,
			duration: 300,
			opener: function (element) {
				return element.find('img');
			}
		}

	});

	// Common Carousels
	$('.common_carousel_1col').slick({
		dots: true,
		speed: 1000,
		arrows: true,
		infinite: true,
		autoplay: true,
		slidesToShow: 1,
		pauseOnHover: true,
		autoplaySpeed: 5000,
		prevArrow: ".cc1c_left_arrow",
		nextArrow: ".cc1c_right_arrow"
	});

	$('.common_carousel_2col').slick({
		dots: true,
		speed: 1000,
		arrows: true,
		infinite: true,
		autoplay: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		pauseOnHover: true,
		autoplaySpeed: 5000,
		prevArrow: ".cc2c_left_arrow",
		nextArrow: ".cc2c_right_arrow",
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

})(jQuery);