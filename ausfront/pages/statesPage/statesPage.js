import { getData } from "../../services/services";
import { stateCard } from "../../components/stateCard/stateCard";
import "./statesPage.css" 

let statesList;

 const getStates = async () => {
    const states = await getData("states");  //getStates aloja los datos del json en una constante, que es la que le pasa a la funcion de print
    statesList = states;
    printStates(states, "");
};

const printStates = (list, word) => {
    const filteredStates = list.filter((element) =>
    element.name.toLowerCase().includes(word.toLowerCase())
  );

    const statePicName = document.querySelector(".statePicName");
    statePicName.innerHTML = "";
    for (const element of filteredStates) {
        statePicName.innerHTML += `
        <div class="eachcard">
            <img class="${element.map}" src="${element.map}" alt="${element.map}">
            <h2>${element.name}</h2>
        </div>`
    }

    statePicName.addEventListener("click", (evento) => {
        const state = list.find(element => element.map === evento.path[0].className)
        stateCard(state)
    })
};

export const States = () => {
    const app = document.querySelector("#app");
    app.innerHTML = "",
    app.innerHTML = `
        <div class="nav">
            <button><a href="javascript:location.reload(true)">Home</a></button>
            <input type="text" id="search" placeholder="What state are you looking for?"/>
        </div>
        <div class="statePicName" id="statePicName">
    `;

    getStates();
    const searchInput = document.querySelector("#search");
    searchInput.addEventListener("input", (ev) =>
    printStates(statesList, ev.target.value)
    );

}
 