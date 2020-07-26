function Product(brand, price, discount) {
  this.brand = brand;
  this.price = price;
  this.discount = discount;
  /*this.getPricWithDiscount = function () {
    return (this.price * (100 - this.discount)) / 100;
  };*/
}
// perenosim v prototype
Product.prototype.getPricWithDiscount = function () {
  return (this.price * (100 - this.discount)) / 100;
};

Product.prototype.setPrice = function(newPrice){
  this.price = newPrice;
}

const apple = new Product("Apple", 100, 15);
const samsung = new Product("Samsung", 200, 25);

/*prototype eto svoystvo objectov kotoroe soderjit svoystva i metodi svoix roditeley i ix roditeley vverx po cepochke. On est u lubogo objekta */
console.log([]);
console.log(apple);
console.log(apple.hasOwnProperty('brand'));// mi obratilis k svoystvu v roditelskom prototype
console.log(apple.getPricWithDiscount());
console.log(samsung.getPricWithDiscount());// samsun takje poluchayet discount iz prototypa

apple.setPrice(500);// zadali novuyu cenu
console.log(apple.getPricWithDiscount())// poluchili cenu so skidkoy