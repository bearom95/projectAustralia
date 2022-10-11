import "./stateCard.css"

    export const stateCard = (item) => {
        const app = document.querySelector("#app");
        app.innerHTML = "";
        app.innerHTML = `
        <figure class="card"> 
            <img src="${item.map}" alt="${item.map}">
            <h2>${item.name}</h2>
            <h3>Abbreviation: ${item.abbreviation}</h3>
            <h4>Capital: ${item.capital}</h4>
            <h4>Extension: ${item.extension}</h4>
            <h4>Famous for: ${item.attractions}</h4>
            <div class="landscapes">
                <img src="${item.image1}">
                <img src="${item.image2}">
            </div>
        </figure>
        `  
    }

