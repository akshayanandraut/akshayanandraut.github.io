// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(document).ready(function() {	
	//$('.body').hide();	
});
$(window).on('load',function() {	
	//$('.body').show().animate({opacity:1}, 100);	
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
            'padding-bottom':'10px'
        });
    } else {
        $(".navbar").css({
            'height':'35px', 
			'padding-top':'0px',
            'padding-bottom':'4px'
        });	
    }
});

/*Followers and repos*/

var numberOfGitRepos=0;
var numberOfGitFollowers=0;
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.responseText);
        //document.getElementById('totalGitRepos').innerHTML = json.length;
        numberOfGitRepos = json.length;
    }
};
xhttp.open("GET", "https://api.github.com/users/akshayanandraut/repos", false);
xhttp.send();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.responseText);
        //document.getElementById('totalGitFollowers').innerHTML = "1";
        var followers="";
        numberOfGitFollowers = json.length;
        for(var i =0; i<json.length && i<10; i++){
            document.getElementById('totalGitFollowers').innerHTML = i;
            var p = new XMLHttpRequest();
            p.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var json1 = JSON.parse(this.responseText);
                    if(json1.name != null)
                        followers +=json1.name;
                    else
                        followers +=json1.login;
                }
            };
            p.open("GET",json[i].url , false);
            p.send();
            if(i==json.length-2)
                followers+= " and ";
            else if(i==10 || i==json.length-1)
                followers += "";
            else
                followers += ", ";
        }
        if(json.length>10)
            followers+="...";
        document.getElementById('followersTooptip').title = followers;
        document.getElementById('totalGitFollowers').innerHTML = json.length;
    }
};
xhttp.open("GET", "https://api.github.com/users/akshayanandraut/followers", true);
xhttp.send();

var i1 = 1;
theLabel1 = document.getElementById("totalGitFollowers");
var interval1 = setInterval(function(){
        if (i1 == numberOfGitFollowers) clearInterval(interval1);
        theLabel1.innerHTML = i1;
        i1++;
    },
    100);

var j1 = 1;
theLabel2 = document.getElementById("totalGitRepos");
var interval2 = setInterval(function(){
        if (j1 == numberOfGitRepos) clearInterval(interval2);
        theLabel2.innerHTML = j1;
        j1++;
    },
    100);

/*Followers and repos end*/


