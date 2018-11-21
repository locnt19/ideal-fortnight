// 1.home-banner
$(document).ready(function () {
	$(window).on('scroll', function(){
		if($(window).scrollTop()) {
			$('header').addClass('black');
		}
		else {
			$('header').removeClass('black');
		}
	});
	$('.banner .owl-carousel').owlCarousel({
		nav: true,
		dots: false,
		items: 1,
		loop: true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive: {
			768 : {
				nav : false,
				dots : true
			}
		}
	});
});
