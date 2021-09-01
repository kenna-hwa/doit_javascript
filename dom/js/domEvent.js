
// var viewBtn = document.querySelector("#view");
// var detail=document.querySelector("#detail");

// viewBtn.addEventListener("click", show)

// window.onload=detail.style.display="none"

// function show(){
//     if(detail.style.display == "none"){
//     detail.style.display="block"
//     viewBtn.textContent="상세 설명 닫기"
//     }else{
//         detail.style.display="none"
//         viewBtn.textContent="상세 설명 보기"
//     }
// }

//isOpen이라는 기본값을 먼저 설정
var isOpen = false;
var view = document.querySelector("#view");

view.addEventListener("click", function(){
    if(isOpen==false){
        //상세정보가 감춰져있을떄
        document.querySelector("#detail").style.display = "block";
        view.textContent="상세 설명 닫기";
        isOpen = true;

    }else{
        //상세정보가 열려있을때
        document.querySelector("#detail").style.display="none";
        view.textContent="상세 설명 보기";
        isOpen = false;
    }
})