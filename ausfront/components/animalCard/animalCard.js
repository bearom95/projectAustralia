import "./animalCard.css"

    export const animalCard = (item) => {
        const app = document.querySelector("#app");
        app.innerHTML = "";
        app.innerHTML = `
        <div class="nav">
            <button><a href="javascript:location.reload(true)">Home</a></button>
        </div>
        <figure class="animalcard"> 
            <img class="${item.image}" src="${item.image}">
            <div class="description">
                <h2>${item.name}</h2>
                <p class="question">In a land full of dangers... Could this animal kill me?</p>
                <p class="answer">${item.kill}</p>
                <p class="definition">${item.description}</p>
            </div>
        </figure> 
        `  
    }
    