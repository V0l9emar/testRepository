const btn = document.querySelector(".btn-get-posts");
const btnAddPost = document.querySelector(".btn-add-post");
const container = document.querySelector(".container");
function getPosts(cb) {
  const xhr = new XMLHttpRequest();
  console.log(xhr);
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

  /* podpisivayemsa na sobitiye polucheniya dannix ot servera */
  xhr.addEventListener("load", () => {
    //console.log(xhr.responseText); // eto svoystvo xranit otvet ot servera
    const response = JSON.parse(xhr.responseText); // poluchayem polnocenniy massiv s servera
    //console.log(response);
    cb(response);
  });

  xhr.addEventListener("error", () => {
    console.log("error");
  });

  xhr.send();
}

function createPost(body, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });

  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

  xhr.addEventListener("error", () => {
    console.log("error");
  });

  xhr.send(JSON.stringify(body)); // peredayem n server v formate JSON
}

/* sozdadim otdelnouyu funkciyu dla sozdaniya kartochek */
function cardTemplate(post) {
  const card = document.createElement("div");
  card.classList.add("card");
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = post.title;
  const article = document.createElement("p");
  article.classList.add("card-text");
  article.textContent = post.body;
  cardBody.appendChild(title);
  cardBody.appendChild(article);
  //console.log(cardBody);
  card.appendChild(cardBody);
  return card;
}

/* Vipolnayem zapros po clicku */
function renderPosts(response) {
  const fragment = document.createDocumentFragment(); // sozdayem fragment
  response.forEach((post) => {
    const card = cardTemplate(post);
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
}

btn.addEventListener("click", (e) => {
  getPosts(renderPosts);
});

btnAddPost.addEventListener("click", (e) => {
  const newPost = {
    title: "foo",
    body: "bar",
    userId: 1,
  };
  createPost(newPost, (response) => {
    const card = cardTemplate(response);
    container.insertAdjacentElement("afterbegin", card); // dobavlayem na stranicu noviy post
  });
});

/* Rassmotrim kakiye est instrumenti dla otladki Ajax */
/*
1. Network v consoli
*/