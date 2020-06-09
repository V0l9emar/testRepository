console.log("Hi");
/* 
1.Создайте функцию которая бы умела делать:
minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0
Подсказка, функция minus должна возвращать другую функцию.*/
function minus(num1 = 0) {
  return function (num2 = 0) {
    return num1 - num2;
  };
}
console.log(minus()());
/*
2.Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
function multiplyMaker ...
const multiply = multiplyMaker(2);
multiply(2); // 4 (2 * 2)
multiply(1); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)
multiply(10); // 120 (12 * 10)*/
function multiplyMaker(num1 = 2) {
  return function (num2 = 1) {
    return (num1 *= num2);
  };
}
const multiply = multiplyMaker(2);
console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));
/* 
3.Реализовать модуль, который работает со строкой и имеет методы:
a. установить строку
i. если передано пустое значение, то установить пустую строку
ii. если передано число, число привести к строке
b. получить строку
c. получить длину строки
d. получить строку-перевертыш
Пример:
модуль.установитьСтроку(‘abcde’);
модуль.получитьСтроку(); // ‘abcde’
модуль.получитьДлину(); // 5 */
/*const strModule = (function () {
  let str = "";
  function setStr(val = "") {
    str = String(val);
  }
  function getStr() {
    return str;
  }
  function getStrLength() {
    return str.length;
  }
  return {
    setStr,
    getStr,
    getStrLength,
  };
})();*/
let module = (function () {
  let str = "";
  function setStr(val = "") {
    str = String(val);
  }
  function getStr() {
    return str;
  }
  function getStrLength() {
    return str.length;
  }
  return {
    setStr,
    getStr,
    getStrLength,
  };
})();
module.setStr("abcdefgh");
console.log(module.getStr());
console.log(module.getStrLength());
/*
4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

модуль.установитьЗначение(10); // значение = 10
модуль.прибавить(5); // значение += 5
модуль.умножить(2); // значение *= 2
модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

Также можно вызывать методы цепочкой:
модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100 */
/*const numModule = (function () {
  let num = 0;
  function setNumber(val = 0) {
    num = Number(val);
    return this;
  }
  function plus(val) {
    num += Number(val);
    return this;
  }
  function minus(val) {
    num -= Number(val);
    return this;
  }
  function devide(val) {
    num /= Number(val);
    return this;
  }
  function pow(ex = 2) {
    num = Math.pow(num, ex);
    return this;
  }
  function getNumber() {
    return Number(num.toFixed(2)) || 0;
  }
  return {
    setNumber,
    plus,
    minus,
    devide,
    pow,
    getNumber,
  };
})();
console.log(numModule.setNumber(4).pow(3).getNumber());*/
let calcModule = (function () {
  let num = 0;
  function setNumber(val) {
    num = Number(val);
    return this;
  }
  function plus(val) {
    num += Number(val);
    return this;
  }
  function minus(val) {
    num -= Number(val);
    return this;
  }
  function multiply(val) {
    num *= Number(val);
    return this;
  }
  function devide(val) {
    num /= Number(val);
    return this;
  }
  function power(x = 2) {
    num = Math.pow(num, x);
    return this;
  }
  function getNumber() {
    return Number(num.toFixed(2) || 0);
  }
  return {
    setNumber,
    plus,
    minus,
    multiply,
    devide,
    power,
    getNumber,
  };
})();
console.log(calcModule.setNumber(5).multiply(3).power(4).getNumber());
