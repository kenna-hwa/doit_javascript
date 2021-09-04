//표시될 토탈값
var total = document.querySelector(".total")
total.value = 24000;

//check 배열 만들기
var sideMenu = document.querySelectorAll(".check");
//var check = [];

for (var i = 0; i < sideMenu.length; i++) {
    //check.push(document.forms[1].elements[i]);

    sideMenu[i].addEventListener("click", function() {
            if(this.checked == true){
                var totalNum = Number(total.value);
                var checkNum = Number(this.value);
                total.value = totalNum + checkNum;
            } else{
                var totalNum = Number(total.value);
                var checkNum = Number(this.value);
                if(totalNum == 0){return false}
                total.value = totalNum - checkNum;
            }
        }
    ) 

}

// check[0].onchange = function() {
//     if(check[0].checked == true){
//         var totalNum = Number(total.value);
//         var checkNum = Number(check[0].value);
//         total.value = totalNum + checkNum;
//     } else{
//         var totalNum = Number(total.value);
//         var checkNum = Number(check[0].value);
//         if(totalNum == 0){return false}
//         total.value = totalNum - checkNum;
//     }
// }
// check[1].onchange = function() {
//     if(check[1].checked == true){
//         var totalNum = Number(total.value);
//         var checkNum = Number(check[1].value);
//         total.value = totalNum + checkNum;
//     } else{
//         var totalNum = Number(total.value);
//         var checkNum = Number(check[1].value);
//         if(totalNum == 0){return false}
//         total.value = totalNum - checkNum;
//     }
// }
// check[2].onchange = function() {
//     if(check[2].checked == true){
//         var totalNum = Number(total.value);
//         var checkNum = Number(check[2].value);
//         total.value = totalNum + checkNum;
//     } else{
//         var totalNum = Number(total.value);
//         var checkNum = Number(check[2].value);
//         if(totalNum == 0){return false}
//         total.value = totalNum - checkNum;
//     }
// }
// check[3].onchange = function() {
//     if(check[3].checked == true){
//         var totalNum = Number(total.value);
//         var checkNum = Number(check[3].value);
//         total.value = totalNum + checkNum;
//     } else{
//         var totalNum = Number(total.value);
//         var checkNum = Number(check[3].value);
//         if(totalNum == 0){return false}
//         total.value = totalNum - checkNum;
//     }
// }
// check[4].onchange = function() {
//     if(check[4].checked == true){
//         var totalNum = Number(total.value);
//         var checkNum = Number(check[4].value);
//         total.value = totalNum + checkNum;
//     } else{
//         var totalNum = Number(total.value);
//         var checkNum = Number(check[4].value);
//         if(totalNum == 0){return false}
//         total.value = totalNum - checkNum;
//     }
// }
// check[5].onchange = function() {
//     if(check[5].checked == true){
//         var totalNum = Number(total.value);
//         var checkNum = Number(check[5].value);
//         total.value = totalNum + checkNum;
//     } else{
//         var totalNum = Number(total.value);
//         var checkNum = Number(check[5].value);
//         if(totalNum == 0){return false}
//         total.value = totalNum - checkNum;
//     }
// }




