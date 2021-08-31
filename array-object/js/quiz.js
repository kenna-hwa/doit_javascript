//1

var origin = [2, 4, 6, 8, 10];

function sumArr(){
    var zero = 0;
    for(var i=0; i<origin.length; i++){
        zero += origin[i];
    }
    return zero;
}
var sum = sumArr();

origin.push(sum)
document.write(origin)

//2
var sentence = [];

sentence[0] = "가나";
sentence[1] = "다라";
sentence[2] = "마바";
sentence[3] = "사아";
sentence[4] = "자카";
sentence[5] = "타파";
sentence[6] = "도레";
sentence[7] = "미파";
sentence[8] = "솔라";
sentence[9] = "시도";


var random = Math.floor(Math.random()*10)
console.log(random)

document.write("<h1>&quot;"+sentence[random]+"&quot;</h1>")