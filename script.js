function countriesFetch() {

    const countriesSelect = document.getElementById("countriesList");

    fetch("https://restcountries.com/v2/all")
    .then((data)=> data.json())
    .then((countries)=> {
        countries.forEach((country)=>{

            const countryOption = document.createElement("option")
            countryOption.value = country.name;
            countryOption.text= country.name;

            countriesSelect.append(countryOption);
            
        })
    })    
}
function getCountryData() {
    const selectedCountry = document.getElementById("countriesList").value
    
    fetch(`https://restcountries.com/v2/name/${selectedCountry}?fullText=true`)
    .then((data) => data.json())
    .then((countryData) => {
       console.log(countryData);
        const countryFlag = countryData[0].flags.png;
        const countryName =countryData[0].name;
        const countryCapital = countryData[0].capital;
        const countryRegion = countryData[0].region;
        const countryLanguages = countryData[0].languages[0].name;
        const countryCurrencies = countryData[0].currencies[0].name;
        const countryBorders = countryData[0].borders;
        const countryPopulation = countryData[0].population;

        let htmlData = `
             <div class="card" style="width: 19rem;">
               <img src="${countryFlag}" class ="card-img-top" alt="${countryName}">
               <div class = "card-body">
                 <h2 class ="card-title1">${countryName}</h2>
                 <h6 class ="card-title"><strong>Capital</strong> ${countryCapital}</h6>
                 <h6 class ="card-title"><strong>Region</strong> ${countryRegion}</h6>
                 <h6 class ="card-title"><strong>Languages</strong> ${countryLanguages}</h6>
                 <h6 class ="card-title"><strong>Currency</strong> ${countryCurrencies}</h6>
                 <h6 class ="card-title"><strong>Borders</strong> ${countryBorders}</h6>
                 <h6 class ="card-title"><strong>Population</strong> ${countryPopulation}</h6>
              </div>
            </div>
         `;
         document.getElementById("countryDataDisplay").innerHTML = htmlData;
         console.log(countryData);
    })
    
}
window.addEventListener('load',function(){
    countriesFetch();
})