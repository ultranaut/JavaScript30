const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then((resp) => resp.json())
  .then((data) => cities.push(...data));

const findMatches = (input, cities) => {
  const pattern = new RegExp(input, 'gi');
  return cities.filter(
    (data) => data.city.match(pattern) || data.state.match(pattern)
  );
};

const displayMatches = (e) => {
  const input = e.target.value;
  const matches = findMatches(input, cities);
  const pattern = new RegExp(input, 'gi');
  suggestions.innerHTML = matches
    .map((data) => {
      const city = data.city.replace(
        pattern,
        `<span class="hl">${input}</span>`
      );
      const state = data.state.replace(
        pattern,
        `<span class="hl">${input}</span>`
      );
      const population = data.population;
      return `
      <li>
        <span class="name">${city}, ${state}</span>
        <span class="population">${population}</span>
      </li>
    `;
    })
    .join('');
};

const searchInput = document.querySelector('.search-form .search');
const suggestions = document.querySelector('.search-form .suggestions');

searchInput.addEventListener('input', displayMatches);
