import './style.css'
/* import { getData } from './components/services/services'; */
import { getStates } from "./pages/statesPage/statesPage";
import { getAnimals } from './pages/animalsPage/animalsPage';
/* document.querySelector('#app').innerHTML = `

` */


const statesDiv = document.querySelector("#statesDiv");
statesDiv.addEventListener("click", getStates); 

const animalsDiv = document.querySelector("#animalsDiv");
animalsDiv.addEventListener("click", getAnimals);
