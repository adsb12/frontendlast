// $(document).ready(function() { });
// $(function() { }); 같음
$(function () {
    $("#submn_area").css({ height: 0 });

    $("nav ul").mouseenter(function () {
        $("#submn_area").stop().animate({ height: "250px" }, 1000);
    });

    $("#submn_area").mouseleave(function () {
        $("#submn_area").stop().animate({ height: "0px" }, 1000);
    });
    // nav안에 각각의 버튼위에 마우스를 올렸을때 이벤트
    // addClass("on") 미리 선언되었는데 스타일을 제이쿼리 이벤트에 의해서 적용
    // 미리 스타일을 선언할때는 반드시 대상.on 이라고 붙여서 사용한다.

    $("nav a").hover(
        function () {
            $(this).addClass("on");
        },
        function () {
            $(this).removeClass("on")
        });
});