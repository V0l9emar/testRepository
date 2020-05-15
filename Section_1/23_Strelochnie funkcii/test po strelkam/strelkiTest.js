console.log("Hello strelki");
//1.Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):

/*function sum() {
  let params = Array.prototype.slice.call(arguments);

  if (!params.length) return 0;

  return params.reduce(const summa = (prev, next) => prev + next);
}

console.log(sum(1, 2, 3, 4)); // 10
sum(); // 0*/

let summa = (...parametrs) => {
  return !parametrs.length ? 0 : parametrs.reduce((first, sec) => first + sec);
};
console.log(summa(1, 2, 3, 4)); // 10
console.log(summa()); // 0

//2.Переделать функцию с использованием функции-стрелки

/*function convertToObject(num) {
  const obj = {
    value: num,
    isOdd: Boolean(num % 2),
  };

  return obj;
}*/

let convertToObject = (num) => ({
  value: num,
  isOdd: Boolean(num % 2),
});
console.log(convertToObject(this.isOdd));

let sum = (...params) => {
  return !params.length ? 0 : params.reduce((perv, vtor) => perv + vtor);
};
console.log(sum(1, 2, 3, 7));
console.log(sum());

let convertToObj = (numb) => ({
  value: numb,
  isOdd: Boolean(numb % 2),
});
console.log(convertToObj())