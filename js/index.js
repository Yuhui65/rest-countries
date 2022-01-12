                            // Fonction asynchrone (ne perd pas trop de temps à comprendre çà)
async function render() {
                            // On assigne la variable 'response' avec le résultat de la requête API (fetch = "aller chercher")
    const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=name");
                            // Lorsqu'une réponse est retournée
                            // On transforme la réponse en un format compréhensible par Javascript (le JSON) 
                            // .json() est un méthode de l'objet fetch
    const data = await response.json(); //De retourner la réponse au format json
    
                            // On créer une variable vide qui va contenir la liste des noms de pays
    let listCountries = "";
                            // A chaque itération sur la liste contenue dans le fichier JSON récupérée 
    data.forEach(nameCountry => {
        listCountries += `<li>${nameCountry.name.official}</li>`;
                            // console.log(nameCountry.name.official);
                            // console.log(listCountries);
                            // exemple de format de nameCountry:
                            // {
                            //   "name": {
                            //     "common": "Romania",
                            //     "official": "Romania",
                            //     "nativeName": {
                            //       "ron": {
                            //         "official": "România",
                            //         "common": "România"
                            //       }
                            //     }
                            //   }
                            // }
    });
                            // C'est ainsi que pour récupérer le nom officiel il faut écrire 'nameCountry.name.official'
                            // On ajoute un élément HTML '<li>' avec le nom officiel du pays à notre variable "listCountries"
                            //On récupère l'objet du DOM qui correspond ici à un <ul>
                            // Et on utilise la méthode innerHTML pour afficher la liste des pays sur la page
    const elementHtml = document.querySelector("#countries")
    elementHtml.innerHTML = listCountries;
}
                            // Au chargement de la page, dès que la fenêtre sera chargée, la fonction 'render' est appellé et le DOM mis à jour avec les données des pays 
window.addEventListener("load", render);
