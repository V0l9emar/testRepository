/*Local storage - xranitel dannix v brausere, danniye xranatsa v pare 'key, value'*/
console.log(localStorage);// polucheniye znacheniy
console.log(localStorage.setItem('myitem', 'myvalue')); // zadali znacheniye
console.log(localStorage.getItem);// polucheniye znacheniya iz storage
console.log(localStorage.getItem('myitem'));// poluchayem nazvaniye klucha myitem - myvalue;

/*Luchshe ispolzovat metodi a ni prosto pluchat po svoystvu. V local storage nujno xranit danniye objecti ili massivi, no tolko v formate JSON.*/
const user = {name: 'Voldemar'};// xotim soxranit chtob potom poluchit dostup
// localstorage prinimayet v vide stroki loibo chisla
console.log(localStorage.setItem('user', JSON.stringify(user)));// konvertiruyem usera v JSON
console.log(localStorage.getItem('user'));// poluchaem usera v formate JSON
console.log(localStorage.user);// takje poluchayem usera

const userFromLS = JSON.parse(localStorage.user);// poluchayem user i rasparsivayem v obichniy object
console.log(userFromLS);// xranitsa nash polzovatel v normalnom vide

console.log(localStorage.removeItem('myitem')); // udaleniye opredelennogo itema
console.log(localStorage.clear()); // ocheshayet polnostyu localstorage

//! rabotat budu s setItem, getItem, removeItem, clear