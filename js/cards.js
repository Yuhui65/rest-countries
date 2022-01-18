async function render() {
    const apiRestCountries = await fetch('https://restcountries.com/v3.1/region/europe?fields=name,capital,flags,maps');
    const dataListPaysFormJson = await apiRestCountries.json();
    const number = new Intl.NumberFormat("en");

    let countryList = "";
    for (const itemElementItere of dataListPaysFormJson) {
        countryList +=
            `<tr>
            <th class="text-nowrap">${itemElementItere.name.official}</th>
            <td class="text-end">${number.format(itemElementItere.area)}</td>
            <td class="text-end">${number.format(itemElementItere.population)}</td>
            <td class="text-start text-nowrap">${itemElementItere.capital[0]}</td>
        </tr>`
    }

    document.querySelector("#table-body").innerHTML = countryList;
    // const elementHTMLOuJeVeuxAfficherLesDonnees = 

    // elementHTMLOuJeVeuxAfficherLesDonnees.innerHTML = countryList;

}

window.addEventListener("load", render());
