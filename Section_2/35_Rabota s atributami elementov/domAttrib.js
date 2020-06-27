//Attributi i rabota s nimi cherez JS
const div = document.querySelector("div");
const titles = document.querySelectorAll("h2");
/**************************** Polucheniye roditela *************************/
console.log(div.parentElement); //polucheniye roditelskogo elementa ili blijaysheqo roditela ili div.parentNode

const link = div.querySelector(".link");
console.log(link.parentElement); //parentElement vozvrashayet pramogo roditela
console.log(link.closest(".content")); //closest vozvrashayet blijaysheqo roditela s ukazanim selektorom (.content)

/**************************** Rabota s Attributami ************************/
//rabota s classami, imi mojno manipulirovat - dobavlat, udalat, proverat nalichiye ili perekluchaya class
console.log(div.classList); //pokazivayet sushestvuyushiye

div.classList.add("article", "custom", "new"); // dobavleniye classov
console.log(div.classList);

div.classList.remove("article"); // udalayet class
console.log(div.classList);

div.classList.contains("custom"); // proverayet est li danniy class i vozvrashayet true esli est
console.log(div.classList);

div.classList.toggle("toggle"); //class toggle perekluchayet: t.e esli klassa netu to on dobavlayet esli yest - udalayet
console.log(div.classList);

div.classList.toggle("toggle"); //udalil sushestvuyushiy. Danniy metod ispolzuyut chasto pri clice esli nado dobavlat/udalat class, chtobi ne delat proverku est danniy class ili netu.
console.log(div.classList);

console.log(div.className); //className svoystvo vidayet classi dannogo elementa v vide stroki

console.log(link.href);

console.dir(link);

div.setAttribute('id', 'myId');//dobavili v div atribut ID
div.setAttribute('id', 'myId2');//mojno perezapisat atribute
console.log(div.getAttribute('id'))//poluchayem znacheniye atributa
console.log(div.hasAttribute('id'))//proverayem est li atribut
console.log(div.removeAttribute('id'))//udaleniye atributa

// v HTML5 poyavilas vozmojnost dobavlat sobstvenniye atributi data-...="..." sdobavil v div v code
console.log(div.dataset)//v nem soderjitsa object bez pristavki data- i znacheniye kotoroe v nem soderjitsa.
console.log(div.dataset.myattr)//mojem schitat ego i poluchit znacheniye kotoroe on soderjit
console.log(div.dataset.myattr = 'my attribute')//mojem perezapisat znacheniye
console.log(div.getAttribute('data-myattr'))//takje mojno poluchat eti attributi cherez getAttibute
//! Obichno ispolzuyut dataset

/*
data - содержит содержимое узлов для НЕ-элементов (комментарии, текст). Доступно для записи.

<h1>Title with <mark>info</mark></h1>
var title = document.querySelector(‘h1’);
title.data; // undefined так как title - это узел-элемент (HTMLHeadingElement)
title.firstChild.data; // ‘Title with ’;
title.firstChild.data = 'New text ';
<h1>New text <mark>info</mark></h1>

textContent - содержит текстовое содержимое узлов без тегов. Доступно для записи.

<h1>Title with <mark>info</mark></h1>
var title = document.querySelector(‘h1’);
title.textContent; // “Title with info”
title.textContent = ‘New text’;
<h1>New text</h1>

*/