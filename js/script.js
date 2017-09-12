$(function(){
  var direction = "right";
	var carouselList = $("#carousel ul");
    var numberOfTheSlide = 1;
    console.log("t");
	function moveFirstSlideMovingToTheRight(){
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	lastItem.after(firstItem);
	carouselList.css({marginLeft:0});
}
	function moveFirstSlideMovingToTheLeft(){
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	firstItem.before(lastItem);
	carouselList.css({marginLeft:-400});  
}
 
	function changeSlideMovingToTheRight(){
		if(numberOfTheSlide!=5){
			numberOfTheSlide++;
		}
		else{
			numberOfTheSlide=1;
		}
    if(direction == "left") {
      carouselList.animate(500,moveFirstSlideMovingToTheRight);
      direction = "right";
    }
		carouselList.animate({'margin-left':"-400"}, 500,moveFirstSlideMovingToTheRight);
		changeCircle();
	}
  
	function changeSlideMovingToTheLeft(){
		if(direction == "right") { 
       direction = "left";
       carouselList.animate( 500,moveFirstSlideMovingToTheLeft);
     }
     
		changeCircle();

     if(numberOfTheSlide!=0){
			numberOfTheSlide--;
			if(numberOfTheSlide===0){
			numberOfTheSlide=5;
		}
		}
		else{
			numberOfTheSlide=5;
		}
     
		carouselList.animate({'margin-left':"0"}, 500,moveFirstSlideMovingToTheLeft);
		
	}
  
  
	var arrowLeft =$("span.arrowLeft");
	var arrowRight =$("span.arrowRight");
	//var arrowLeft =$("span").first(".arrowRight");
	arrowLeft.css("color","yellow");
	arrowLeft.css("transform","rotate(-90deg)");
	arrowRight.css("color","yellow");
	arrowRight.css("transform","rotate(90deg)");
	arrowLeft.on("click",function(){
		changeSlideMovingToTheLeft();
	});
	arrowRight.on("click",function(){
		changeSlideMovingToTheRight();
	});

	var cirles = $("i");
	var circle1 =$(cirles[0]);
	var circle2 =$(cirles[1]);
	var circle3 =$(cirles[2]);
	var circle4 =$(cirles[3]);
	var circle5 =$(cirles[4]);
	circle1.on("click",function(){

		var x=1-numberOfTheSlide;
		if(numberOfTheSlide===5){
			changeSlideMovingToTheRight();
		}
		else if(x>0){
			for(var i =0;i<x;++i){
				changeSlideMovingToTheRight();
			}
		}
		else if(x<0){
			x=-x;
			for(var j =0;j<x;++j){
				changeSlideMovingToTheLeft();
			}
		}
	});
	circle2.on("click",function(){
		var x=2-numberOfTheSlide;
		if(x>0){
			for(var i =0;i<x;++i){
				changeSlideMovingToTheRight();
			}
		}
		else if(x<0){
			x=-x;
			for(var j =0;j<x;++j){
				changeSlideMovingToTheLeft();
			}
		}
		
	});
	circle3.on("click",function(){
		//numberOfTheSlide=3;
		//changeCircle();
		var x=3-numberOfTheSlide;
		if(x>0){
			for(var i =0;i<x;++i){
				changeSlideMovingToTheRight();
			}
		}
		else if(x<0){
			x=-x;
			for(var j =0;j<x;++j){
				changeSlideMovingToTheLeft();
			}
		}
	});
	circle4.on("click",function(){
		var x=4-numberOfTheSlide;
		if(x>0){
			for(var i =0;i<x;++i){
				changeSlideMovingToTheRight();
			}
		}
		else if(x<0){
			x=-x;
			for(var j =0;j<x;++j){
				changeSlideMovingToTheLeft();
			}
		}
	});
	circle5.on("click",function(){
		var x=5-numberOfTheSlide;
		if(numberOfTheSlide===1){
			changeSlideMovingToTheLeft();
		}
		else if(x>0){
			for(var i =0;i<x;++i){
				changeSlideMovingToTheRight();
			}
		}
		else if(x<0){
			x=-x;
			for(var j =0;j<x;++j){
				changeSlideMovingToTheLeft();
			}
		}
	});
	//circle3.addClass("fa fa-circle fa-2x");

	//if ()

	function changeCircle(){
		if(direction=="right"){
			if(numberOfTheSlide===1) {
				circle1.removeClass("fa fa-circle-o fa-2x");
				circle1.addClass("fa fa-circle fa-2x");
				circle5.removeClass("fa fa-circle fa-2x");
				circle5.addClass("fa fa-circle-o fa-2x");
			}
			else if(numberOfTheSlide===2) {
				circle2.removeClass("fa fa-circle-o fa-2x");
				circle2.addClass("fa fa-circle fa-2x");
				circle1.removeClass("fa fa-circle fa-2x");
				circle1.addClass("fa fa-circle-o fa-2x");
			}
			else if(numberOfTheSlide===3) {
				circle3.removeClass("fa fa-circle-o fa-2x");
				circle3.addClass("fa fa-circle fa-2x");
				circle2.removeClass("fa fa-circle fa-2x");
				circle2.addClass("fa fa-circle-o fa-2x");
			}
			else if(numberOfTheSlide===4) {
				circle4.removeClass("fa fa-circle-o fa-2x");
				circle4.addClass("fa fa-circle fa-2x");
				circle3.removeClass("fa fa-circle fa-2x");
				circle3.addClass("fa fa-circle-o fa-2x");
			}
			else if(numberOfTheSlide===5) {
				circle5.removeClass("fa fa-circle-o fa-2x");
				circle5.addClass("fa fa-circle fa-2x");
				circle4.removeClass("fa fa-circle fa-2x");
				circle4.addClass("fa fa-circle-o fa-2x");
			}
		}
		else{
			if(numberOfTheSlide===1) {
				circle1.removeClass("fa fa-circle fa-2x");
				circle1.addClass("fa fa-circle-o fa-2x");
				circle5.removeClass("fa fa-circle-o fa-2x");
				circle5.addClass("fa fa-circle fa-2x");
			}
			else if(numberOfTheSlide===2) {
				circle2.removeClass("fa fa-circle fa-2x");
				circle2.addClass("fa fa-circle-o fa-2x");
				circle1.removeClass("fa fa-circle-o fa-2x");
				circle1.addClass("fa fa-circle fa-2x");
			}
			else if(numberOfTheSlide===3) {
				circle3.removeClass("fa fa-circle fa-2x");
				circle3.addClass("fa fa-circle-o fa-2x");
				circle2.removeClass("fa fa-circle-o fa-2x");
				circle2.addClass("fa fa-circle fa-2x");
			}
			else if(numberOfTheSlide===4) {
				circle4.removeClass("fa fa-circle fa-2x");
				circle4.addClass("fa fa-circle-o fa-2x");
				circle3.removeClass("fa fa-circle-o fa-2x");
				circle3.addClass("fa fa-circle fa-2x");
			}
			else if(numberOfTheSlide===5) {
				circle5.removeClass("fa fa-circle fa-2x");
				circle5.addClass("fa fa-circle-o fa-2x");
				circle4.removeClass("fa fa-circle-o fa-2x");
				circle4.addClass("fa fa-circle fa-2x");
			}
		}
	}


	//window.setInterval(changeSlideMovingToTheRight, 3000);

	
});
