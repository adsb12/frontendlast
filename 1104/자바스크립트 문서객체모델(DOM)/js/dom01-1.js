var bigPic = document.querySelector("#cup");    // 큰이미지를 찾아옴
var smallPic = document.querySelectorAll(".small"); // 작은이미지를 찾아옴
// var cup = document.querySelector("#cup");
var isOpen = false;

for (var i = 0; i < smallPic.length; i++) {
    // 작은 이미지 노드리스트들을 클릭을 하면 changePic()가 호출이 된다.
    // 대상.addEventListener("이벤트", 함수명);
    smallPic[i].addEventListener("click", changePic);
}

function changePic() {
    // click 이벤트가 발생한 대상(this)의 src속성을 newPic에 저장
    var newPic = this.src;
    // newPic의 값을 큰 이미지의 src속성으로 대입이 되어 큰 이미지로 나타남
    bigPic.setAttribute('src', newPic);
}

var view = document.querySelector("#view");

view.addEventListener("click", function () {

    if (isOpen == false) {
        // 상세 보기
        document.querySelector("#detail").style.display = "block";
        view.innerHTML = "상세 설명 닫기";
        isOpen = true;
    } else {
        // 상세 숨기기
        document.querySelector("#detail").style.display = "none";
        view.innerHTML = "상세 설명 보기";
        isOpen = false;
    }
})

