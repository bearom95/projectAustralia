import { getData } from "../services/services";


export const getStates = async () => {
    const states = await getData("states");  //getStates aloja los datos del json en una constante, que es la que le pasa a la funcion de print
    printStates(states);
};

const printStates = (list) => {
    
    const app = document.querySelector("#app");
    app.innerHTML = "";
    const section = document.createElement("section");
    section.classList.add("states-section");
    /* const animalsTitle = document.createElement("animalsTitle");
    animalsTitle.classList.add("animals-title"); // quiero meter un div que contenga STATES OF ASTRALIA como titulo
    section.appendChild(animalsTitle); */

    app.appendChild(section);
    for (const element of list ) {
        section.innerHTML += `
        <div class="statePicName">
            <img src="${element.image}" alt="${element.name}">
            <h2>${element.name}</h2>
            <h3>Abbreviation: ${element.abbreviation}</h3>
            <h3>Capital: ${element.capital}</h3>
        </div>`
    }
    
        /* app.innerHTML = ""; */
        /* app.appendChild(section); */
};

export const States = () => {
    getStates();
}