//Executing a function after a certain delay

const timeout = setTimeout(() => {
  console.log('Hello');
}, 3000);

// This will stop the function from being executed. Basically, clear the timer that started
clearTimeout(timeout);

//-----------------
//Executing a function repeatedly after a certain interval
const interval = setInterval(() => {
  console.log('Running every 2 secs');
}, 2000);

//In this example, we are stopping the above timer after 10 seconds
setTimeout(() => {
  clearInterval(interval);
}, 10000);

//-----------------
// Another example of setInterval
let counter = 0;

const counterInterval = setInterval(() => {
  console.log('counter: ', counter);
  counter++;

  if (counter === 10) {
    clearInterval(counterInterval);
  }
}, 1000);
