//1. Найти параграф и получить его текстовое содержимое (только текст!);
const paragraph = document.querySelector("p");
console.log(paragraph.textContent);

//2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0);
function getInfo(node) {
  if (!(node instanceof Element)) return;
  return {
    nodeType: paragraph.nodeType,
    tagName: paragraph.tagName,
    childNodes: paragraph.childNodes.length,
  };
}
let info = getInfo(paragraph);
console.log(info);

//3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"];
let list = document.querySelector("ul");
function getTextFromUl(ul) {
  if (!(ul instanceof HTMLElement)) return;
  const [...links] = ul.querySelectorAll("a") || [];
  return links.map((a) => a.textContent);
}
console.log(getTextFromUl(list));

//4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
//-text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-
const [...paragraphChildNodes] = document.querySelector("p").childNodes;
paragraphChildNodes.forEach((child) => {
  if (child.nodeType === 3) {
    child.textContent = "-text-";
  }
  console.log(paragraphChildNodes);
});
