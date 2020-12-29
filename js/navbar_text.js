$(document).ready(function(){
	$(".navbar").css("box-shadow" , "0px 0px 0px black");
	$(".navbar").css("-webkit-box-shadow" , "0px 0px 0px black");

  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 50) {
	  	$(".navbar").css("box-shadow" , "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)");
	  	$(".navbar").css("-webkit-box-shadow" , "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)");


	  	if (localStorage.getItem("Fluid_Color_Scheme") == "dark") {
	  		$(".navbar").css("--navbar-text-color" , "#ffffff");
	  		// console.log("Dark");
	  	} else {
	  		$(".navbar").css("--navbar-text-color" , "#858585");
	  		// console.log("Light");
	  	}
	  }
 
	  else{
	  	$(".navbar").css("box-shadow" , "0px 0px 0px black");
	  	$(".navbar").css("-webkit-box-shadow" , "0px 0px 0px black");

	  	if (localStorage.getItem("Fluid_Color_Scheme") == "dark") {
	  		$(".navbar").css("--navbar-text-color" , "#ffffff");
	  		// console.log("Dark");
	  	} else {
	  		$(".navbar").css("--navbar-text-color" , "#ffffff");  	
	  		// console.log("Light");
	  	}
	  }
  })
})