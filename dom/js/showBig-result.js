var bigPic = document.querySelector("#cup");
var smallPics = document.querySelectorAll(".small");

//3개의 smallpics에 일일이 
for(var i=0; i<smallPics.length; i++){
    smallPics[i].onclick=showBig;
}

function showBig(){
    var nowClick = this.src;
    //bigPic.src = nowClick;
    bigPic.setAttribute("src", nowClick);
    console.log(nowClick)
}