document.querySelectorAll(".accent")[1].backgroundColor="yellow"

var newP = document.createElement("p");
var newText = document.createTextNode("주문이 완료되었습니다.")
newP.appendChild(newText);
document.body.appendChild(newP)
// var attr = document.createAttribute("class")
// attr.value = "accent"|
// newP.setAttributeNode(attr)
newP.setAttribute("class", "accent")

// newP.setAttribute("id", "doit_js")
var easys = document.createAttribute("id")
easys.value="doit_js";
newP.setAttributeNode(easys)