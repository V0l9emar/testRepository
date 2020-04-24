const user = {
  firstName : "Vladimir",
  age : 34,
  isAdmin : true,
  email : 't.vladimir@mail.ru',
  'user-address' : {
    city : "Baku",
    street : "Narimanova"
  },
  skills : ['html', 'css', 'javascript']
};

console.log(user);

let value;
let prop = 'email';
let prop1 = 'skills';

value = user.firstName;
console.log(value);

value = user['isAdmin'];
console.log(value);

value = user['user-address'];
console.log(value);

value = user['user-address'].city; //user['user-address']['city']
console.log(value);

value = user[prop]
console.log(value);

value = user[prop1]
console.log(value);

value = user[prop1][0]
console.log(value);

user.firstName = 'Vlad';
value = user.firstName;
console.log(value);
// kluch:znacheniye 
user.info = "Nekotoroe info"
value = user.info;
console.log(value);
//izmeneniye znacheniya .city
user['user-address'].city = 'Krakov'
console.log(user);
//sozdaniye novoy pari 'kluch : znacheniye' v sub obj
user['user-address'].country = 'Poland'
console.log(user);
//sozdaniye obyekta plan{} v obyekte user{}
user.plan = {};
user.plan.basic = 'basic';
console.log(user.plan);

//klonirovaniye obj
let clone = {};
for(let key in user){
  clone[key] = user[key];
};
clone.firstName = 'Aftandil';
console.log(user.firstName);
console.log(clone.firstName);
console.log(clone);
// ili mojno klonirovat Obj koroche, vot tak:
let cloneObj = Object.assign({}, user)
cloneObj.firstName = 'Jhon';
console.log(user.firstName);
console.log(clone.firstName);
console.log(cloneObj.firstName);
console.log(cloneObj);
