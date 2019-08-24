$(document).ready(function(){
	$('.gallery').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: '<button class="arrow arrow--prev"></button>',
		nextArrow: '<button class="arrow arrow--next"></button>',
  	});
});