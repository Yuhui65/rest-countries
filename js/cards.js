async function render() {
    const apiRestCountries = await fetch('https://restcountries.com/v3.1/region/europe?fields=name,capital,flags,maps');
    const dataListPaysFormJson = await apiRestCountries.json();

    let countryList = "";
    for (const itemElementItere of dataListPaysFormJson) {
        countryList += 
        `<div>
            <div class="card h-100">
                <a href=${itemElementItere.maps.openStreetMaps} target="_blank"><img src="${itemElementItere.flags.png}" class="card-img-top" alt=""></a>
                <div class="card-body">
                <h5 class="card-title">${itemElementItere.name.official}</h5>
                <h6 class="card-text">${itemElementItere.capital}</h6>
                </div>
            </div>
        </div>`            
    };

    document.querySelector("#cards").innerHTML = countryList;

    // const elementHTMLOuJeVeuxAfficherLesDonnees = 

    // elementHTMLOuJeVeuxAfficherLesDonnees.innerHTML = countryList;

}

window.addEventListener("load", render());
