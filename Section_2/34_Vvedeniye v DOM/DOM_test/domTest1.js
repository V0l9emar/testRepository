// 1. head
console.log(document.head);
// 2. body
console.log(document.body);
// 3. все дочерние элементы body и вывести их в консоль.
console.log(document.body.children);
// 4. первый div и все его дочерние узлы
// а. вывести все дочерние узлы в консоль
c
console.log(document.body.firstElementChild.children);
// б. вывести в консоль все дочерние узлы, кроме первого и последнего
const div = document.body.firstElementChild;
// Для навигации по DOM использовать методы, которые возвращают только элементы
// При помощи оператора ... мы получаем из коллекции массив который фильтруем сравнивая каждый элемент с первым и последним элементом в div. 
const filteredArticles = [...div.children].filter(p => p !== div.firstElementChild && p !== div.lastElementChild);
console.log(filteredArticles);

//!######################################################################
//2
