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
  //! a.1.
  //console.log(arrOfTasks) // mi vidim massiv s kotorim ne udobno rabotat pri rassherenii. Perevodim v obj objectov
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    // na kajdoy iteracii poluchaem acc isx znach kotor - {}pustoy obj; i tekushuyu zadachu task
    acc[task._id] = task; //v acc sozdayem kluch pod ID zadachi v pole objecta task kuda budem zapisivat zadachu
    return acc; // vozvrashayem nash accumulator
  }, {});
  //console.log(objOfTasks); //smotrim i vidim chto poluchayem object objectov, uproshayet dostup k zadache i izvesten ID, i ochen legko po kluchu poluchit dostup k etoy zadache, udalit ili izmenit.

  //! Themes
  const themes = {
    default: {
      "--base-text-color": "#212529",
      "--header-bg": "#007bff",
      "--header-text-color": "#fff",
      "--default-btn-bg": "#007bff",
      "--default-btn-text-color": "#fff",
      "--default-btn-hover-bg": "#0069d9",
      "--default-btn-border-color": "#0069d9",
      "--danger-btn-bg": "#dc3545",
      "--danger-btn-text-color": "#fff",
      "--danger-btn-hover-bg": "#bd2130",
      "--danger-btn-border-color": "#dc3545",
      "--input-border-color": "#ced4da",
      "--input-bg-color": "#fff",
      "--input-text-color": "#495057",
      "--input-focus-bg-color": "#fff",
      "--input-focus-text-color": "#495057",
      "--input-focus-border-color": "#80bdff",
      "--input-focus-box-shadow": "0 0 0 0.2rem rgba(0, 123, 255, 0.25)",
    },
    dark: {
      "--base-text-color": "#212529",
      "--header-bg": "#343a40",
      "--header-text-color": "#fff",
      "--default-btn-bg": "#58616b",
      "--default-btn-text-color": "#fff",
      "--default-btn-hover-bg": "#292d31",
      "--default-btn-border-color": "#343a40",
      "--default-btn-focus-box-shadow":
        "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
      "--danger-btn-bg": "#b52d3a",
      "--danger-btn-text-color": "#fff",
      "--danger-btn-hover-bg": "#88222c",
      "--danger-btn-border-color": "#88222c",
      "--input-border-color": "#ced4da",
      "--input-bg-color": "#fff",
      "--input-text-color": "#495057",
      "--input-focus-bg-color": "#fff",
      "--input-focus-text-color": "#495057",
      "--input-focus-border-color": "#78818a",
      "--input-focus-box-shadow": "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
    },
    light: {
      "--base-text-color": "#212529",
      "--header-bg": "#fff",
      "--header-text-color": "#212529",
      "--default-btn-bg": "#fff",
      "--default-btn-text-color": "#212529",
      "--default-btn-hover-bg": "#e8e7e7",
      "--default-btn-border-color": "#343a40",
      "--default-btn-focus-box-shadow":
        "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
      "--danger-btn-bg": "#f1b5bb",
      "--danger-btn-text-color": "#212529",
      "--danger-btn-hover-bg": "#ef808a",
      "--danger-btn-border-color": "#e2818a",
      "--input-border-color": "#ced4da",
      "--input-bg-color": "#fff",
      "--input-text-color": "#495057",
      "--input-focus-bg-color": "#fff",
      "--input-focus-text-color": "#495057",
      "--input-focus-border-color": "#78818a",
      "--input-focus-box-shadow": "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
    },
  };
  let lastSelectedTheme = localStorage.getItem('app_theme') || 'default';
  //console.log(lastSelectedTheme)

  //! a.12. Elements UI
  const listContainer = document.querySelector(
    ".tasks-list-section .list-group"
  );

  //! vtoraya zadacha poluchit, obrabotat i dobavit noviye taski
  //! b.1.
  const form = document.forms["addTask"]; //v nem xranitsa kollekciya vsex form na stranice
  const inputTitle = form.elements["title"]; //naxodim otdelniye inputi, v kot po imeni ili id mojem poluchit dostup
  const inputBody = form.elements["body"]; // naxodim vtoroy input
  /*console.log(inputTitle, inputBody)// proverayem poluchayem li mi danniye?*/
  const themeSelect = document.getElementById("themeSelect");

  //!Events, obrabotchiki sobitiy
  /*propisivayem srazu vse vizovi funkciy, a sami funkcii opredelayem nije*/
  setTheme(lastSelectedTheme);// peredayem temu
  renderAllTasks(objOfTasks); //! a.3.
  form.addEventListener("submit", onFormSubmitHandler); //! b.3
  listContainer.addEventListener("click", onDeleteHandler);
  themeSelect.addEventListener("change", onThemeSelectHandler);

  function renderAllTasks(tasksList) {
    //! a2.
    /*generiruyem fraqment napolnayemiy zadachami, a potom dobavlayemiy v spisok zadach*/
    if (!tasksList) {
      console.error(
        "Передайте список задач!"
      ); /*proverayem peredan li taskList*/
      return;
    }
    const fraqment = document.createDocumentFragment(); //! 4. /*sozdayem fraqment kot mojno napolnat zadachami*/

    /*perebirayem objecti(urok metodi objectov). prinimayet obj i vozvr v vide massiva*/
    Object.values(tasksList).forEach((task) => {
      //! a5.
      /*Obj.values prinimayet v kachestve argumenta object(taskList) i vozvrashyet ego znacheniye vvide masiva*/
      /*na kajdoy iteracii forEach mi poluchaem otdelnuyu zadachu*/
      //console.log(task); // vidim kajduyu zadachu v vide objecta
      /*na osnove etoy zadachi nujno sozdat DOM object kotoriy budet dobavlen v fraqment*/
      const li = listItemTemplate(task);
      fraqment.appendChild(li); //! a11.
    });
    listContainer.appendChild(fraqment); //! a13.
  }

  function listItemTemplate( //! a6.
    /*etu funkciyu mi budem vizivat na kajdoy iteracii vnutri funkcii renderAllTask, na kajdoy iteracii mi budem vizivat listItemTemplate kotraya vernet DOM object odnogo elementa zadachi (str.78)*/
    { _id, title, body } = {} /*destrukturiruyem object*/
  ) {
    //console.log(_id, title);
    /*qeneriruem razmetku*/ //! a7.
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "flex-wrap",
      "mt-2"
    );
    li.setAttribute(
      "data-task-id",
      _id
    ); /*dobavili k kajdomu li-> data-task-id, dla togo chtob udalat to chto nujno*/
    //! a8.
    //zagalovok
    const span = document.createElement("span");
    span.textContent = title;
    span.style.fontWeight = "bold";
    //knopka delete
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete task";
    deleteBtn.classList.add("btn", "btn-danger", "ml-auto", "delete-btn");
    //paragraph
    const article = document.createElement("p");
    article.textContent = body; //to chto bilo peredanno v vide tela zadachi v listItemTemplate()
    article.classList.add("mt-2", "w-100");
    //! a9.
    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(article);
    //! a10.
    return li;
  }

  //! b.2 onFormSubmitHandler
  /*Nujno na formu povesit sobitiye submita, mi doljni obrabotat formu i vipolnit vse nujniye deystviya*/
  function onFormSubmitHandler(event) {
    event.preventDefault(); //ostanavlivaem submit perezagruzku stranici
    const titleValue = inputTitle.value; // u inputov est svoystvo value //! b.4
    const bodyValue = inputBody.value; // u inputov est svoystvo value //! b.5
    //console.log(titleValue, bodyValue)//proverili pulochayem li danniye iz inputov pri submite?
    if (!titleValue || !bodyValue) {
      //! b.6
      //proverka na pustiye znacheniya
      alert("Пожалуйста введите title и body");
      return; //chtob funkciya ne prodoljala vipolnatsa
    }

    const task = createNewTask(titleValue, bodyValue); //! b.8
    //console.log(objOfTasks);
    const listItem = listItemTemplate(task); // generiruyet novuyu li'shku na osnove etogo objecta //! b.10
    //console.log(listItem);
    listContainer.insertAdjacentElement("afterbegin", listItem); // dobavlayet v DOM nov zadachu //! b.11
    form.reset(); //etot metod sbrasivayet sostoyaniye formi do toy kakoy ona bila pri zagruzki //! b.12
  }

  //! b.7
  /*novaya func createNewTask, na osnove dvux znacheniy (title, body) budet sozdavat noviy object zadach i dobavlat eqo v spisok taskov. Vizivat ee mi budem iz obrabotchika*/
  function createNewTask(title, body) {
    const newTask = {
      title,
      body,
      completed: false,
      _id: `task-${Math.random()}`,
    };
    //console.log(newTask);//proverka
    objOfTasks[newTask._id] = newTask; //! b.8
    return { ...newTask }; // vozvrashayem novuyu zadachu ili ee kopiyu. //! b.9
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

  function onThemeSelectHandler(event) {
    const selectedTheme = themeSelect.value;
    const isConfirmed = confirm(
      `Вы действительно хотите изменить тему?: ${selectedTheme}`
    );
    if (!isConfirmed){
     themeSelect.value = lastSelectedTheme;// sbrasivaniye na poslednego vibrannogo pri otmene
    return; // esli otmenili
    }
    setTheme(selectedTheme); //esli podtverdili
    lastSelectedTheme = selectedTheme; // esli podtverjdeno to themeSelect.value izmenayetsa na vibrannuyu
    localStorage.setItem('app_theme', selectedTheme);// soxranayem vibrannuyu temu na localstorage
  }
  function setTheme(name) {
    //console.log(name)
    const selectedThemeObj = themes[name]; // takim obrazom iz objecta vitagivaym nujniy nam element s peremennimi
    /*set'im - nujno vizvat setProperty na document.body.style, cherez kotory i ustanovit peremenniye*/
    Object.entries(selectedThemeObj).forEach(([key, value]) => {
      //console.log(key, value);// proverka na polucheniye
      document.documentElement.style.setProperty(key, value);
    });
  }
})(tasks); //samovizivayushayasa funkciya
/*a. Rezumiruyem pervuyu chast: 
1. Sozdali funkciyu renderAllTasks(str.56), kotoraya na vxod poluchayet object taskov objOfTasks, proverayet chto on peredan(str.60)
2. Sozdayem fragment(str.69) budusheqo spiska s zadachami chtob ne dobavlat ix po odnoy, ne vizivaya kajdiy raz pererisovku DOM'a
3. Perebirayem spisok taskov (str.72), na kajdoy iteracii odin task peredayem v specialno sozdan funkciyu 'listItemTemplate' (str.78) - kotoraya zanimayetsa zuqubo generaciey odnogo elementa spiska osovivayas na nashey zadache kotoruyu mi peredali i vozvrashaet 'li' s qotovoy razmetkoy task'a
4. Na kajdoy iteracii mi vizivayem funkciyu 'li = listItemTemplate(task);'(str.78), poluchayem odin DOM element napolnenniy, dobavlayem eqo vo fragment 'fragment.appendChild(li)'(str.79) posle perebora lista taskov, i on popadayet na stranicu
*/

/*b. Sledushaya zadacha napisat kod chtob sozdavalis noviye taski
Polzovatel vvodit noviy task zapolnayay pola, klikayet add task button i zadacha poyavlayetsa vverxutaskov
1. Bil realizovan funkcional dobavleniya odnoy taski v spisok zadach (str.107)
2. Dla 1. mi nashli DOM element formu (str.46), inputTitle i inputBody (str.47-48), ispolzuya spec sv-vo forms i elements
3. na formu povesili obrabotchik sobitiya 'submit' (str.54) nanashu formu onFormSubmitHandler
4. vnutri nashey 'function onFormSubmitHandler' mi zabrali znacheniya nashix dvux inputov title i body (str.109-110)
5. proverili prinimayem li mi znacheniya inputov (str.112-116), viveli alert i prekratili s pom. return
6. posle sozdali funkciyu createNewTsk()(str.126), ona sozdayet 1 object zadachi v kotoriy mi zapisivaem danniye title i body peredanniye iz obrabotchika (str.118), comleted po umolchaniyu false, a takje randomniy _id, dalee dobavlayem etu zadachu v spisok taskov(str.134), i vozvrashaym kpiyu novoy zadachi(str.135)
7. kopiyu novoy zadachi mi poluchayem v peremennuyu 'task'(str.118)
8. dalee mi sozdayem na novom shage listItemTemplate (str.120) mi sozdayem DOM object - shablon nasheqo elementa spiska na osnove novoy sozdannoy taski.
9. poluchiv etot DOM Object shablon listItem(str.120), mi eqo dobavlayem s pom insertAdjacentElement (str.122) v samoe nachalo nasheqo spiska zadach. i sbrasivayem nashu formu (str.123)
*/

/*c. Udaleniye zadach iz spiska. Nujno otslejivat sobitiye click po knopke delete, posle etogo sprashivat deystvitelno li nujno udalit, esli est podtverjdeniye to Udalit iz DOM'a i udalit ee iz spiska zadach
1. t.k vse elemeti geniriruyutsa v js i net prmogo dostupa k knopke udaleniya, to mi povesili obrabotchik na (str. 56), ves spisok v kot. geniriruyetsa nasha zadacha
2. pri klike mi opredelaye na kom proizoshel click (str. 160), esli class 'delet-btn' to naxodim roditela (str. 161) po attributu "[data-task-id]", kot mi predvaritelno dobavili na kajdiy element pri generacii (str. 90), dla toqo chtobi v dalneyshem konkretno opredelit kakoy imenno element udalit iz DOM'a
3. zaberayem id (str. 163)
4. peredayem id v deleteTask (str. 165), eta funkciya deleteTask(id) (str.141) prinemayet id, vitagivayet title (str.143) dla budusheqo vivoda eqo v okne confirm, sprashivayet podtverjdeniya (str.144), esli otmena to ostanavlivayem funkciyu i vozvrashayem isconfirm false(str.146). esli otvetil ok to udalayetsa zadacha (str.147), i dalee ostanavlivayem zadachu (str.148) i vozvr isConfirm true
5. daleye mi poluchayem etot status v peremennuyu confirmed (str.165) i peredayem eqo v sleduyushiy task (str.167), t.e mi peredayem status - confirmed, i element - parent.
6. funkciya (str.151) prinimayet eto, proverayet (str.153) esli podtverjdeniya nebilo to nicheq ne proisxodit, esli bilo (str.154)  udalayet iz razmetki
*/
