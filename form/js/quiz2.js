var radius = document.querySelector("#radius");
var round = document.querySelector("#round");
var area = document.querySelector("#area");
var startbtn = document.querySelector("#start");


//반지름 값 가져오기
startbtn.addEventListener("click", function(){
    var radiousVal = radius.value;
    console.log(radiousVal)
    console.log(Math.PI)
    round.value = (radius.value*2)*Math.PI
    area.value = (radius.value)*(radius.value)*Math.PI

    // round.value = (radius.value*2)*3.14
    // area.value = (radius.value)*(radius.value)*3.14

})