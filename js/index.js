async function render() {
    const response = await fetch('https://restcountries.com/v3.1/region/europe?fields=name');
    const data = await response.json();
    let listCountries = "";


    data.forEach(nameCountry => {
        listCountries += `<li>${nameCountry.name.official}</li>`;

        const elementHtml = document.querySelector("#countries");
        elementHtml.innerHTML = listCountries;
    });
}                            
    window.addEventListener("load", render);
