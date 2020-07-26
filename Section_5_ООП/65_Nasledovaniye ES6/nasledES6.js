function Product(brand, price, discount) {
  this.brand = brand;
  this.price = price;
  this.discount = discount;
}
// perenosim v prototype
Product.prototype.getPricWithDiscount = function () {
  return (this.price * (100 - this.discount)) / 100;
};

Product.prototype.setPrice = function (newPrice) {
  this.price = newPrice;
};

const apple = new Product("Apple", 100, 15);
const samsung = new Product("Samsung", 200, 25);

/*------------------------------------------------------------------------------*/
/* //!Nasledovaniye odin iz stolpov OOP */

//Object.create - noviy obyect s ukazannim protipom i svoystvami
const protoForObj = {
  sayHello() {
    return "Hello lord";
  },
};
const obj = Object.create(protoForObj, {
  firstName: {
    value: "Voldemar",
  },
}); // sozdali pustoy object dla kotoroqo prototipom yavl obj protForObj
//console.log(obj);
//console.log(obj.sayHello());

// Nasledovaniye - smisl zakluchayetsa v tom chtob vzat ot roditelskogo classa vse svoystva i metodi i rashirit ix, dobavit noviye svoystva ili pereispolzovat. Nujno chtob ne dublirovat kod. Razlichayut 2 vida nasledvaniya: 1.Funkcionalnoy nasedovaniye i 2. Prototipnoe nasledovaniye

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
User.prototype.sayHello = function () {
  return `Hello ${this.firstName} ${this.lastName}`;
};

const user = new User("Voldemar", "Turovskiy");
//chtob ne dublirovat soazdadim Customer
function Customer(firstName, lastName, membership) {
  //User.call(this, firstName, lastName);// esli mogo to delayem inache
  User.apply(this, arguments);

  this.membership = membership;
}
console.log(user);
console.log(user.getFullName());
console.log(user.sayHello());

// chtob unasledovat dla Customer funkciyu sayHello delayem sledushee
Customer.prototype = Object.create(User.prototype);
Customer.prototype.constructor = Customer;
Customer.prototype.getMembership = function () {
  return this.membership.toUpperCase();
};

const customer = new Customer("Mery", "Turovskay", "child");
console.log(customer);
console.log(customer.sayHello());
console.log(customer.getMembership());
/*---------------------------------------------------------------------------*/
//! Class ES6
// metodi avtomaticheski popadayut v prototype
const methodName = 'setPrice';
class ProductES {
  constructor(brand, price, discount) {
    this._brand = brand;
    this.price = price;
    this.discount = discount;
  }

  get brand(){
    return this._brand;// getteri setteri pomogayut takje sokrit vzaimodeystviye
  }

  set brand(name){
    this._brand = name;
  }

  getPricWithDiscount() {// sozdayem metodi
    return (this.price * (100 - this.discount)) / 100;
  }

  [methodName](newPrice){// mojno cherez peremennuyu, pomogayet pri sokritii metodov
  //['setPrice'](newPrice){// takoy sintaksis pozvolayet generirovat nazvaniya dla metodov
  //setPrice(newPrice){
    this.price = newPrice;
  }

  // staticheskiye metodi, oni mogut vizivatsa otdelno ot ekzemplara, ne imeyut dostupa k this. On ne xranitsa v prototype, on xranitsa v constructor'e
  static plus(x, y){
    return x + y;
  }
}
const newProduct = new ProductES("Samsung", 200, 10);//class ne rabotayet bez new

console.log(newProduct);
console.log(newProduct.getPricWithDiscount());
console.log(ProductES.plus(3, 9));// static
console.log(Date.now());//timestemp v ms ot 1.01.1970
console.log(newProduct.brand);

/*------------------------------------------------------------------------------*/
//! Nasledovaniye v ES6
class UserES{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(){
    return `${this.firstName} ${this.lastName}`;
  }
}

class CustomerES extends UserES{
  constructor(firstName, lastName, membership){
    super(firstName, lastName);
    this.membership = membership;
  }
  getFullName(){
    const parentRes = super.getFullName();
    return `${parentRes}, membership: ${this.membership}`
  }
}
const customerEs = new CustomerES('Sarra', 'Turovskaya', 'Wife');
console.log(customerEs);
console.log(customerEs.getFullName());