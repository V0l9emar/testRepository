//Sobitiye eto luboe proishestviye kotoroe mojet proizoyti v brausere, kliki, vvod dannix, submit formi, scroll ... Formi sobitiy mojno posmotret na MDN. Est 2 sposoba
// sobitiye na button
const btn = document.querySelector("button");
console.dir(btn); //! danniy sposob ne ispolzuetsa
/*btn.onclick = function () {
  console.log("click");
}; // minus etogo svoystva na nego ne vozmojno povesit neskolko sobitiy, ono prosto perezapisivayetsa.

btn.onclick = function () {
  console.log("click 2");
};*/

//-------------------- 2 sposob, on uneversalen- addEventListener ---------------------//
// addEventListener prinimaet 3 argumenta: 1.Tip sobitiya; 2.Obrabotchik sobitiya; 3.Object s opredelennimi nastroykami(iz pogrujeniya i vsplitiya)
btn.addEventListener("click", function (e) {
  // kajdiy obrabotchik prinimaet 'e' - event(sobitiye); dla raznix celey
  console.log(e);
});

/*btn.addEventListener("click", function () {
  console.log("click 2");
});*/

// chto takoye preventDefault - nekot elementi imeyut specalniye vstroyenniye sobitiya po umolchaniyu, naprimer ssilka pri clicke otkrivayet novuyu stranicu, forma otpravlayet danniye. Chtob otmenit dannoe defaultnoe svoystvo ispolzuyetsa preventDefault
const link = document.querySelector("a");
function clickHandler(e) {
  e.preventDefault(); // ostanavlivayet perezagruzku stranicu
  console.log(this); // ukazivayet na element na kotoriy bilo poveshano sobitiye
  console.log("click");
}
link.addEventListener("click", clickHandler);

//----------------  Udaleniye sobitiy s elementov  -----------------//
//link.removeEventListener('click', clickHandler)

//---------------- Peredacha cherez funkcii strelki  --------------//
btn.addEventListener("click", (e) => {
  console.log(this);
  console.log(e);
});

//----------------  Delegirovaniye sobitiy  -----------------------//
const container = document.querySelector(".container");
btn.addEventListener("click", (e) => {
  let div = document.createElement("div"); // sozdayet div s random chislom
  const nestedBtn = document.createElement("button"); // sozdyet button
  div.textContent = Math.round(Math.random() * 10);
  nestedBtn.textContent = "button";
  div.appendChild(nestedBtn);
  container.appendChild(div);
});
//povesim obrabotchik na ves kontainer
container.addEventListener("click", (e) => {
  console.log(e.target);
  console.dir(e.target);
  if (e.target.tagName === "BUTTON") {
    console.log("button clicked");// tak mojno razdelit click sobitiye na elementax
  }
});

//---- sobitiya na klave -----//
//esli na brovsere najat 'V' background stanet fioletovim
addEventListener("keydown", function(event) {
  if (event.keyCode == 86)
    document.body.style.background = "violet";
});
addEventListener("keyup", function(event) {
  if (event.keyCode == 86)
    document.body.style.background = "";
});

//-------  polucheniye najatix klavish v console  ------//
addEventListener("keypress", function(event) {
  console.log(String.fromCharCode(event.charCode));
});