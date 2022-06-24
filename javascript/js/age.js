function calc() {
    var currentYear = 2022;
    var birthYear = prompt("태어난 연도를 입력하세요", "yyyy");
    var age;
    var result;
    if(isNaN(birthYear)) {
        result="<h2>입력값이 없어 나이 알 수 없음</h2>"
    } else {
        age = currentYear - birthYear + 1;
        result = "<h2>당신의 나이는" + age +"세 입니다.</h2>";
    }
    document.querySelector("#result").innerHTML=result;
}