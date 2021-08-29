/*
//마무리 실습 1

//var one = parseInt(prompt("첫번째 숫자"))
//var two = parseInt(prompt("두번째 숫자"))
var result = add(one, two);

document.write("<h1>"+result+"</h1>")

function add(x,y){
    let sum= x+y;
    return sum;
 }

 //마무리 실습 2

 var showDetail = () => {
    let desc = document.querySelector(".desc");
    desc.style.display="block"
 }
 let show = document.querySelector(".show");
 show.addEventListener("click", showDetail)
 
 var hideDetail = () => {
    let desc = document.querySelector(".desc");
    desc.style.display="none"
}

let close = document.querySelector(".close");
close.addEventListener("click", hideDetail)

*/

//1
function sumMulti(x, y){
    if(x == y){
        return x*y;
    }else{
        return x+y
    }
}

console.log(sumMulti(5, 10))
console.log(sumMulti(10, 10))

//2
var one=parseInt(prompt("숫자를 입력하세요"))
var two=parseInt(prompt("숫자를 입력하세요"))

if(one>two){
    alert(one+"이"+two+"보다 큽니다.")
}else if(two>one){
    alert(two+"이"+one+"보다 큽니다.")
}else if(one==two){
    alert(one+"이"+two+"와 같습니다.")
}
