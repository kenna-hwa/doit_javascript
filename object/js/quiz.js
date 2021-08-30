var member1 = {
    name: "홍길동",
    id: 123,
    age: 25,
    addr : "서울",
}
document.write("<h1>"+member1.name+"</h1>");
document.write("<ul><li>아이디 : "+member1.id+"</li>");
document.write("<li>나이 : "+member1.age+"</li>");
document.write("<li>주소 : "+member1.addr+"</li></ul>");

var r;
r=prompt("반지름 값을 입력하세요", 10)

function Circle(py){
    this.txt = function(py){
    document.write("반지름이" +py + "cm일 때"+"<br>")
    }
    this.round = document.write("원의 둘레 : 약 "+ Math.round(2*py*3.14)+"cm <br>");
    this.area = document.write("원의 넓이 : 약 "+ Math.round(py*py*3.14)+"cm");
}

new Circle(r);

