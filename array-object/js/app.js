// var myArray = new Array("one", "two", "three", "four", "five");

// for(var i=0; i<myArray.length; i++){
//     console.log(myArray[i]);
// }

// var triple = new Array("3", "6", "9");
// for(var z=0; z<triple.length; z++){
//     console.log(triple[z])
// }

//어레이 메소드

// var nums = ["1", "2", "3"];
// var chars = ["a", "b", "c", "d"];
// var double = ["2", "4", "6", "8"];
// console.log(double.push("10"))
// console.log(double)
// console.log(double.unshift("f"))
// console.log(double)

// console.log(double.pop())
// console.log(double)
// console.log(double.shift())
// console.log(double)

// var doubleHalf=double.splice(2)
// console.log("doubleHalf : "+doubleHalf)
// console.log("double : " + double)
// console.log("chars.splice(2,2) : " + chars.splice(2,2))
// console.log("chars : " + chars)
// var editChars = chars.splice(2, 0 , "js")
// document.write(editChars)

// var js = ["jquery", "javascript"]
// var editJs = js.splice(2, 0, "typescript", "angular")
// console.log(editJs)

//splice()

//괄호 안의 인수에 따라 일정 구간의 요소를 삭제하고 새로운 요소를 추가하는 메소드

//인수가 하나인 경우

var numbers = [0, 1, 2, 3, 4, 5]
numbers.splice(2)

console.log(numbers)
//인덱스 2부터 (숫자 2) 끝까지 삭제
//남은것은 [0, 1]

//인수가 두 개
//첫 번째 인자는 시작 인덱스, 두 번째 인자는 삭제할 개수
var study=["html", "css", "web", "jquery"];
study.splice(2,1)
//인덱스 2번인 web 부터 1개이기 때문에 web만 삭제
console.log(study)

//인수가 세 개 이상
//첫번째 인자는 시작 인덱스, 두 번째 인자는 삭제할 개수, 다음부터는 추가할 요소
study.splice(2, 0, "web")
console.log(study)

var js = ["jquery", "javascript"];
js.splice(1, 0, "typescript", "angular")
console.log(js)

//slice()
//시작 인덱스부터 끝 인덱스 한 개 전까지
var colors = ["red", "green", "blue", "white", "black"]
//var colors2 = colors.slice(2)
//console.log("colors2 : " + colors2)

console.log(colors.slice(2,4))

// 여행 준비물 점검 프로그램