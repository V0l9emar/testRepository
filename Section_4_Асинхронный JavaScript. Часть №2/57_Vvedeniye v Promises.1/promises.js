/* Promis eto obyeky kotoriy pomogayet rabotata s asinxronnim codom, i pomogayet sdelat ego nemnogo sinxronnim, plus sdelat ego strukturirovannim bez vlajennix callback'ov slojnoy vlojennosti, emeet odnu tochku vixoda v oshibku a takje mojem vizvat srazu neskolko asinxronnix deystviy vistroya ix v cepochke druq za druqom */
//resolve - vipolneno uspeshno, reject - proizoshla oshibka. V resolve, reject mojen peredavat tolko odin argument. Esli nujno peredavat slojniye danniye, to mi doljno formirovat objecti i peredavat ix v promise
const promise = new Promise((resolve, reject) => {
  //setTimeout(() => resolve(Math.random()), 1000);
  setTimeout(() => reject('error'), 1000);// esli proizoshla oshibka v sintaksise, libo server otvetil reject
});
console.log(promise);
promise.then((x) => console.log(x)); //then prinimayet 2 argumneta
promise
  .then((x) => {
    console.log(x);
    return x;
  })
  .then((y) => console.log(y))
  .catch(err => console.log(err));// otlavlivayem mi oshibki u poslednego .then'a
//promise.then((z) => console.log(z));
