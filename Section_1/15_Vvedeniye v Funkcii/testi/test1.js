function multiply(){
  let x = 1;
  if(arguments.length == 0) return 0;
  for(i=0; i<arguments.length; i++) x *= arguments[i];
  return x;
}console.log(multiply(5,7,9));

function reverseString(str){
  return str.split('').reverse().join('');
}console.log(reverseString('undefined'));

function stringToCode(str){
  let output = "";
  for(i=0; i<str.length; i++){
    output += str.charCodeAt(i) + " ";
  }return output.trim();
}console.log(stringToCode("S Bogom vse xorosho"));