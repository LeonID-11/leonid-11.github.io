$(document).ready(function() {


	$(".toggle-menu").click(function(){
			$(this).toggleClass("on");
			$(".head .head-menu").slideToggle();
	});

	//Скрол к регистрации
	$("#btn").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
	$(".sect-third #btn").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

	//Фиксированое меню
	var $menu = $("#menu");
        $(window).scroll(function(){
            if ( $(this).scrollTop() > 150 && $menu.hasClass("default")){
                $menu.removeClass("default").addClass("fixed") ;
            } else if($(this).scrollTop() <= 150 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });

   

	//E-mail Ajax Send
	$("form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};


});
