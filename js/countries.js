const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    // console.log(countries);
    const countriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(countriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

const getCountryHTML = ({ name, flags, population, area }) => {
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <p>area : ${area}</p>
            <img src="${flags.png}">
            <h2>population : ${population}</h2>
        </div>
    `
}

// Option 2

// const getCountryHTML = country => {
//     const { name, flags, population } = country;
//     return `
//         <div class="country">
//             <h2>${name.common}</h2>
//             <img src="${flags.png}">
//             <h2>population : ${population}</h2>
//         </div>
//     `
// }


// option 1
// const getCountryHTML = country => {
//     return `
//         <div class="country">
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}">
//             <h2>population : ${country.population}</h2>
//         </div>
//     `
// }

loadCountries();