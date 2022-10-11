import { getData } from "../../services/services";
import { stateCard } from "../../components/stateCard/stateCard";
import "./statesPage.css"


export const getStates = async () => {
    const states = await getData("states");  //getStates aloja los datos del json en una constante, que es la que le pasa a la funcion de print
    printStates(states);
};

const printStates = (list) => {
    document.addEventListener("click", (evento) => {
        const state = list.find(element => element.map === evento.path[0].className)
        stateCard(state)
    })
    
    const app = document.querySelector("#app");
    app.innerHTML = "";
    const section = document.createElement("section");
    section.classList.add("states-section");


    app.appendChild(section);
    for (const element of list ) {
        section.innerHTML += `
        <div class="statePicName">
            <img class="${element.map}" src="${element.map}" alt="${element.map}">
            <h2>${element.name}</h2>
        </div>`
    }
    
};

export const States = () => {
    getStates();
}