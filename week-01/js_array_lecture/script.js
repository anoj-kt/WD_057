//Arrays
const fruits = ['apple', 'banana', 'cherry'];
console.log('fruits array: ', fruits);

//Array with different data types
const randomValues = ['string', 50, true, undefined];
console.log('randomValues array: ', randomValues);

//How to access items in array using INDEX
console.log(randomValues[0]);
console.log(randomValues[1]);
console.log(randomValues[2]);
console.log(randomValues[3]);

//Array methods
console.log('-----Array methods------');
randomValues.push('I just got pushed!', 'last item');
console.log('randomValues array after Push: ', randomValues);

randomValues.pop();
console.log('randomValues array after Pop: ', randomValues);

randomValues.shift();
console.log('randomValues array after Shift: ', randomValues);

randomValues.unshift('new String', 100, 30);
console.log('randomValues array after Unshift: ', randomValues);

//Looping through Array
console.log('-----Looping through arrays------');
const arrayToLoop = [2, 5, 7, 9, 13];

//Looping with a for loop
console.log('-----For loop------');
for (let i = 0; i <= 4; i++) {
  console.log(arrayToLoop[i] * 2);
}

//Looping with a map method
console.log('-----map method with function keyword------');
arrayToLoop.map(function (item) {
  // console.log('inside the map using function keyword');
  console.log(item * 2);
});

console.log('-----map method with arrow functions------');
arrayToLoop.map((item) => {
  // console.log('inside the map using arrow function');
  console.log(item * 2);
});

console.log('-----map method with seperate function------');
const multplyByTwo = (item) => {
  console.log(item * 2);
  return item * 2;
};

const newArray = arrayToLoop.map(multplyByTwo);
console.log(newArray);

//Looping with a forEach method
console.log('-----forEach method------');
const newArray2 = arrayToLoop.forEach((item) => {
  console.log(item * 2);
});
console.log(newArray2);

//Filtering arrays
console.log('-----filter method------');
const filteredArray = arrayToLoop.filter((item) => item > 8);
console.log('Filtered array: ', filteredArray);

//Find method
console.log('-----find method------');
const foundItem = arrayToLoop.find((item) => item > 8);
console.log('Found item: ', foundItem);
