let a = 1;
let b = 0;
if(a>0){
  b = a;
}else {
  b += 1;
}
console.log(b);

// выражение ? если true : если false;
a > 0 ? b = a : b += 1;
console.log(b);

let c = a > 0 ? b = a : b += 1;
console.log(`b: ${b}, c: ${c}`);

b = a > 0 ? a : b + 1;
console.log(`b: ${b}`);

// выражение ? если true : выражение ? если true : если false;

b = a>0 ? 2 : a<0 ? 3 : 0
console.log(`b: ${b}`);
///////////////////////////////////////////////////////////////////////////////
//______________________switch case___________________________//
// ispolzuetsa v osnobnom v <select>'ax gde est tochniy vibor odnogo iz deystviy peremennoy
let color = 'red'; // 
switch(color){
  case 'yellow':
    console.log('Color is yellow');
    break;
  case 'red':
    console.log('Color is red');
    break;
  default:
    console.log('Default');
}
// sklenniye, esli v neskolkix peremennix odno i to je
switch(color){
  case 'yellow':
  case 'red':
    console.log('Color is red || yellow');
    break;
  default:
    console.log('Default');
}