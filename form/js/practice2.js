var userId = document.querySelector("#user-id");
var userPw = document.querySelector("#user-pw1");
var userPw2 = document.querySelector("#user-pw2");


userId.addEventListener("change", function(){
    if(userId.value.length<4||userId.value.length>15){
        alert("아이디는 4자리 이상, 15자리 이하여야 합니다.")
    userId.focus();
    return false;
    }
    return true;
})

userPw.addEventListener("change", function(){
    if(userPw.value.length<8){
        alert("비밀번호는 8자리 이상이어야 합니다.")
        userPw.focus();
    return false;
    }
    return true;
})

userPw2.addEventListener("change", function(){
    if(userPw.value != userPw2.value){
        alert("비밀번호가 서로 다릅니다. 다시 입력하세요")
        userPw2.focus();
    return false;
    }
    return true;
})