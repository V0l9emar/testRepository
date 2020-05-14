/* 
1.Создать объект, который описывает ширину и высоту
прямоугольника, а также может посчитать площадь фигуры:
const rectangle = {width:..., height:..., getSquare:...};**/

const rectangle = {
  width: 5,
  height: 3,
  getSquare() {
    return this.width * this.height;
  },
};
console.log(rectangle.getSquare());

/*2.Создать объект, у которого будет цена товара и его скидка, а также
два метода: для получения цены и для расчета цены с учетом скидки:*/

const price = {
  price: 10,
  discount: "15%",
  getPrice() {
    return this.price;
  },
  getPriceWithDiscount() {
    const discount = parseFloat(this.discount);
    const priceWithDiscount = this.price - this.price * (discount / 100);

    return priceWithDiscount;
  },
};
console.log(price.getPrice()); // 10
console.log(price.getPriceWithDiscount()); // 8.5

/*3. Создать объект, у которого будет поле высота и метод “увеличить
высоту на один”. Метод должен возвращать новую высоту:
object.height = 10;
object.inc(); // придумать свое название для метода
object.height; // 11;*/
let grow = {
  height: 10,
  inc() {
    this.height += 1;
    return this.height;
  },
};
console.log(grow.inc(this.height));

/*4. Создать объект “вычислитель”, у которого есть числовое свойство
“значение” и методы “удвоить”, “прибавить один”, “отнять один”.
Методы можно вызывать через точку, образуя цепочку методов:
const numerator = {
    value: 1,
    double: function () {...},
    plusOne: function () {...},
    minusOne: function () {...},
}
numerator.double().plusOne().plusOne().minusOne();
numerator.value // 3*/
const numerator = {
  value: 1,
  double() {
    this.value *= 2;
    return this;
  },

  plusOne() {
    this.value += 1;
    return this;
  },

  minusOne() {
    this.value -= 1;
    return this;
  },
};

console.log(numerator.double().plusOne().minusOne());
/*
//##############################################################//

1.Создать объект с розничной ценой и количеством продуктов. Этот
объект должен содержать метод для получения общей стоимости
всех товаров (цена * количество продуктов)*/
const prod = {
  price: 100,
  counts: 50,
  getTotalPrice() {
    return this.price * this.counts;
  },
};

/*2.Создать объект из предыдущей задачи. Создать второй объект,
который описывает количество деталей и цену за одну деталь. Для
второго объекта нужно узнать общую стоимость всех деталей, но
нельзя создавать новые функции и методы. Для этого
“позаимствуйте” метод из предыдущего объекта.*/
const anotherProd = {
  price: 20,
  counts: 10,
};

prod.getTotalPrice.call(anotherProd);

/*3.Даны объект и функция:
let sizes = {width: 5, height: 10},
getSquare = function () {return this.width * this.height};
Не изменяя функцию или объект, получить результат функции
getSquare для объекта sizes*/
let sizes = { width: 5, height: 10 };
getSquare = function () {
  return this.width * this.height;
};

getSquare.call(sizes);

/*4.  
let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight;
getElementHeight(); // undefined

Измените функцию getElementHeight таким образом, чтобы можно
было вызвать getElementHeight() и получить 25.
*/
let element = {
  height: 25,
  getHeight: function () {
    return this.height;
  },
};

let getElementHeight = element.getHeight.bind(element);

getElementHeight();
