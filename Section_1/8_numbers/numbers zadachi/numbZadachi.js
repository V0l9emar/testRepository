//1. Получить число pi из Math и округлить его до 2-х знаков после точки
let value = Math.PI.toFixed(2);
console.log(+value);

//2.Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
value = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(value);

value = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
console.log(value);

//3. Работа с Math.random:
//a. Получить случайное число и округлить его до двух цифр после запятой
//b. Получить случайное целое число от 0 до X. X - любое произвольное число.
value = Math.random().toFixed(2);
console.log(+value);

let x = '';
value = Math.random(x)*10;
console.log(Math.round(value));
//4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
value = 0.6 + 0.7;
value = parseFloat(value.toFixed(2));
console.log(value);

//5. Получить число из строки ‘100$’
value = "100$";
console.log(parseInt(value));
