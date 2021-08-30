var now = new Date(); //오늘 날짜
var metDay = new Date("2018-11-23"); //만난 날짜
var toNow = now.getTime();
var toMetDay = metDay.getTime();
var passedTime = toNow-toMetDay;
var passedDay = Math.round(passedTime/86400000);

let today_box = document.querySelector(".today_box");
today_box.innerHTML = "Today : "+now.getFullYear()+" / "+(now.getMonth()+1)+" / "+now.getDate();
let accent = document.querySelector(".accent");
accent.innerHTML = passedDay+"일";

var day100 = toMetDay+100*86400000;
var future100 = new Date(day100);
let date100 = document.querySelector("#date100");
date100.innerHTML = future100.getFullYear() +" / "+ (future100.getMonth()+1) +" / "+ future100.getDate();


var day200 = toMetDay+200*86400000;
var future200 = new Date(day200);
let date200 = document.querySelector("#date200");
date200.innerHTML = future200.getFullYear() +" / "+ (future200.getMonth()+1) +" / "+ future200.getDate();

var day365 = toMetDay+365*86400000;
var future365 = new Date(day365);
let date365 = document.querySelector("#date365");
date365.innerHTML = future365.getFullYear() +" / "+ (future365.getMonth()+1) +" / "+ future365.getDate();

var day500 = toMetDay+500*86400000;
var future500 = new Date(day500);
let date500 = document.querySelector("#date500");
date500.innerHTML = future500.getFullYear() +" / "+ (future500.getMonth()+1) +" / "+ future500.getDate()

var day1000 = toMetDay+1000*86400000;
var future1000 = new Date(day1000);
let date1000 = document.querySelector("#date1000");
date1000.innerHTML = future1000.getFullYear() +" / "+ (future1000.getMonth()+1) +" / "+ future1000.getDate()

var day1100 = toMetDay+1100*86400000;
var future1100 = new Date(day1100);
let date1100 = document.querySelector("#date1100");
date1100.innerHTML = future1100.getFullYear() +" / "+ (future1100.getMonth()+1) +" / "+ future1100.getDate()