

$(function(){
    //var maxHeight = $('.question').height();
    //var min = $('#floating').height();
    var oHome = $('#ahomepage');
    var oQuestion = $('.question');
    var oabtn = $('.abtn');
    var odrag = $('#drag');
    var oW = $(window).width();
    var oH = $(window).height();

    $('#ahomepage').on('click', function(){
        oHome.fadeOut(300);
        oQuestion.show();
    });

    $('.abtn').on('touchstart',function(){
        oQuestion.fadeOut(300);
        odrag.fadeIn(300);
    });
    //---------------------------------------------------- 拖拽
    var startX = 0;
    var startY = 0;
    var capsWidth = (parseInt($('.caps').css('width'))/100)*oW;
    var capsHeight = (parseInt($('.caps').css('height'))/100)*oH;
    var onoff = true;
    
    //console.log(capsWidth);
    $('.caps').on('touchstart', function(ev){
    	if(!onoff){
    		return ;
    	}
    	var touch = ev.originalEvent.changedTouches[0];
    	var startX = touch.pageX - $('.caps').offset().left;
	    var startY = touch.pageY - $('.caps').offset().top;
    	$('.caps').on('touchmove.drag', function(ev){
    		var touch = ev.originalEvent.changedTouches[0];
	    	var changeX = touch.pageX - startX;
	    	var changeY = touch.pageY - startY;
    		
            if(changeX >= ($(window).width()-capsWidth)){
                changeX= $(window).width()-capsWidth;
            } else if(changeX <= 0){
                 changeX= 0;
            }
            if(changeY>= ($(window).height()-capsHeight)){
                changeY= $(window).height()-capsHeight;
            } else if(changeY <= 0){
                changeY= 0;
            }
    		
	    	$('.caps').css({
	    		left: changeX+'px',
	    		top: changeY+'px'
	    	})
    	})
    	$('.caps').on('touchend.drag', function(ev){
    		$('.caps').off('.drag');
    		var touch = ev.originalEvent.changedTouches[0];
    		var touchEndX = touch.pageX;
	    	var touchEndY = touch.pageY;
    		var endX = 6.25*rem;
    		var endY = 2.375*rem;
    		
    		if(Math.abs(endX-touchEndX)<200 && Math.abs(endY-touchEndY)<200){
    			$('.caps').css({
    				left: endX+'px',
	    			top: endY+'px'
    			});
    			$('.door02').fadeIn(500, function(){ //可乐瓶淡显
    				window.location.href = '360.html';
    			});
    			onoff = false;
    		}
    	});
        //---------------------------------------------------- 拖拽
    });

//自动播放的暂时保留
    //oHome.fadeOut(8000,function(){
    //    oQuestion.fadeIn();
    //})
//自动播放的暂时保留

});
//音乐----------------------------------------------------------------------------------------
showMusic();
function showMusic(){
    var $music = $('#music');
    var $audio1 = $('#audio1');
    var onoff = true;
    $music.on('touchstart',function(){
        if(onoff){
            $(this).attr('class','active');
            $audio1.get(0).play();
        }
        else{
            $(this).attr('class','');
            $audio1.get(0).pause();
        }
        onoff = !onoff;
    });
    $music.trigger('touchstart');
}
//音乐-------------------------------------------------------------------------------------