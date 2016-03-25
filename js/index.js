$(document).ready(function(){
	$("#fullPage").fullpage({
		anchors:['Page1', 'Page2','Page3','Page4','Page5'],
		navigation: true,
		navigationPosition: 'right',
		scrollOverflow:true,
		fixedElements: '#nav, #fixedImg',
		onLeave:function(index,nextindex){
			if(nextindex == 4||nextindex == 5){
				hiddenFixedImg();
			}
			if(nextindex == 1||nextindex == 2||nextindex == 3){
				hiddenP4Img();
			}
			switch(index){
				case 1:hiddendescription1();break;
				case 2:hiddendescription2();break;
				case 3:hiddendescription3();break;
				case 4:hiddendescription4();break;
				case 5:hiddendescription5();break;
			}
		},
		afterLoad:function(link,index){
			if(index == 4||index == 5){
				occurP4Img();
			}
			if(index == 1||index == 2||index == 3){
				occurFixedImg();
			}
			switch(index){
				case 1: occurdescription1();hiddendescription();break;
				case 2: occurdescription2();
				//hiddendescription1();
				break;
				case 3: occurdescription3();
				//hiddendescription2();
				break;
				case 4: occurdescription4();
				//hiddendescription3();
				break;
				case 5: occurdescription5();
				//hiddendescription4();
				break;
			}
		},
	});
});
function hiddenFixedImg(){
	$('#fixedImg').fadeOut(1000);
}
function hiddenP4Img(){
	$('#page4Img').fadeOut(1000);
}
function occurFixedImg(){
	$('#fixedImg').fadeIn(200);
}
function occurP4Img(){
	$('#page4Img').fadeIn(1000);
  }
function hiddendescription1(){
  $('#pOne').fadeOut(1000);
  setTimeout('h1OneFadeOut()',100);
  }
function h1OneFadeOut(){
	$('#h1One').fadeOut(1000);
  }
function hiddendescription2(){
  $('#pTwo').fadeOut(1000);
	setTimeout('h1TwoFadeOut()',100);
  }
function h1TwoFadeOut(){
  $('#h1Two').fadeOut(1000);
  }
function hiddendescription3(){
  $('#pThree').fadeOut(1000);
  setTimeout('h1ThreeFadeOut()',100);
  }
function h1ThreeFadeOut(){
	$('#h1Three').fadeOut(1000);
  }
function hiddendescription4(){
  $('#pFour').fadeOut(1000);
  setTimeout('h1FourFadeOut()',100);
  }
function h1FourFadeOut(){
	$('#h1Four').fadeOut(1000);
  }
function hiddendescription5(){
	$('#pFive').fadeOut(1000);
	setTimeout('h1FiveFadeOut()',100);
 }
function h1FiveFadeOut(){
	$('#h1Five').fadeOut(1000);
  }
function occurdescription1(){
	$('#h1One').fadeIn(1000);
	setTimeout('pOneFadeIn()',100);
  }
function pOneFadeIn(){
	$('#pOne').fadeIn(1000);
  }
function occurdescription2(){
	$('#h1Two').fadeIn(1000);
	setTimeout('pTwoFadeIn()',100);
  }
function pTwoFadeIn(){
	$('#pTwo').fadeIn(1000);
  }
function occurdescription3(){
	$('#h1Three').fadeIn(1000);
  setTimeout('pThreeFadeIn()',100);
  }
function pThreeFadeIn(){
	$('#pThree').fadeIn(1000);
  }
function occurdescription4(){
	$('#h1Four').fadeIn(1000);
	setTimeout('pFourFadeIn()',100);
  }
function pFourFadeIn(){
  $('#pFour').fadeIn(1000);
  }
function occurdescription5(){
	$('#h1Five').fadeIn(1000);
  setTimeout('pFiveFadeIn()',100);
  }
function pFiveFadeIn(){
  $('#pFive').fadeIn(1000);
  }
function hiddendescription(){
	$('#h1Two').fadeOut();
	$('#h1Three').fadeOut();
	$('#h1Four').fadeOut();
	$('#h1Five').fadeOut();
	$('#pTwo').fadeOut();
	$('#pThree').fadeOut();
	$('#pFour').fadeOut();
	$('#pFive').fadeOut();
}