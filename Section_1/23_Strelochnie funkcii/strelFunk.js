console.log("Privet strelochniye funkcii");

const plus = (x, y) => x + y;
/*to je samoe chto:
function plusFoo(x, y) {
  return x + y;
}*/
const plusRes = plus(2, 3);
console.log(plusRes);

// variant bez argumentov u funkcii:
const withoutArg = () => console.log("Hello Poland!");
// s odnim argumentom
const singArg = (x) => x * 2;
console.log(singArg(3));

//opisaniye bolshe chem 1 stroka
const moreAction = (a, b) => {
  a *= 3;
  b *= 7;
  return a + b;
};
console.log(moreAction(2, 4));

//vozvrasheniye obyekta pri pomoshi strelochnoy funkcii.
//vozvr value i ee dlina length
/*const returnObj = (str = "") => {
  return {
    value: str,
    length: str.length,
  };
};
console.log(returnObj("Hello Poland"))*/
// v ukorochennom variante
const returnObj = (str = "") => ({
  value: str,
  length: str.length,
});
console.log(returnObj("Hello"));

//osnovniye otlichiya strelochn funkciy ot obichnix funkciy
//1. U obichnix funkciy est psevdokollekciya (arguments) taiteriruemiy obyekt kotoriy xranit v sebe vse argumenti kotoriye bili peredanni v funkciyu. daje esli ne bili obyavlenni. Etoy osobennosti net u strelochnoy funkcii

function plusFoo(x, y) {
  console.log(arguments);
  return x + y;
}
plusFoo(1, 2, 3, "hello");

//2. Strelochniye funkcii ne imeyut sobstvennogo konteksta, t.e net sobstvennogo 'this', i oni berut ego iz konteksta na uroven vishe

const obj = {
  firstName: "Voldemar",
  lastName: "Turovskiy",
  age: 34,
  getFirstName() {
    console.log(this);
  },
  getAge: () => console.log(this), //on obratilsa k kontextu visheq urovna
  getAgeArrow: null, // straemsa ispravit voznikshuyu problemu
  getRightAge() {
    /*this.getAgeArrow = () => console.log(this);//1 variant*/
    setTimeout(()=>console.log(this))//2 variant
  },
};
obj.getFirstName();
obj.getAge();
//uje ispravlenniy variant 
obj.getRightAge();
/*obj.getAgeArrow();//1 variant*/
