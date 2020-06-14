let func = (first, ...other) => ({first, other})
console.log(func(1, 3, 4, 5, 7))
/*###############################################################################################*/
const organisation = {
  name: "Apple",
  info: { employees: ["Voldemar", "Helqa"], partners: ["IBM", "Cisco", "SAP", "GE ", "Deloitte"] }
};
function getInfo(
  {
    name = "Unknown",
    info: {
      partners: [first = "none", second = "none", third = "none"] = [] } = {}
  } = {}
){
  console.log(`Name: ${name}`);
  console.log(`Partners: ${first}, ${second} and ${third}`);
}
getInfo(organisation);
getInfo();

/*##############################################################################################*/

let user = {
  "guid": "dd969d30-841d-436e-9550-3b0c649e4d34",
  "isActive": false,
  "balance": "$2,474.46",
  "age": 30,
  "eyeColor": "blue",
  "name": "Tameka Maxwell",
  "gender": "female",
  "company": "ENOMEN",
  "email": "tamekamaxwell@enomen.com",
  "phone": "+1 (902) 557-3898",
  "tags": [ "aliquip", "anim", "exercitation", "non", ],
  "friends": [ 
    { "id": 0, "name": "Barber Hicks" },
    { "id": 1, "name": "Santana Cruz" },
    { "id": 2, "name": "Leola Cabrera" }
  ]
};
const {
  name = "none",
  balance = "none",
  email = "none",
  tags: [ first = "none", , , last = "none" ] = [],
  friends: [{ name: friendName = "none"}] = []
} = user;
console.log(name, balance, email, first, last, name)

const newArr = [...user.tags, ...user.friends];
console.log(newArr)