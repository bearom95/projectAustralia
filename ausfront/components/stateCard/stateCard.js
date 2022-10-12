import "./stateCard.css"
 
    export const stateCard = (item) => {
        const app = document.querySelector("#app");
        app.innerHTML = "";
        app.innerHTML = `
        <div class="nav">
            <button><a href="javascript:location.reload(true)">Home</a></button>
        </div>
        <figure class="statecard"> 
            <img src="${item.map}" alt="${item.map}">
            <div class="info">
                <h2>${item.name}</h2>
                <h3>Abbreviation: ${item.abbreviation}</h3>
                <h4>Capital: ${item.capital}</h4>
                <h4>Extension: ${item.extension}</h4>
                <h4>Famous for: ${item.attractions}</h4>
            </div>
        </figure>
        <div class="landscapes">
            <img src="${item.image1}">
            <img src="${item.image2}">
        </div>
        
        `  
    }

