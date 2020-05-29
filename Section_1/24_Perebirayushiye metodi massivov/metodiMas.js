console.log("hi");

let users = [
  {
    _id: "5cdce6ce338171bb473d2855",
    index: 0,
    isActive: false,
    balance: 2397.64,
    age: 39,
    name: "Lucile Finley",
    gender: "female",
    company: "ZOXY",
    email: "lucilefinley@zoxy.com",
    phone: "+1 (842) 566-3328",
    registered: "2015-07-12T09:39:03 -03:00",
  },
  {
    _id: "5cdce6ce0aa8d071fa4f4cc5",
    index: 1,
    isActive: true,
    balance: 2608.48,
    age: 33,
    name: "Woodward Grimes",
    gender: "male",
    company: "FORTEAN",
    email: "woodwardgrimes@fortean.com",
    phone: "+1 (960) 436-3138",
    registered: "2014-09-08T03:24:39 -03:00",
  },
  {
    _id: "5cdce6ce103de120d32d6fe4",
    index: 2,
    isActive: true,
    balance: 1699.99,
    age: 25,
    name: "Robinson Coleman",
    gender: "male",
    company: "GENMOM",
    email: "robinsoncoleman@genmom.com",
    phone: "+1 (852) 543-3171",
    registered: "2019-04-23T08:24:58 -03:00",
  },
  {
    _id: "5cdce6cebada7a418d8ccb3d",
    index: 3,
    isActive: true,
    balance: 2621.84,
    age: 28,
    name: "Austin Benton",
    gender: "male",
    company: "ZILIDIUM",
    email: "austinbenton@zilidium.com",
    phone: "+1 (977) 573-2627",
    registered: "2016-08-02T10:08:24 -03:00",
  },
  {
    _id: "5cdce6cead1b8a7a4dc8cb3d",
    index: 4,
    isActive: false,
    balance: 32621.84,
    age: 19,
    name: "Austin Cupidon",
    gender: "male",
    company: "Cventin",
    email: "austincupidon@cventin.com",
    phone: "+1 (912) 735-2267",
    registered: "2017-08-02T13:16:24 -03:00",
  },
  {
    _id: "5cdce6ced81fe99596d9cef5",
    index: 5,
    isActive: true,
    balance: 1297.31,
    age: 37,
    name: "Casandra Stout",
    gender: "female",
    company: "ANACHO",
    email: "casandrastout@anacho.com",
    phone: "+1 (929) 465-3804",
    registered: "2018-04-14T11:27:26 -03:00",
  },
  {
    _id: "5cdce6ce6c3ae6c4d6f39e88",
    index: 6,
    isActive: false,
    balance: 2165.49,
    age: 20,
    name: "Valencia Carrillo",
    gender: "male",
    company: "XEREX",
    email: "valenciacarrillo@xerex.com",
    phone: "+1 (977) 522-3378",
    registered: "2014-02-14T11:45:27 -02:00",
  },
];
//forEach - prostoy metod perebora massiva, nichego ne vozvrashaet, vse metodi v kschestve argumenta prinemayut callback. Nekaya zamena cikla for
/*users.forEach((user, i, arr) => {
  //console.log(user, i, arr);
});*/

//#################################################
//filter - filtruyet
// filtruem polzovateley chey vozrast < 30, vozvrashaet tolko tex u kogo true v callback'e user.age < 30
let userLess30 = users.filter((user) => user.age < 30);
console.log(userLess30);
let activeUsers = users.filter((user) => user.isActive);
console.log(activeUsers);

//####################################################
//map - vozvrashaet noviy massiv osnovivayas na rezultate callbacka
//poluchim iz massiva vse imena
let usersName = users.map((user) => user.name);
console.log(usersName);
let usersNA = users.map((user) => ({ name: user.name, age: user.age }));
console.log(usersNA);

//####################################################
//reduce - pomogaet razvorachivat massiv, pomogayet formirovat strukturi. Naprimer iz massiva sdelat objekt. Pozvolaet probrazovat massiv v druguyu sushnost.., ili chto-to poschitat
let totalBalance = users.reduce((acc, user) => (acc += user.balance), 0); //0 eto startovoe znacheniye v kot nachinayem plusovat balance; acc eto accelerator kotoriy prinemaet startovoe znacheniye i xranit danniye predidushey iteracii
console.log(totalBalance);

let userObj = users.reduce((acc, user) => {
  acc[user._id] = user;
  return acc;
}, {});
console.log(userObj); // iz massiva poluchili objekt objektov

//######################################################
//some/every - pozvolayut proverit est li v massive.. some vozvrashayet true/false v zavisimosti ot togo est li xotabi odin udavletvoraet nashemu usloviyu v callback'e; every - vozvrashaet esli vse udovletvarayut usloviyu v callback'e
let isMale = users.some((user) => user.gender == "male");
let isAllMale = users.every((user) => user.gender == "male");
let isAll18 = users.every((user) => user.age > 18);
console.log(isMale);
console.log(isAllMale);
console.log(isAll18);

//#############################################################
//find - dla poiska elementa v massive.
let user = users.find((user) => user.name == "Austin Cupidon");
console.log(user);

//#######################################################
//sort - sortirovka. 1.on izmenaet isxodniy massiv, 2.On sortiruyet po leksicheskomu znacheniyu
let strArr = ["Vladimir", "Hacar", "Meri"];
strArr.sort();
console.log(strArr);

let numArr = [10, 7, 44, 32];
numArr.sort((prev, next) => prev - next);
console.log(numArr);

users.sort((prevUser, nextUser) => prevUser.age - nextUser.age);
console.log(users);
