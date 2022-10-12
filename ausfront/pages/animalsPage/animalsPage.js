import { getData } from "../../services/services";
import { animalCard } from "../../components/animalCard/animalCard";
import "./animalsPage.css"


let animalList; //estos son los datos del JSON


/* export */ const getAnimals = async () => {
    const animals = await getData("animals");  //getAnimals aloja los datos del json en una constante, que es la que le pasa a la funcion de print
    animalList = animals;
    //  //Ejecutamos printAnimals pasandole la lista como 1er parametro y el string vacio como palabra en el segundo
    printAnimals(animals, "");
};

const printAnimals = (list, word) => {
    const filteredAnimals = list.filter((element) =>
    element.name.toLowerCase().includes(word.toLowerCase())
  );

    const animalPicName = document.querySelector(".animalPicName");
    animalPicName.innerHTML = "";
    for (const element of filteredAnimals ) {
        animalPicName.innerHTML += `
            <img class="${element.name}"src="${element.image}" alt="${element.name}">
            <h2>${element.name}</h2>`
    }

    animalPicName.addEventListener("click", (evento) => {
        const animal = list.find(element => element.name === evento.path[0].className)
        animalCard(animal)
    })
     
};

export const Animals = () => {
    const app = document.querySelector("#app");
    app.innerHTML = "",
    app.innerHTML = `
    <section class="animals-section">
        <input type="text" id="search" placeholder="What animal are you looking for?:"/>
        <div class="animalPicName" id="animalPicName">
    </section>
    `;

    getAnimals();
    const searchInput = document.querySelector("#search");
    searchInput.addEventListener("input", (ev) =>
    printAnimals(animalList, ev.target.value)
    );

}