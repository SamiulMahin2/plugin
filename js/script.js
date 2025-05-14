// jQuery
$(document).ready(function(){
	$('.slick_wr').slick({
		centerMode: true,
 		infinite: true,
		slidesToShow: 2,
  		slidesToScroll: 1,
		autoplay: true,
  		autoplaySpeed: 800,
	});
	$('.owl-carousel').owlCarousel({
		loop: true,
		nav: true,
		autoplay: true,
		autoplayTimeout:800,
	});

	$('.js-preloader').preloadinator({

  animation:'fadeOut',

  animationDuration: 400

});



});

var swiper = new Swiper(".swiper-container", {
      effect: "cards",
      grabCursor: true,
    });