$(function () {
    $("#top_menu li").click(function (e) {
        e.preventDefault();
        var tg = $(this).index();

        var sec = $("#contents > div").eq(tg);
        var tt = sec.offset().top;

        $("html, body").stop().animate({ scrollTop: tt });
    });

    $(window).scroll(function () {
        var sct = $(window).scrollTop();

        $("#contents > div").each(function () {
            var tg = $(this);   // div1, div2, div3
            var i = tg.index();
            if (tg.offset().top <= sct) {
                $("#top_menu li").removeClass("on");
                $("#top_menu li").eq(i).addClass("on");
            }
        });
    });
    $("#contents li").click(function (e) {
        e.preventDefault();
        var tg1 = $(this).index();

        var sec1 = $("#contents > div").eq(tg1);
        var tt1 = sec1.offset().top;

        $("html, body").stop().animate({ scrollTop: tt1 });
    });

    $(window).scroll(function () {
        var sct1 = $(window).scrollTop();

        $("#contents > div").each(function () {
            var tg1 = $(this);
            var i = tg1.index();
            if (tg1.offset().top <= sct1) {
                $("#q_mn li").removeClass("on");
                $("#q_mn li").eq(i).addClass("on");
            }
        });
    });

    $(window).scroll(function () {
        var sct = $(window).scrollTop() + 200;
        $("#q_mn").stop().animate({ top: sct + "px" }, 500);
    });
});