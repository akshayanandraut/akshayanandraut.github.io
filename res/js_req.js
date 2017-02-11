  
$(document).ready(function() {	
	NProgress.start();
	$('#loading').show();
	$('.body').hide();	
	
});
$(window).on('load',function() {	
	
	$('#loading').hide();
	$('.body').show().animate({opacity:1}, 1000);
	NProgress.done();
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});

$(document).ready(function() {
    $('#projects_table').DataTable();
} );


$(window).scroll(function () {
    var scrollh = $(this).scrollTop();
    if (scrollh == 0) {
        $(".navbar").css({
            'height':'75px',
			'padding-top':'10px',
            'padding-bottom':'10px',			
        });
    } else {
        $(".navbar").css({
            'height':'35px', 
			'padding-top':'0px',
            'padding-bottom':'4px',			
        });	
    }
});




//PAYTM TEXTBOX  START
/*
$(document).ready(function (){

	$('.inputText').focusout(function(){
		if($(this).val() != ""){	
			$('.username').addClass("anotherClass");		
		}
		else
			$('.username').removeClass("anotherClass");
	});
	
	$('.inputPass').focusout(function(){
		if($(this).val() != ""){	
			$('.password').addClass("anotherClass");		
		}
		else
			$('.password').removeClass("anotherClass");
	});
});
*/
// PAYTM TEXTBOX END