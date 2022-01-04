$(function () {
    $("#top_menu li").click(function (event) {
        event.preventDefault();
        var tg = $(this).index(); // 클릭한 자신의 인덱스 값을 추출

        // $("#top_menu li").removeClass("on");
        // $(this).addClass("on");

        var section = $("#contents > div").eq(tg);
        // 찾아가고자 하는 대상들 중 현재 인덱스값과 대칭되는 대상을 선택
        var tt = section.offset().top;
        // 목적지가 되는 대상의 기준을 top를 기준으로 함

        $("html, body").stop().animate({ scrollTop: tt });
        // 화면이동이므로 현재 html이나 웹브라우저에 보이는 부분을 대상으로 스크롤의 세로값을
        // 선택된 대상의 기준값으로 스크롤을 움직이게 한다

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
});