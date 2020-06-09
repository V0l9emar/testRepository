const mary = {
  firstName: "Mary",
  lastName: "Turovskaya",
  age: 3,
};
/*const firstName = user.firstName; // pri nebolshom objekte eto vseqo 2 stroki, no pri bolshix leqko zaputatsa.
const lastName = user.lastName; //
console.log(firstName)*/

//destrekturirovat mojno objecti, massivi, vxodniye paramemetri v funkcii esli eto objecti ili massivi
const { firstName, lastName, age = 4 } = mary; // age 35 dobavlenno esli ego net v objecte, esli yest to znacheniye iz objecta 30
console.log(age);

const hacar = {
  ima: "Hacar",
  familiya: "Turovskaya",
  vozrast: 28,
};
const { ima: name, familiya, vozrast: years = 30 } = hacar; //esli nujno pereopred peremennuyu to mojno s pomoshi ima: name
console.log(years);
console.log(name);

//#################### Rabota s vlojennimi objectami #########################
const vlad = {
  vladFirstName: "Voldemar",
  vladLastName: "Turovskiy",
  vladAge: 35,
  info: {
    work: "Programmer",
    skils: ["html", "css", "javaScript"],
  },
};
const {
  info: { work, skils },
} = vlad; // destrukturizaciya vlojennix svoystv
console.log(vlad.vladFirstName, work, skils);

//########################## Destrukturizaciya massivov ##############################

const colors = ["black", "yellow", "green", "red", "#893542"];
const [b, y, g, red, blue = "blue"] = colors;
console.log(b, y, g, red, blue);

const names = ["Vladimir", "Sarra", "Mary", "Daniil"]; // mojno poluchat ni vse znacheniya
const [, , name3, name4] = names; // za schet zpatix mi propuskayem elementi
console.log(name3, name4);

// destruturizaciya vlojennix massivov
const nestedArr = ["hello Voldemar", ["key", "value"]];
const [, [key, value]] = nestedArr; // poluchayem iz vlojennix massivov
console.log(key, value);

//###################  Operatori 'rest' i 'spred'  #######################//
//operator 'rest' dayet vozmojnost poluchit ostatok ot massiva, ili ispolzuyetsa pri kopirovanii massivov
const [name1, ...otherNames] = names;
console.log(name1, otherNames);
//takjemojno i skopirovat pri pomoshi 'rest', kopiruyem massiv names
//1.
const [...newNames] = names;
console.log(newNames);
//2. s pomoshyu 'spred'
const itNewNames = [...names];
console.log(itNewNames);
console.log(...itNewNames); //peredanni kak otdelniye elementi a ni kak massiv
//skleivayem nashi massivi s pomohyu "spred"
const colorNames = ["some value", ...colors, ...names]; // na podobii concatenacii massiva
console.log(colorNames);
console.log(...colorNames);
//copirovaniye objectov
const newUser = { ...vlad }; //poverxnostnoye kopirovaniye
console.log(newUser);
const {
  info: {
    skils: [html, css],
  },
} = vlad;
console.log(html, css);

//######### Operatori 'rest' i 'spred' v ramkax funkciy kogda peredayetsa chto-to v parametri #########//
function myPerson({
  vladLastName = "A",
  vladFirstName = "B",
  info: { skils } = {},
} = {}) {
  console.log(vladLastName, vladFirstName);
  console.log(skils);
}
myPerson(vlad); // esli ne postavit object to budet undefined

//################  Polucheniye vsex argumentov vnutri funkcii  #######################
function foo(x, y, ...others) {
  console.log(arguments); // eto v proshlom, teper mojno delat tak:
  /*console.log([].slice.call(arguments));
  console.log(Array.prototype.slice.call(arguments));*/ 
  const [
    ...args
  ] = arguments;
  console.log(args);
  console.log(others);
}
foo(1, 2, 5, 6);

//pri poluchenii dannix v vide massiva
const numb = [2, 3, 4, 5];
function foo2(x, y, ...and) {
  console.log(x, y, ...and);
}
foo2(...numb);
