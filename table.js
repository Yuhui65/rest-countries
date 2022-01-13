async function render() {
    const apiRestCountries = await fetch('https://restcountries.com/v3.1/region/europe?fields=name,area,population,capital');
    const dataListPaysFormJson = await apiRestCountries.json();

    
    let countryList = "";
    for (const itemElementItere of dataListPaysFormJson) {
        countryList += 
        `<tr>
            <th>${itemElementItere.name.official}</th>
            <td>${itemElementItere.area}</td>
            <td>${itemElementItere.population}</td>
            <td>${itemElementItere.capital[0]}</td>
        </tr>`
    }

    const elementHTMLOuJeVeuxAfficherLesDonnees = document.querySelector("#table-body");
    
    elementHTMLOuJeVeuxAfficherLesDonnees.innerHTML = countryList;

}


window.addEventListener("load", render());

