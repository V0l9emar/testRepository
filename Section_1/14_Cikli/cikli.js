// while, do while, for, for of, for in
//1.while, iterator 'i' (shaq s kotoroqo nado schitat)
//while(poka zdes budet true){telo budet viplonatsa} poka ne viplon etot kod, sled ne nachn.
let i = 0
while(i++ <10){
  console.log(i); 
}

i = 10
while(i--){
  console.log(i); 
}
///////////////////////////////////////////////////////////////////////////
//2. do while - vipolnayet deystviye a potom proverku usloviya
do{
  console.log('action')
}while(i>0);
//////////////////////////////////////////////////////////////////////////
//3. for
for(let i=0; i<=10; i++){
  if(i===4){
    continue; //eto zastavlayet prekratiti iteraciyu, ili propustit chislo 4 bilo propusheno
  }
  if(i===7){
    break; // on ostanavlivayet rabotu cikla. esli mi chto-to ishem i nashli to mojno ostanovit cikl
  }
  console.log(i);
};

let str = 'Hello';
let res = '';
for(let i=0; i<str.length; i++){
  console.log(str[i] + '!');
  res += str[i] + '*';
}console.log(res);

let colors = ['white', 'black', 'red', 'yellow', 'orange', 'green'];
for(let i=0; i<colors.length; i++){
  console.log(colors[i])
  colors[i] = colors[i].toUpperCase();
}console.log(colors);

const users = [
  {
    name: 'Vladimir',
    age: 34
  },
  {
    name: 'Hacar',
    age: 29
  },
  {
    name: 'Mary',
    age: 2
  },
  {
    name: 'Ibragim',
    age: 24
  }
];
for(i=0; i<users.length; i++){
  console.log(users[i].age) 
}


const usersObj = {};
for(i=0; i<users.length; i++){
  usersObj[users[i].name] = users[i];
}
console.log(usersObj['Mary']);
///////////////////////////////////////////////////////////////////////////////
//4. for in - slujit dla perebora svoystv obyekta
const user = {
  name: 'Voldemar',
  age: 34
};
for(let key in user){
  console.log(key);
  console.log(user[key]);
};
for(let key in usersObj){
  console.log(key);
  console.log(usersObj[key]);
}// poluchili obyekti
/////////////////////////////////////////////////////////////////////////////////
//4. for of - nujen dla iteracii(perebora) po elementam kollekcii (iteriruemix obyektov)
//ispolzuet znacheniye a ni kluch kak v 'for in'. for of ne tolko dla massivov no i dla masivopodobnix obyektov.
for(let value of users){
  console.log(value);
}