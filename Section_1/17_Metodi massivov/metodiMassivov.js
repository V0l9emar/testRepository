const numArr = [2, 32, 1234, 54, 323];
let value;

value = numArr.length;
//numArr.length = 0;   bit akkuratnim s perezapisyu massiva
//numArr.length = 100;
console.log(value, numArr);

value = Array.isArray(numArr);// variant proverki massiva 
console.log(value, numArr);

value = numArr[2]//  otobrajaet element massiva
console.log(value, numArr);

numArr[2] = 15;  // perezapis zncheniya elementa massiva
console.log(value, numArr);

//vidaet index na kotorom sidit dan elm massiva
value = numArr.indexOf(54);
console.log(value, numArr);

// pushaet v konec massiva
value = numArr.push(100);
console.log(value, numArr);

// udalayet s konec massiva i vozvrashaet
value = numArr.pop();
console.log(value, numArr);

//dobavlayet v nachalo massiva 
value = numArr.unshift(111);
console.log(value, numArr);

// udalayet s nachala i vozvrashayet  udal elm
value = numArr.shift(); 
console.log(value, numArr);

//virezayet i ne izmenayet isxodniy massiv
value = numArr.slice(0, 2);
console.log(value, numArr);

//virezayet so startovogo znach i do konechn znach
//takje mojet odnovrem dobavlat 
value = numArr.splice(1, 2, 'one', 'two');
console.log(value, numArr);

//perevarachivaet massiv i menayet ego  isxodnik
value = numArr.reverse()
console.log(value, numArr);

//metod soedinayet massivi
value = numArr.concat(numArr);
console.log(value, numArr);

//danniy metod delayet iz massiva stroku
value = numArr.join(" ")
console.log(value, numArr);

//metod pozv iz stroki sdelat massiv
value = "hello world".split(" ")
console.log(value, numArr);