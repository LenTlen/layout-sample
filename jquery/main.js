	
$(document).ready(function(){
    $(".navigation").on("click","a", function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
 
            top = $(id).offset().top - 80;
        $('body,html').animate({scrollTop: top}, 900);
    });
});	

$(window).scroll(function() {
  if ($(this).scrollTop()>200) {
    $('#back-top').fadeIn();
  }
  else {
    $('#back-top').fadeOut();
  }
});

    $("#back-top").click( function(e){
        e.preventDefault();
        $('body,html').animate({scrollTop: 0}, 600);
    });

	$(function() {
		$(".menu-burger").click(function(){
			$(".menu-mobile, .body-shadow").addClass("is-active");
		});
	});
	$(function() {
		$(".currencies__switch a").click(function(e){
			e.preventDefault();
			$(".currencies__switch .active").removeClass("active");
			$(this).addClass("active");
		});
	});	
	$(function() {
		$(".language a").click(function(e){
			e.preventDefault();
			$(".language .active").removeClass("active");
			$(this).addClass("active");
		});
	});	
	$(function() {
		$(".language-mobile a").click(function(e){
			e.preventDefault();
			$(".language-mobile .active").removeClass("active");
			$(this).addClass("active");
		});
	});	
	$(function() {
		$(".body-shadow").click(function(e){
			e.preventDefault();
			$(".menu-mobile.is-active, .body-shadow.is-active").removeClass("is-active");
		});
	});
