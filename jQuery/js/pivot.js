$.fn.pivot = function (options) {
    // 1. 변수를 선언
    let $target = $(this);

    let $items = $target.children();
    let $container = $target.wrap('<div></div>').parent();
    let option = {
        width: 500,
        height: 450
    }
    // 2. 옵션 처리
    $.extend(option, options);
    // 3. 스타일 지정
    $target.css({
        width: $items.length*option.width,
        height: option.height,
        position: 'absolute',
    });
    $items.css({
        width: option.width,
        height: option.height,
        float: 'left',

    });
    $container.css({
        width: option.width,
        height: option.height,
        position: 'relative',
        overflow: 'hidden'

    })
    // 4. 이벤트를 연결(플러그인이 동작)
    let originLeft= 0;
    let oldLeft = 0;
    let nowPosition = 0;
    let isDown = false;
    $target.on({
        mousedown: function(event) {
            isDown = true;
            oldLeft = originLeft=event.clientX;
            /*
            oldLeft = event.clientX;
            originLeft = event.clientX;
            */
            event.preventDefault();
        },
        mousemove: function(event) {
            if(isDown) {
                let distance = oldLeft-event.clientX;
                oldLeft = event.clientX;
                // 움직임을 구현
                $target.animate({
                    left:'-=' + distance
                },0);
                $target.stop(true);
            }
            event.preventDefault();
        },
        mouseup: function(event) {
            // 내부 함수
            function movePosition(direction) {
                // 위치를 설정
                let changePosition= nowPosition+direction;
                if(changePosition >= 0 && changePosition < $items.length) {
                    nowPosition= changePosition;
                }
            }
            // 요소의 1/4 이상 드레그 했을 경우 피벗
            if(originLeft-event.clientX > options.width/4) {
                movePosition(+1);
            } else if(originLeft-event.clientX < -options.width/4) {
                movePosition(-1);
            }
            $target.animate({
                left: -nowPosition*option.width
            },500)

            isDown = false;
            event.preventDefault();
        }
    })
}