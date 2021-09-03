var bigPic = document.querySelector("#cup");
var smallPics = document.querySelectorAll(".small");

for(var i=0; i<smallPics.length; i++){
    smallPics[i].addEventListener("click", showBig);
}

function showBig(){
    var newSrc = this.src;
    bigPic.setAttribute("src", newSrc)
    console.log(this.getAttribute("src"));
}