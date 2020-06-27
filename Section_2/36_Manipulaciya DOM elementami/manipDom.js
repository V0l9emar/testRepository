//! Manipulaciya DOM dobaleniye i udaleniye elementov
/***************** Metodi *****************/
const title = document.querySelector("h2");
const div = document.querySelector("div");
console.log(title);
/*
title.innerHTML = "<span><b>Hello Poland or Canada</b></span>"; //izmenili danniye v h2, danniy tip ne sovsem bezopasen
title.textContent = "<span>New Text</span>";// v etom variante ne sozdaetsa novix tegov, a prosto zapisivayutsa danniye
title.insertAdjacentHTML("beforebegin", "<h3>title h3</h3>");//metod obavlaniya dannix v vide stroki
title.insertAdjacentElement;//pozvolayet vstavlat node uzli(DOM elementi)
*/

title.innerHTML += "<span>New Text</span>";
let span = title.querySelector("span");
console.log(span);
title.innerHTML += "<span>New Text 222</span>";
span.textContent = "asdasd"; // text span'a h2 ne izmenilsa, xota i perezapisan v samom spane, pri etom esli zablokirovat operaciyu vishe v 222 to danniye pervogo span'a izmenatsa. Tak proisxodit po tomu chto innerHTML udalayet vse sushestvuyushiye objecti vnutri elementa dla kotoroqo mi primenayem innerHTML/
// po etomu luchshe ispolzovat metodi kotoriye rabotayut neposredstvenno s DOM uzlami (appendChild(), insertAdjacentHTML()). Chtob sozdavat takiye uzli est metodi kotoriye nazivayutsa createElement
span = document.createElement("span"); //                sozdaniye teqa
span.textContent = "Span created by createElement"; //   zapis texta vnutri spana
span.classList.add("myClass"); //                        dobavleniye classa
console.log(span);
title.appendChild(span); //                              vivod na stranicu

div.appendChild(span); // !esli povtorno dobavit span v div to on ischeznet iz h2. Tak proisxodit po tomu chto DOM uzli moqut sushestvovat tolko v 1 ekzemplare. i soostvetstvenno on budet peremeshatsa pr peremeshenii.

// sozdaniye mnojestva elementov i dobavleniye ix v razmetku
const fragment = document.createDocumentFragment(); // eto dom uzel v kotoriy mi mojem vizivat metodi dobavleniya i udaleniya
const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "#66b3ff",
  "blue",
  "violet",
];
colors.forEach((color) => {//                     itearciya
  const item = document.createElement("div");//   sizdniye div dla kajdoqo elementa massiva
  item.classList.add(`bg-${color}`);//            dobavili class
  item.style.background = color;//                dobavili background divam po ukazanim cvetam
  item.textContent = color;//                     dobavleniye texta v div
  fragment.appendChild(item);//                   dobavleniye v fragment
});
document.body.appendChild(fragment);//            dobavleniye v razmetku stranici

//******************* Udaleniye elementov so stranici ********************//
//title.remove()// metod remove() udalil element title. Eto perviy sposob
title.parentElement.removeChild(title)// crosbrowserniy metod udaleniya