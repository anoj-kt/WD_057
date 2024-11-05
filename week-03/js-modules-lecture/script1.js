//named exports / imports
//You can use the 'as' keyword to rename a named import
import { userName as shirinName, sayHi } from './script2.js';

//default exports / imports
// You can call the import anything
import matteusDetails from './script3.js';

console.log('From script1: ', shirinName);
sayHi();

console.log('From script3: ', matteusDetails.hobbies);
console.log('From script3: ', matteusDetails.userName);
