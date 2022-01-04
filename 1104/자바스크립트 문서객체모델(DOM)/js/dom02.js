var mRect = document.querySelector("#rect");

// mouseover 이벤트 처리
mRect.addEventListener("mouseover", function () {
    mRect.style.backgroundColor = "red";
    mRect.style.borderRadius = "50%";
});
// mouseout 이벤트 처리
mRect.addEventListener("mouseout", function () {
    mRect.style.backgroundColor = "";
    mRect.style.borderRadius = "";
});
