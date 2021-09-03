var billingName = document.querySelector("#billingName");
var billingTel = document.querySelector("#billingTel");
var billingAddr = document.querySelector("#billingAddr");
var shippingName = document.querySelector("#shippingName");
var shippingTel = document.querySelector("#shippingTel");
var shippingAddr = document.querySelector("#shippingAddr");



var check = document.querySelector("#shippingInfo");

check.addEventListener("click", function(){


    if(check.checked==true){
       shippingName.value = billingName.value;
       shippingTel.value = billingTel.value;
       shippingAddr.value = billingAddr.value;
    } else{
        shippingName.value="";
        shippingTel.value="";
        shippingAddr.value="";
    }
})  

