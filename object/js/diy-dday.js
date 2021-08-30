
//1 며칠 만났는지 계산하기

//값 받기
let when = prompt("언제 만났나요", "2018-11-23");

//처음만난날
let firstDate = new Date(when);
let nowDate = new Date();

//밀리초 변환
let firstDateTime = firstDate.getTime();
let nowDateTime = nowDate.getTime();

//만난날 계산
let metDateTime = nowDateTime-firstDateTime;
let realMetDate = (time) => Math.round(time/86400000)

document.querySelector("#accent").innerHTML = "만난날은 " +realMetDate(metDateTime)+" 일";


//2 기념일 계산하기

calcDate(100);
calcDate(365);
calcDate(730);
calcDate(1095);
calcDate(1460);

function calcDate(days){
    let future = firstDateTime + (days*86400000);
    let someday = new Date(future);
    let year = someday.getFullYear();
    let month = someday.getMonth();
    let date = someday.getDate();
    document.querySelector("#get"+days).innerText = year+ "년 " + month + "월 " + date + "일" ;
};

