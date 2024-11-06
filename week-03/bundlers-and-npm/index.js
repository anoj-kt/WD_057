// const networkData = require('./network.js');
import { fetchProducts, array } from './network.js';

const results = await fetchProducts();

console.log(results);

console.log('Hello world!');

console.log('End of script');
