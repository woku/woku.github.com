/*-----------------------------------------------------------------------------------
/* Custom Scripts
-----------------------------------------------------------------------------------*/

/* ----------------- Start Document ----------------- */
$(function() {


	/*----------------------------------------------------*/
	/*	Navigation
	/*----------------------------------------------------*/
	$(".menu li").hover(
	function() {
		$(this).find('ul:first').css({
			visibility: "visible",
			display: "none"
		}).stop(true, true).fadeIn(100);
	},
	function() {
		$(this).find('ul:first').css({
			visibility: "visible",
			display: "block"
		}).stop(true, true).fadeOut(100);
	});
	/*----------------------------------------------------*/
	/*	Carousel
	/*----------------------------------------------------*/
	$('[data-jcarousel]').each(function() {
		$(this).jcarousel($(this).data()).jcarouselAutoscroll().hover(function() {
			$(this).jcarouselAutoscroll('stop');
		}, function() {
			$(this).jcarouselAutoscroll('start');
		});
	});

	$('[data-jcarousel-control]').each(function() {
		$(this).jcarouselControl($(this).data());
	});

})