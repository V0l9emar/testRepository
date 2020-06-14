'use strict';
document.write("<h2>Hello</h2>");
// getteri i setteri dayut vozmojnost kontrolirovat vzaimodeystvovat s kakim libo svoystvom i ne davat ego perezapisivat pri nepravelnix usloviyax, ili vivodit v bolee chelovecheskiye znacheniya polzovatelu, naprimer polucheniye s servera znacheniya. Getteri i setteri ne kopiruyutsa mejdu objectami v destrukturizacii.
const car = {
  brand: "BMW",
  year: 2019,
  get age() {
    return `Машина выпущена в ${this.year}`;
  },
  set age(value) {
    //setter obyavlayut v osnovnom v objecte
    this.year = value;
  },
};

/*         *********  Bazoviye svoystva objecta  **********          */
/*Object.defineProperty(car, "year", {
  configurable: false,   // zapreshayet vozmoshnost configurirovaniya, no ostayetsa vozmojnost perezapisi car.year
  enumerable: false,  //delayet svoystvo year ne iteriruyemim
  writable: false,  //zapreshayet zapis, no pri etom vozmojno udaleniye
})*/

/*    *******  Getteri i Setteri  *******   */
/*Object.defineProperty(car, "age", {
  get: function () {  //get mojno obyavlat takje v samom objecte
    return `Машина выпущена в ${this.year}`;
  },
});*/

/* truk s defineProperty */
// dopustim chto v bolshom kode est peremennaya (globalVar) kotoraya lomayet ves kod perezapisivaniyem globalnoy peremennoy. Zadacha kak ee nayti? mojno proytis po vsemu kodu, a mojno ispolzovat debugger!

Object.defineProperty(window, "globalVar", {
  set: function (value) {
    console.log(value);
    //debugger; // v consoli vidim gde u nas perezapisivayetsa code
  },
});

function foo() {
  globalVar = 10;
}
foo();
