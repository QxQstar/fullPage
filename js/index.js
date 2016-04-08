$(document).ready(function(){
	$("#fullPage").fullpage({
		anchors:['Page0','Page1', 'Page2','Page3','Page4','Page5'],
		navigation: false,
		navigationPosition: 'right',
		fixedElements: '#nav,#fixedImg,#page4Img,#page3Img,#page5Img',
		scrollingSpeed:1000,
		onLeave:function(index,nextindex){
			// if(nextindex == 5||nextindex == 6||nextindex == 1||nextindex == 4){
			// 	hiddenFixedImg();
			// }
			// if(nextindex == 1||nextindex == 2||nextindex == 3||nextindex == 4||nextindex||6){
			// 	hiddenP4Img();
			// }
			// if(nextindex == 1||nextindex == 2||nextindex == 3||nextindex == 5||nextindex == 6){
			// 	hiddenP3Img();
			// }
			// if(nextindex == 1||nextindex == 2||nextindex == 3||nextindex == 4||nextindex == 5){
			// 	hiddenP5Img();
			// }
			if(nextindex == 1||nextindex == 4){
				hiddenFixedImg();
			}
			if(nextindex == 4||nextindex||6){
				hiddenP4Img();
			}
			if(nextindex == 3||nextindex == 5){
				hiddenP3Img();
			}
			if(nextindex == 5){
				hiddenP5Img();
			}
			switch(index){
				case 1:movePage1();break;
				case 2:hiddendescription1(nextindex);
				break;
				case 3:hiddendescription2(nextindex);break;
				case 4:hiddendescription3(nextindex);break;
				case 5:hiddendescription4(nextindex);break;
				case 6:hiddendescription5(nextindex);break;
			}
		},
		afterLoad:function(link,index){
			if(index == 5){
				occurP4Img();
			}
			if(index == 2||index == 3){
				occurFixedImg();
			}
			if(index == 4){
				occurP3Img();
			}
			if(index == 6){
				occurP5Img();
			}
			switch(index){
				case 1: occurSpan();break;
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
            framerate: 4,
            url: 'img/page2.png',
            direction: 'horizontal',
            iteration: 1,
            complete: function(count){
          	if (count == 1) {
          		setTimeout(function(){$('#img').animate({marginTop:'0',opacity:'1'},1000);},500);	
            	};
            }
        });
        frameCartoon1.start();
        var span = document.getElementsByTagName('span');
        span[0].onclick = function(){
        	location.href='#Page1';
        };
        span[1].onclick = function(){
        	location.href='#Page2';
        };
        span[2].onclick = function(){
        	location.href='#Page3';
        };
        span[3].onclick = function(){
        	location.href='#Page4';
        };
        span[4].onclick = function(){
        	location.href='#Page5';
        };

});
function occurSpan(){
	$('#down1').animate({opacity:'1'},500);
}
function hiddenFixedImg(){
	//$('#fixedImg').fadeOut(500);
	$('#fixedImg').animate({opacity:'0'},500);
}
function hiddenP3Img(){
	//$('#page4Img').fadeOut(1000);
	$('#page3Img').animate({opacity:'0'},500);
}
function hiddenP4Img(){
	//$('#page4Img').fadeOut(1000);
	$('#page4Img').animate({opacity:'0'},500);
}
function hiddenP5Img(){
	//$('#page4Img').fadeOut(1000);
	$('#page5Img').animate({opacity:'0'},500);
}
function occurFixedImg(){
	//$('#fixedImg').fadeIn(200);
	$('#fixedImg').animate({opacity:'1'},200);
}
function occurP4Img(){
	//$('#page4Img').fadeIn(500);
	$('#page4Img').animate({opacity:'1'},500);
  }
function occurP5Img(){
	//$('#page4Img').fadeIn(500);
	$('#page5Img').animate({opacity:'1'},500);
    }
  function occurP3Img(){
	//$('#page4Img').fadeIn(500);
	$('#page3Img').animate({opacity:'1'},500);
    }
function movePage1(){
	//$('#fixedImg').animate({opacity:'1'},1000);
	$('.pic11').animate({top:'-10%',opacity:'1'},1000);
	$('.pic12').animate({top:'15%',opacity:'1',},1000);
	$('#down1').animate({opacity:'0'},500);
}
function hiddendescription1(page){
	$('#pOne').animate({marginTop:'50px',opacity:'0'},1000);
	$('#h1One').animate({marginTop:'50px',opacity:'0'},1000);
	$('#imgOne').animate({opacity:'0'},1000);
	$('.pic21').animate({top:'-5%',opacity:'0.8'},1500);
	$('.pic22').animate({top:'50%',opacity:'1'},1500);
	$('.pic23').animate({top:'50%',opacity:'1'},1500);
	//如果向下滚图片向上移动
	if(page ==3 ){$('.pic11').animate({top:'-40%',opacity:'0'},500);}
	if(page == 3){$('.pic12').animate({top:'10%',opacity:'0'},500);}
	//如果向上滚图片向下移动
	if(page == 1){$('.pic11').animate({top:'50%',opacity:'0'},500);}
	if(page == 1){$('.pic12').animate({top:'50%',opacity:'0'},500);}
	$('#down2').animate({opacity:'0'},500);
}
function hiddendescription2(page){
  $('#pTwo').animate({marginTop:'50px',opacity:'0'},1000);
  $('#h1Two').animate({marginTop:'50px',opacity:'0'},1000);
  $('#imgTwo').animate({opacity:'0'},1000);
  $('.pic31').animate({ top:'0%',opacity:'0.8'},1000);
  $('.pic32').animate({ top:'28%',opacity:'1'},1000);
 // $('.pic33').animate({ top:'38%',opacity:'1'},1000);
  if(page == 2){$('.pic21').animate({top:'40%',opacity:'0'},500);}
  if(page == 4){$('.pic21').animate({top:'-10%',opacity:'0'},500);}
  if(page == 2){$('.pic22').animate({top:'80%',opacity:'0'},500);}
  if(page == 4){$('.pic22').animate({top:'20%',opacity:'0'},500);}
  if(page == 2){$('.pic23').animate({top:'80%',opacity:'0'},500);}
  if(page == 4){$('.pic23').animate({top:'20%',opacity:'0'},500);}
  $('#down3').animate({opacity:'0'},500);
  }
function hiddendescription3(page){
	$('#pThree').animate({marginTop:'50px',opacity:'0'},1000);
	$('#h1Three').animate({marginTop:'50px',opacity:'0'},1000);
	$('#imgThree').animate({opacity:'0'},1000);
	$('.pic41').animate({top:'35%',opacity:'0.6'},1000);
	$('.pic42').animate({top:'0%',opacity:'0.6'},1000);
	
	//如果向下滚图片向上移动
	if(page ==5 ){$('.pic31').animate({top:'0%',opacity:'0'},500);}
	//如果向上滚图片向下移动
	if(page == 3){$('.pic31').animate({top:'10%',opacity:'0'},500);}
	if(page ==5 ){$('.pic32').animate({top:'40%',opacity:'0'},500);}
	if(page == 3){$('.pic32').animate({top:'80%',opacity:'0'},500);}
	$('#down4').animate({opacity:'0'},500);
	// if(page ==5 ){$('.pic33').animate({top:'10%',opacity:'0'},500);}
	// if(page == 3){$('.pic33').animate({top:'90%',opacity:'0'},500);}
  }
function hiddendescription4(page){
	$('#pFour').animate({marginTop:'50px',opacity:'0'},1000);
	$('#h1Four').animate({marginTop:'50px',opacity:'0'},1000);
	$('#imgFour').animate({opacity:'0'},1000);
	$('.pic51').animate({top:'0%',opacity:'1'},1000);
	if(page ==4 ){$('.pic41').animate({top:'65%',opacity:'0'},500);}
	if(page == 6){$('.pic41').animate({top:'5%',opacity:'0'},500);}
	if(page ==4 ){$('.pic42').animate({top:'65%',opacity:'0'},500);}
	if(page == 6){$('.pic42').animate({top:'-20%',opacity:'0'},500);}
	$('#down5').animate({opacity:'0'},500);
  }
function hiddendescription5(page){
	$('#pFive').animate({marginTop:'50px',opacity:'0'},1000);
	$('#h1Five').animate({marginTop:'50px',opacity:'0'},1000);
	$('#imgFive').animate({opacity:'0'},1000);
	if(page == 5 ){$('.pic51').animate({top:'65%',opacity:'0'},500);}

	//$('.pic11').animate({top:'50%',opacity:'1'},1000);
  }
function occurdescription1(){
	$('#h1One').animate({marginTop:'0px',opacity:'1'},200);
	$('body').animate({backgroundColor:'#8DA8C0'},700);
	$('.pic11').animate({top:'-10%',opacity:'1'},1000);
	$('.pic12').animate({top:'15%',opacity:'1',},1000);
	$('.pic21').animate({top:'60%',opacity:'0'},500);
	$('.pic22').animate({top:'100%',opacity:'0'},500);
	$('.pic23').animate({top:'100%',opacity:'0'},500);
	$('#down2').animate({opacity:'1'},500);
	setTimeout('pOneFadeIn()',200);
  }
function pOneFadeIn(){
	$('#pOne').animate({marginTop:'10px',opacity:'1'},200);
	$('#imgOne').animate({opacity:'1'},500);
  }
function occurdescription2(){
	$('#h1Two').animate({marginTop:'0px',opacity:'1'},200);
	$('body').animate({backgroundColor:'#B8DB7C'},1000);
	$('.pic21').animate({top:'-5%',opacity:'0.8'},1000);
	$('.pic22').animate({top:'50%',opacity:'1'},1000);
	$('.pic23').animate({top:'50%',opacity:'1'},1500);
	$('.pic11').animate({top:'60%',opacity:'0'},1000);
	$('.pic12').animate({top:'18%',opacity:'0'},1000);
	//如果图片向上滚动到第三个页面，第四个页面中的图片回到初始位置
	$('.pic31').animate({top:'50%',opacity:'0'},1000);
	$('.pic32').animate({top:'100%',opacity:'0'},1000);
	$('.pic33').animate({top:'100%',opacity:'0'},1000);
	$('#down3').animate({opacity:'1'},500);
	setTimeout('pTwoFadeIn()',200);
  }
function pTwoFadeIn(){
	$('#pTwo').animate({marginTop:'10px',opacity:'1'},200);
	$('#imgTwo').animate({opacity:'1'},500);
  }
function occurdescription3(){
	$('#h1Three').animate({marginTop:'0px',opacity:'1'},200);
	$('body').animate({backgroundColor:'#E8E04B'},1000);
	// $('.pic31').animate({ top:'-30%',opacity:'1'},1000);
	$('.pic21').animate({top:'60%',opacity:'0'},500);
	$('.pic22').animate({top:'100%',opacity:'0'},500);
	$('.pic23').animate({top:'100%',opacity:'0'},500);
	$('.pic31').animate({ top:'0%',opacity:'0.8'},1000);
	$('.pic32').animate({ top:'28%',opacity:'1'},1000);
	$('.pic33').animate({ top:'28%',opacity:'1'},1000);
	$('.pic41').animate({top:'100%',opacity:'0'},500);
	$('.pic42').animate({top:'50%',opacity:'0'},500);
	$('#down4').animate({opacity:'1'},500);
	setTimeout('pThreeFadeIn()',200);
  }
function pThreeFadeIn(){
	$('#pThree').animate({marginTop:'10px',opacity:'1'},200);
	$('#imgThree').animate({opacity:'1'},500);
  }
function occurdescription4(){
	$('#h1Four').animate({marginTop:'0px',opacity:'1'},200);
	$('body').animate({backgroundColor:'#C8AF53'},1000);
	//如果图片向下滚动到第五个页面，第四个页面中的图片回到初始位置
	$('.pic31').animate({top:'50%',opacity:'0'},1000);
	$('.pic32').animate({top:'100%',opacity:'0'},1000);
	$('.pic33').animate({top:'100%',opacity:'0'},1000);
	$('.pic41').animate({top:'35%',opacity:'0.6'},1000);
	$('.pic42').animate({top:'0%',opacity:'0.6'},1000);
	$('#down5').animate({opacity:'1'},500);
	setTimeout('pFourFadeIn()',200);
  }
function pFourFadeIn(){
  $('#pFour').animate({marginTop:'10px',opacity:'1'},200);
  $('#imgFour').animate({opacity:'1'},500);
  }
function occurdescription5(){
	$('#h1Five').animate({marginTop:'0px',opacity:'1'},200);
	$('body').animate({backgroundColor:'#6CB2B8'},1000);
	$('.pic41').animate({top:'100%',opacity:'0'},500);
	$('.pic42').animate({top:'50%',opacity:'0'},500);
	setTimeout('pFiveFadeIn()',200);
  }
function pFiveFadeIn(){
  $('#pFive').animate({marginTop:'10px',opacity:'1'},200);
  $('#imgFive').animate({opacity:'1'},500);
  }
//function hiddendescription(){
	// $('#fixedImg').animate({opacity:'0'},1);
	// $('#page3Img').animate({opacity:'0'},1);
	// $('#page4Img').animate({opacity:'0'},1);
	// $('#page5Img').animate({opacity:'0'},1);
	// $('#imgOne').animate({opacity:'0'},1);
	// $('#imgTwo').animate({opacity:'0'},1);
	// $('#imgThree').animate({opacity:'0'},1);
	// $('#imgFour').animate({opacity:'0'},1);
	// $('#imgFive').animate({opacity:'0'},1);
	// $('#pOne').animate({marginTop:'50px',opacity:'0'},1000);
	// $('#h1One').animate({marginTop:'50px',opacity:'0'},1000);
	// $('#pTwo').animate({marginTop:'50px',opacity:'0'},1000);
	// $('#h1Two').animate({marginTop:'50px',opacity:'0'},1000);
	// $('#pThree').animate({marginTop:'50px',opacity:'0'},1000);
	// $('#h1Three').animate({marginTop:'50px',opacity:'0'},1000);
	// $('#pFour').animate({marginTop:'50px',opacity:'0'},1000);
	// $('#h1Four').animate({marginTop:'50px',opacity:'0'},1000);
	// $('#pFive').animate({marginTop:'50px',opacity:'0'},1000);
	// $('#h1Five').animate({marginTop:'50px',opacity:'0'},1000);
	// $('.pic11').animate({top:'60%',left:'75%',opacity:'0'},1);
	// $('.pic12').animate({top:'50%',left:'0%',opacity:'0'},1);
	// $('.pic21').animate({top:'60%',left:'65%',opacity:'0'},1);
	// $('.pic22').animate({top:'100%',left:'75%',opacity:'0'},1);
	// $('.pic23').animate({top:'100%',left:'0',opacity:'0'},1);
	// $('.pic31').animate({top:'50%',left:'62%',opacity:'0'},1);第四个页面图片的初始位置
	// $('.pic32').animate({top:'100%',left:'0%',opacity:'0'},1);
	// $('.pic33').animate({top:'100%',left:'0',opacity:'0'},1);
	// $('.pic41').animate({top:'100%',left:'-5%',opacity:'0'},1);
	// $('.pic42').animate({top:'50%',left:'80%',opacity:'0'},1);
	// $('.pic51').animate({top:'70%',left:'0',opacity:'0'},1);
//}