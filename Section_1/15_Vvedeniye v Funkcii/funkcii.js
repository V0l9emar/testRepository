//function Declaration - vsplivaet kak var, rabotaet v lubiy chasti koda
sayHellou();
function sayHellou(){
  console.log("Hello Poland!");
};

//v skobkax cherez zapatuyu perechislayutsa argumenti ili parametri funkcii
function sayHello(firstName, lastName){
  console.log(firstName, lastName);
  console.log("Hello Poland!");
}
sayHello('Vladimir', 'Turovskiy');//peredayem argumenti
//___________return v funkcii____________________//
//chtob uvidet to chto doljna vernut funkciya mi ispolzuem return, posle funkciya prekrashaetsa
function sayHi(firstName, lastName){
  console.log(firstName, lastName);
  return `Hello ${firstName} ${lastName}`;
}
let res = sayHi('Vladimir', 'Turovskiy');
let res2 = sayHi('Hacar', 'Turovskaya') + '!';
console.log(res);
console.log(res2);

function sayCheck(firstName, lastName){
  if(!firstName) return console.error('Error');
  console.log(firstName, lastName);
  return `Hello ${firstName} ${lastName}`;
}
let res3 = sayCheck('Hacar', 'Turovskaya'); //esli ne budet firstName to budet Error(str25)
console.log(res3);
//////////////////////////////////////////////////////////////////////////////////
//____________Znacheniye funkcii po umolchaniyu___________//
function byDefault(firstName = 'Default', lastName = 'Default'){
  console.log(firstName, lastName);
  return `Hello ${firstName} ${lastName}`;
}
let res4 = byDefault();
console.log(res4);


//////////////////////////////////////////////////////////////////////////////////
//_____________Oblast vidimosti funkcii_____________//
let x = 10;
function foo(){
  x = 20;
  console.log(x);
}foo();
console.log(x);
//esli x ne obyavlen to poisk peremennoy vedetsa snachala v ramkax funkcii, dalee v parametrax (), i dalee vedetsa poisk v globalnom prostranstve
let y = 94;
function foonk(){
  let y = 205;  //obyavleniye peremennoy lokalizuyet rabotu s peremennoy ne vozdeystvuya na globalnuyu peremennuyu. i imeet dostup tolko iznutri funkcii
  console.log(y);
}foonk();
console.log(y);

let z = 15;
function foonkciya(z){ // peremennaya mojet takje naxod. v argumentax parametra
  z = 382;
  console.log(z);
}foonkciya();
console.log(z);


//////////////////////////////////////////////////////////////////////////////////
//________________Primer s Obyektami_________________//
const user = {
  name: "Voldemar",
  age: 34
};
function getObj(obj){
  console.log(obj);// etot varint ne pravilniy, izmeneniya v sile no ne otobrajayutsa
  obj.lastName = 'Turovskiy';
}
getObj(user);
console.log(user);//pravilno tak.



//////////////////////////////////////////////////////////////////////////////////////////////
//_____________________________function Expression____________________//
const square = function(x){
  return x * x;
};

//______________Samovizivayushiyesa funnkcii______________//
(function(msg){//eto ispolzuetsa chasto dla kapsulacii vsego napisannogo koda chtob zakrit dostup
  console.log(msg)
})('Hello Canada!');