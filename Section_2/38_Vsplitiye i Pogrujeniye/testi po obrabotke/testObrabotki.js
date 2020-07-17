/*1.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.*/
/*let btn = document.getElementById("btn-msg");
btn.addEventListener("click", (e) => {
  //alert(e.target.dataset.text);
  // или если элемент один можно обратится к нему
  //alert(btn.dataset.text);
  // так же внутри обработчика события через this мы имеем доступ к элементу на который повешено событие
  //alert(this.dataset.text);
  // или через currentTarget
  alert(e.currentTarget.dataset.text);
});*/
let btn = document.getElementById("btn-msg");
btn.addEventListener("click", (e) => {
  alert(e.currentTarget.dataset.text);
});

/*2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.*/
/*let butn = document.getElementById("btn-msg");
// У событий mouseover и mouseout есть аналоги mouseenter/mouseleave
btn.addEventListener("mouseover", (e) => {
  butn.classList.add("bg-red");
});
btn.addEventListener("mouseout", (e) => {
  butn.classList.remove("bg-red");
});*/
btn.addEventListener("mouseover", (e) => {
  btn.classList.add("bg-red");
});
btn.addEventListener("mouseout", (e) => {
  btn.classList.remove("bg-red");
});

/*3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.*/
/*const tagTextContainer = document.getElementById("tag");
document.body.addEventListener("click", (e) => {
  tagTextContainer.textContent = `Tag: ${e.target.nodeName}`;
});*/
let tagTextContainer = document.getElementById("tag");
document.body.addEventListener("click", (e) => {
  tagTextContainer.textContent = `Tag: ${e.target.nodeName}`;
});

/*4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д */
/*const generateBtn = document.getElementById("btn-generate");
const list = document.querySelector("ul");

function generateNewItem(e) {
  // получаем текущее количество элементов в списке
  const num = list.children.length + 1;
  const text = `Item ${num}`;
  const li = document.createElement("li");
  li.textContent = text;

  list.appendChild(li);
}

generateBtn.addEventListener("click", generateNewItem);*/
let generateBtn = document.getElementById("btn-generate");
let list = document.querySelector("ul");
function generateNewItem(){
  let num = list.children.length + 1;
  let text = `Item ${num}`;
  let li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}
generateBtn.addEventListener('click', generateNewItem)