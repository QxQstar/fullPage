$(document).ready(function(){
	$("#fullPage").fullpage({
		anchors:['Page0','Page1', 'Page2','Page3','Page4','Page5'],
		navigation: false,
		navigationPosition: 'right',
		fixedElements: '#nav,#fixedImg,#page4Img,#page3Img,#page5Img',
		scrollingSpeed:1000,
		onLeave:function(index,nextindex){
			if(nextindex == 1||nextindex == 4){
				hiddenImg(nextindex);
			}
			if(nextindex == 4||nextindex||6){
				hiddenImg(nextindex);
			}
			if(nextindex == 3||nextindex == 5){
				hiddenImg(nextindex);
			}
			if(nextindex == 5){
				hiddenImg(nextindex);
			}
			switch(index){
				case 1:
					movePage1();
					break;
				case 2: 
					hiddendescription(index,nextindex);
					break;
				case 3: 
					hiddendescription(index,nextindex);
					break;
				case 4: 
					hiddendescription(index,nextindex);
					break;
				case 5: 
					hiddendescription(index,nextindex);
					break;
				case 6: 
					hiddendescription(index,nextindex);
					break;
			}
		},
		afterLoad:function(link,index){
			if(index == 5){
				occurImg(index);
			}
			if(index == 2||index == 3){
				occurImg(index);
			}
			if(index == 4){
				occurImg(index);
			}
			if(index == 6){
				occurImg(index);
			}
			switch(index){
				case 1:
					occurSpan();
					break;
				case 2:
					occurdescription(index);
					break;
				case 3:
					occurdescription(index);
					break;
				case 4:
					occurdescription(index);
					break;
				case 5:
					occurdescription(index);
					break;
				case 6:
					occurdescription(index);
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
        var len = span.length;
        for(var i = 0;i < len;i++){
        	span[i].onclick = function(){
        		var page = location.href.split('#');
        		var num = parseInt(page[1].split('')[4])+1;
        		location.href='#Page'+num;
        	}
        }
});
function occurSpan(){
	$('#down1').animate({opacity:'1'},500);
}
function hiddenImg(nextindex){
	switch(nextindex){
		case 1: 
			$('#fixedImg').animate({opacity:'0'},500);
			break;
		case 3: 
			$('#page3Img').animate({opacity:'0'},500);
			break;
		case 4: 
			$('#fixedImg').animate({opacity:'0'},500);
			$('#page4Img').animate({opacity:'0'},500);
			break;
		case 5: 
			$('#page5Img').animate({opacity:'0'},500);
			$('#page3Img').animate({opacity:'0'},500);
			break;
		case 6: 
			$('#page5Img').animate({opacity:'0'},500);
			break;
	}
}
function occurImg(index){
	switch(index){
		case 2: 
		case 3: 
			$('#fixedImg').animate({opacity:'1'},200);
			break;
		case 4: 
			$('#page3Img').animate({opacity:'1'},500);
			break;
		case 5: 
			$('#page4Img').animate({opacity:'1'},500);
			break;
		case 6: 
			$('#page5Img').animate({opacity:'1'},500);
			break;
	}
}
function movePage1(){
	$('.pic11').animate({top:'-10%',opacity:'1'},1000);
	$('.pic12').animate({top:'15%',opacity:'1',},1000);
	$('#down1').animate({opacity:'0'},500);
}
function  hiddendescription(index,page){
	switch(index){
		case 2: 
			$('#pOne').animate({marginTop:'50px',opacity:'0'},1000);
			$('#h1One').animate({marginTop:'50px',opacity:'0'},1000);
			$('#imgOne').animate({opacity:'0'},1000);
				$('.pic21').animate({top:'-5%',opacity:'0.8'},1500);
				$('.pic22').animate({top:'50%',opacity:'1'},1500);
				$('.pic23').animate({top:'50%',opacity:'1'},1500);
 			if(page ==3 ){
 				$('.pic11').animate({top:'-40%',opacity:'0'},500);
 				$('.pic12').animate({top:'10%',opacity:'0'},500);
 			}
 			if(page == 1){
 				$('.pic11').animate({top:'50%',opacity:'0'},500);
 				$('.pic12').animate({top:'50%',opacity:'0'},500);
 			}
 			$('#down2').animate({opacity:'0'},500);
 			break;
	 	case 3: 
	 		$('#pTwo').animate({marginTop:'50px',opacity:'0'},1000);
			$('#h1Two').animate({marginTop:'50px',opacity:'0'},1000);
			$('#imgTwo').animate({opacity:'0'},1000);
			$('.pic31').animate({ top:'0%',opacity:'0.8'},1000);
			$('.pic32').animate({ top:'28%',opacity:'1'},1000);
			if(page == 2){
				$('.pic21').animate({top:'40%',opacity:'0'},500);
				$('.pic22').animate({top:'80%',opacity:'0'},500);
				$('.pic23').animate({top:'80%',opacity:'0'},500);
			}
			if(page == 4){
				$('.pic21').animate({top:'-10%',opacity:'0'},500);
				$('.pic22').animate({top:'20%',opacity:'0'},500);
				$('.pic23').animate({top:'20%',opacity:'0'},500);
			}
			$('#down3').animate({opacity:'0'},500);
   			break;
   		case 4: 
   			$('#pThree').animate({marginTop:'50px',opacity:'0'},1000);
			$('#h1Three').animate({marginTop:'50px',opacity:'0'},1000);
			$('#imgThree').animate({opacity:'0'},1000);
		 	$('.pic41').animate({top:'35%',opacity:'0.6'},1000);
		 	$('.pic42').animate({top:'0%',opacity:'0.6'},1000);
		 	if(page ==5 ){
		 		$('.pic31').animate({top:'0%',opacity:'0'},500);
		 		$('.pic32').animate({top:'40%',opacity:'0'},500);
		 	}
		 	if(page == 3){
		 		$('.pic31').animate({top:'10%',opacity:'0'},500);
		 		$('.pic32').animate({top:'80%',opacity:'0'},500);
		 	}
		 	$('#down4').animate({opacity:'0'},500);
		 	break;
		case 5: 
			$('#pFour').animate({marginTop:'50px',opacity:'0'},1000);
			$('#h1Four').animate({marginTop:'50px',opacity:'0'},1000);
			$('#imgFour').animate({opacity:'0'},1000);
			$('.pic51').animate({top:'0%',opacity:'1'},1000);
			if(page ==4 ){
				$('.pic41').animate({top:'65%',opacity:'0'},500);
				$('.pic42').animate({top:'65%',opacity:'0'},500);
			}
			if(page == 6){
				$('.pic41').animate({top:'5%',opacity:'0'},500);
				$('.pic42').animate({top:'-20%',opacity:'0'},500);
			}
			$('#down5').animate({opacity:'0'},500);
			break;
 		case 6: 
 			$('#pFive').animate({marginTop:'50px',opacity:'0'},1000);
		 	$('#h1Five').animate({marginTop:'50px',opacity:'0'},1000);
		 	$('#imgFive').animate({opacity:'0'},1000);
		 	$('#imgSix').animate({opacity:'0'},1000);
		 	if(page == 5 ){
		 		$('.pic51').animate({top:'65%',opacity:'0'},500);
		 		}
		 	break;
   	}
}
function occurdescription(index){
	switch(index){
		case 2:
			$('#h1One').animate({marginTop:'0px',opacity:'1'},200);
			$('body').animate({backgroundColor:'#8DA8C0'},700);
			$('.pic11').animate({top:'-10%',opacity:'1'},1000);
			$('.pic12').animate({top:'15%',opacity:'1',},1000);
			$('.pic21').animate({top:'60%',opacity:'0'},500);
			$('.pic22').animate({top:'100%',opacity:'0'},500);
			$('.pic23').animate({top:'100%',opacity:'0'},500);
			$('#down2').animate({opacity:'1'},500);
			setTimeout(pFadeIn(index),200);
			break;
		case 3: 
			$('#h1Two').animate({marginTop:'0px',opacity:'1'},200);
			$('body').animate({backgroundColor:'#B8DB7C'},1000);
			$('.pic21').animate({top:'-5%',opacity:'0.8'},1000);
			$('.pic22').animate({top:'50%',opacity:'1'},1000);
			$('.pic23').animate({top:'50%',opacity:'1'},1500);
			$('.pic11').animate({top:'60%',opacity:'0'},1000);
			$('.pic12').animate({top:'18%',opacity:'0'},1000);
			$('.pic31').animate({top:'50%',opacity:'0'},1000);
			$('.pic32').animate({top:'100%',opacity:'0'},1000);
			$('.pic33').animate({top:'100%',opacity:'0'},1000);
			$('#down3').animate({opacity:'1'},500);
			setTimeout(pFadeIn(index),200);
			break;
		case 4: 
			$('#h1Three').animate({marginTop:'0px',opacity:'1'},200);
			$('body').animate({backgroundColor:'#E8E04B'},1000);
			$('.pic21').animate({top:'60%',opacity:'0'},500);
			$('.pic22').animate({top:'100%',opacity:'0'},500);
			$('.pic23').animate({top:'100%',opacity:'0'},500);
			$('.pic31').animate({ top:'0%',opacity:'0.8'},1000);
			$('.pic32').animate({ top:'28%',opacity:'1'},1000);
			$('.pic33').animate({ top:'28%',opacity:'1'},1000);
			$('.pic41').animate({top:'100%',opacity:'0'},500);
			$('.pic42').animate({top:'50%',opacity:'0'},500);
			$('#down4').animate({opacity:'1'},500);
			setTimeout(pFadeIn(index),200);
			break;
		case 5:
			$('#h1Four').animate({marginTop:'0px',opacity:'1'},200);
			$('body').animate({backgroundColor:'#C8AF53'},1000);
			$('.pic31').animate({top:'50%',opacity:'0'},1000);
			$('.pic32').animate({top:'100%',opacity:'0'},1000);
			$('.pic33').animate({top:'100%',opacity:'0'},1000);
			$('.pic41').animate({top:'35%',opacity:'0.6'},1000);
			$('.pic42').animate({top:'0%',opacity:'0.6'},1000);
			$('#down5').animate({opacity:'1'},500);
			setTimeout(pFadeIn(index),200);
			break;
		case 6:
			$('#h1Five').animate({marginTop:'0px',opacity:'1'},200);
			$('body').animate({backgroundColor:'#6CB2B8'},1000);
			$('.pic41').animate({top:'100%',opacity:'0'},500);
			$('.pic42').animate({top:'50%',opacity:'0'},500);
			setTimeout(pFadeIn(index),200);
			break;
	}
}
function pFadeIn(index){
	switch(index){
		case 2:
			$('#pOne').animate({marginTop:'10px',opacity:'1'},200);
			$('#imgOne').animate({opacity:'1'},500);
			break;
		case 3:
			$('#pTwo').animate({marginTop:'10px',opacity:'1'},200);
			$('#imgTwo').animate({opacity:'1'},500);
			break;
		case 4:
			$('#pThree').animate({marginTop:'10px',opacity:'1'},200);
			$('#imgThree').animate({opacity:'1'},500);
			break;
		case 5:
		 	$('#pFour').animate({marginTop:'10px',opacity:'1'},200);
		 	$('#imgFour').animate({opacity:'1'},500);
		 	break;
		case 6:
			$('#pFive').animate({marginTop:'10px',opacity:'1'},200);
			$('#imgFive').animate({opacity:'1'},500);
			$('#imgSix').animate({opacity:'1'},500);
			break;
	}
}