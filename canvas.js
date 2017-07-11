/**
 * Created by cnaisin06 on 2017/7/6.
 */

    $(".scan").on("mouseover", function () {
        $(".scan_content").css({
            "display":"block"
        });
    })
   $(".scan").on("mouseout", function () {
        $(".scan_content").css({
            "display":"none"
        });
    })

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    speed:1000,
    mousewheelControl: true,
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
        switch (swiper.activeIndex) {
            case 0:
                $(".title img:nth-child(1)").attr("src","images/logo(白).png")
                $(".title img:nth-child(2)").attr("src","images/爱信公益（白）.png")
                setTimeout(function(){
                    $(".one_banner_five").css({
                        animation:'rotate 3s linear 0s infinite'
                    })

                },5000);
//
                break;
            case 1:
                $(".title img:nth-child(1)").attr("src","images/logo(红).png")
                $(".title img:nth-child(2)").attr("src","images/爱信公益（红）.png")
                setTimeout(function(){
                    $(".two_banner").css({
                        animation:'jump 4s ease 0s infinite'
                    })
                    $(".two_banner_one").css({
                        animation:'jumps 4s ease 0s infinite'
                    })
                    $(".two_banner_two ").css({
                        animation:'jumps 4s ease 0s infinite'
                    })
                    $(".two_banner_three").css({
                        animation:'jumps 4s ease 0s infinite'
                    })
                    $(".two_banner_four").css({
                        animation:'jumps 4s ease 0s infinite'
                    })

                },4000);
                break;
            case 2:
                setTimeout(function(){
                    $(".three_banner_three").css({
                        animation:'updown 3s linear 0s infinite'
                    })
                    $(".three_banner_four").css({
                        animation:'downup 3s linear 0s infinite'
                    })

                },3500);
                break;
                window.addEventListener('load', init(60));
            case 3:
                setTimeout(function(){
                    $(".four_banner").css({
                        animation:'jump 4s ease 0s infinite'
                    })
                    $(".four_banner_one").css({
                        animation:'jumps 4s ease 0s infinite'
                    })
                    $(".four_banner_two").css({
                        animation:'jumps 4s ease 0s infinite'
                    })
                    $(".four_banner_three").css({
                        animation:'jumps 4s ease 0s infinite'
                    })
                },4500);
                break;
            case 4:
                setTimeout(function(){
                    $(".five_banner_three").css({
                        animation:'updown 3s linear 0s infinite'
                    })
                    $(".five_banner_four").css({
                        animation:'downup 3s linear 0s infinite'
                    })

                },4000);
                break;

        }
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画

        switch (swiper.activeIndex) {
            case 0:
                setTimeout(function(){
                    $(".one_banner_five").css({
                        animation:'rotate 3s linear 0s infinite'
                    })
                },5000);
                break;
            case 1:
                $(".title").css({
                    "backgroundColor":""
                })
                setTimeout(function(){
                    $(".two_banner").css({
                        animation:'jump 4s ease 0s infinite'
                    })
                    $(".two_banner_one").css({
                        animation:'jumps 4s ease 0s infinite'
                    })
                    $(".two_banner_two ").css({
                        animation:'jumps 4s ease 0s infinite'
                    })
                    $(".two_banner_three").css({
                        animation:'jumps 4s ease 0s infinite'
                    })
                    $(".two_banner_four").css({
                        animation:'jumps 4s ease 0s infinite'
                    })
                },4000);
                break;
            case 2:
                setTimeout(function(){
                    $(".three_banner_three").css({
                        animation:'updown 3s linear 0s infinite'
                    })
                    $(".three_banner_four").css({
                        animation:'downup 3s linear 0s infinite'
                    })
                },3500);
                break;
            case 3:
                setTimeout(function(){
                    $(".four_banner").css({
                        animation:'jump 4s ease 0s infinite'
                    })
                    $(".four_banner_one").css({
                        animation:'jumps 4s ease 0s infinite'
                    })
                    $(".four_banner_two").css({
                        animation:'jumps 4s ease 0s infinite'
                    })
                    $(".four_banner_three").css({
                        animation:'jumps 4s ease 0s infinite'
                    })
                },4500);
                break;
            case 4:
                setTimeout(function(){
                    $(".five_banner_three").css({
                        animation:'updown 3s linear 0s infinite'
                    })
                    $(".five_banner_four").css({
                        animation:'downup 3s linear 0s infinite'
                    })

                },4000);
                break;
        }

    }

});