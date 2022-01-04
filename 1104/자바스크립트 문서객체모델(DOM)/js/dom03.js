function newRegister() {
    var newP = document.createElement("p"); // 새로운 p태그를 만들기
    var userName = document.querySelector("#userName"); // 입력된 신청자를 변수userName에 대입
    var newText = document.createTextNode(userName.value); // 새로운 텍스트 노드를 만드는 것
    newP.append(newText); // p노드가 상위요소가 되고 text라는 하위 요소를 연결하기

    // 추가될 위치를 설정
    var nameList = document.querySelector("#nameList"); // 추가 될 위치를 변수로 지정
    nameList.insertBefore(newP, nameList.childNodes[0]); // p요소를 #nameList의 자식위치에서 맨 앞에 추가
    userName.value = ""; // 텍스트 필드의 내용을 지우기

    // 삭제버튼 생성
    var delBtn = document.createElement("span"); // 버튼으로 사용 할 태그 추가 <span>x</span>
    var delText = document.createTextNode("X"); // 버튼안에 들어갈 글자 노드 생성
    delBtn.setAttribute("class", "del"); // 버튼에다가 class 선택자 속성을 적용
    delBtn.appendChild(delText); // delText을 delBtn요소의 하위요소로 만들기
    newP.appendChild(delBtn); // delBtn을 p요소의 하위요소로 만들기

    // 삭제버튼기능 적용
    var removeBtns = document.querySelectorAll(".del");
    // removeBtns를 "X"의 전체를 반복한다
    for (var i = 0; i < removeBtns.length; i++) {
        // 각각의 버튼에게 이벤트를 등록하고 있다.
        removeBtns[i].addEventListener('click', function () {
            // #nameList를 의미를 하게 되는 것이다.span태그의 부모가 p이고 p의 부모가 #nameList이기 때문이다.
            if (this.parentNode.parentNode) {
                this.parentNode.parentNode.removeChild(this.parentNode);
                // p 태그 삭제
            }
        });
    }
}
