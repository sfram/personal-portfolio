	  jQuery(document).ready(function($) {
		$(".scroll").click(function(event) {
		event.preventDefault();
		$('html,body').animate( { scrollTop:$(this.hash).offset().top } , 1000);
		} );
		var viewportWidth = $(window).width();
		var viewportHeight = $(window).height();
	  } );