//Funkcii v JS yavlayutsa obyektami;
function foo() {
  console.log("hello Foo!");
}
foo();
foo.field = "Voldemar";
console.log(foo.field);

//funkcii v JS nazivayutsa funkciyami pervogo klassa:  oni mogut bit peredanni v kachestve paramtrov v drugiye funkcii, mogut bit prisvoyeni v peremenniye, s nimi mojno proizvodit manipulacii kak i s drugimi tipami dannix

//--------------------------------------------------------//
//Funkcii visshego poradka, eto funkcii kotoriye prinimayut v kachestve parametrov drugiye funkcii ili vozvrashayut funkcii

//metod map: vozvrashayet noviy massiv sostoyashiy iz rezultatov vizova funkcii calbacka kotoraya bila peredana v kachestve parametra i vozvrashayet noviy massiv iz rezultata vizova nashey funkcii, eto nujno dla sokrasheniya kolichestva koda

const arr = ["Meku", "Nadir", "Ibo", "Sara", "Mery", "Voldemar"];
//poluchit - [4, 5, 3, 4, 4, 8];
let newArr = [];
for (i = 0; i < arr.length; i++) {
  newArr.push(arr[i].length);
}
console.log(newArr);

let newArr2 = [];
for (i = 0; i < arr.length; i++) {
  newArr2.push(arr[i].toUpperCase());
}
console.log(newArr2);
console.log(newArr);
//#######zadacah vipolnena pravilno no mnogo raznix povtorov#######//

//1.primem 2 parametra 'arr' i 'fn'
//2.vnutri seba sozdayet noviy massiv;
//3.Ona budet proxoditsa po peredan massivu
//4.na kajdoy iteracii budet pushit v resultiruyushiy massiv  resultat vizova peredannoy funkciyey
//5.V zavisimosti ot zadachi, t.e kak ya xochu preobraz svoy massiv, budem peredavat funkciyu kotoraya budet prnimat odin element massiva, chto-to s nim delat i vozvrashat izmeneniy resultat
//6.Ona budet prinimat odin el massiva
//7.Vizivayem mapArray() i peredayem emu massiv 'names', a vtorim argumentom ima nashey calback funkcii 'nameLength'
//8.Zapisivaem v peremennuyu resultat massiva
//9.Chtob poluchi toUpperCase
const names = ["Ayshan", "Shamsi", "Sara", "Hacar", "Voldemar"];
function mapArray(arr, fn) {
  //1
  const res = []; //2
  for (i = 0; i < arr.length; i++) {
    //3
    res.push(fn(arr[i])); //4
  }
  return res;
}
//5
function nameLength(el) {
  //6
  //console.log(el);
  return el.length;
}
//7
//mapArray(names, nameLength);
//massiv imen popadaet v mapArray i tuda je popadaet funkciya, ona pod imenem 'fn', pereberayem massiv #3, dalee na #4 pri kajdoy iteracii pushitsa odin element massiva
//9
function nameToUpperCase(el) {
  return el.toUpperCase();
}
//8
const result = mapArray(names, nameLength);
//10
const result2 = mapArray(names, nameToUpperCase);
console.log(result);
console.log(result2);
//teper iz funkcii nameLength mi mojem poluchat razniye danniye, naprimer dobaviv v return el- .length mi poluchaem to je samoe chto i vnachale uroka.

//######### Vozvrasheniye funkciy iz drugix funkciy ###########//

function greeting(firstName) {
  return function (lastName) {
    return `Hello, ${firstName} ${lastName}`;
  };
}
//const testGreeting = greeting("Voldemar");
//const fullName = testGreeting("Turovskiy");
const fullName = greeting("Voldemar")("Turovskiy");
console.log(fullName);

//#############################################################//

function question(job) {
  if (job === "developer") {
    return function (name) {
      return `${name}, что такое JavaScript?`;
    };
  } else if (job === "teacher") {
    return function (name) {
      return `${name}, какой предмет вы ведете?`;
    };
  }
}

const developerQuestion = question("developer");
console.log(developerQuestion("Voldemar"));
const teacherQuestion = question("teacher");
console.log(teacherQuestion("Voldemar"));

//################# Uprostim danniy primer #####################//

function question(job) {
  const jobDictionary = {
    //sozdayem obyekt
    developer: "что такое JavaScript?",
    teacher: "какой предмет вы ведете?",
    //takim obrazom mojno rashirat spisok, dobaviv v slovar
  };
  return function (name) {
    return `${name}, ${jobDictionary[job]}?`;
  };
}
const developeQuestion = question("developer");
console.log(developeQuestion("Voldemar"));
const teacheQuestion = question("teacher");
console.log(teacheQuestion("Voldemar"));

//#############################################################//
function doWithLoading(fn) {
  console.log("начало загрузки");
  let returnValue = fn();
  console.log("конец загрузки");
  return returnValue;
}
function process() {
  console.log("загружаем...");
}
doWithLoading(process);

//########################### Zamikaniye ####################################//
function createGenerator(prefix) {
  let index = 0;
  return function generateNewID() {
    index++;
    return prefix + index.toString();
  };
}
let generateNewID = createGenerator("Вызов номер: ");
console.log(generateNewID());
console.log(generateNewID());
console.log(generateNewID());
console.log(generateNewID());
