(function ($) {
	"use strict";

	$(document).foundation();

	var wplook = {

		// Start Functions
		startWpl: function () {
			wplook.ParallaxBackgroundsWpl();
			wplook.MobileMenuWpl();
			wplook.OwlSliderWpl();
			wplook.DetectiOSWpl();
		},

		// Parallax Backgrounds
		ParallaxBackgroundsWpl: function () {
			$(window).stellar({
				responsive: true,
				horizontalScrolling: false,
				verticalScrolling: true,
				parallaxBackgrounds: true,
				parallaxElements: true,
				hideDistantElements: true
			});
		},



		// Mobile Menu
		MobileMenuWpl: function () {
			$( ".navmobile a" ).click(function(e) {
				e.preventDefault();
				$(this).toggleClass('close');
				$(".nav-menu").toggleClass('showme');
			});
			$(".nav-menu li a").click(function(e) {
				$(this).toggleClass('close');
				$(".nav-menu").toggleClass('showme');
			});
			$(".navmobile").waypoint(function(direction) {
				$(".navbar-fixed").toggleClass("isStuck");
			}, {offset: -1});

			if ($(window).width() < 950) {
				$(".main_menu.navbar-fixed").css("position", "relative");
			}
		},

		//
		OwlSliderWpl: function () {
			//Slider owl-testimonials
			var owltestimonials = $("#owl-testimonials");
			owltestimonials.owlCarousel({
				items : 3,
				itemsDesktop : [1000,3],
				itemsDesktopSmall : [900,2],
				itemsTablet: [600,1],
				itemsMobile : [480,1]
			});
			// Navigation owl-testimonials
			$(".next").click(function(){
				owltestimonials.trigger('owl.next');
			});
			$(".prev").click(function(){
				owltestimonials.trigger('owl.prev');
			});

			//Owl-gallery
			var owlgallery = $("#owl-gallery");
				owlgallery.owlCarousel({
				singleItem:true
			});
			$(".next-gallery").click(function(){
				owlgallery.trigger('owl.next');
			});
			$(".prev-gallery").click(function(){
				owlgallery.trigger('owl.prev');
			});
		},

		// iosDetect
		DetectiOSWpl: function () {
			Modernizr.addTest('ipad', function () {
				return !!navigator.userAgent.match(/iPad/i);
			});
			Modernizr.addTest('iphone', function () {
				return !!navigator.userAgent.match(/iPhone/i);
			});
			Modernizr.addTest('ipod', function () {
				return !!navigator.userAgent.match(/iPod/i);
			});
			Modernizr.addTest('appleios', function () {
				return (Modernizr.ipad || Modernizr.ipod || Modernizr.iphone);
			});
		}
	};

	$(document).ready(function () {
		wplook.startWpl();
	});

}(jQuery));
