
$(function(){
    //加载页面--------------------------------------------------------------------------
    function loadingFn(){
        var num = 0;
        var arry = [
            "img/background01.jpg",
            "img/beibao.png",
            "img/beibao01.jpg",
            "img/bottlecaps.png",
            "img/btn.png",
            "img/button1.png",
            "img/button2.png",
            "img/button3.png",
            "img/chuxuguan.jpg",
            "img/chuxuguan02.jpg",
            "img/cloud1.png",
            "img/cloud2.png",
            "img/door01.png",
            "img/door02.png",
            "img/dragbackground02.jpg",
            "img/drawbackground.jpg",
            "img/gift.png",
            "img/kekoukele.jpg",
            "img/kele03.jpg",
            "img/lid1886-1.png",
            "img/lid1886-2.png",
            "img/lid1892-1.png",
            "img/lid1892-2.png",
            "img/lid1915-1.png",
            "img/lid1915-2.png",
            "img/lid1928-1.png",
            "img/lid1928-2.png",
            "img/lid1930-1.png",
            "img/lid1930-2.png",
            "img/lid1979-1.png",
            "img/lid1979-2.png",
            "img/lid1999-1.png",
            "img/lid1999-2.png",
            "img/lid2015-1.png",
            "img/lid2015-2.png",
            "img/longbackground.jpg",
            "img/meishishu.jpg",
            "img/meishishu04.jpg",
            "img/shounadai.jpg",
            "img/shounadai05.jpg",
            "img/taili.jpg",
            "img/taili06.jpg",
            "img/tanchuchuang.png",
            "img/yaoqinghan.jpg",
            "img/yaoqinghan07.jpg",
            "img/yujin.jpg",
            "img/yujin08.jpg",
            "img/jiazai2.png",
            "img/halou.mp3",
            "img/hand01.png",
            "img/hand.png",
            "img/snow1.png",
            "img/snow2.png",
            "img/snow3.png",
            "img/cake.png",
            "img/caketext.png"
            //"static/images/a0.png",
            //"static/images/b0.png",
            //"static/images/errorBg.png",
            //"static/images/mobile_b.jpg",
            //"static/images/mobile_d.jpg",
            //"static/images/mobile_f.jpg",
            //"static/images/mobile_l.jpg",
            //"static/images/mobile_r.jpg",
            //"static/images/mobile_u.jpg",
            //"static/images/startBg.png",
            //"static/images/okBg.png",
            //"static/images/okButton.png",
            //"static/images/startClose.png"
        ];

        for(var i=0;i<arry.length;i++){

            var imgObj = new Image();
            imgObj.src = arry[i];
            imgObj.onload = function(){

                num++;
                var s = parseInt(num/arry.length*100);
                s = s + '%';
                $('.loadingText').html(s);

                if(num == arry.length){
                    $('.spinner').remove();
					$("#ahomepage").addClass("animation");//加载的时候执行第一页的四个动画
                    $('.loadingBg').fadeOut(500,function(){
                        $('.loadingBg').remove();
                        $('#audio1').get(0).play();
                    })
                }
            };
            imgObj.onerror = function(){
                $('.loadingText').html('100%');
                $('.spinner').remove();
				$("#ahomepage").addClass("animation");//加载的时候执行第一页的四个动画
                $('.loadingBg').fadeOut(500,function(){
                    $('.loadingBg').remove();
                    $('#audio1').get(0).play();
                })
            }
        }
    }
    loadingFn();
});