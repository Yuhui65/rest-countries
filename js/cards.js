async function render() {
    const apiRestCountries = await fetch('https://restcountries.com/v3.1/region/europe?fields=name,capital,flags,maps');
    const dataListPaysFormJson = await apiRestCountries.json();

    let countryList = "";
    for (const itemElementItere of dataListPaysFormJson) {
        countryList +=
            `<div classe = "col"
            <div classe = "card h-106">
            >
            </div>`
        
            // <img src="..." class="card-img-top" alt="...">
            < div class="card-body" >
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                        content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div >
    }

    document.querySelector("#cardcountries").innerHTML = countryList;
    // const elementHTMLOuJeVeuxAfficherLesDonnees = 

    // elementHTMLOuJeVeuxAfficherLesDonnees.innerHTML = countryList;

}

window.addEventListener("load", render());
