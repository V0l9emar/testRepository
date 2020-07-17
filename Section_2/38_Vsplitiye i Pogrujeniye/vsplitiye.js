const btn = document.querySelector(".btn");
const wrap = document.querySelector(".wrap");
btn.addEventListener("click", (event) => {
  event.stopPropagation(); // vizivaya danniy metod, sobitiye srabativayte tolko na btn
  console.log("click btn");
});

// dla poqrujeniya ispolzuyem takoy metod
wrap.addEventListener(
  "click",
  (event) => {
    console.log("click wrap");
  },
); 
document.body.addEventListener(
  "click",
  (event) => {
    console.log("click body");
  }
);
// vsplitiye pri clicke na btn idet snachala body, zatem wrap, i v konce btn;
wrap.addEventListener(
  "click",
  (event) => {
    //event.stopPropagation(); // danniy metod ne podxodit t.k blokiruyet listener body
    console.log("click wrap");
  },
  { capture: true }
); // vsplivayut oba elementa pri clicke: "click btn" & "click wrap"

document.body.addEventListener(
  "click",
  (event) => {
    console.log("click body");
  },
  { capture: true }
);
// pri clicke na btn idet vsplitiye snachala body, zatem wrap, i v konce btn;
