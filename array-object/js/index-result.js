//요소 저장
let btn = document.querySelector(".addBtn");
let item = document.querySelector("#item");
let textValue = document.querySelector("#item").value;
let itemList = document.querySelector("#itemList");


//빈 배열
var items = [];

btn.addEventListener("click", addList);

function addList(){

    let textValue = document.querySelector("#item").value
    if(textValue === ""){
        alert("입력하세요")
    } else{
        items.push(textValue)
        document.querySelector("#item").value = "";
        document.querySelector("#item").focus();
    }
    showList();

}

function showList(){

    var list = "<ul>";

    for(let i=0; i<items.length; i++){
        list += "<li>"+items[i]+"<span class='close' id="+i+">X</span>"+"</li>";
    }
    list += "</ul>"
    document.querySelector("#itemList").innerHTML = list;

    var remove = document.querySelectorAll(".close");

    for(var z=0; z<remove.length; z++){
        remove[z].addEventListener("click", removeList)
    }
}


function removeList(){
    var id = this.getAttribute("id");
    items.splice(id, 1);
    showList()
}