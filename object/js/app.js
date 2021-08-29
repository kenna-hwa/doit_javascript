
/*
console.log(window)
// window.open("https://www.naver.com")

var now = new Date();
document.write(now.toLocaleDateString())


//무작위의 수 만들기

let click=document.querySelector(".btn")
click.addEventListener("click", ()=>{
    let wrap=document.querySelector(".wrap")
    let randomNum = `<p>${Math.floor(Math.random()*10)}</p>`
    wrap.innerHTML=randomNum
})
var book = {
    title:"자바스크립트",
    author:"고쌤",
    pages:500,
    price:15000,
    info: function(){
        alert(this.title+"책의 분량은"+this.pages+"입니다.");
    }
}
book.field="IT"
document.write(book.field)
//객체 리터럴

let toyRobot={
    productId:"123-12",
    name: "Robot",
    price: "25,000",
    madeIn: "Korea",
    stock:10,

    showStock:function(){
        document.querySelector(".wrap").innerHTML= this.productId+"은 "+ this.stock + "개 남았습니다.";
    }
}

toyRobot.showStock();


//생성자 함수
function Book(author, pages, price, title){
    this.author = author;
    this.pages = pages;
    this.price = price;
    this.title = title;
}

let hong = new Book("홍길동", "200", "30,000", "홍길동전")
document.write(hong.author)
*/
function Book(title, author, volume, price) {
    this.title = title;
    this.author = author;
    this.volume = volume;
    this.price = price;
}

let oneBook = new Book("자바스크립트", "두잇", "ver1", "14,000")
let twobook = new Book("파이썬", "돈두", "ver2", "11,000")
let threebook = new Book("마크업", "돈잇", "ver3", "15,000")

console.log(oneBook)