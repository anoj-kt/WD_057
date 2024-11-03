// Step 1: Initialize an array with different types of values
const myArray = [42, 'Hello, world!', true, 3.14, 'JavaScript'];

// Step 2: Print the array to the console
console.log(myArray);

// Step 3: Access and print each element of the array
console.log(myArray[0]); // Prints: 42
console.log(myArray[1]); // Prints: Hello, world!
console.log(myArray[2]); // Prints: true
console.log(myArray[3]); // Prints: 3.14
console.log(myArray[4]); // Prints: JavaScript

for (let i = 0; i <= myArray.length; i++) {
  console.log(myArray[i]);
}

// Step 4: Modify the second element of the array
myArray[1] = 'Changed value';

// Print the modified array
console.log(myArray);
