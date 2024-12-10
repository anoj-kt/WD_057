import { greet } from './greet.js';
import fs from 'fs';

// Write to a file
// fs.writeFile('example.txt', 'Hello, world!', (err) => {
//   if (err) {
//     console.log('error writing to file');
//   }

//   console.log('File has been written');
// });

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('error reading from file');
  }

  console.log('File content: ', data);
});
