const user = {
  firstName: 'Anoj',
  lastName: 'Thiru',
  age: 32,
  isAdmin: true,
  ['middle name']: 'krishna',
  displayName() {
    console.log('This is a method');
  },
  getAge() {
    return this.age;
  },
};

//Accessing a value using dot notation
// console.log(user.firstName);
// console.log(user.age);

// user.displayName();
// console.log(user.getAge());

//Dynamic way of accessing a value using bracket notation
const keyToAccess = 'lastName';

console.log(user[keyToAccess]);

//Changing values inside the object
user.age = 40;
console.log(user.age);

//Random number from 0 to 1
console.log(Math.random());
console.log(Math.round(7.5));

//Destructuring in Arrays
const mixedValues = ['Hello', 50, undefined, true];
// console.log(mixedValues[0]);
// console.log(mixedValues[1]);
// console.log(mixedValues[2]);

const [firstValue, secondValue, blabla] = mixedValues;
console.log(firstValue);
console.log(secondValue);
console.log(blabla);

//Destructuring in Objects
const { firstName, lastName, age } = user;
console.log(firstName);
console.log(lastName);
console.log(age);

const greeting = `Hello ${
  firstName + lastName
}, how are you? Are you ${age} years old?`;

console.log(greeting);

const book = {
  title: 'Star Wars',
  author: 'George Lucas',
  pages: 100,
  isRead: true,

  summary() {
    return `title: ${this.title}, author: ${this.author}, pages: ${
      this.pages
    }, read: ${this.isRead ? 'yes' : 'no'}`;
  },
};
const result = book.summary();

console.log(result);
