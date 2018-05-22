'use strict';


// SLICK SLIDER
// $('.slick-slider').slick({
// 	dots: true,
// 	infinite: true,
// 	speed: 300
// 	// prevArrow: '<span class="icon-arrow-left"></span>',
// 	// nextArrow: '<span class="icon-arrow-right"></span>'
// });


$('.Gallery-slickFor').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	asNavFor: '.Gallery-slickNav'
});

$('.Gallery-slickNav').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.Gallery-slickFor',
	dots: true,
	centerMode: true,
	focusOnSelect: true,
	arrows: false,
	fade: true
});
