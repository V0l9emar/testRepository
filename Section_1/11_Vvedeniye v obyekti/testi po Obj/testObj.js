const shop= {
  product : 'iphone'
};
shop.price = 1000;
shop['currency'] = '$';
shop.details = {};
shop['details']['model'] = 'X';
shop.details.color = 'Black';
console.log(shop);
console.log(`Вы можете преобрести в нашем магазине телефон: ${shop.product + " " + shop.details.model} всего за ${shop.price + shop.currency}`);