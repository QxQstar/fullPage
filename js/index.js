$(document).ready(function(){
	$("#fullPage").fullpage({
		anchors:['Page0','Page1', 'Page2','Page3','Page4','Page5'],
		navigation: true,
		navigationPosition: 'right',
		//scrollOverflow:true,
		fixedElements: '#nav',
		scrollingSpeed:1000,
		onLeave:function(index,nextindex){
			// if(nextindex == 5||nextindex == 6||nextindex == 1){
			// 	hiddenFixedImg();
			// }
			// if(nextindex == 2||nextindex == 3||nextindex == 4){
			// 	hiddenP4Img();
			// }
			switch(index){
				case 2:hiddendescription1(nextindex);
				break;
				case 3:hiddendescription2(nextindex);break;
				case 4:hiddendescription3(nextindex);break;
				case 5:hiddendescription4(nextindex);break;
				case 6:hiddendescription5(nextindex);break;
			}
		},
		afterLoad:function(link,index){
			// if(index == 5||index == 4){
			// 	occurP4Img();
			// }
			// if(index == 2||index == 3||index == 4){
			// 	occurFixedImg();
			// }
			switch(index){
				case 1: hiddendescription();break;
				case 2: occurdescription1();
				// move('.section1').set('background-position','0px 0px ').end();
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
function hiddendescription1(page){
	$('#pOne').animate({marginTop:'50px',opacity:'0'},1000);
	$('#h1One').animate({marginTop:'50px',opacity:'0'},1000);
}
function hiddendescription2(page){
  $('#pTwo').animate({marginTop:'50px',opacity:'0'},1000);
  $('#h1Two').animate({marginTop:'50px',opacity:'0'},1000);
  }
function hiddendescription3(page){
	$('#pThree').animate({marginTop:'50px',opacity:'0'},1000);
	$('#h1Three').animate({marginTop:'50px',opacity:'0'},1000);
	//如果向下滚图片向上移动
	if(page ==5 ){$('.pic3').animate({top:'-40%',opacity:'0'},100);}
	//如果向上滚图片向下移动
	if(page == 3){$('.pic3').animate({top:'10%'},100);}
  }
function hiddendescription4(page){
	$('#pFour').animate({marginTop:'50px',opacity:'0'},1000);
	$('#h1Four').animate({marginTop:'50px',opacity:'0'},1000);
  }
function hiddendescription5(page){
	$('#pFive').animate({marginTop:'50px',opacity:'0'},1000);
	$('#h1Five').animate({marginTop:'50px',opacity:'0'},1000);
  }
function occurdescription1(){
	$('#h1One').animate({marginTop:'0px',opacity:'1'},200);
	$('body').animate({backgroundColor:'#20839B'},700);
	setTimeout('pOneFadeIn()',200);
  }
function pOneFadeIn(){
	$('#pOne').animate({marginTop:'10px',opacity:'1'},200);
  }
function occurdescription2(){
	$('#h1Two').animate({marginTop:'0px',opacity:'1'},200);
	$('body').animate({backgroundColor:'#3CAF7D'},1000);
	//如果图片向上滚动到第三个页面，第四个页面中的图片回到初始位置
	$('.pic3').animate({top:'50%',opacity:'0'},1000);
	setTimeout('pTwoFadeIn()',200);
  }
function pTwoFadeIn(){
	$('#pTwo').animate({marginTop:'10px',opacity:'1'},200);
  }
function occurdescription3(){
	$('#h1Three').animate({marginTop:'0px',opacity:'1'},200);
	$('body').animate({backgroundColor:'#BF8C11'},1000);
	$('.pic3').animate({ top:'-20%',opacity:'1'},1000);
	setTimeout('pThreeFadeIn()',200);
  }
function pThreeFadeIn(){
	$('#pThree').animate({marginTop:'10px',opacity:'1'},200);
  }
function occurdescription4(){
	$('#h1Four').animate({marginTop:'0px',opacity:'1'},200);
	$('body').animate({backgroundColor:'#C06720'},1000);
	//如果图片向下滚动到第五个页面，第四个页面中的图片回到初始位置
	$('.pic3').animate({top:'50%',opacity:'0'},1000);
	setTimeout('pFourFadeIn()',200);
  }
function pFourFadeIn(){
  $('#pFour').animate({marginTop:'10px',opacity:'1'},200);
  }
function occurdescription5(){
	$('#h1Five').animate({marginTop:'0px',opacity:'1'},200);
	$('body').animate({backgroundColor:'#BF421A'},1000);
	setTimeout('pFiveFadeIn()',200);
  }
function pFiveFadeIn(){
  $('#pFive').animate({marginTop:'10px',opacity:'1'},200);
  }
function hiddendescription(){
	$('#pOne').animate({marginTop:'50px',opacity:'0'},1000);
	$('#h1One').animate({marginTop:'50px',opacity:'0'},1000);
	$('.pic3').animate({top:'50%',opacity:'0'},1000);//第四个页面图片的初始位置
	$('#pTwo').animate({marginTop:'50px',opacity:'0'},1000);
	$('#h1Two').animate({marginTop:'50px',opacity:'0'},1000);
	$('#pThree').animate({marginTop:'50px',opacity:'0'},1000);
	$('#h1Three').animate({marginTop:'50px',opacity:'0'},1000);
	$('#pFour').animate({marginTop:'50px',opacity:'0'},1000);
	$('#h1Four').animate({marginTop:'50px',opacity:'0'},1000);
	$('#pFive').animate({marginTop:'50px',opacity:'0'},1000);
	$('#h1Five').animate({marginTop:'50px',opacity:'0'},1000);
}