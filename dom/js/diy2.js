var nameBox = document.querySelector("#userName");
var nameVal = nameBox.value;
var btn = document.querySelector(".btn");
var nameList = document.querySelector("#nameList");

btn.addEventListener("click", changeName)


function changeName(){
    console.log(nameBox.value)
    var newP = document.createElement("p")
    var newName = document.createTextNode(nameBox.value);
    var delBtn = document.createElement("span");
    delBtn.setAttribute("class", "del");
    var delBtnX = document.createTextNode("X");
    newP.appendChild(newName);
    newP.appendChild(delBtn);
    delBtn.appendChild(delBtnX);
    nameList.insertBefore(newP, nameList.childNodes[0])
    
    var delBtns = document.querySelectorAll(".del");
    for(var i=0; i<delBtns.length; i++){
        delBtns[i].addEventListener("click", function(){
            if(this.parentNode.parentNode) 
            this.parentNode.parentNode.removeChild(this.parentNode);
        })
    }
    
}
