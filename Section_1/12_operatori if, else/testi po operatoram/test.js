let a = 0 || 'string';//string  возвращает первое попавшееся true
a = 1 && 'string';    //string  возвращает первый попавшийся false или последнее true
a = null || 25;       //25  возвращает первое попавшееся true
a = null && 25;       //null  возвращает первый попавшийся false
a = null || 0 || 35;  //35  возвращает первое попавшееся true
a = null && 0 && 35;  //null  возвращает первый попавшийся false
console.log(a)

console.log(12+14+'12')  //2612  
//сначала происходит сложение 12 + 14 после происходит конкатенация со строкой
console.log(3+2-'1')     //4  
//При любых математических операциях со строкой кроме сложения строка преобразуется к числу поэтому пры вычитании строки "1" она преобразовалась в число 1
console.log('3'+2-1)     //31  
//сначала произошла конкатенация и получилась строка "32" и при вычитании получили число 31
console.log(true + 2)    //3  
//true при числовом преобразовании становится 1
console.log(+'10' + 1)   //11  
//унарный плюс превращает строку в число и происходит сложение чисел
console.log(undefined + 2) //NaN   
//при любый математических операциях с undefined кроме сложения со строкой, результат будет NaN
console.log(null + 5)    //5   
//null преобразуется к нулю
console.log(true + undefined)//NaN   
//при любый математических операциях с undefined кроме сложения со строкой, результат будет NaN

////////////////////////////////////////////////////////////////////////////
//1
let x = 'hidden';
if(x=="hidden"){
  x = "visible"
}else "hidden";
console.log(x)

//2
a = 0;
if(a == 0){
  a = 1
}else if(a < 0){
  a = "less then zero";
}else a *= 10;
console.log(a);

//3
let car = {
  name : 'Lexus',
  age : 10,
  create : 2008,
  needRepair : false
};
if(car.age>5){
  console.log("Need Repair");
  car.needRepair = true;
}else false;
console.log(car);

//4
let item = {
  name:'Intel core i7',
  price: '100$',
  discount: '15%'
}
let y = item.discount;
let z = item.price;
let w = item.priceWithDiscount;
if(item.hasOwnProperty('discount') && item.hasOwnProperty('price')){
  if((y && z) != NaN){
    w = (parseInt(z)-parseInt(y)) + "$";
    console.log(w);
  }else console.log(z);
};

/*let item = { name: 'Intel core i7', price: '100$', discount: '15%' }
// мы выносим цену и скидку в отдельные переменные что бы несколько раз не вызывать parseFloat
const price = parseFloat(item.price);
const discount = parseFloat(item.discount);
// проверяем что цена и скинда не являются NaN так как это важно при расчетах
if (!isNaN(price) && !isNaN(discount)) {
  const priceWithDiscount = price - (price * (discount / 100));
  console.log(priceWithDiscount)
} else {
  console.log(price);
}*/

//5
let product = {
  name : 'Яблоко',
  price : '10$'
};
let min = 10;
let max = 20;
x = parseFloat(product.price);
if(x >= min && x <= max ){
  console.log(product.name);
}else console.log("товаров не найдено")