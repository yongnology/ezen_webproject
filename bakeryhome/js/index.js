function partpopup() {
    window.open("popup.html","창의 이름","width=460, height=455");
}
function info() {
    alert("DD베이커리 홈페이지를 찾아주셔서 고맙습니다. \n종로에 4호점이 오픈되었습니다. \n많이 이용해주세요.");
}

/* 원래는 index에서 선언을 안했기 때문에 팝업이 안나오지만,
   setTimeout 를 사용하여 원하는 시간에 호출이 가능하다. */
setTimeout(function () {
    info();
}, 3000);
