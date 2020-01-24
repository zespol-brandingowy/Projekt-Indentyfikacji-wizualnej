(function ($) {
 "use strict";
	var s = $("#sticker");
	var pos = s.position();					   
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos > pos.top) {
		s.addClass("stick");
		} else {
			s.removeClass("stick");
		}
	});

  jQuery('nav#dropdown').meanmenu();

 new WOW().init();

   	$( "#product-range" ).slider({
   		range: true,
   		min: 0,
   		max: 10000,
   		values: [ 0, 10000 ],
   		slide: function( event, ui ) {
   		$( "#amount" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
   		}
   	});

   	$( "#amount" ).val( "" + $( "#product-range" ).slider( "values", 0 ) +
   	" - " + $( "#product-range" ).slider( "values", 1 ) );
   	$('#card_form').on('click', function(){

   		$('.credit-card-form').slideToggle();

	   	}); 		 

	$.scrollUp({
      scrollText: '<i class="fa fa-angle-up"></i>',
      easingType: 'linear',
      scrollSpeed: 900,
      animation: 'fade'
  });	

  $(".agents-carousel-area").owlCarousel({
    autoPlay: true, 
    slideSpeed:2000,
    pagination:false,
    navigation:true,    
    items : 3,
    navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3],
    itemsTablet: [767,1],
    itemsMobile : [479,1],
  });

  $('.about-counter').counterUp({
  delay: 50,
  time: 3000
  });

    $(".client-logo").owlCarousel({
      autoPlay: false,
      slideSpeed:2000,
      pagination:false,
      navigation:true,
        items : 5,
      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        itemsDesktop : [1199,5],
      itemsDesktopSmall : [980,3],
      itemsTablet: [768,2],
      itemsMobile : [479,1],
    });
      $(".total-property-area").owlCarousel({
        autoPlay: true,
        slideSpeed:2000,
        pagination:true,
        navigation:false,
          items : 1,
        navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
          itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsMobile : [479,1],
      });  

      $('#image-gallery').lightSlider({
        gallery:true,
        item:1,
        thumbItem:4,
        slideMargin: 2,
        speed:500,
        auto:true,
        loop:true,
        onSliderLoad: function() {
        $('#image-gallery').removeClass('cS-hidden');
        }  
      });
     $('#Container').mixItUp(); 
})(jQuery);