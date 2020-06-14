let str = "hello world"; // primenim metodi objectov k stroke
console.log(str.length);
console.log(str.slice(1, -1)); // rabotaet! delo v tom chto JS ispolzuet spec funkcii kotoriye vozvrashayut nam object s metodami dla raboti s dannoy strokoy.
console.dir(String("hello").slice(1, -1)); // prototype xranit v sebe nabor metodov kotoriye otslijivayet JS
/////////////////////////////////////

const strObj = new String("hello");
console.log(strObj)
console.dir(Number)
