$(function () {
    // 네비게이션 서브메뉴
    $(".submn").css({ display: "none" })

    $(".main_nav > ul > li").hover(
        function () {
            $(this).find(".submn").slideDown(1000);
            $(".main_nav > ul > li").removeClass("on");
            $(this).addClass("on");
        },
        function () {
            $(".submn").each(function () {
                if ($(this).css({ display: "block" })) {
                    $(this).hide();
                }
            });
            $(".main_nav > ul > li").removeClass("on");
        });

    // 인기제품 슬라이드
    var current = 0;
    var setIntervalId;
    $(".btns > li").click(function () {
        var i = $(this).index();
        move(i);
        $(".btns > li").removeClass();
        $(this).addClass("on");
    });

    $("#con_t").on({
        mouseover: function () {
            clearInterval(setIntervalId);
        },
        mouseout: function () {
            timer();
        }
    });

    function timer() {
        setIntervalId = setInterval(function () {
            var n = current + 1;
            if (n == 3) {
                n = 0;
            }
            move(n);
        }, 3000);
    };

    timer();
    function move(i) {
        var currentEl = $(".popular_pro_img > ul > li").eq(current);
        var nextEl = $(".popular_pro_img > ul > li").eq(i);

        currentEl.css({ left: "40%" }).animate({ left: "-140%" });
        nextEl.css({ left: "140%" }).animate({ left: "40%" });

        current = i;
    }

    // 새 제품 배너
    $(".con_L > ul > li > a").click(function (e) {
        e.preventDefault();
        var path = $(this).attr("href");
        // console.log(path);

        if (path != $("#largeImg img").attr('src')) {
            $("#largeImg img").attr({ src: path });
            $("#largeImg img").css({ opacity: 0 }).animate({ opacity: 1 });
        }
    });
});