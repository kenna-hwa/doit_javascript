//요소 element

let item = document.querySelector("#item")
let btn = document.querySelector(".addBtn")
let itemListBox = document.querySelector("#itemListBox")

//빈 배열
var itemList = new Array();

//클릭 이벤트
btn.addEventListener("click", addItem)



//추가 함수
function addItem(){
    if(item.value != ""){
        itemList.push(item.value);
        item.value = "";
        item.focus();
    }else{
        alert("입력하세요");
    };
    showList();
}

//화면 표시 함수
function showList(){
    var list = "<ul>"
    for(var i=0; i<itemList.length; i++){
        list += "<li>"+itemList[i]+"<span class='close' id="+i+">X</span></li>"
    }
    list += "</ul>"
    itemListBox.innerHTML = list;

    //삭제 함수

    var removeArr = document.querySelectorAll('.close');
    //배열로 생성
    for(var z=0; z<removeArr.length; z++){
        removeArr[z].addEventListener("click", removeList);

    }
}

function removeList(){
    var idx = this.getAttribute("id");
    itemList.splice(idx, 1);
    showList();
}