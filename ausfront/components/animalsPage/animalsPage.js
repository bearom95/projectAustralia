import { getData } from "../services/services";


export const getAnimals = async () => {
    const animals = await getData("animals");  //getAnimals aloja los datos del json en una constante, que es la que le pasa a la funcion de print
    printAnimals(animals);
};

const printAnimals = (list) => {
    const app = document.querySelector("#app");
    app.innerHTML = "";
    const section = document.createElement("section");
    section.classList.add("animals-section");
    /* const animalsTitle = document.createElement("animalsTitle");
    animalsTitle.classList.add("animals-title"); // quiero meter un div que contenga ANIMALS OF ASTRALIA como titulo
    section.appendChild(animalsTitle); */

    app.appendChild(section);
    for (const element of list ) {
        section.innerHTML += `
        <div class="animalPicName">
            <img src="${element.image}" alt="${element.name}">
            <h2>${element.name}</h2>
        </div>`
    }
    
        /* app.innerHTML = ""; */
        /* app.appendChild(section); */
};

export const Animals = () => {
    getAnimals();
}