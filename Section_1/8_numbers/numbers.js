const num1 = 10;
const num2 = 20;

let value;

value = num1 + num2;
console.log(value);

value =+ 100;
console.log(value);

value = 5 % 2;
value++;
value--;
console.log(value);

value = 0.6 + 0.7
console.log(value);
//toFixed
value = 0.6 + 0.724
value = +value.toFixed(2)
console.log(value);
//parse
value = 0.6 + 0.7
value = parseFloat(value.toFixed(2));
console.log(value);

console.log(parseInt("100px")) // rabotaet s celimi chislami
console.log(parseFloat("12.5em")) // rabotaet s drobnimi

value = (0.6*10 + 0.7*10)/10
console.log(value);
//Math
value = Math.PI
console.log(value);

value = Math.random();
console.log(value);
//okruglenie v blijayshuyu storonu
value = Math.round(2.4);
console.log(value);

value = Math.round(2.7);
console.log(value);
//deleniye dla polucheniya nujnoqo chisla 1.23
value = 1.23456789
console.log(Math.floor(value*100)/100);
//okrugleniye do verxnego celogo chisla
value = Math.ceil(2.1);
console.log(value);
//okrugleniye do nijnego celogo chisla
value = Math.floor(2.9);
console.log(value);
//minimalnoe chislo
value = Math.min(2, 9, 7, 5, 4);
console.log(value);
//randomnoe chislo
value = Math.floor(Math.random()*10+1);
console.log(value);
//random v massive
let arr = ["black", "red", "yellow", "pink", "white", "blue", "orange", "green"];
value = Math.floor(Math.random()*arr.length)
console.log(value, arr[value]);
// isFinite proverka chislo li eto?
/*let num = +prompt("Vvedite chislo, ...")
console.log(isFinite(num));*/

