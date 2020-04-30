//Kontext vizova funkcii
function getThis() {
  console.log(this);
}
getThis(); // ssilayetsa na globalniy obyekt window{}
window.getThis();
//###############################################################//

function getPrice() {
  console.log(this.price);
  return this;
}
function getName() {
  console.log(this.name);
  return this; //posle togo kak return this poyavilsa, problema s vizovom v prod3 reshilas
}
const prod1 = {
  name: "Intel",
  price: 100,
  getPrice: getPrice /*function () {
    console.log(this.price);
  }*/,
  getName() {
    console.log(this.name);
  },
  info: {
    information: ["2.3ghz"],
    getInfo: function () {
      console.log(this);
    },
  },
};
prod1.getPrice();
prod1.info.getInfo(); //kontext vizova opredelayetsa pri vizove funkcii
prod1.getName();

//getPrice(); vixod- undefined, po tomu chto ona v globalnoy srede i u window net takogo svoystva, poetomu ee mojno otpravit v obj prod1 vishe, vmesto getPrice funkcii.

const prod2 = {
  name: "AMD",
  price: 50,
  getPrice, // eto vse ta je funkciya getPrice()
};
prod2.getPrice();
prod2.getName = prod1.getName;
prod2.getName(); // mi poluchim AMD, ne vajno gde obyavlena(prod1), glavnoye ona peredana i vivedena(prod2)
//####################################################################//

let str = "Hello world";
const reversStr = str.split("").reverse().join("");
console.log(reversStr);

const prod3 = {
  name: "ARM",
  price: 200,
  getPrice,
  getName,
};
prod3
  .getName() //undefined pri vizove
  .getPrice(); //oshibka, u undefined net undefined.getPrice(), poetomu nujno v eti funkcii return this

//######################## Potera kontexta ##########################//
