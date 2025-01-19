const firstName = 'Matteus';

let email = 'matteus@gmail.com';
email = 'matteus@yahoo.com';
email = null;

const points = 50;

const hobbies = ['basketball', 'football', 'volleyball'];

//Get the last item in an array
// console.log(hobbies[hobbies.length - 1]);

// console.log(hobbies);
hobbies[1] = 'soccer';
// console.log(hobbies);

const user = {
  name: 'Robin',
  email: 'robin@gmail.com',
  jobs: ['developer', 'pokemon trainer'],
  address: {
    houseNumber: '30B',
    street: 'Sesame street',
    city: 'pleasant well',
  },
  //Method
  greet() {
    console.log(`hello, my name is ${this.name}`);
  },
};

//dot notation
user.name = 'Mathias';
// console.log(user.address.houseNumber);

// user.greet();

// console.log(`My name is ${user.name}`);

//Comparison
5 == '5'; //true
5 == '5abc'; //false

5 === '5'; //false
5 === 5; //true

5 != '5'; // if 5 == 5 -> true then 5 != 5 is false

const a = 8;
const b = 15;

a > b; //false
a < b; //true
a <= b - 10; //false

10 == '10';
'abc' == 'abc';

const age = 19;
//AND operator
age >= 16 && age <= 20;

//OR operator
age === 16 || age === 18 || age >= 20;

//Conditionals
if (age >= 18) {
  console.log('This user is an adult');
}

if (age === 21) {
  console.log('User is 21 years old');
} else if (age === 22) {
  console.log('User is 22 years old');
} else if (age === 23) {
  console.log('User is 23 years old');
} else {
  console.log('User is not in any age above');
}

switch (age) {
  case age === 21:
    console.log('User is 21 years old');
    break;
  case age === 22:
    console.log('User is 22 years old');
    break;
  case age === 23:
    console.log('User is 23 years old');
    break;
  default:
    console.log('User is not in any age above');
}

//Ternary operator
//age = 19
const message = age >= 21 ? 'You can log in' : 'Sorry! Not allowed'; //'Sorry! Not allowed'
console.log(message);

let userName; //undefined
console.log(userName);

let userOne = null;
console.log(typeof userOne);

//Logging in
userOne = {
  firstName: 'Anoj',
  email: 'anoj@gmail.com',
};

//logout
userOne = null;

//Truthy and falsy
//https://developer.mozilla.org/en-US/docs/Glossary/Falsy
const school = '';

//'WBS' === ''
if (!school) {
  console.log('Hey please enter something');
}
