$(document).ready(function(){

    var $menu = $("#menu");

        	$(window).resize(function(){
    				if($(this).width() <= 992 && $menu.hasClass("stickytop")){
						$menu.removeClass("stickytop");
					}
			});		   
    
        	$(window).scroll( function(){
	            	if ( $(this).scrollTop() > 150 && $(window).resize().width() > 992){
	                	$menu.addClass("stickytop");
	            	} else if($(this).scrollTop() <= 150 && $menu.hasClass("stickytop")) {
	                	$menu.removeClass("stickytop");
	            	}
	            });
        	
});