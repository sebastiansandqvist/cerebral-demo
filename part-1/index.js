// -------------------------------------
// 1. Arrow functions
// -------------------------------------

function exclaim(word) {
  console.log(word + '!');
}

// const exclaim = (word) => console.log(word + '!!!');

exclaim('hello');



// -------------------------------------
// 2. Destructuring
// -------------------------------------

// With arrays:
const boats = ['Sailboat', 'Dinghy', 'Row boat'];
const [ first, second, third ] = boats;

// console.log('First:  ', first);
// console.log('Second: ', second);
// console.log('Third:  ', third);


// With objects:
const car = {
  make: 'Jeep',
  model: 'Wrangler',
  year: 2010
};

const { make, model } = car;

// console.log('Make:  ', make);
// console.log('Model: ', model);



// -------------------------------------
// 3. Template literals
// -------------------------------------

const x = 12;
const y = 13;
const favorite = `My favorite numbers are ${x} and ${y}!`;

// console.log(favorite);
// console.log(`My favorite numbers are ${x} and ${y}!`);
// console.log`My favorite numbers are ${x} and ${y}!`;


// -------------------------------------
// 4. Fetch
// -------------------------------------

// fetch('http://mithril-examples.firebaseio.com/books.json')
//   .then((response) => response.json())
//   .then((books) => console.log(books));
