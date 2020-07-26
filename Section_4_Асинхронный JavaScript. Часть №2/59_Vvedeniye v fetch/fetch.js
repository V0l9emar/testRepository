/*v konsoli mi poluchayem srazu promise, kotoriy uje vipolnit AJAX zapros i na vixod srazu budut dani metodi then i catch*/
console.log(fetch("https://jsonplaceholder.typicode.com/posts"));
//tak mi poluchayem zagolovki, status
fetch("https://jsonplaceholder.typicode.com/posts")
  //.then((response) => console.log(response))
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((posts) => console.log(posts))
  .catch((err) => console.log(err));

// v bazovom variante fetch delayet get zapros, esli zapros otlichayetsa ot bazovogo to nujno ispolzovat vtoroy argument s dop nastroykami zaprosa, method, body, headers i t.d; v pervom then mi poluchayem object otveta, ot srvera; v etom objecte budet nabor svoystv i metodov dla raboti

function getPost(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((post) => resolve(post))
      .catch((err) => reject(err));
  });
}
//getPost(1).then(post => console.log(post))
function getPost2(id) {
  const [userType, userId] = id.split("-");
  return fetch(
    `https://jsonplaceholder.typicode.com/posts/${userId}`
  ).then((response) => response.json());
}
/*getPost2('user-1')// esli tut budet proso 1 to vidast oshibku
  .then((post) => console.log(post))
  .catch((err) => console.log(err));*/

function getPost3(id) {
  return Promise.resolve().then(() => {
    const [userType, userId] = id.split("-");
    return fetch(
      `https://jsonplaceholder.typicode.com/posts/${userId}`
    ).then((response) => response.json());
  });
}
getPost3(1)// teper est vozmojnost obrabotat oshibku i poluchit info dla ispravleniya
  .then((post) => console.log(post))
  .catch((err) => console.log(err));