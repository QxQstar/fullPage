$(document).ready(function(){
	$("#fullPage").fullpage({
		anchors:['Page0','Page1', 'Page2','Page3','Page4','Page5'],
		navigation: true,
		navigationPosition: 'right',
		scrollOverflow:true,
		fixedElements: '#nav',
		onLeave:function(index,nextindex){
			// if(nextindex == 4||nextindex == 5){
			// 	hiddenFixedImg();
			// }
			// if(nextindex == 1||nextindex == 2||nextindex == 3){
			// 	hiddenP4Img();
			// }
			switch(index){
				case 2:hiddendescription1();break;
				case 3:hiddendescription2();break;
				case 4:hiddendescription3();break;
				case 5:hiddendescription4();break;
				case 6:hiddendescription5();break;
			}
		},
		afterLoad:function(link,index){
			// if(index == 4||index == 5){
			// 	occurP4Img();
			// }
			// if(index == 1||index == 2||index == 3){
			// 	occurFixedImg();
			// }
			switch(index){
				case 1: hiddendescription();break;
				case 2: occurdescription1();
				break;
				case 3: occurdescription2();
				//hiddendescription1();
				break;
				case 4: occurdescription3();
				//hiddendescription2();
				break;
				case 5: occurdescription4();
				//hiddendescription3();
				break;
				case 6: occurdescription5();
				//hiddendescription4();
				break;
			}
		},
	});
var frameCartoon1 = new FrameCartoon({
            el: '#section1',
            frameNum: 12,
            framerate: 2,
            url: 'img/page2.png',
            direction: 'horizontal',
            iteration: 1,
            complete: function(count){
            }
        });
        frameCartoon1.start();
});
// function hiddenFixedImg(){
// 	$('#fixedImg').fadeOut(1000);
// }
// function hiddenP4Img(){
// 	$('#page4Img').fadeOut(1000);
// }
// function occurFixedImg(){
// 	$('#fixedImg').fadeIn(200);
// }
// function occurP4Img(){
// 	$('#page4Img').fadeIn(1000);
//   }
function hiddendescription1(){
	$('#pOne').animate({marginTop:'50px',opacity:'0'},1000);
	$('#h1One').animate({marginTop:'50px',opacity:'0'},1000);
}
function hiddendescription2(){
  $('#pTwo').animate({marginTop:'50px',opacity:'0'},1000);
  $('#h1Two').animate({marginTop:'50px',opacity:'0'},1000);
  }
function hiddendescription3(){
	$('#pThree').animate({marginTop:'50px',opacity:'0'},1000);
	$('#h1Three').animate({marginTop:'50px',opacity:'0'},1000);
  }
function hiddendescription4(){
	$('#pFour').animate({marginTop:'50px',opacity:'0'},1000);
	$('#h1Four').animate({marginTop:'50px',opacity:'0'},1000);
  }
function hiddendescription5(){
	$('#pFive').animate({marginTop:'50px',opacity:'0'},1000);
	$('#h1Five').animate({marginTop:'50px',opacity:'0'},1000);
  }
function occurdescription1(){
	$('#h1One').animate({marginTop:'0px',opacity:'1'},500);
	setTimeout('pOneFadeIn()',200);
  }
function pOneFadeIn(){
	$('#pOne').animate({marginTop:'10px',opacity:'1'},500);
  }
function occurdescription2(){
	$('#h1Two').animate({marginTop:'0px',opacity:'1'},500);
	setTimeout('pTwoFadeIn()',200);
  }
function pTwoFadeIn(){
	$('#pTwo').animate({marginTop:'10px',opacity:'1'},500);
  }
function occurdescription3(){
	$('#h1Three').animate({marginTop:'0px',opacity:'1'},500);
	setTimeout('pThreeFadeIn()',200);
  }
function pThreeFadeIn(){
	$('#pThree').animate({marginTop:'10px',opacity:'1'},500);
  }
function occurdescription4(){
	$('#h1Four').animate({marginTop:'0px',opacity:'1'},500);
	setTimeout('pFourFadeIn()',200);
  }
function pFourFadeIn(){
  $('#pFour').animate({marginTop:'10px',opacity:'1'},500);
  }
function occurdescription5(){
	$('#h1Five').animate({marginTop:'0px',opacity:'1'},500);
	setTimeout('pFiveFadeIn()',200);
  }
function pFiveFadeIn(){
  $('#pFive').animate({marginTop:'10px',opacity:'1'},500);
  }
function hiddendescription(){
	$('#pOne').animate({marginTop:'50px',opacity:'0'},1000);
	$('#h1One').animate({marginTop:'50px',opacity:'0'},1000);
	$('#pTwo').animate({marginTop:'50px',opacity:'0'},1000);
	$('#h1Two').animate({marginTop:'50px',opacity:'0'},1000);
	$('#pThree').animate({marginTop:'50px',opacity:'0'},1000);
	$('#h1Three').animate({marginTop:'50px',opacity:'0'},1000);
	$('#pFour').animate({marginTop:'50px',opacity:'0'},1000);
	$('#h1Four').animate({marginTop:'50px',opacity:'0'},1000);
	$('#pFive').animate({marginTop:'50px',opacity:'0'},1000);
	$('#h1Five').animate({marginTop:'50px',opacity:'0'},1000);
}