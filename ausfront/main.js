import './style.css'
/* import { getData } from './components/services/services'; */
import { getStates } from "./components/statesPage/statesPage";
import { getAnimals } from './components/animalsPage/animalsPage';
/* document.querySelector('#app').innerHTML = `

` */


const statesDiv = document.querySelector("#statesDiv");
statesDiv.addEventListener("click", getStates); 

const animalsDiv = document.querySelector("#animalsDiv");
animalsDiv.addEventListener("click", getAnimals);
