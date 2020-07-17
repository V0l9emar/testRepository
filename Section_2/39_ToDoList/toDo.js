const tasks = [
  {
    _id: "5d2ca9e2e03d40b326596aa7",
    completed: true,
    body:
      "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non.",
  },
  {
    _id: "5d2ca9e29c8a94095c1288e0",
    completed: false,
    body:
      "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.",
  },
  {
    _id: "5d2ca9e2e03d40b3232496aa7",
    completed: true,
    body:
      "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non.",
  },
  {
    _id: "5d2ca9e29c8a94095564788e0",
    completed: false,
    body:
      "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.",
  },
];

(function (arrOfTasks) {
  //console.log(arrOfTasks) // mi vidim massiv s kotorim ne udobno rabotat pri rassherenii. Perevodim v obj objectov
  let objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});
  //! Elements UI
  const listContainer = document.querySelector(
    ".tasks-list-section .list-group"
  );

  //! vtoraya zadacha poluchit, obrabotat i dobavit noviye taski
  const form = document.forms["addTask"];
  const inputTitle = form.elements["title"];
  const inputBody = form.elements["body"];
  //console.log(inputTitle, inputBody)// proverayem poluchayem li mi danniye?

  //console.log(objOfTasks); //poluchayem object objectov
  //!Events
  // propisivayem srazu vse vizovi funkciy, a sami funkcii opredelayem nije
  renderAllTasks(objOfTasks);
  form.addEventListener("submit", onFormSubmitHandler);
  listContainer.addEventListener("click", onDeleteHandler);

  function renderAllTasks(tasksList) {
    // fraqment napolnayemiy zadachami, a potom dobavlayemiy v spisok zadach
    if (!tasksList) {
      console.error("Передайте список задач!"); // proverayem peredan li taskList
      return;
    }
    const fraqment = document.createDocumentFragment(); //sozdayem fraqment kot mojno napolnat
    // perebirayem objecti(urok metodi objectov). prinimayet obj i vozvr v vide massiva
    Object.values(tasksList).forEach((task) => {
      //na kajdoy iteracii poluchaem otdelnuyu zadachu
      //console.log(task); // vidim kajduyu zadachu v vide objecta
      // na osnove etoy zadachi nujno sozdat DOM object kotoriy budet dobavlen v fraqment
      const li = listItemTemplate(task);
      fraqment.appendChild(li);
    });
    listContainer.appendChild(fraqment);
  }

  function listItemTemplate(
    { _id, title, body } = {} /*destrukturiruyem object*/
  ) {
    //funkciya budet poluchat na vxode odnu zadachu
    //console.log(_id, title);
    // qeneriruem razmetku
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "flex-wrap",
      "mt-2"
    );
    li.setAttribute("data-task-id", _id); // dobavili k kajdomu li-> data-task-id, dla togo chtob udalat to chto nujno

    const span = document.createElement("span");
    span.textContent = title;
    span.style.fontWeight = "bold";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete task";
    deleteBtn.classList.add("btn", "btn-danger", "ml-auto", "delete-btn");
    const article = document.createElement("p");
    article.textContent = body;
    article.classList.add("mt-2", "w-100");

    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(article);

    return li;
  }

  function onFormSubmitHandler(event) {
    event.preventDefault(); //ostanavlivaem submit perezagruzku
    const titleValue = inputTitle.value; // u inputov est svoystvo value
    const bodyValue = inputBody.value; // u inputov est svoystvo value
    //console.log(titleValue, bodyValue)//proverili pulochayem li danniye iz inputov pri submite?
    if (!titleValue || !bodyValue) {
      //proverka na pustiye znacheniya
      alert("Пожалуйста введите title и body");
      return; //chtob ne povtoralas proverka
    }

    const task = createNewTask(titleValue, bodyValue);
    //console.log(objOfTasks);
    const listItem = listItemTemplate(task); // generiruyet novuyu li'shku na osnove etogo objecta
    //console.log(listItem);
    listContainer.insertAdjacentElement("afterbegin", listItem); // dobavlayet v DOM
    form.reset(); //etot metod sbrasivayet sostoyaniye formi do toy kakoy ona bila pri zagruzki
  } // funkciya obrabotchik dla nasheqo submita

  function createNewTask(title, body) {
    const newTask = {
      title,
      body,
      completed: false,
      _id: `task-${Math.random()}`,
    };
    //console.log(newTask);//proverka
    objOfTasks[newTask._id] = newTask;
    return { ...newTask }; // vozvrashayem novuyu zadachu ili ee kopiyu.
  }

  function deleteTask(id) {
    //console.log(objOfTasks[id])
    const { title } = objOfTasks[id];
    const isConfirm = confirm(`Vi tochno xotite udalit zadachu: ${title}?`);
    //console.log(isConfirm);
    if (!isConfirm) return isConfirm; // esli udaleniye ne podtverjdeno, to nicheqo ne proisxodit
    delete objOfTasks[id];
    return isConfirm;
  }

  function deleteTaskFromHTML(confirmed, el) {
    // udleniye elementa iz razmetki
    if (!confirmed) return; // esli confirmed fals to ne udalayem
    el.remove(); // esli confirmed true to udalayem
  }

  function onDeleteHandler({ target }) {
    //destrukturiruem object i vitagivaem tolko target
    //console.log(e.target);// proverka na DOM'e clicka
    if (target.classList.contains("delete-btn")) {
      const parent = target.closest("[data-task-id]");
      //console.log(parent);// proverka tochnosti clickayemogo li po id
      const id = parent.dataset.taskId; // poluchaem tolko id
      //console.log(id);
      const confirmed = deleteTask(id);
      //console.log(confirmed)
      deleteTaskFromHTML(confirmed, parent);
    }
  }
})(tasks);
/*a. Rezumiruyem pervuyu chast: 
1. Sozdali funkciyu rebderAllTasks, kotoraya na vxod poluchayet object taskov
2. Proverayet chto on peredan
3. Sozdayem fragment budusheqo spiska s zadachami chtob ne dobavlat ix po odnoy, ne vizivayet kajdiy raz pererisovku DOM'a
4. Perebirayem spisok taskov, na kajdoy iteracii odin task peredayem v specialno sozdan funkciyu 'listItemTemplate' - kotoraya zanimayetsa zuqubo generaciey odnogo elementa spiska osovivayas na nashey zadache kotoruyu mi peredali i vozvrashaet 'li'
5. Na kajdoy iteracii mi vizivayem funkciyu 'li = listItemTemplate(task);', poluchayem odin DOM element napolnenniy, dobavlayem eqo vo fragment 'fragment.appendChild(li)' posle perebora lista taskov, i on popadayet na stranicu
*/

/*b. Sledushaya zadacha napisat kod chtob sozdavalis noviye taski
Polzovatel vvodit noviy task zapolnayay pola, klikayet add task button i zadacha poyavlayetsa vverxutaskov
1. Bil realizovan funkcional dobavleniya taski v spisok (str. 107)
2. Dla 1. mi nashli DOM element formu (str. 46), inputTitle i inputBody (str. 47-48), ispolzuya spec sv-vo forms i elements
3. na formu povesili obrabotchik sobitiya 'submit' (str. 54) nanashu formu onFormSubmitHandler
4. vnutri nashey 'function onFormSubmitHandler' mi zabrali znacheniya nashix dvux inputov title i body (str. 109-110)
5. proverili prinimayem li mi znacheniya inputov (str. 112-116), viveli alert i prekratili s pom. return
6. posle sozdali funkciyu createNewTsk()(str. 126), ona sozdayet 1 object zadachi v kotoriy mi zapisivaem danniye title i body peredanniye iz obrabotchika (str. 118), comleted po umolchaniyu false, a takje randomniy _id, dalee dobavlayem etu zadachu v spisok taskov(str. 134), i vozvrashaym kpiyu novoy zadachi(str. 135)
7. kopiyu novoy zadachi mi poluchayem v peremennuyu 'task'(str. 118)
8. dalee mi sozdayem na novom shage listItemTemplate (str. 120) mi sozdayem DOM object - shablon nasheqo elementa spiska na osnove novoy sozdannoy taski.
9. poluchiv etot DOM Object shablon listItem(str. 120), mi eqo dobavlayem s pom insertAdjacentElement (str. 122) v samoe nachalo nasheqo spiska zadach. i sbrasivayem nashu formu (str. 123)
*/

/*c. Udaleniye zadach iz spiska. Nujno otslejivat sobitiye click po knopke delete, posle etogo sprashivat deystvitelno li nujno udalit, esli est podtverjdeniye to Udalit iz DOM'a i udalit ee iz spiska zadach
1. t.k vse elemeti geniriruyutsa v js i net prmogo dostupa k knopke udaleniya, to mi povesili obrabotchik na (str. 56), ves spisok v kot. geniriruyetsa nasha zadacha
2. pri klike mi opredelaye na kom proizoshel click (str. 160), esli class 'delet-btn' to naxodim roditela (str. 161) po attributu "[data-task-id]", kot mi predvaritelno dobavili na kajdiy element pri generacii (str. 90), dla toqo chtobi v dalneyshem konkretno opredelit kakoy imenno element udalit iz DOM'a
3. zaberayem id (str. 163)
4. peredayem id v deleteTask (str. 165), eta funkciya deleteTask(id) (str.141) prinemayet id, vitagivayet title (str.143) dla budusheqo vivoda eqo v okne confirm, sprashivayet podtverjdeniya (str.144), esli otmena to ostanavlivayem funkciyu i vozvrashayem isconfirm false(str.146). esli otvetil ok to udalayetsa zadacha (str.147), i dalee ostanavlivayem zadachu (str.148) i vozvr isConfirm true
5. daleye mi poluchayem etot status v peremennuyu confirmed (str.165) i peredayem eqo v sleduyushiy task (str.167), t.e mi peredayem status - confirmed, i element - parent.
6. funkciya (str.151) prinimayet eto, proverayet (str.153) esli podtverjdeniya nebilo to nicheq ne proisxodit, esli bilo (str.154)  udalayet iz razmetki
*/
