//Declaring function called logToConsole with PARAMETERS
function logToConsole(name, job = 'coder') {
  console.log(`Hello, I am ${name} and I am a ${job}`);
}

//calling or invoking a function using ARGUMENTS
// logToConsole('Matteus', 'developer');
// logToConsole('Shirin', 'developer');
// logToConsole('Robin');

function sum(num1, num2) {
  const sum = num1 + num2;
  return sum;
  //everything else in function body does not execute after return
  console.log('End of function');
}

const result = sum(10, 20);
// console.log(result);

sum(); // will return NaN (Not a Number)

//----ARROW FUNCTIONS
const multiply = (a, b) => {
  console.log('Hello arrow func');
  a * b;
};

// const multiply = (a, b) => a * b;

const logName = (name) => {
  console.log(`Hello I am ${name}`);
};

// const logName = name => console.log(`Hello I am ${name}`);

const doMaths = (callBackFunction) => {
  callBackFunction('Matteus');
};

doMaths(logName);
