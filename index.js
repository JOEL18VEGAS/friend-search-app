// Creo las variables de entorno.
const URL_BASE = "https://jsonplaceholder.typicode.com/"; // Solo hay una :v

// Llamo a la losta donde voy a meter a todos los amigos.
const list = document.querySelector("#lista");

// Llamo al boton que va a buscar a todos los amigos.
const Boton = document.querySelector("#boton");

// Llamo al boton que va a buscar por id.
const IconSearchButton = document.querySelector('.icon-search')

// const BotonSearch = document.querySelector('#')

// Creo algo ( ahorita tengo que ponerle nombre)
const inputSearch = document.querySelector("#input-search");

const addAllFriends = (response) => {
    // Vacio la lista si esta llena ( tema de actualizacion )
  list.innerHTML = "";

  response.forEach((element) => {
    let li = document.createElement("li");
    li.classList.add("li-card");

    let img = document.createElement("img");
    img.src = "./img/avatar.svg";
    img.classList.add("avatar-img");

    let imgPencil = document.createElement("img");
    imgPencil.src = "./img/pencilrule.svg";
    imgPencil.classList.add("icon-li");

    let imgCalendar = document.createElement("img");
    imgCalendar.src = "./img/calendar.svg";
    imgCalendar.classList.add("icon-li");

    let imgEmail = document.createElement("img");
    imgEmail.src = "./img/email.svg";
    imgEmail.classList.add("icon-li");

    li.appendChild(img);

    const div = document.createElement("div");
    div.classList.add("card-content");

    const spanName = document.createElement("span");
    spanName.classList.add("span-card");
    spanName.appendChild(imgPencil);
    spanName.appendChild(document.createTextNode(element.name));
    div.appendChild(spanName);
    
    const spanAge = document.createElement("span");
    spanAge.classList.add("span-card");
    spanAge.appendChild(imgCalendar);
    spanAge.appendChild(document.createTextNode(element.phone));
    div.appendChild(spanAge);
    
    const spanEmail = document.createElement("span");
    spanEmail.classList.add("span-card");
    spanEmail.appendChild(imgEmail);
    spanEmail.appendChild(document.createTextNode(element.email));
    div.appendChild(spanEmail);

    li.appendChild(div);
    list.appendChild(li);
  });
};


// Llamo al metodo para colocarle la funcionalidad a mi boton.
Boton.addEventListener("click", () => {
  $.get(`${URL_BASE}users/`, addAllFriends);
});

const container = document.querySelector('.card-friend')

const Search = ()=>{

  const id = inputSearch.value
  $.get(`${URL_BASE}users/${id}` , (response) => {

    container.innerHTML = ''

    console.log(response + ' hola')
    
    let li = document.createElement("li");
    li.classList.add("li-card");

    let img = document.createElement("img");
    img.src = "./img/avatar.svg";
    img.classList.add("avatar-img");

    let imgPencil = document.createElement("img");
    imgPencil.src = "./img/pencilrule.svg";
    imgPencil.classList.add("icon-li");

    let imgCalendar = document.createElement("img");
    imgCalendar.src = "./img/calendar.svg";
    imgCalendar.classList.add("icon-li");

    let imgEmail = document.createElement("img");
    imgEmail.src = "./img/email.svg";
    imgEmail.classList.add("icon-li");

    li.appendChild(img);

    const div = document.createElement("div");
    div.classList.add("card-content");

    const spanName = document.createElement("span");
    spanName.classList.add("span-card");
    spanName.appendChild(imgPencil);
    spanName.appendChild(document.createTextNode(response.name));
    div.appendChild(spanName);
    
    const spanAge = document.createElement("span");
    spanAge.classList.add("span-card");
    spanAge.appendChild(imgCalendar);
    spanAge.appendChild(document.createTextNode(response.phone));
    div.appendChild(spanAge);
    
    const spanEmail = document.createElement("span");
    spanEmail.classList.add("span-card");
    spanEmail.appendChild(imgEmail);
    spanEmail.appendChild(document.createTextNode(response.email));
    div.appendChild(spanEmail);

    li.appendChild(div);

    container.appendChild(li)
  })
  .fail(() => {

    container.innerHTML = ''

    let li = document.createElement("li");
    li.classList.add("li-card");

    let notFound = document.createElement('span')
    notFound.classList.add('text-nfd')
    notFound.innerHTML = 'Friend Not Found'

    li.appendChild(notFound)

    container.appendChild(li)
  });

}

// Ahora juego con el Input.
IconSearchButton.addEventListener( 'click' , Search )