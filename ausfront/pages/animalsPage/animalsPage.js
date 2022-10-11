import { getData } from "../../services/services";
import { animalCard } from "../../components/animalCard/animalCard";
import "./animalsPage.css"


export const getAnimals = async () => {
    const animals = await getData("animals");  //getAnimals aloja los datos del json en una constante, que es la que le pasa a la funcion de print
    printAnimals(animals);
};

const printAnimals = (list) => {
    document.addEventListener("click", (evento) => {
        const animal = list.find(element => element.name === evento.path[0].className)
        animalCard(animal)
    })

    const app = document.querySelector("#app");
    app.innerHTML = "";
    const section = document.createElement("section");
    section.classList.add("animals-section");

    app.appendChild(section);
    for (const element of list ) {
        section.innerHTML += `
        <div class="animalPicName" id="animalPicName">
            <img class="${element.name}"src="${element.image}" alt="${element.name}">
            <h2>${element.name}</h2>
        </div>`
    }
    //AQUI TENGO QUE HACER LO DEL EVENTO PORQUE NO LE PODEMOS PASAR PARAMETRO A ANIMALCARD, ESTO IRÍA ARRIBA, COMO TENEMOS LO DE PLANETAS
    /*  const animalPicName = document.queryselectorall("#animalPicName");
     animalPicName.addEventListener("click", animalCard(animal)); */
     
};

export const Animals = () => {
    getAnimals();
}