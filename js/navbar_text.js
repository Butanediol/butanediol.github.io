$(document).ready(function(){
	$(".navbar").css("box-shadow" , "0px 0px 0px black");
	$(".navbar").css("-webkit-box-shadow" , "0px 0px 0px black");
	$(".navbar").css("--navbar-text-color" , "#ffffff");

  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();

  	if ($(".navbar-col-show").css("background-color") == "rgba(255, 255, 255, 0.8)") {
  		$(".navbar").css("--navbar-text-color" , "#858585");
  		return
  	}

  	if (scroll < 50) {
  		$(".navbar").css("--navbar-text-color" , "#ffffff");
  	} else {
  		if ($(".navbar").css("background-color") == "rgba(255, 255, 255, 0.8)"){
  			$(".navbar").css("--navbar-text-color" , "#858585");
  		}
  	}
  })
})