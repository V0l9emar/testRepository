// 1.Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
//Если нет ни одного аргумента, вернуть ноль: multiply() // 0

function multiply(){
  let x = 1;
  if(arguments.length == 0) return 0;
  for(let i=0; i<arguments.length; i++) x *= arguments[i];
  return x;
}
console.log(multiply(1,2,3,4));



// 2.Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
function reverseString(str){
  return str.split("").reverse().join("");
}
console.log(reverseString("test"));

/*
 function reverseString(str) {
  let string = String(str);
  let res = '';

  for (let i = string.length; i--; ) {
    res += string[i];
  }

  return res;
}

console.log(reverseString('test'))
console.log(reverseString(''))
console.log(reverseString(null))
console.log(reverseString(undefined))
console.log(reverseString())
*/
  

// 3.Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа: 
//getCodeStringFromText(‘hello’) // “104 101 108 108 111” 
//подсказка: для получения кода используйте специальный метод 
function stringToCode(str){
  let output = "";
  for(let i = 0; i < str.length; i++){
      output += str.charCodeAt(i) + " ";
  };
  return output.trim();
};console.log(stringToCode("Voldemar"));

/*
function getCodeStringFromText(str) {
  let string = String(str);
  let res = '';

  for (let i = 0; i < string.length; i++) {
    res += string[i].charCodeAt() + ' ';
  }

  return res.trim();
}

console.log(getCodeStringFromText('hello'))
console.log(getCodeStringFromText(''))
console.log(getCodeStringFromText(null))
console.log(getCodeStringFromText(undefined))
console.log(getCodeStringFromText(1234))
*/

// 4.Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

/*function guessTheNumber(num) {
  const number = Number(num);

  if (typeof number !== "number" || isNaN(number)) return new Error("Please provide a valid number");
  if (number < 0 || number > 10) return new Error("Please provide number in range 0 - 10");

  const random = Math.ceil(Math.random() * 10);

  if (random === number) return "You win!";

  return `You are lose, your number is ${number}, the random number is ${random}`;
}

console.log(guessTheNumber(21));
*/