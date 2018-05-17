'use strict';


// SLICK SLIDER
// $('.slick-slider').slick({
// 	dots: true,
// 	infinite: true,
// 	speed: 300
// 	// prevArrow: '<span class="icon-arrow-left"></span>',
// 	// nextArrow: '<span class="icon-arrow-right"></span>'
// });


$('.slick-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	asNavFor: '.slick-nav'
});

$('.slick-nav').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.slick-for',
	dots: true,
	centerMode: true,
	focusOnSelect: true,
	arrows: false,
	fade: true
});
