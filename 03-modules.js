// Importing modules using 'require'
const names = require('./4-names'); // Importing names object from 04-names.js
console.log(names);

const sayHi = require('./5-utils'); // Importing function from 05-utils.js
sayHi(names.john); // Calling the function with 'john'

const person = require('./6-alternative-flavour'); // Importing an object from 06-alternative-flavour.js

require('./7-mind-grenade');  // Just executing the file (it runs without exporting anything)