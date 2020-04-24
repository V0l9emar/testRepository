console.log("HI")
const firstName = "Voldemar";
const lastName = "Turovskiy";
const age = 34;
const str = "Hello *my name is Voldemar!";

let value;

value = firstName + ' ' + lastName;
console.log(value);

value += " I am " + age;
console.log(value);
//dlina stroki
value = firstName.length;
console.log(value);
//----stroki obladayut takje kak obyekti - svoystvami i metodami----
//index simvola stroki
value = firstName[3]
console.log(value);
console.log('cats'.charAt(1))
//Posledniy simvol stroki
value = firstName[firstName.length - 1];
console.log(value);

// metodi stroki
value = firstName.toUpperCase();
console.log(value, lastName);

value = firstName.toLowerCase();
console.log(value);
// metod concat 
value = firstName.concat(' ', lastName);
console.log(value);

value = firstName.indexOf('e');
console.log(value);

value = str.indexOf('e');
console.log(value);
//nachalo poiska s opredelennogo simvola
value = str.indexOf('e', 2);
console.log(value);

value = str.indexOf('my');
console.log(value);
// proverka na soderjaniye simvola, slova
value = str.includes('*');
console.log(value);

value = str.slice(0, 5)
console.log(value);

value = str.slice(6)
console.log(value);
// uberaet s konca stroki
value = str.slice(0, -4)
console.log(value);

value = str.replace('Voldemar', "Vlad")
console.log(value);

//if (~str.indexOf(…)) oznachaet: esli naydeno

console.log( "Widget".startsWith("Wid") ); // true, "Wid" — начало "Widget"
console.log( "Widget".endsWith("get") ); // true, "get" — окончание "Widget"

let string = "some test string";
value = string.indexOf(' ', string.indexOf(' ') + 1);
console.log(value);

let a = "20";
let b = "16";
string = a + b
console.log(string)

string = "some test string";
console.log(string.slice(5, -7));

/*Дана строка: let string = "some test string";

ВРУЧНУЮ НИЧЕГО НЕ СЧИТАТЬ



Questions for this assignment
Получить первую и последнюю буквы строки

Сделать первую и последнюю буквы в верхнем регистре

Найти положение слова ‘string’ в строке

Найти положение второго пробела (“вручную” ничего не считать)

Получить строку с 5-го символа длиной 4 буквы

Получить строку с 5-го по 9-й символы

Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)



Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016” */