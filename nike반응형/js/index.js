$(function() {
    let windowWidth;
    $(window).resize(function () {
        windowWidth = $(this).width();
        if(windowWidth <= 1024) {
            $('.main-menu').off('mouseenter');  // mouseover
            $('.main-menu').off('mouseleave');    // mouseout
            $('nav').prependTo('.h-top');
            $('.jordan-logo').find('img').attr('src', 'images/AIR-JORDAN-LOGO-b.svg');
        } else {
            $('nav').appendTo('header');
            $('.jordan-logo').find('img').attr('src', 'images/AIR-JORDAN-LOGO.svg');
            $('.main-menu').on({
                mouseenter: function () {
                    $('.sub-menu, .sub-bg').stop().show();
                },
                mouseleave: function () {
                    $('.sub-menu, .sub-bg').stop().hide();
                }
            });
        }
    });  // resize event end
    $(window).trigger('resize');  // 강제 이벤트 발생
    if(windowWidth <= 480) {
        $('.main-01 img').attr('src','images/M-01-mobile.png');
        $('.main-02 img').attr('src','images/M-02-mobile.png');
        $('.main-03 img').attr('src','images/M-03-mobile.png');
    } else {
        $('.main-01 img').attr('src', 'images/M-01.png');
        $('.main-02 img').attr('src', 'images/M-02.png');
        $('.main-03 img').attr('src', 'images/M-03.png');
    }
    // 스와이퍼 플러그인
    let swiperSlide = new Swiper('.Featured-slide', {
        // (아무 속성을 주지 않으면 모바일 기준으로 한다.)
        // 모바일 기준
        slidesPerview:'auto',
        spaceBetwen:8,
        pagination: {
            el: '.f-paper',
            clickable: true,
            type: 'fraction'  // bullets, progressbar
        }, 
        navigation: {
            nextEl:'.f-next',
            prevEl:'.f-prev'
        },
        // 반응형(화면 넓이에 따라 레이아웃 변경)
        breakpoints: {
            1025: {
                slidesPerView:3,
                spaceBetween:24
            },
            480: {
                slidesPerView:'auto',
                spaceBetween:16
            }
       }
    });  // 스와이퍼 플러그인 end

    // 햄버거 메뉴 클릭
    $('.menu-btn').click(function (event) {
        event.stopPropagation();
        $('.index-wrap').css('filter', 'blur(10px)');
        $('body, html').css({
            height: '100vh',
            overflow: 'hidden'
        });
        $('.menu-area').show();
        $('.h-top').animate({
            right: '0%'
        },'fast')
    });

    $('.menu-area').mouseup(function (event) {
        console.log($(this).has(event.target).length);
        console.log($(this).has(event.target));
        if($(this).has(event.target).length === 0) {
                $('.index-wrap').css('filter','blur(0px)');
                $('body, html').css({
                    height: 'auto',
                    overflow: 'visible'
                });
                $('.h-top').animate({
                    right:'-100%'
                },'fast', function() {
                    $('.menu-area').hide();
                });
            }
        });
        
        $('.main-menu>li>a').click(function() {
            $(this).siblings('.sub-menu').animate({
                left:'0'
            },'fast');
        });
        $('.all>a').click(function() {
            $(this).parents('.sub-menu').animate({
                left: '150%'
            }, 'fast');
        });
});