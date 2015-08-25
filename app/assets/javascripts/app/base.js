(function ($) {
	"use strict";

	$(document).foundation();

	var wplook = {

		// Start Functions
		startWpl: function () {
			wplook.ParallaxBackgroundsWpl();
			wplook.MobileMenuWpl();
			wplook.AnimateCssWpl();
			wplook.OwlSliderWpl();
			wplook.MainMenuWpl();
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


		// Animate CSS and JS
		AnimateCssWpl: function () {
			//Animate titles
			var aTitle = [".speakers", ".schedule", ".partners", ".buytickets", ".testimonials", ".widget_latestposts_homepage" ];
			function animateTitle (val) {
				$(val +' h2').waypoint(function(direction) {
					$(val +' h2').toggleClass("animate_title");
				}, { offset: 300 });
			}
			for (var i = aTitle.length - 1; i >= 0; i--) {
				animateTitle(aTitle[i]);
			}

			//Animate Buy Tickets boxes
			$( ".buytickets_item" ).each(function( index ) {
				$( this ).waypoint(function(direction) {
					$( this ).toggleClass("animateBuyTicketsBoxes-"+index);
				}, { offset: 550 });
			});

			//Animate latest post home page
			$( ".widget_latestposts_homepage li" ).each(function( index ) {
				$( this ).waypoint(function(direction) {
					$( this ).toggleClass("widget_latestpost_homepage-"+index);
				}, { offset: 400 });
			});
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

		// Main menu
		MainMenuWpl: function () {
			$('.nav-menu').onePageNav({
				currentClass: 'active',
				changeHash: false,
				scrollSpeed: 750,
				scrollThreshold: 0.5,
				filter: '',
				easing: 'swing'
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

})(jQuery);
