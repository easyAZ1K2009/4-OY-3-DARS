//let yosh=prompt("Yoshingizni kiriting");

//if (Yosh<18){
// console. log("Siz bu yoshda armiyaga borolmaysiz. Kichkinasiz");
//} else if (yosh  >=18 &&<=27) {
//console. log ("Siz bu yoshda armiyaga borishiz mumkin")

//}else {
//console. log('Siz borish vaqtidan otib ketgansiz' )
//}

let number1 = Number(prompt("Birinchi raqamni kiriting:"));
let number2 = Number(prompt("Ikkinchi raqamni kiriting:"));
let amal = prompt("Amalni kiriting");

if (amal == "+") {
  alert(number1 + number2);
} else if (amal == "-") {
  alert(number1 - number2);
} else {
  console.log("Bunday amal mavjud emas");
}

if (amal == "*") {
  alert(number1 * number2);
}
if (amal == "**") {
  alert(number1 + number2);
}
