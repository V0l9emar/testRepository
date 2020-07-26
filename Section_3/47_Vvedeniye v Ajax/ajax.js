/* Ajax eto texnologiya kot podrazumevayet obsheniye s serverom i dalneyshee izmeneniye stranici bez perezagruzkistranici. dla testa zaprosa ispolzuyem jsonplaceholder */
const btn = document.querySelector("button");
const container = document.querySelector(".container");
function getPosts(cb) {
  const xhr = new XMLHttpRequest();
  console.log(xhr);
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts"); // otkrivayem zapros

  /* podpisivayemsa na sobitiye polucheniya dannix ot servera */
  xhr.addEventListener("load", () => {
    //console.log(xhr.responseText); // eto svoystvo xranit otvet ot servera
    const response = JSON.parse(xhr.responseText); // poluchayem polnocenniy massiv s servera
    //console.log(response);
    cb(response);
  });

  xhr.addEventListener("error", () => {
    console.log("error"); // obrabotka oshibki, esli chto0to ni tak s adressom
  });

  xhr.send();
}
/* Vipolnayem zapros po clicku */
function renderPosts(response) {
  const fragment = document.createDocumentFragment(); // sozdayem fragment
  response.forEach((post) => {
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
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
}

btn.addEventListener("click", (e) => {
  getPosts(renderPosts);
});

/* dla togo chtob sdelat zapros nam nujno sozdat ekzemplar XMLHttpRequest pod nazvaniyem xhr obichno; otkrit zapros i nastroit kuda i kak mi xotim sdelat zapros; povesit obrabotchik sobitiya zagruzki, vnutri mi parsim nash responseText - otvet ot servera, dalee otpravlayem ego dalshe; delayem xhr.send() dla otpravki samogo zaprosa. */
