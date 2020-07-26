/* eto noviy format napisaniya asinxronnogo coda */
/*function getPost(id) {
  return Promise.resolve().then(() => {
    const [userType, userId] = id.split("-");
    return fetch(
      `https://jsonplaceholder.typicode.com/posts/${userId}`
    ).then((response) => response.json());
  });
}*/

/* async prevrashayet funkciyu v takuyu, kotoraya vsegda budet vozvrashat Promise */
async function getPost(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    ).then((res) => res.json());

    return response;
  } catch (err) {
    console.log(err);
    //return Promise.reject();// ili variant s throw
    throw err;
  }
  //return 'kjadhoijSIOHN'
  /*const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then(res => res.json());*/
  //console.log(response);
  /*const data = await response.json();
  return data;*/
  //return response;
}
//console.log(getPost().then(data => console.log(data)))// mi fakticheski srazu poluchayem dostup k data
/*getPost(1)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));*/

// esli nujno sdelat neskolko zaprosov
async function getAll() {
  const [res1, res2] = await Promise.all([getPost(1), getPost(2)]);
  console.log(res1, res2);
}
getAll();

// async vibrasivayet lubuyu oshibku sinxronnuyu i asinxronnuyu v catch, chto pomogayet ne rushit code