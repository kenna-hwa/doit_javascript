//1

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
    }else{
        shippingName.value = "";
        shippingTel.value = "";
        shippingAddr.value = "";
    }

})


//2

var userId = document.querySelector("#user-id");
var userPw = document.querySelector("#user-pw1");
var userPw2 = document.querySelector("#user-pw2");

userId.addEventListener("change", checkId)
userPw.addEventListener("change", checkPw)
userId.addEventListener("change", comparePw)


function checkId(){
    if(userId.value.length<4||userId.value.length>15)
    alert("아이디는 4자리 이상 15자리 미만으로 입력해주세요.")
    userId.select();
}

function checkPw(){
    if(userPw.value.length>8)
    alert("비밀번호는 8자리 미만이여야 합니다.")
    userPw.select()
}
function comparePw(){
    if(userPw.value != userPw2.value)
    alert("비밀번호가 같지 않습니다.")
    userPw2.select()
}