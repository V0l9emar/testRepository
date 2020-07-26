/* JavaScript-движок читает переменные и объявления функций и записывает их в глобальную память (кучу). */
/* У каждого JavaScript-движка есть важный компонент, который называется стек вызовов (call stack). */
console.log(1);
console.log(2);
setTimeout(() => {
  console.log(3);// etot callback otpravlayetsa v ochered call stack, settimeout vipolnayetsa v browsernom api
  setTimeout(() => {
    console.log(5);
  }, 0);
}, 0);

console.log(4);// on uspevaet vipolnitsa, ochered zakanchivayetsa i togda vipolnayetsa settimeout 3

function a(){
  //debugger;// vizivya debugger mi uvidim chto v steke vizvana i ostanovlena tolko funkciya a()
  console.log('a');
};
function b(){
  console.log('b');
};
a();
b();
/* Vidim chto functii vstayut v ochered, i settimouti vipolnatsa pozje po steku */