
let d = prompt("Uchta son kiriting, biz sizga o'rtacha qiymatni topib beramiz")
var a = +prompt("1-son")
let b = +prompt("2-son")
let c = +prompt("3-son")

if (a<b<c) {
   alert(b);
}else if (a<c<b) {
   alert(c);
}else if (b<a<c) {
   alert(a);
}else{
   alert("Siz bir hil son kiritdingiz yoki umuman son kiritmadingiz")
}
