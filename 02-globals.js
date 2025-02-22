// Demonstrating global variables in Node.js (there is no 'window' object like in browsers)

// __dirname - Path to the current directory
// __filename - Name of the current file
// require - Function to import modules
// module - Information about the current module
// process - Information about the execution environment

console.log(__dirname); // Logs the directory path

// Set an interval to log 'hello world' every second
setInterval(() => {
    console.log('hello world');
}, 1000);  // Runs every 1000 milliseconds (1 second)