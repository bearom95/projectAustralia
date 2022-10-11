import "./animalCard.css"

    export const animalCard = (item) => {
        const app = document.querySelector("#app");
        app.innerHTML = "";
        app.innerHTML = `
        <figure class="card"> 
            <img src="${item.image}">
            <h2>${item.name}</h2>
            <div class="description">
                <p>In a land full of dangers... Could this animal kill me?</p>
                <p>${item.kill}</p>
                <p>${item.description}</p>
            </div>
        </figure>
        `  
    }
    