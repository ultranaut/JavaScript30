const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

const formatNumber = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then((resp) => resp.json())
  .then((data) => cities.push(...data));

const findMatches = async (input) => {
  const cities = [];
  await fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      cities.push(...data);
    });

  const pattern = new RegExp(input, 'gi');
  return cities.filter(
    (data) => data.city.match(pattern) || data.state.match(pattern)
  );
};

const displayMatches = async (e) => {
  const input = e.target.value;
  console.log('input: %s', input);
  const matches = await findMatches(input, cities);
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
      const population = formatNumber(data.population);
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

searchInput.addEventListener('input', debounce(displayMatches, 400));
