$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 50) {
	  	if (localStorage.getItem("Fluid_Color_Scheme") == "dark") {
	  		$(".navbar").css("--navbar-text-color" , "#ffffff");
	  		// console.log("Dark");
	  	} else {
	  		$(".navbar").css("--navbar-text-color" , "#858585");
	  		// console.log("Light");
	  	}
	  }
 
	  else{
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