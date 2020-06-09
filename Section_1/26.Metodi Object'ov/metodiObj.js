//Kopirovaniye objectov, poverxnostnoye i mojet bit qlubokoye kopirovaniye vlojennix objectov.
//1.ne qlubokoe
let obj1 = {
  name: "Vlad",
};
let newObj = Object.assign({}, obj1);
console.log(newObj === obj1);
console.log(newObj);

// takje Object.assign() mojno kopirovat neskolko objectov
let obj2 = {
  age: 35,
};
let newObjNew = Object.assign({}, obj1, obj2);
console.log(newObjNew);
//##################################################
//2.glubokoe kopirovaniye pri pomoshi JSON. Pri pomoshi json.stringify mi vipolnayem konvertaciy v json format, ili esli mi xotim vernut obratno ispolzuyetsa json.parse

let obj3 = {
  name: "Hacar",
  info: {
    skils: ["Sales", "English"],
  },
};
let obj4 = {
  name: "Mary",
  age: 2.8,
};
let esheObj = Object.assign({}, obj3);
//let objJson = JSON.stringify(obj3)//kopiruem v json
esheObj = JSON.parse(/*objJson*/ JSON.stringify(obj3)); // mojno sdelat tak bez obyavleniya peremennoy
console.log(esheObj);
console.log(esheObj.info === obj3.info);

//3.objekt keys. Vozvrashyet kluchui objecta v vide massiva
let keys = Object.keys(obj4);
console.log(keys);
let values = Object.values(obj4);
console.log(values);
let entries = Object.entries(obj4); //on vozvrashaet massiv massivov gde kajdim elementom yavlayetsa kluch i znacheniye objecta
console.log(entries);
//Object.fromEntries() -analoq entries tolko naoborot, iz massiva kluchey delayet object
let fromEntries = Object.fromEntries([
  ["name", "Daniil"],
  ["age", "1"],
]);
console.log(fromEntries);
//№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№
const characters = [ 'Obi-Wan', 'Vader' ]
const newCharacters = [ ...characters, 'Luke' ]

console.log(characters === newCharacters) // false
console.log(characters) // [ 'Obi-Wan', 'Vader' ]
console.log(newCharacters) // [ 'Obi-Wan', 'Vader', 'Luke' ]
//№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№

let character = [ 'Obi-Wan', 'Vader', 'Luke' ]

// Removing Vader
const withoutVader = character.filter(char => char !== 'Vader')
console.log(withoutVader) // [ 'Obi-Wan', 'Luke' ]

// Changing Vader to Anakin
const backInTime = character.map(char => char === 'Vader' ? 'Anakin' : char)
console.log(backInTime) // [ 'Obi-Wan', 'Anakin', 'Luke' ]

// All characters uppercase
const shoutOut = character.map(char => char.toUpperCase())
console.log(shoutOut) // [ 'OBI-WAN', 'VADER', 'LUKE' ]

// Merging two character sets
const otherCharacters = [ 'Yoda', 'Finn' ]
const moreCharacters = [ ...character, ...otherCharacters ]
console.log(moreCharacters) // [ 'Obi-Wan', 'Vader', 'Luke', 'Yoda', 'Finn' ]