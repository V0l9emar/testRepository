// >, <, >=, <=, ==, ===, !=, !==

let value;
value = 1 > 2;
console.log(value);

value = 1 == 1;
console.log(value);

value = 1 == '1';
console.log(value);

value = 1 === '1';
console.log(value);

value = 1 != '1';
console.log(value);

value = 1 !== '1';
console.log(value);

value = "a" === "a";
console.log(value);

value = "a" > "A";
console.log(value);
// vozvrashaet cifrovoy kod simvola iz tabl UNICODE
value = "a".charCodeAt();
console.log(value);
//____________________________if else_____________________//   
// if(usloviye){
//   //options
// }else{
//   //else option
// }
value = 10;
if(value!==10){
  console.log('value: 10');
}else{
  console.log('else');
}

if(value){
  console.log('some actions', value);
}else{
  console.log('else', value);
}

value = null;
console.log(!value)

// takoy metod !! ispolzuyut dla preobrazovaniya v boolevoe znacheniye
value = null;
console.log(!!value);

if(!value){
  console.log(value)
}
//////////////////////////////////////////////////////////////////////
//________________________________Massivi______________________//
value = [];
if(value.length){
  console.log(value);
}else{
  console.log('array is empty');
}

value = null;
if(Array.isArray(value)){
  console.log(value);
}else{
  console.log('array is empty');
}
///////////////////////////////////////////////////////////////////
//___________________________Objects__________________________//
let user = {
  name : "Vladimir"
};

//if(user.name) ili variant nije (esli u obyekta est property)
if(user.hasOwnProperty('name')){
  console.log(user.name);
}else{
  console.log('else')
}

//-----operator || staraytsa preobrazovat vse k true; && starayetsa preobrazovat k false.---------//
//________________________Logicheskiye operatori ||  && ____________________//
value = 1 || 0;
console.log(value);

//let age = prompt('Skolko vam let?')
let age = 10;
if(age<16 || age>65){
  console.log('some action')
}else{
  console.log('Vi sovershennoletniy');
}
//-----------------------------------------//

let serverNickname = 'Vlad';
let nickname = serverNickname || 'default nickname';

console.log(nickname);

//----------------------   &&   -------------------------//
value = 1 && 2 && 3;  //vozvrashaet naimenshiy (false) 0, null. esli vse true - poslednee znach.
console.log(value);

productPrice = 10;
if(productPrice>=5 && productPrice<=20){
  console.log('беру');
}else{
  console.log('else')
}
//_______________ else if __________________//
value = 10;
if(value < 10){
  console.log('value<10', value)
}else if(value >= 10){
  console.log('value>=10', value);
}else{
  console.log('else');
}