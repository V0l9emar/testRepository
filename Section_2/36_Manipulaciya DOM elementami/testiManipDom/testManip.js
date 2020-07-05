//!1. Найти параграф и получить его текстовое содержимое (только текст!);
const paragraph = document.querySelector("p");
console.log(paragraph.textContent);

//!2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0);
function getInfo(node) {
  if (!(node instanceof HTMLElement)) return;
  return {
    nodeType: paragraph.nodeType,
    tagName: paragraph.tagName,
    childNodes: paragraph.childNodes.length,
  };
}
let info = getInfo(paragraph);
console.log(info);

//!3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"];
let list = document.querySelector("ul");
function getTextFromUl(ul) {
  if (!(ul instanceof HTMLElement)) return;
  const [...links] = ul.querySelectorAll("a") || [];
  return links.map((a) => a.textContent);
}
console.log(getTextFromUl(list));

//!4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
//-text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-
/*const [...paragraphChildNodes] = document.querySelector("p").childNodes;
paragraphChildNodes.forEach((child) => {
  if (child.nodeType === 3) {
    child.textContent = "-text-";
  }
  console.log(child);
});*/
const [...paragraphChildNodes] = document.querySelector("p").childNodes;
paragraphChildNodes.forEach((child) => {
  if (child.nodeType === 3) {
    child.textContent = "-text-";
  }
  console.log(child);
});

//!5. Найти в коде список ul и добавить класс “list”
list.classList.add("list");
console.log(list.classList);

//!6. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
//Два решения. Первое через селектор ~. Второе через цикл while.
// 6.1
let link = document.querySelector("ul ~ a");
link.id = "link";
console.log(link);

/*// 6.2
//const list = document.querySelector('ul');
// Будущая ссылка
let link;
// Следующий элемент после списка, стартовая точка.
let nextElement = list.nextElementSibling;
// Проверяем пока не найдена ссылка или больше не осталось следующих элементов мы выполняем данный цикл.
while (!link || !nextElement) {
  // Если больше нет следующего элемента мы останавливаем цикл
  if (!nextElement) break;
  // Если у следующего элемента тег ссылка то мы записываем ее в переменную
  if (nextElement.tagName === "A") {
    link = nextElement;
  }
  // записываем следующий элемент
  nextElement = nextElement.nextElementSibling;
}

console.log(link);*/

//!7. На li через один (начиная с самого первого) установить класс “item”
// Также два варианта решения.
// 7.1
/*const [...liN2] = document.querySelectorAll("li:nth-child(odd)");
liN2.forEach((li) => li.classList.add("item"));*/
// 7.2
/*const [...liDevide] = document.querySelectorAll("li");
liDevide.forEach((li, index) => {
  if (!(index % 2)) {
    li.classList.add("item");
  }
});
console.log(liDevide)*/
const [...liDevide] = document.querySelectorAll("li");
liDevide.forEach((li, index) => {
  if (!(index % 2)) {
    li.classList.add("item");
  }
});
console.log(liDevide);

//!8. На все ссылки в примере установить класс “custom-link”
/*const [...links] = document.links;
links.forEach((link) => link.classList.add("custom-link"));*/
const [...links] = document.links;
links.forEach((link) => link.classList.add("custom-link"));
console.log(links);

/*//!9.  Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
<ul>
<li><a href="#">Link1</a></li>
...
<li class=”new-item”>item 5</li>
<li class=”new-item”>item 6</li>
</ul>
Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.
/*let list = document.querySelector("ul");
// Текущее количество элементов в списке
const currentCounts = list.children.length;
// Количество новых элементов
const newLiCounts = 3;

for (let i = 0; i < newLiCounts; i++) {
  let li = document.createElement("li");
  li.classList.add("new-item");
  li.textContent = `item ${currentCounts + i + 1}`;
  list.appendChild(li);
}

//!10. В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong).
const [...newLinks] = document.querySelectorAll("ul a");
newLinks.forEach((link) =>
  link.insertAdjacentHTML("beforeend", "<strong>Strong</strong>")
);

//!11. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.
const img = document.createElement("img");
img.setAttribute("src", "https://via.placeholder.com/150/92c952");
img.setAttribute("alt", "some image");
document.body.insertAdjacentElement("afterbegin", img);

//!12. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
const mark = document.querySelector("mark");
mark.insertAdjacentText("beforeend", "green");
mark.classList.add("green");

//!13. Отсортировать li внутри списка в обратном порядке (по тексту внутри)
const newList = document.querySelector("ul");
// Сортируем массив элементов по текстовому содержимому
const listItems = [...newList.children].sort((prev, next) => {
  return prev.textContent > next.textContent ? -1 : 1;
});
// Очищаем текущее содержимое списка
list.innerHTML = "";
// Генерируем новое содержимое из отсортированного массива элементов
listItems.forEach((item) => list.appendChild(item));
*/