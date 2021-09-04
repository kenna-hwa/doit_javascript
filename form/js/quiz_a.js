
var price = 24000;
var sideMenu = document.querySelectorAll(".check");
var total = document.querySelector(".total");
total.value = price+"원";

for (var i=0; i<sideMenu.length; i++){
    sideMenu[i].addEventListener("click", function (){
        if(this.checked == true){
            price += parseInt(this.value);
        }else{
            price -= parseInt(this.value);
        }
        total.value = price+"원";
    })
}