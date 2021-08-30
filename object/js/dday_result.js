
let today_box = document.querySelector(".today_box");
let accent = document.querySelector("#accent");
let date200 = document.querySelector("#date200");
let date365 = document.querySelector("#date365");
let date500 = document.querySelector("#date500");
let date1000 = document.querySelector("#date1000");
let date1100 = document.querySelector("#date1100");


var now = new Date();
var firstDay = new Date("2018-11-23");
var nowTime = now.getTime();
var firstDayTime = firstDay.getTime();

let passedTime = nowTime-firstDayTime;
let passedDay = Math.round(passedTime/(86400000));

//총 날짜 표시

accent.innerText = passedDay+" 일"

//100일을 밀리초로 변환

//함수 생성
function calcDate(days){
    var future = firstDayTime + days*(86400000)
    var someday = new Date(future);
    var year = someday.getFullYear();
    var month = someday.getMonth();
    var date = someday.getDate();
    document.querySelector("#date"+days).innerText=year+"년 "+month+"월 "+date+"일 ";
}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);
calcDate(1000);
calcDate(1100);

