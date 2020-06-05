//Zamikaniye eto funkciya kotoraya ssilayetsa na svobodniye peremenniye. Svobodniye peremeniye - eto vse peremenniye kotoriye ne bili peredanni funkcii kak parametri i nebili obyavleni vnutri etoy funkcii kak lokalniye peremenniye.
//Drugimi slovami funkciya oredelennaya v zamikanii zapominayet to okrujeniye v kotorom ona bila sozdanan i immet dostup k nemu. Takje ona imeet dostup vishe i mojet poluchat razlichniye peremenniye iz okrujeniya roditelskoy funkcii.

function getFullName(firstName, lastName) {
  return function () {
    return `${firstName} ${lastName}`;
  };
}
let getName = getFullName("Vladimir", "Turovskiy");
console.log(getName());
//pri kajdom vizove getFullName budet sozdavatsa noviy kontext ispolneniya.

function updateValue(val = 0) {
  let x = val;
  return function (num = 0) {
    return (x += num);
  };
}
let updateVal = updateValue(2);
let updateVal2 = updateValue(4);
console.log(updateVal(1));
console.log(updateVal(0));
console.log(updateVal2(3));
console.log(updateVal2(0));
//pri kajdom vizove sozdaetsa noviy kontext ispolneniya i novoe leksicheskoe okrujeniye

function checkCred() {
  const login = "test";
  const password = "somePassword";
  return {
    checkLogin(value) {
      return login === value;
    },
    checkPassword(value) {
      return password === value;
    },
  };
}
//mi sozdali lokalniye peremenniye vnutri funkcii checkCred k kotorim net dostupa snaruji, i mi vozvrashayem vo vneshniy mir obyekt s dvuma metodami checkLogin i checkPassword kotorii v zamikanii poluchayut dostup k peremennim login i password i sravnivayut ix s tem value kotoroye bilo peredenno i vozvrashayut true ili false.
let check = checkCred();
console.log(check.checkLogin("test"));

//#############################################################

function closureExample() {
  let arrOfFunc = [];
  let value = "";
  for (let i = 0; i < 10; i++) {
    value += i;
    arrOfFunc.push(function () {
      console.log(value, i);
    });
  }
  return arrOfFunc;
}
const res = closureExample();
res[0]();
res[7]();

