import './style.css'
/* import { getData } from './components/services/services'; */
import { getStates } from "./components/statesPage/statesPage";
/* document.querySelector('#app').innerHTML = `

` */


const btnstates = document.querySelector("#btnstates");
btnstates.addEventListener("click", getStates); 
