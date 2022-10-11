import './style.css'
/* import { getData } from './components/services/services'; */
import { getStates } from "./pages/statesPage/statesPage";
import { Animals } from './pages/animalsPage/animalsPage';
/* import { getAnimals } from './pages/animalsPage/animalsPage'; */



const statesDiv = document.querySelector("#statesDiv");
statesDiv.addEventListener("click", getStates); 

const animalsDiv = document.querySelector("#animalsDiv");
animalsDiv.addEventListener("click", Animals);
