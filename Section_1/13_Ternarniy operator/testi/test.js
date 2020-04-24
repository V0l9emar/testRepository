let a = '';
switch(a){
  case 'blok':
    console.log('block');
  break;
  case 'none':
    console.log('none');
  break;
  case 'inline':
    console.log('inline');
  break;
  default: 
  console.log('other');
}

//if else => ?
//1.Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let b = 'hidden' ? 'visible' : 'hidden';
console.log(`b: ${b}`);

//2.Используя if, записать условие:
// если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
let c = '';
c == 0 ? c = 1 : c < 0 ? c = 'less then zero' : c*=10;
console.log(`c: ${c}`);