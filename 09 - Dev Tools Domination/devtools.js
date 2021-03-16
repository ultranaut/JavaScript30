const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('this is a message');

// Interpolated
console.log('Now is %s', new Date().toLocaleString());
console.log(`Now is ${new Date().toLocaleString()}`);

// Styled
console.log(
  '%c check it!',
  'font-size: 50px;font-style:italic; text-shadow: 4px 4px 6px #bada55'
);

// warning!
console.warn('this is a warning!');

// Error :|
console.error('this is an error');

// Info
console.info('this is some info')

// Testing
console.assert(3 === 3, "this is wrong")

// clearing
console.clear()

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);
console.clear();

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`)
  console.log(`this is ${dog.name}`)
  console.log(`he is ${dog.age} years old`)
  console.log(`that's ${dog.age * 7} dog years`)
  console.groupEnd(`${dog.name}`)
})


// counting

// timing
console.time('fetch');
fetch('https://api.github.com/users/ultranaut')
  .then(res => res.json())
  .then(data => {
    console.timeEnd('fetch');
    console.log(data)
  })
