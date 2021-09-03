
var headingOne = document.querySelector("h1");
var param = document.querySelector("p");
var headingTwo = document.querySelector("h2");
var uList = document.querySelector("ul");
var check = document.querySelectorAll(".check")
var list = document.querySelectorAll(".list")

param.addEventListener("click", function(){
    param.style.backgroundColor="#ccc";
    param.style.color="blue";
    param.style.fontSize="20px";
})


for(var i=0; i<check.length; i++){
    check[i].addEventListener("click", function(){
        if(this.parentNode.style.color=="")
        this.parentNode.style.color="#ccc"
    })
}