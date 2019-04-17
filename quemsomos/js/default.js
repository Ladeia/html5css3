jQuery(document).ready(function($) {
	$('#slides').superslides({
	    slide_speed: 800,
	    pagination: true,
	    hashchange: true,
	    scrollable: true
	});

	 document.ontouchmove = function(e) {
    	e.preventDefault();
	  };
	  
	  $('#slides').hammer().on('swipeleft', function() {
	    $(this).superslides('animate', 'next');
	  });

	  $('#slides').hammer().on('swiperight', function() {
	    $(this).superslides('animate', 'prev');
	  });

});