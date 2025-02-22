const path = require('path'); // Importing the 'path' module
console.log(path.sep); // Logging the system-specific path separator

// Creating a file path using 'join'
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

// Getting the base name of the file
const base = path.basename(filePath);
console.log(base);

// Getting the absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
