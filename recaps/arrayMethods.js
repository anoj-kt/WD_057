const names = ['Shirin', 'Matteus', 'Robin', 'Mathias'];

names.push('Anoj', 'John');
const deletedItem = names.pop();
// console.log(deletedItem);
// console.log(names);

// console.log(names.shift()); // Shirin
names.unshift('Mary', 'Jane');
// console.log(names);

const numbers = [100, 300, 400, 700, 900, 1000]; //Original array
const slicedNumbers = numbers.slice(1, 3); //Creates a copy of the array (sliced)
// console.log(numbers);
// console.log('Sliced numbers: ', slicedNumbers);

const sentences = [
  'This is a new para', //'--'
  'Javascript is a pain', //'--'
  'But we need to learn it', //'--'
];

const paragraph = sentences.join('. ');
// console.log(paragraph);

const whatIsItReturning = sentences.forEach((sentence) => {
  //example
  //   saveInDB(sentence);
  //   createH2(sentence);
});

// console.log(whatIsItReturning); //undefined

// const capitalized = sentences.map((sentence) => {
//   return sentence.toUpperCase();
// });

const capitalized = sentences.map((sentence) => sentence.toUpperCase());

// console.log('Original array: ', sentences);
// console.log('Capitalised: ', capitalized);

for (let item of sentences) {
  item = '--';
  console.log(item);
}
