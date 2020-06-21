/**
 * Estado da Aplicação
 */
let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let favoriteCountries = [];

let countCountries = 0;
let countFavorites = 0;

let totalPopulationList = 0;
let totalPopulationFavorites = 0;

let numberFormat = null;

window.addEventListener('load', () => {
  tabCountries = document.querySelector('#tabCountries');
  tabFavorites = document.querySelector('#tabFavorites');
  countCountries = document.querySelector('#countCountries');
  countFavorites = document.querySelector('#countFavorites');
  totalPopulationList = document.querySelector('#totalPopulationList');
  totalPopulationFavorites = document.querySelector(
    '#totalPopulationFavorites'
  );

  numberFormat = Intl.NumberFormat('pt-BR');

  searchCountries();
});

function searchCountries() {
  const urlCountries = 'https://restcountries.eu/rest/v2/all';
  fetch(urlCountries).then((resp) => {
    resp.json().then((data) => {
      formatCountriesResponse(data);
    });
  });
}

function formatCountriesResponse(data) {
  allCountries = data.map((country) => {
    const { translations, flag, population, numericCode } = country;
    return {
      nome: translations.pt,
      bandeira: flag,
      populacao: population,
      pupulacaoFormatada: formatNumber(population),
      id: numericCode,
    };
  });

  allCountries.sort((a, b) => {
    return a.nome.localeCompare(b.nome);
  });
  
  
  renderAll();
}

function renderAll() {
  renderCountryList();
  renderFavoritesList();
  renderSummary();
  renderCountryButtons();
}

function renderCountryList() {
  let countriesHTML = '<div>';
  allCountries.forEach((country) => {
    const { nome, bandeira, id, populacao, pupulacaoFormatada } = country;
    const countryHTML = `
      <div class='country'>
        <div>
          <a id="${id}" class="waves-effect waves-light btn">+</a>
        </div>
        <div>
          <img src="${bandeira}" alt="${nome}">
        </div>
        <div>
          <ul>
            <li>${nome}</li>
            <li>${pupulacaoFormatada}</li>
          </ul>
        </div>
      </div>
    `;

    countriesHTML += countryHTML;
  });

  countriesHTML += '</div>';
  tabCountries.innerHTML = countriesHTML;
}
function renderFavoritesList() {
  let favoritesHTML = '<div>';
  favoriteCountries.forEach((country) => {
    const { nome, bandeira, id, populacao, pupulacaoFormatada} = country;
    const favoriteCountryHTML = `
      <div class='country'>
        <div>
          <a id="${id}" class="waves-effect waves-light btn red darken-4">-</a>
        </div>
        <div>
          <img src="${bandeira}" alt="${nome}">
        </div>
        <div>
          <ul>
            <li>${nome}</li>
            <li>${pupulacaoFormatada}</li>
          </ul>
        </div>
      </div>
    `;

      favoritesHTML += favoriteCountryHTML;
  });

  favoritesHTML += '</div>';
  tabFavorites.innerHTML = favoritesHTML;
}
function renderSummary() {
  countCountries.textContent = allCountries.length;
  countFavorites.textContent = favoriteCountries.length;

  const totalPopulation = allCountries.reduce((accumulator, current) => {
    return accumulator + current.populacao;
  }, 0);

  const totalFavoritesPopulation = favoriteCountries.reduce((accumulator, current) => {
    return accumulator + current.populacao;
  }, 0);

  totalPopulationList.textContent = formatNumber(totalPopulation);
  totalPopulationFavorites.textContent = formatNumber(totalFavoritesPopulation);
}
function renderCountryButtons() {
  const countryButtons = Array.from(tabCountries.querySelectorAll('.btn'));
  const favoriteButtons = Array.from(tabFavorites.querySelectorAll('.btn'));

  countryButtons.forEach(button => {
    button.addEventListener('click', () => addToFavorites(button.id));
  });

  favoriteButtons.forEach(button => {
    button.addEventListener('click', () => removeFromFavorites(button.id));
  });
}

function addToFavorites(id) {
  //Localiza o país que foi marcado como favorito
  const countryToAdd = allCountries.find((country) => country.id === id);
  favoriteCountries = [...favoriteCountries, countryToAdd];

  //Ordena a lista de países favoritos por ordem alfabética
  favoriteCountries.sort((a, b) => {
    return a.nome.localeCompare(b.nome);
  });

  //Remove o país da lista total, quando ele for adicionado à lista de favoritos
  allCountries = allCountries.filter(country => country.id !== id);
  renderAll();
}

function removeFromFavorites(id) {
  //Localiza o país que foi removido da lista de favoritos
  countryToRemove = favoriteCountries.find((country) => country.id === id);
  allCountries = [...allCountries, countryToRemove];

  //Ordena a lista de países total por ordem alfabética 
  allCountries.sort((a, b) => {
    return a.nome.localeCompare(b.nome);
  });

  //Remove o país da lista de favoritos e retorna à lista total de países
  favoriteCountries = favoriteCountries.filter(country => country.id !== id);
  renderAll();

}

function formatNumber(number) {
  return numberFormat.format(number);
  
}
