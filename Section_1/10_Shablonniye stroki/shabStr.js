const firstName = 'Vladimir';
const lastName = 'Turovskiy';
const age = '34';

let str = 'Hello my name is ' + firstName + ' ' + lastName;

console.log(str);

str = '<ul>' + 
        '<li>first name:' + firstName + '</li>' +
        '<li>last name:' + lastName + '</li>' +
        '<li>age:' + age + '</li>' +
      '</ul>';
//console.log(str);
document.body.innerHTML = str;

//es6
str = `
  <ul>
    <li>First name: ${ firstName }</li>
    <li>Last name: ${ lastName }</li>
    <li>Age: ${ age }</li>
    <li>Math.random: ${ Math.random()*10 }</li>
    <li>5 + 5: ${ 5 + 5 }</li>
  </ul>
`;
document.body.innerHTML = str;