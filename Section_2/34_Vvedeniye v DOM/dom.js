// DOM - Document Object Modul: obyektnaya model dokumenta. Ne zavisimiy ot platformi libo yazika interface, kototiy pozvolayet scriptam dinamicheski obshatsa, izmenat soderjimoe strukturu i stili nasheqo documenta.
const div = document.querySelector("div");
const titles = document.querySelectorAll("h2");
console.dir(div);
console.dir(titles);
//###################  Rabotaem s Node listom  ##################//
console.dir(Array.from(titles)); //poluchaem elementi v vide massiva
console.log(Array.prototype.slice.call(titles)); // toje samoe starim metodom
console.log([...titles]); // to je samoe
// !!! poluchennaya kollekciya cherez querySelectorAll eto snimok nashix DOM uzlov, eto ni jivaya kollekciya

// poluchit etu hje zapis h2 mojno takje i cherez takuyu zapis
const h2 = document.getElementsByTagName("h2");
console.dir(h2); // eto jivaya kollekciya, kotoraya budet izmenatsa pri izmenenii
console.dir(titles);// ne jivaya kollekciya pri izmenenii ostayetsa ne izmennoy

/*********************************  Uzli  ***************************/
//!!! U kajdogo elementa est nabor svoystv kotoriye pozvolayut poluchit sosedniye elementi, vlojenniye elementi
console.log(div.nextSibling)// posmotrim v konsoli  div.nextSibling - to vivodom budet 'text' t.e uzel, esli posmotret div.
console.log(div.nextElementSibling)// nextElementSibling - to vivodom budet sleduyushiy element posle 'div' - taq v html: <script src="dom.js"></script>
console.log(div.firstChild)// div.firstChild - vivedet perviy textoviy uzel, kotoriy naxoditsa vnutri div'a, ili div.
console.log(div.firstElementChild)//firstElementChild - <a href="" class="link">established</a> eto ssilka kotoraya naxoditsa vnutri texta, perviy docherniy element.
console.log(document.body.firstChild)
console.log(document.body.firstChild.nextSibling)// vidim perviy element v body
console.log(document.body)
console.log(document.links)// poluchayem kollekciyu vsex linkov soderjashixsa na stranice
console.log(document.forms)// poluchyem kollekcii vsex form xranashixsa na stranice

//!!! BOM eto ne oficialnoye nazvaniye, Browser Object Module- obyektnaya model brausera, t.e te qlobalniye peremenniye kotoriye nam predostavlayet browser
console.log(window)
console.log(navigator)
console.log(location)
//Eto okrujeniya i te interfaci kotoriye dayut vozmojnost nam iz JS vzaimodeystvovat s etimi chastami nasheqo browsera

/*element.closest(‘selector’) - ищет предка (родителя) в соответствии с переданным
селектором. Синтаксис селектора аналогичен CSS. В случае совпадения вернет
элемент, если ничего не найдено - null.

<div>
  <p>
    Other Text
    <span class="mark">info</span>
   </p>
</div>
document.querySelector('.mark').closest('div');
// найдёт первый элемент с классом mark и получит ближайший обрамляющий тег div

//////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

element.matches(‘selector’) - проверяет, соответствует ли элемент данному селектору.

<div class="one">One</div>
<div class="box">Two</div>
<div>Three</div>
var divs = document.getElementsByTagName('div');
for (var index = 0, max = divs.length; index < max; index++) {
    if (divs[index].matches('box')) {
       console.log(divs[index]);
    }
} // выведет в консоль все дивы с классом box*/