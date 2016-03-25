$(document).ready(function(){
	$("#fullPage").fullpage({
		anchors:['Page1', 'Page2','Page3','Page4','Page5'],
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
				case 1:hiddendescription1();break;
				case 2:hiddendescription2();break;
				case 3:hiddendescription3();break;
				case 4:hiddendescription4();break;
				case 5:hiddendescription5();break;
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
var span = document.getElementsByTagName('span');
span[0].onclick = function(){
	location.href='#Page2';
};
span[1].onclick = function(){
	location.href='#Page3';
};
span[2].onclick = function(){
	location.href='#Page4';
};
span[3].onclick = function(){
	location.href='#Page5';
};
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
  $('#pOne').fadeOut();
  $('#h1One').fadeOut();
  }
function hiddendescription2(){
  $('#pTwo').fadeOut();
  $('#h1Two').fadeOut();
  }
function hiddendescription3(){
  	$('#pThree').fadeOut();
	$('#h1Three').fadeOut();
  }
function hiddendescription4(){
  	$('#pFour').fadeOut();
	$('#h1Four').fadeOut();
  }
function hiddendescription5(){
	$('#pFive').fadeOut();
	$('#h1Five').fadeOut();
  }
function occurdescription1(){
	$('#h1One').fadeIn(500);
	setTimeout('pOneFadeIn()',200);
  }
function pOneFadeIn(){
	$('#pOne').fadeIn(500);
  }
function occurdescription2(){
	$('#h1Two').fadeIn(500);
	setTimeout('pTwoFadeIn()',200);
  }
function pTwoFadeIn(){
	$('#pTwo').fadeIn(500);
  }
function occurdescription3(){
	$('#h1Three').fadeIn(500);
  setTimeout('pThreeFadeIn()',200);
  }
function pThreeFadeIn(){
	$('#pThree').fadeIn(500);
  }
function occurdescription4(){
	$('#h1Four').fadeIn(500);
	setTimeout('pFourFadeIn()',200);
  }
function pFourFadeIn(){
  $('#pFour').fadeIn(500);
  }
function occurdescription5(){
	$('#h1Five').fadeIn(500);
  setTimeout('pFiveFadeIn()',200);
  }
function pFiveFadeIn(){
  $('#pFive').fadeIn(500);
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