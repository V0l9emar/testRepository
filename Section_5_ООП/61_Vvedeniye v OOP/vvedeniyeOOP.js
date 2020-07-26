/* Funkcii konstruktori */
const vlad = {
  name: "voldemar",
  age: 35,
};
console.log(vlad);

const str = new String("Hello Voldemar");
console.log(str);

console.log(String);

// Funkciyz konstruktor po soqlasovaniyu vseqda pishutsa s bolshoy bukvi, i ispolzuyetsa new 
function Product(brand, price, discount) {
  // 1. Sozdayetsa noviy Object
  //2. Na etot object ustanavlivayetsa ssilka this
  //3. vozvrashayet etot object, pri etom return mi ni gde ne ukazivali
  //this.brand = "apple";
  //console.log(this);
  this.brand = brand;
  this.price = price;
  this.discount = discount;
  this.getPricWithDiscount = function () {
    return (this.price * (100 - this.discount)) / 100;
  };
}
const apple = new Product("Apple", 100, 15);
const samsung = new Product("Samsung", 200, 25);
console.log(apple);
console.log(apple.getPricWithDiscount());
console.log(samsung);
console.log(samsung.getPricWithDiscount());

// klass eto abstraktnoye ponatiye xarakterizuyushee sposob organizacii dannix v edinuyu strukturu s naborom metodov i svoystv dla raboti s etimi dannimi, i vozmojnostyu porajdat noviye ekzemlari etix klassov