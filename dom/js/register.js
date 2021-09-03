var name=document.querySelector("#name");
var btn=document.querySelector("#btn");
var list=document.querySelector(".list");

//배열 선언
var arr = [];

//버튼 클릭하면 배열에 값추가
btn.addEventListener("click", newRegister)

//값추가 함수
// function addVal(){
    
//     var name=document.querySelector("#name");
//     var nameVal = document.querySelector("#name").value
//     if(!nameVal){
//         alert("입력하세요")
//     }else{
//     arr.push(nameVal);
//     nameVal="";
//     name.focus();
//     }
// showList()
// return false;
// }

//반복문으로 화면에 표시
// function showList(){
//     var ul = "<ul>";
//     for(var i=0; i<arr.length; i++){
//         var li = ul += "<li>"+arr[i]+"</li>"
//         list.innerHTML = li;
//     }
//     ul += "</ul>"
// }

function newRegister(){
    var newP = document.createElement("p")
    var name = document.querySelector("#name");
    var newText = document.createTextNode(name.value);
    newP.appendChild(newText);
    var nameList = document.querySelector(".list");
    nameList.insertBefore(newP, nameList.childNodes[0])
    //nameList.appendChild(newP)
    var newSpan = document.createElement("span")
    var xText = document.createTextNode("X");
    newSpan.setAttribute("class", "del")
    newSpan.appendChild(xText);
    newP.appendChild(newSpan)
    name.value="";
    var del = document.querySelectorAll(".del")

    for(var i=0; i<del.length; i++){
        del[i].addEventListener("click", function(){
            if(this.parentNode.parentNode) 
            this.parentNode.parentNode.removeChild(this.parentNode);
        });
    }
}