  
$(document).ready(function() {	
	NProgress.start();
	$('#loading').show();
	$('.body').hide();	
	$('.olcoder').hide();	
//	$('.paytmTextBox').hide();	
	
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

$(document).ready(function(){
	$('#olcoder').click(function(){		
			$("#myModal .close").click();
			$('.body1').hide("slow");
			$('.nav').hide("slow");
			$('.olcoder').show("slow");
	});
	/*$('#paytmTextBox').click(function(){		
			$("#myModal .close").click();
			$('.body1').hide("slow");
			$('.nav').hide("slow");
			$('.paytmTextBox').show("slow");
	});*/
});

$(document).ready(function(){
	$('.navbar-brand').click(function(){	
		go_to_main();			
	});
		
		
			
	
});
var changeFlag=false;
function go_to_main()
{
	if(changeFlag)
	{
		if (confirm("Are you sure you want to leave your mess here? \n It will be automatically cleaned.")) {
			$('.olcoder').hide("slow");		
			$('.body1').show("slow");	
			$('.nav').show("slow");
			
		} else {
		   changeFlag=false;
		}
	}
	else{
		$('.olcoder').hide("slow");		
		//$('.paytmTextBox').hide("slow");		
			$('.body1').show("slow");	
			$('.nav').show("slow");
	}
		
	
}

function setChangeFlag()
{
	changeFlag = true;
}



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