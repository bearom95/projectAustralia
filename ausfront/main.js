import './style.css'
/* import { getData } from './components/services/services'; */
import { States } from "./pages/statesPage/statesPage";
import { Animals } from './pages/animalsPage/animalsPage';
/* import { getAnimals } from './pages/animalsPage/animalsPage'; */



const statesDiv = document.querySelector("#statesDiv");
statesDiv.addEventListener("click", States); 

const animalsDiv = document.querySelector("#animalsDiv");
animalsDiv.addEventListener("click", Animals);

