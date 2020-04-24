//1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.
/*
  let str = 'i am in the easycode';
let res = '';

for (let i = 0; i < str.length; i++) {
  if (i === 0 || str[i - 1] === ' ') {
    res += str[i].toUpperCase();
  } else {
    res += str[i];
  }
}
console.log(res);
*/
let str = "i am in the easycode".split(' ');
let res = '';
for(i=0; i<str.length; i++){
  res += str[i][0].toUpperCase() + str[i].slice(1) + ' ';
}console.log(res);


//2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
/*Выполнить *начало*
→ (Если *условие* == true → Выполнить *тело*, Выполнить *шаг*)
→ (Если *условие* == true → Выполнить *тело*, Выполнить *шаг*)

for (начало; условие; шаг) {
  // ... тело цикла ...
}*/

/*
let str = 'tseb eht ma i';
let res = '';

for (let i = str.length; i--;) {
  res += str[i];
}console.log(res);
*/

str = " tseb eht ma i";
res = '';
for(let i=str.length-1; i; i--){
  res += str[i];
}
console.log(res);

//3. Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. спользовать for.

/* 
let res = 1;

for (let i = 1; i <= 10; i++) {
  res *= i;
}
*/

let n = 10;
res = 1;
while(n){
  res *= n--;
};
console.log(res);

//4. На основе строки “JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
/* 
let str = 'JavaScript is a pretty good language';
let res = '';

for (let i = 0; i < str.length; i++) {
  if (i === 0 || str[i - 1] === ' ') {
    res += str[i].toUpperCase();
  } else if (str[i] !== ' '){
    res += str[i];
  }
}console.log(res);
*/

str = "JavaScript is a pretty good language".split(' ');
res = '';
for(i=0; i<str.length; i++){
  res += str[i][0].toUpperCase() + str[i].slice(1);
}console.log(res);


//5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
/*
let arr =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let num of arr) {
  if (num % 2) {
    console.log(num);
  }
}
*/

let massv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for(i=1; i<=massv.length; i++){
  if(i%2 == 0){
    console.log(i);
  }
}

/*6. Дан объект:
let list = {
  name: ‘denis’,
  work: ‘easycode’,
  age: 29
}
Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.*/

/*
let list = {
  name: 'denis',
  work: 'easycode',
  age: 29
}

for (let key in list) {
  if (typeof list[key] === 'string') {
    list[key] = list[key].toUpperCase();
  }
}console.log(list);
*/

let list = {
  name: 'denis',
  work: 'easycode',
  age: 29
};
for(let propName in list){
  if(typeof list[propName] == 'string'){
    console.log(list[propName].toUpperCase())
  }
  else{console.log(list[propName])};
};


let user = {"name":"Smith", age: 30};
console.log(user['name'] == user.name);
console.log(+'-' + 2)
let foo = { str: 'test' }; 
console.log(foo && foo.str);