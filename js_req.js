  
$(document).ready(function() {	
	NProgress.start();
	$('#loading').show();
	$('.body').hide();	
	$('.olcoder').hide();	
	
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
});

$(document).ready(function(){
	$('.navbar-brand').click(function(){	
		$('.olcoder').hide("slow");		
		$('.body1').show("slow");	
		$('.nav').show("slow");
			
	});
});
