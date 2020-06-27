/*2. Дана разметка.

  <div>
    <article>
      <p>Lorem ipsum dolor sit amet, odio omnesque ius cu, quo ex atqui antiopam. At detracto menandri eos. Duo in causae viderer, graeci <a href="#">reprehendunt</a> has in. Decore <mark>nemore</mark> philosophia te pro, nobis legere causae ex mei, odio putant mentitum ea ius. Vix nostro deserunt explicari eu.</p>
    </article>
  </div>
  <ul>
    <li><a href="#">Link1</a></li>
    <li><a href="#">Link2</a></li>
    <li><a href="#">Link3</a></li>
    <li><a href="#">Link4</a></li>
  </ul><span></span>
  <a href="#">Some link</a>

//!Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
isParent(parent, child);+
isParent(document.body.children[0], document.querySelector('mark'));+

true так как первый див является родительским элементом для mark
isParent(document.querySelector('ul'), document.querySelector('mark'));

false так ul НЕ является родительским элементом для mark
Функция принимает только DOM объекты. Обязательно проверяйте это.*/

/*function isParent(parent, child) {
  // Проверяем что переданные элементы являются HTML элементами
  if (!(parent instanceof HTMLElement) || !(child instanceof HTMLElement))
    return;

  let isParent = false;
  let currentParent = child.parentElement;

  while (currentParent) {
    isParent = currentParent === parent;
    if (isParent) {
      break;
    }
    currentParent = currentParent.parentElement;
  }
  return isParent;
}
console.log(isParent(document.body.children[0], document.querySelector("mark")));*/
function isParent(parent, child){
  if(!(parent instanceof HTMLElement) || !(child instanceof HTMLElement)) return;
  let isParent = false;
  let currentParent = child.parentElement;

  while(currentParent){
    isParent = currentParent === parent;
    if(isParent){
      break;
    }
  }

}console.log(document.body.children[0], document.querySelector('mark'))

/*3. Используя разметку из предыдущего задания.
Получить список всех ссылок, которые не находятся внутри списка ul.*/
const filteredLinks = [...document.links].filter(a => !a.closest('ul'));
console.log(filteredLinks);

/*4. Используя разметку из предыдущего задания.
Найти элемент, который находится перед и после списка ul.*/
const ul = document.querySelector('ul');
const prev = ul.previousElementSibling;
const next = ul.nextElementSibling;
console.log(ul)
console.log(prev)
console.log(next)